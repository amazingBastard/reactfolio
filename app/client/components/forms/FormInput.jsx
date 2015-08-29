App.FormInput = React.createClass({
    propTypes: {
        hasError: React.PropTypes.bool,
        label: React.PropTypes.string,
        icon: React.PropTypes.string,
        type: React.PropTypes.string,
        name: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        onKeyUp: React.PropTypes.func,
        onBlur: React.PropTypes.func
    },
    shouldComponentUpdate() {
        return true;
    },
    render() {
        const {type, label, icon, name, placeholder, value, onKeyUp, onBlur } = this.props;
        let input;

        var className = 'input group';
        if (this.props.hasError) {
            className += ' negative';
        }

        switch (type) {
            case 'textarea':
                input = (
                    <textarea type={ type } className="input" name={ name.toLowerCase() } placeholder={ placeholder }
                              defaultValue={ value } onKeyUp={ onKeyUp } onBlur={ onBlur }></textarea>
                );
                break;
            default:
                input = (
                    <input type={ type } className="input" name={ name.toLowerCase() } placeholder={ placeholder }
                           defaultValue={ value } onKeyUp={ onKeyUp } onBlur={ onBlur }/>
                );
                break;
        }


        return (
            <div className={ className }>
                { label === 'none' ?
                    <span className="icon"><i className={ icon }></i></span>
                    :
                    <label htmlFor={ name.toLowerCase() } className="label">{ name }</label> }
                { input }
            </div>
        )

    }
});