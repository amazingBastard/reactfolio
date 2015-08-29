App.InsertProject = React.createClass({
    mixins: [],
    PropTypes: {

    },
    onSubmit(event) {
         event.preventDefault();

         // Find the fields via the React ref
         var title = React.findDOMNode(this.refs.title).value.trim(),
             image = React.findDOMNode(this.refs.image).value.trim(),
             content = React.findDOMNode(this.refs.content).value.trim();

         Projects.insert({
             title: title,
             image: image,
             dontent: content,
             createdAt: new Date()
         });

         // Clear form
         React.findDOMNode(this.refs.title).value = '';
         React.findDOMNode(this.refs.image).value = '';
         React.findDOMNode(this.refs.content).value = '';
    },
    render() {
        return (
            <div className="insert project module">
                <h1 className="title"><i className="fa fa-terminal"></i>New Project</h1>
                <form className="insert project form" onSubmit={this.onSubmit} >
                    <input type="text" ref="title" placeholder="Title" />
                    <input type="text" ref="image" placeholder="Image" />
                    <textarea type="text" ref="content" placeholder="Content"></textarea>
                    <input type="submit" className="primary submit project button"/>
                </form>
            </div>
        )
    }
});