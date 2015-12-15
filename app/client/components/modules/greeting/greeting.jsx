App.Greeting = React.createClass({
    propTypes: {
        user: React.PropTypes.string
    },

    shouldComponentUpdate() {
        return true;
    },

    render() {
        let currentUser = this.props.user;

        return (
            <module className="greeting module">
                <p className="greeting">Hello, {currentUser}!</p>
            </module>
        );
    }
});