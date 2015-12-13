App.Dashboard = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        return {
            user: Meteor.user()
        };
    },

    shouldComponentUpdate() {
        return true;
    },

    render() {
        let currentUser = this.data.user.profile.name;

        // @TODO: create module for greeting
        // @TODO: add projects module to manage projects (update, remove, archive)
        // @TODO: add button to create new project

        return (
            <view className="animated fadeIn dashboard view">
                <p className="greeting">Hello, {currentUser}!</p>
            </view>
        );
    }
});