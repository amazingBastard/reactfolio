App.ProjectForm = React.createClass({
    PropTypes: {},

    render() {
        return (
            <form className="project form">
                <div className="input group">
                    <label className="icon label" htmlFor="title"><i className="fa fa-file"></i></label>
                    <input type="text" name="title" className="title input" placeholder="Project title" autofocus />
                </div>
                <div className="input group">
                    <textarea name="content" className="content input" placeholder="Write about your project..."></textarea>
                </div>
            </form>
        );
    }
});