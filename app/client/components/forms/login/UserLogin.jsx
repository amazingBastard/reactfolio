App.UserLogin = React.createClass({
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
                FlowRouter.go('Root');
            }
        });
    },
    render() {
        return (
            <div className="login">
                <h1 className="title">Login</h1>
                <form className="admin login form" onSubmit={this.onSubmit}>
                    <App.AuthErrors errors={this.state.errors} />
                    <App.FormInput hasError={!!this.state.errors.email} name="Email" type="text" label="Email" />
                    <App.FormInput hasError={!!this.state.errors.password} name="Password" type="password" label="Password" />
                    <input type="submit" className="primary submit login button"/>
                </form>
            </div>
        )
    }
});