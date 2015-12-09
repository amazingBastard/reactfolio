App.Toolbar = React.createClass({
    shouldComponentUpdate() {
        return true;
    },

    renderAdminButton() {
        if (!Meteor.loggingIn() && Meteor.user()) {
            let buttonProps = {
                type: 'left icon button',
                route: 'insert',
                icon: 'fa fa-plus'
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