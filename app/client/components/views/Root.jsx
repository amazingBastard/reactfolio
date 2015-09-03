App.Root = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var data = {},
            selector = {username: 'admin'},
            handle = Meteor.subscribe('projects', selector);

        if (handle.ready()) {
            data.projects = Projects.find({}, {sort: {createdAt: -1}}).fetch();
        }

        return data;
    },

    renderProjects() {
        return this.data.projects.map(function (project) {
            var path = FlowRouter.path('Project', {_id: project._id});
            return <a className="project" key={project._id} href={path}>
                       <h1 className="title">{project.title}</h1>
                       <img className="image" src={project.image}/>
                       <p className="description">{project.description}</p>
                    </a>;

        });
    },

    render() {
        return (
            <main className="animated fadeIn root view">
                <div className="projects module">
                    {(this.data.projects) ? this.renderProjects() : <App.Loading />}
                </div>
            </main>
        )
    }
});