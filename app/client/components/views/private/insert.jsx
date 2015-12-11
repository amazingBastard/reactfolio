App.Insert = React.createClass({

    togglePreview(event) {
        event.preventDefault();

        console.log('toggle preview');
    },

    handleCreate(event) {
        event.preventDefault();

        let projectKeys = {
            title: $('[name="title"]').val(),
            content: $('[name="content"]').val()
        }, user = Meteor.user();

        if (!user) {
            console.log('You need to be logged in to create a project');
        }
        if (projectKeys.title === '') {
            console.log('Your project needs a title');
        }
        if (projectKeys.content === '') {
            console.log('You project needs content');
        } else {
            Meteor.call('createProject', projectKeys, (error) => {
                if (error) {
                    console.error(error.reason);
                } else {
                    FlowRouter.go('root');
                }
            });
        }
    },

    renderToolbar() {
        // @TODO: toggle buttons when state of the editor changes
        // preview/edit on left
        // save draft/publish/cancel on the right

        let leftButton = {
                type: 'left light icon button',
                icon: 'fa fa-eye'
            }, rightButton = {
                type: 'right light icon button',
                icon: 'fa fa-save'
            };

        return (
            <module className="toolbar module">
                <App.Button buttonProps={leftButton} handleEvent={this.togglePreview} />
                <App.Button buttonProps={rightButton} handleEvent={this.handleCreate} />
            </module>
        );
    },

    render() {
        return (
            <view className="animated fadeIn insert view">
                <App.ProjectForm />
                {this.renderToolbar()}
            </view>
        );
    }
});