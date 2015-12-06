App.Project = React.createClass({
    propTypes: {
        project: React.PropTypes.object
    },

    shouldComponentUpdate() {
        return true;
    },

    // @TODO: render different markup for different routes
    // /projects shows a list item
    // / shows a single project module

    render() {
        let title = this.props.project.title,
            author = this.props.project.author,
            date = this.props.project.created,
            content = this.props.project.content;

        return (
            <module className="project module">
                <h1 className="title">{title}
                    <small className="meta">{author} - {date}</small>
                </h1>
                <App.Markdown content={content}/>
            </module>
        );
    }
});