App.AdminLogin = React.createClass({
    mixins: [],
    PropTypes: {

    },
    getInitialState() {
        return {
            errors: {}
        }
    },
    getMeteorData() {
        return {

        }
    },
    onSubmit(event) {
        event.preventDefault();

        var self = this;

        var email = $(event.target).find("[name=email]").val();
        var password = $(event.target).find("[name=password]").val();

        var errors = {};

        if (!email) {
            errors.email = "Email required"
        }

        if (!password) {
            errors.password = "Password required"
        }

        self.setState({
            errors: errors
        });

        if (! _.isEmpty(errors)) {
            return;
        }

        Meteor.loginWithPassword(email, password, (err) => {
            if (err) {
                self.setState({
                    errors: {'none': err.reason}
                });

                return;
            } else {
                FlowRouter.go('Admin');
            }
        });
    },
    render() {
        return (
            <div className="admin login form module">
                <h1 className="title"><i className="fa fa-terminal"></i>Admin Login</h1>
                <form className="admin login form" onSubmit={this.onSubmit}>
                    <App.AuthErrors errors={this.state.errors} />
                    <App.FormInput hasError={!!this.state.errors.email} name="Email" type="text" />
                    <App.FormInput hasError={!!this.state.errors.password} name="Password" type="password" />
                    <input type="submit" className="primary submit login button"/>
                </form>
            </div>
        )
    }
});