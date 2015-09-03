App.Admin = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var data = {},
            selector = {username: 'admin'},
            handle = Meteor.subscribe('projects', selector);

        if (handle.ready()) {
            data.projects = Projects.find({}, {sort: {createdAt: -1}}).fetch();
            data.currentUser = Meteor.user();
        }

        return data;

        //return {
        //    data,
        //    currentUser: Meteor.user()
        //};
    },

    renderProjects() {
        return this.data.projects.map(function (project) {
            var path = FlowRouter.path('EditProject', {_id: project._id});
            return <a className="project" key={project._id} href={path}>
                       <h1 className="title">{project.title}</h1>
                       <button type="button" className="remove project icon button"><i className="fa fa-ban"></i></button>
                   </a>;
        });
    },

    render() {
        return (
            <main className="animated fadeIn admin view">
                <div className="projects module">
                    {(this.data.projects) ? this.renderProjects() : <App.Loading />}
                </div>
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