App.Markdown = React.createClass({
    propTypes: {
        content: React.PropTypes.string
    },

    shouldComponentUpdate() {
        return true;
    },

    render() {
        let content = this.props.content;

        return (
            <module className="markdown module">
                <markdown className="render markdown">{content}</markdown>
            </module>
        );
    }
});