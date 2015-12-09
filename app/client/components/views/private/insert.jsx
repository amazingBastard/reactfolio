App.Insert = React.createClass({
    renderToolbar() {
        // @TODO: toggle buttons when state of the editor changes
        // preview/edit on left
        // save draft/publish/cancel on the right

        let leftButton = {
                type: 'left icon button',
                icon: 'fa fa-eye'
            }, rightButton = {
                type: 'right icon button',
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
                <p>insert project</p>
                <p>title with markdown editor form</p>
                <p>toggle preview/edit mode action</p>
                <p>save draft and publish actions</p>
                {this.renderToolbar()}
            </view>
        );
    }
});