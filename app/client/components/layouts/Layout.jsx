App.Layout = React.createClass({
    render() {
        return (
            <div className="layout">
                <App.Header />

                {this.props.content}

                <App.Footer />
            </div>
        )
    }
});