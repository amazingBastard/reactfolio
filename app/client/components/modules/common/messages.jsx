App.Messages = React.createClass({
    propTypes: {
        messageProps: React.PropTypes.object
    },
    shouldComponentUpdate() {
        return true;
    },

    // @TODO: check for different module/message props to render different markup
    // some messages may have icons, images or more than one message
    // different markup should be rendered for each condition

    render() {
        let module = this.props.messageProps.module,
            message = this.props.messageProps.message,
            className = this.props.messageProps.type;

        return (
            <module className={module}>
                <p className={className}>{message}</p>
            </module>
        );
    }
});