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
              <li><a href="#" onClick={this.handleLogout}>Logout</a></li>
            )
        } else {
            loginButton = (
              <li><a href="/login">Login</a></li>
            )
        }

        return (
            <header className="header">
               <h1 className="title">Reactfolio</h1>
               <ul className="nav navbar-nav navbar-right">
                    {loginButton}
                </ul>
            </header>
        )
    }
});