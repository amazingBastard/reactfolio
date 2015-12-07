App.Project = React.createClass({
    propTypes: {
        project: React.PropTypes.object
    },

    shouldComponentUpdate() {
        return true;
    },

    render() {
        let title = this.props.project.title,
            author = this.props.project.author,
            date = this.props.project.created;

        if (RouterHelpers.currentRoute('root')) {
            let content = this.props.project.content;

            return (
                <module className="project module">
                    <h1 className="title">{title}
                        <small className="meta">{author} - {date}</small>
                    </h1>
                    <App.Markdown content={content}/>
                </module>
            )
        } else {
            return (
                <figure className="project figure">
                    <h1 className="title">{title}
                        <small className="meta">{author} - {date}</small>
                    </h1>
                </figure>
            );
        }
    }
});