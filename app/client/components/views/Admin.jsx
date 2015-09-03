App.Admin = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var data = {},
            selector = {username: 'admin'},
            handle = Meteor.subscribe('projects', selector);

        if (handle.ready()) {
            data.projects = Projects.find({}, {sort: {createdAt: -1}}).fetch();
        }

        return {
            data,
            currentUser: Meteor.user()
        };
    },

    render() {
        let dashboard;
        let { currentUser } = this.data;

        if (currentUser) {
            dashboard = (

                <App.InsertProject />
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
    }
});