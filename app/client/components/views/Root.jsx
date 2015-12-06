App.Root = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        let selector = {author: 'admin'},
            subscription = Meteor.subscribe('projects', selector);

        return {
            isLoading: !subscription.ready(),
            projects: Projects.find({}, {limit: 1, sort: {created: -1}}).fetch()
        };
    },

    shouldComponentUpdate() {
        return true;
    },

    // @TODO: get the latest project from projects array
    //renderLatestProject() {
    //    let projects = this.data.projects,
    //        project = {};
    //
    //    return (
    //        <App.Project project={project}/>
    //    );
    //},

    render() {
        let noProjects = this.data.projects.length === 0,
            project = this.data.projects,
            messageProps = {
                module: 'messages module',
                type: 'centered message',
                message: 'There are no projects'
            };

        if (this.data.isLoading) {
            return <App.Loading />;
        } else {
            return (
                <main className="animated fadeIn root view">
                    {noProjects ? <App.Messages messageProps={messageProps} /> :
                        <App.Project project={project}/>}
                </main>
            );
        }
    }
});