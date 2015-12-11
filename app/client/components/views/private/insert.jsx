App.Insert = React.createClass({
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
                <App.Button buttonProps={leftButton}/>
                <App.Button buttonProps={rightButton}/>
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