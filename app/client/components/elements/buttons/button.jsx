App.Button = React.createClass({
    propTypes: {
        buttonProps: React.PropTypes.object
    },

    shouldComponentUpdate() {
        return true;
    },

    // @TODO: check for different button props to render different markup
    // some buttons may have icons, classes, types, etc...
    // different markup should be rendered for each condition

    render() {
        let path = RouterHelpers.pathFor(this.props.buttonProps.route),
            type = this.props.buttonProps.type,
            icon = this.props.buttonProps.icon;

        return (
            <a className={type} href={path}>
                <i className={icon}></i>
            </a>
        );
    }
});