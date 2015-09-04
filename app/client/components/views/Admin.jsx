App.Admin = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var data = {},
            selector = {username: 'admin'},
            handle = Meteor.subscribe('projects', selector);

        if (handle.ready()) {
            data.projects = Projects.find({}, {sort: {createdAt: -1}}).fetch();
        }

        return data;

        //return {
        //    data,
        //    currentUser: Meteor.user()
        //};
    },

    removeThisProject(event) {
        event.preventDefault();
        console.log('delete this project');
        Meteor.call('removeProject', this.props.project._id);
    },

    renderProjects() {
        return this.data.projects.map(function (project) {
            var path = FlowRouter.path('ProjectEdit', {_id: project._id});
            return <li className="project" key={project._id}>
                       <a className="path" href={path}>
                            <h1 className="title">{project.title}</h1>
                       </a>
                       <button type="button" className="remove project icon button" onClick={this.removeThisProject}><i className="fa fa-ban"></i></button>
                   </li>;
        });
    },

    render() {
        return (
            <main className="animated fadeIn admin view">
                <ul className="projects module">
                    {(this.data.projects) ? this.renderProjects() : <App.Loading />}
                </ul>
                <a className="fluid primary new project button" href="/admin/new">New Project</a>
            </main>
        )

        /*
        let dashboard;
        let { currentUser } = this.data.currentUser;

        if (currentUser) {
            dashboard = (
                <div className="projects module">
                    {(this.data.projects) ? this.renderProjects() : <App.Loading />}
                </div>
                //<App.InsertProject />
            )
        } else {
            dashboard = (
                <App.AdminLogin />
            )
        }

        return (
            <main className="animated fadeIn admin view">
                {dashboard}
            </main>
        )
        */
    }
});