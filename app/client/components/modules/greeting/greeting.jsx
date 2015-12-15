App.Greeting = React.createClass({
    propTypes: {
        user: React.PropTypes.string
    },

    shouldComponentUpdate() {
        return true;
    },

    render() {
        let name = this.props.user;

        return (
            <module className="greeting module">
                <p className="greeting">Hello, {name}!</p>
            </module>
        );
    }
});