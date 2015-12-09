App.ProjectForm = React.createClass({
    propTypes: {
        project: React.PropTypes.object
    },

    render() {
        if (this.props.project) {
            let title = this.props.project.title,
                content = this.props.project.content;

            return (
                <form className="update project form">
                    <div className="input group">
                        <label className="icon label" htmlFor="title"><i className="fa fa-file"></i></label>
                        <input type="text" name="title" className="title input" placeholder="Project title"
                               value={title} autofocus/>
                    </div>
                    <div className="edit markdown">
                        <textarea name="content" className="content input" placeholder="Write about your project...">{content}</textarea>
                    </div>
                </form>
            );
        } else {
            return (
                <form className="insert project form">
                    <div className="input group">
                        <label className="icon label" htmlFor="title"><i className="fa fa-file"></i></label>
                        <input type="text" name="title" className="title input" placeholder="Project title" autofocus/>
                    </div>
                    <div className="edit markdown">
                        <textarea name="content" className="content input" placeholder="Write about your project..."></textarea>
                    </div>
                </form>
            );
        }
    }
});