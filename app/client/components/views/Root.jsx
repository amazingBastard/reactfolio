App.Root = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var selector = {username: 'admin'},
            handle = Meteor.subscribe('projects', selector),
            data = {};

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
                       <div className="content">
                           {project.content}
                       </div>
                    </a>;

        });
    },

    render() {
        return (
            <main className="root view">
                <div className="projects module">
                    {(this.data.projects) ? this.renderProjects() : 'loading...'}
                </div>
            </main>
        )
    }
});