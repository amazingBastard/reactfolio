App.Message = React.createClass({
    propTypes: {
        messageProps: React.PropTypes.object
    },

    shouldComponentUpdate() {
        return true;
    },

    render() {
        let module = this.props.messageProps.module,
            message = this.props.messageProps.message,
            type = this.props.messageProps.type;

        if (this.props.messageProps.route) {
            let buttonProps = {
                type: 'bottom centered button',
                route: this.props.messageProps.route,
                label: this.props.messageProps.label
            };

            return (
                <module className={module}>
                    <p className={type}>{message}</p>
                    <App.Button buttonProps={buttonProps} />
                </module>
            );
        } else {
            return (
                <module className={module}>
                    <p className={type}>{message}</p>
                </module>
            );
        }
    }
});