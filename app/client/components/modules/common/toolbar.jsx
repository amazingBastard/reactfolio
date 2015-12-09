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
            type: 'right icon button'
        };

        if (RouterHelpers.currentRoute('root')) {
            buttonProps.route = 'portfolio';
            buttonProps.icon = 'fa fa-th';

            return (
                <module className="toolbar module">
                    {this.renderAdminButton()}
                    <App.Button buttonProps={buttonProps} />
                </module>
            );
        } else {
            buttonProps.route = 'root';
            buttonProps.icon = 'fa fa-square';

            return (
                <module className="toolbar module">
                    {this.renderAdminButton()}
                    <App.Button buttonProps={buttonProps} />
                </module>
            );
        }
    }
});