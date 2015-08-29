C.Layout = React.createClass({
    render() {
        return (
            <div className="layout">
                {this.props.header}

                {this.props.content}

                {this.props.footer}
            </div>
        )
    }
});