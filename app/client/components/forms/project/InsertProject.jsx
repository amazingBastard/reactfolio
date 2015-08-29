C.InsertProject = React.createClass({
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
            <div className="new project">
                <form className="insert project" onSubmit={this.handleSubmit} >
                    <input type="text" ref="title" placeholder="Title" />
                    <input type="text" ref="image" placeholder="Image" />
                    <input type="text" ref="content" placeholder="Content" />
                </form>
            </div>
        )
    }
});