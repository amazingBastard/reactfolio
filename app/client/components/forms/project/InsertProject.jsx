App.InsertProject = React.createClass({
    mixins: [],
    PropTypes: {},
    getInitialState() {
        return {
            errors: {}
        }
    },
    getMeteorData() {
        return {}
    },
    onSubmit(event) {
        event.preventDefault();

        var self = this,
            title = $(event.target).find('[name=title]').val(),
            image = $(event.target).find('[name=image]').val(),
            content = $(event.target).find('[name=content]').val(),
            errors = {};

        if (!title) {
            errors.title = 'Title is required'
        }

        if (!image) {
            errors.image = 'Image url is required'
        }

        if (!content) {
            errors.content = 'Content is required'
        }

        self.setState({
            errors: errors
        });

        if (!_.isEmpty(errors)) {
            return;
        }

        Meteor.call('insertProject', title, image, content, (err) => {
            if (err) {
                self.setState({
                    errors: {'none': err.reason}
                });

                return;
            } else {
                // Reset form
                $(event.target).find('[name=title]').value = '';
                $(event.target).find('[name=image]').value = '';
                $(event.target).find('[name=content]').value = '';

                //FlowRouter.go('Root');
            }
        });

    },
    render() {
        return (
            <div className="insert project form module">
                <h1 className="title"><i className="fa fa-terminal"></i>New Project</h1>

                <form className="insert project form" onSubmit={this.onSubmit}>
                    <App.AuthErrors errors={this.state.errors}/>
                    <App.FormInput hasError={!!this.state.errors.title} label="none" icon="fa fa-book" name="Title"
                                   type="text" placeholder="project title"/>
                    <App.FormInput hasError={!!this.state.errors.image} label="none" icon="fa fa-picture-o" name="Image"
                                   type="text" placeholder="image url"/>
                    <App.FormInput hasError={!!this.state.errors.content} label="none" icon="fa fa-pencil"
                                   name="Content" type="textarea" placeholder="content"/>
                    <button type="submit" className="primary fluid submit project button"><i
                        className="fa fa-download"></i></button>
                </form>
            </div>
        )
    }
});