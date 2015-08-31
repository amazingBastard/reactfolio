App.Project = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var data = {},
            projectId = this.props._id,
            handle = Meteor.subscribe('project', projectId);

        if (handle.ready()) {
            data.project = Projects.findOne(projectId);
        }

        return data;
    },
    renderProject() {
        return <article className="project">
                   <a href="/">Back</a>
                   <h1 className="title">{this.data.project.title}</h1>
                   <img className="image" src={this.data.project.image} />
                   <div className="content">{this.data.project.content}</div>
               </article>;
    },
    render() {
        return (
            <main className="animated fadeIn project view">
                {this.data.project ? this.renderProject() : <App.Loading />}
            </main>
        )
    }
});