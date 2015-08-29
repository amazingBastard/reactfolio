C.Root = React.createClass({
    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    // Loads items from the Tasks collection and puts them on this.data.tasks
    getMeteorData() {
        return {
            projects: Projects.find({}).fetch()
        }
    },

    renderProjects() {
         // Get tasks from this.data.tasks
         return this.data.projects.map((project) => {
              return < C.Project key={project._id} project={project} />;
         });
    },

    render() {
        return (
            <main className="root view">
                <div className="projects">
                    {this.renderProjects()}
                </div>
            </main>
        )
    }
});