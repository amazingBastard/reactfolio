App.Redirect = React.createClass({
    render() {
        messageProps = {
            module: 'message module',
            type: 'centered message',
            message: 'You\'re lost... go home!',
            route: 'root',
            label: 'Take me home!'
        };

        return (
            <view className="animated fadeIn redirect view">
                <App.Message messageProps={messageProps} />
            </view>
        )
    }
});