App.ProjectUpdate = React.createClass({
    mixins: [ReactMeteorData],
    PropTypes: {},
    getInitialState() {
        return {
            errors: {}
        }
    },
    getMeteorData() {
        var data = {},
            handle = Meteor.subscribe('project', this.props._id);

        if (handle.ready()) {
            data.project = Projects.findOne({_id: this.props._id});
            data.currentUser = Meteor.user(),
            data.projectId = data.project._id;
        }

        return data;
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

        Meteor.call('updateProject', this.data.projectId, title, image, description, content), (err) => {
            if (err) {
                self.setState({
                    errors: {'none': err.reason}
                });

                return;
            } else {
                FlowRouter.go('Root');
            }
        };
    },
    renderProjectUpdate() {
        return (
            <div className="update form module">
                <h1 className="title"><i className="fa fa-terminal"></i>Edit Project</h1>

                <form className="update form" onSubmit={this.onSubmit}>
                    <App.AuthErrors errors={this.state.errors}/>
                    <App.FormInput hasError={!!this.state.errors.title} label="icon" icon="fa fa-book" name="Title"
                                   type="text" placeholder="project title" value={this.data.project.title}/>
                    <App.FormInput hasError={!!this.state.errors.image} label="icon" icon="fa fa-picture-o" name="Image"
                                   type="text" placeholder="image url" value={this.data.project.image}/>
                    <App.FormInput hasError={!!this.state.errors.description} label="icon" icon="fa fa-pencil"
                                   name="Description" type="textarea" placeholder="Project description" value={this.data.project.description}/>
                    <App.FormInput hasError={!!this.state.errors.content} label="icon" icon="fa fa-pencil"
                                   name="Content" type="textarea" placeholder="Write about your project" value={this.data.project.content}/>
                    <button type="submit" className="primary fluid update button"><i
                        className="fa fa-floppy-o"></i></button>
                </form>
            </div>
        )
    },
    render() {
        if (this.data.currentUser) {
            return (
                <main className="animated fadeIn admin edit project view">
                    {(this.data.project) ? this.renderProjectUpdate() : <App.AdminLogin />}
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