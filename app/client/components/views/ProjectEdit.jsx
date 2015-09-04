App.ProjectEdit = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var data = {},
            handle = Meteor.subscribe('project', this.props._id);

        if (handle.ready()) {
            data.project = Projects.findOne({_id: this.props._id});
        }

        return data;
    },
    render() {
        return (
            <main className="animated fadeIn admin edit project view">
                {(this.data.project) ? <App.UpdateProject /> : <App.Loading />}
            </main>
        )
    }
});