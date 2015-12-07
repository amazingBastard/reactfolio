App.Logo = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        }
    },
    handleLogout() {
        Meteor.logout();
    },
    render() {
        return (
            <module className="animated fadeInDown logo module">
                <h1 className="title">Reactfolio</h1>
                <h2 className="title">Reactfolio</h2>
                <h3 className="title">Reactfolio</h3>
                <h4 className="title">Reactfolio</h4>
                <h5 className="title">Reactfolio</h5>
                <h6 className="title">Reactfolio</h6>
            </module>
        )
    }
});