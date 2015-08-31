App.Project = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var data = {},
            handle = Meteor.subscribe('project', this.props._id);

        if (handle.ready()) {
            data.project = Projects.findOne({_id: this.props._id});
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
                {(this.data.project) ? this.renderProject() : <App.Loading />}
            </main>
        )
    }
});