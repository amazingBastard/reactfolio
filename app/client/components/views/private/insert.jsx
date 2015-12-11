App.Insert = React.createClass({

    togglePreview(event) {
        event.preventDefault();

        console.log('toggle preview');
    },

    handleSave(event) {
        event.preventDefault();

        console.log('save project');
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
                <App.Button buttonProps={rightButton} handleEvent={this.handleSave} />
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