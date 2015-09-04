App.ProjectNew = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        };
    },
    render() {
        if (this.data.currentUser) {
            return (
                <main className="animated fadeIn admin new project view">
                    <App.InsertProject />
                </main>
            )
        } else {
            return (
                <main className="animated fadeIn admin new project view">
                    <App.AdminLogin />
                </main>
            )
        }
    }
});