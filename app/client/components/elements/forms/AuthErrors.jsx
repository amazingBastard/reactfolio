App.AuthErrors = React.createClass({
    propTypes: {
        errors: React.PropTypes.object
    },
    render() {
        if (this.props.errors) {
            return (
                <div className="errors alerts module">
                    {
                        _.values(this.props.errors).map((errorMessage) => {
                            return <p key={errorMessage} className="negative alert">{errorMessage}</p>;
                        })
                    }
                </div>
            )
        }
    }
});