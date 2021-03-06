App.Markdown = React.createClass({
    propTypes: {
        content: React.PropTypes.string
    },

    shouldComponentUpdate() {
        return true;
    },

    renderHTML() {
        let content = this.props.content;

        return {
            __html: marked.parse(content, {
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: false,
                smartLists: true,
                smartypants: false
            })
        };
    },

    render() {
        return (
            <module className="markdown module">
                <markdown className="render markdown"
                          dangerouslySetInnerHTML={this.renderHTML()}></markdown>
            </module>
        );
    }
});