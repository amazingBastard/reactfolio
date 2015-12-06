App.LoginForm = React.createClass({
    handleLogin(event) {
        event.preventDefault();

        let username = $('[name="username"]').val(),
            password = $('[name="password"]').val();

        Meteor.loginWithPassword(username, password, (error) => {
            if (error) {
                console.error(error.reason, 'warning');
            } else {
                console.log('Logged in!', 'success');
            }
        });
    },
    render() {
        return (
            // @TODO: make component for input groups
            <form className="account login form" onSubmit={this.handleLogin}>
                <div className="input group">
                    <label className="icon label" htmlFor="username"><i className="fa fa-user"></i></label>
                    <input type="text" name="username" className="username input" placeholder="username" autofocus/>
                </div>
                <div className="input group">
                    <label className="icon label" htmlFor="password"><i className="fa fa-unlock"></i></label>
                    <input type="password" name="password" className="password input" placeholder="password"/>
                </div>
                <button type="submit" className="primary centered button">Login</button>
            </form>
        )
    }
});