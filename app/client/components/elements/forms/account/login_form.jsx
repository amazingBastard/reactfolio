App.LoginForm = React.createClass({
    handleLogin(event) {
        event.preventDefault();

        console.log('login');
    },
    render() {
        return (
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