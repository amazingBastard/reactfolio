App.ProjectInsert = React.createClass({
    mixins: [ReactMeteorData],
    PropTypes: {},
    getInitialState() {
        return {
            errors: {}
        }
    },
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        };
    },
    onSubmit(event) {
        event.preventDefault();

        var self = this,
            title = $(event.target).find('[name=title]').val(),
            image = $(event.target).find('[name=image]').val(),
            description = $(event.target).find('[name=description]').val(),
            content = $(event.target).find('[name=content]').val(),
            errors = {};

        if (!title) {
            errors.title = 'Title is required'
        }

        if (!image) {
            errors.image = 'Image url is required'
        }

        if (!description) {
            errors.description = 'Description is required'
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

        Meteor.call('insertProject', title, image, description, content, (err) => {
            if (err) {
                self.setState({
                    errors: {'none': err.reason}
                });

                return;
            } else {
                // Reset form
                document.querySelector('form').reset();
            }
        });

    },
    renderProjectInsert() {
        return (
            <div className="insert form module">
                <h1 className="title"><i className="fa fa-terminal"></i>New Project</h1>

                <form className="insert form" onSubmit={this.onSubmit}>
                    <App.AuthErrors errors={this.state.errors}/>
                    <App.FormInput hasError={!!this.state.errors.title} label="icon" icon="fa fa-book" name="Title"
                                   type="text" placeholder="project title"/>
                    <App.FormInput hasError={!!this.state.errors.image} label="icon" icon="fa fa-picture-o" name="Image"
                                   type="text" placeholder="image url"/>
                    <App.FormInput hasError={!!this.state.errors.description} label="icon" icon="fa fa-pencil"
                                   name="Description" type="textarea" placeholder="Project description"/>
                    <App.FormInput hasError={!!this.state.errors.content} label="icon" icon="fa fa-pencil"
                                   name="Content" type="textarea" placeholder="Write about your project"/>
                    <button type="submit" className="primary fluid insert button"><i
                        className="fa fa-floppy-o"></i></button>
                </form>
            </div>
        )
    },
    render() {
        if (this.data.currentUser) {
            return (
                <main className="animated fadeIn admin new project view">
                    {this.renderProjectInsert()}
                </main>
            )
        } else {
            return (
                <main className="animated fadeIn admin view">
                    <App.AdminLogin />
                </main>
            )
        }
    }
});