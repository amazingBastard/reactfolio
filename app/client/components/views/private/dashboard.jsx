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

        return (
            <view className="animated fadeIn dashboard view">
                <p className="greeting">Hello, {currentUser}!</p>
            </view>
        );
    }
});