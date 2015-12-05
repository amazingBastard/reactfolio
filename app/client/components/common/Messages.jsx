App.Messages = React.createClass({
    propTypes: {
        childProps: React.PropTypes.object
    },
    shouldComponentUpdate() {
        return true;
    },

    // @TODO: check for different module/message props to render different markup
    // some messages may have icons, images or more than one message
    // different markup should be rendered for each condition

    render() {
        let module = this.props.childProps.module,
            message = this.props.childProps.message,
            className = this.props.childProps.type;

        return (
            <module className={module}>
                <p className={className}>{message}</p>
            </module>
        );
    }
});