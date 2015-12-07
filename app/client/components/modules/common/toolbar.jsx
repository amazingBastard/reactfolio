App.Toolbar = React.createClass({
    shouldComponentUpdate() {
        return true;
    },

    renderButtons() {
        if (!Meteor.loggingIn() && Meteor.user()) {
            return (
                <module className="actions module">
                    <a href="left icon button" href={RouterHelpers.pathFor('dashboard')}>
                        <i className="fa fa-user"></i>
                    </a>
                    <a href="right icon button" href={RouterHelpers.pathFor('portfolio')}>
                        <i className="fa fa-camera"></i>
                    </a>
                </module>

            );
        } else {
            return (
                <module className="actions module">
                    <a href="right icon button" href={RouterHelpers.pathFor('portfolio')}>
                        <i className="fa fa-camera"></i>
                    </a>
                </module>
            );
        }
    },
    render() {
        return (
            <module className="toolbar module">
                {this.renderButtons()}
            </module>
        );
    }
});