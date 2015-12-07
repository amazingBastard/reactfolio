App.Button = React.createClass({
    propTypes: {
        buttonProps: React.PropTypes.object
    },

    shouldComponentUpdate() {
        return true;
    },

    render() {
        let type = this.props.buttonProps.type;

        if (this.props.buttonProps.route) {
            let path = RouterHelpers.pathFor(this.props.buttonProps.route);

            if (this.props.buttonProps.icon) {
                let icon = this.props.buttonProps.icon;

                return (
                    <a className={type} href={path}>
                        <i className={icon}></i>
                    </a>
                );
            } else {
                let label = this.props.buttonProps.label;

                return (
                    <a className={type} href={path}>{label}</a>
                );
            }
        } else {
            if (this.props.buttonProps.icon) {
                let icon = this.props.buttonProps.icon;

                return (
                    <button className={type}>
                        <i className={icon}></i>
                    </button>
                );
            } else {
                let label = this.props.buttonProps.label;

                return (
                    <button className={type}>{label}</button>
                );
            }
        }
    }
});