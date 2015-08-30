App.ViewProject = React.createClass({
    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    // Loads items from the Projects collection and puts them on this.data.projects
    getMeteorData() {
        return {
            projects: Projects.find({}, {sort: {createdAt: -1}}).fetch()
        }
    },

    render() {
        return (
            <main className="project view">
                <App.Project />
            </main>
        )
    }
});