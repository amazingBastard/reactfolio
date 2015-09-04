App.ProjectNew = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        };
    },
    render() {
        return (
            <main className="animated fadeIn admin new project view">
                {(this.data.currentUser) ? <App.InsertProject /> : <App.AdminLogin />}
            </main>
        )
    }
});