App.Redirect = React.createClass({
    render() {
        let messageProps = {
            module: 'messages module',
            type: 'centered message',
            message: 'You\'re lost! Go home!'
        };

        return (
            <module className="redirect module">
                <App.Messages messageProps={messageProps} />
                <a className="route link" href="/">Get me out of here!</a>
            </module>
        );
    }
});