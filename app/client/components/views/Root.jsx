App.Root = React.createClass({
    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    // Loads items from the Projects collection and puts them on this.data.projects
    getMeteorData() {
        return {
            projects: Projects.find({}, {sort: {createdAt: -1}}).fetch()
        }
    },

    renderProjects() {
         // Get projects from this.data.projects
         return this.data.projects.map((project) => {
              return < App.Project key={project._id} project={project} />;
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