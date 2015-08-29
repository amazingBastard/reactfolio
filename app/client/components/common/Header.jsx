C.Header = React.createClass({
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
        let loginButton;
        let { currentUser } = this.data;

        if (currentUser) {
            loginButton = (
                <button className="login icon button" onClick={this.handleLogout}><i className="fa fa-sign-in"></i></button>
            )
        } else {
            loginButton = (
                <a className="login icon button" href="/login"><i className="fa fa-sign-out"></i></a>
            )
        }

        return (
            <header className="header">
                <h1 className="title">Reactfolio</h1>
                <div className="buttons">
                    {loginButton}
                </div>
            </header>
        )
    }
});