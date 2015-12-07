App.Toolbar = React.createClass({
    shouldComponentUpdate() {
        return true;
    },

    renderAdminButton() {
        if (!Meteor.loggingIn() && Meteor.user()) {
            let buttonProps = {
                type: 'left icon button',
                route: 'dashboard',
                icon: 'fa fa-user'
            };

            return (
                <App.Button buttonProps={buttonProps} />
            );
        }
    },
    render() {
        let buttonProps = {
            type: 'right icon button',
            route: 'portfolio',
            icon: 'fa fa-camera'
        };

        return (
            <module className="toolbar module">
                {this.renderAdminButton()}
                <App.Button buttonProps={buttonProps} />
            </module>
        );
    }
});