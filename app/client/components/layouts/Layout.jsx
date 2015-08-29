C.Layout = React.createClass({
    render() {
        return (
            <div className="layout">
                <header className="header">
                     {this.props.header}
                </header>

                <main className="main">
                     {this.props.content}
                </main>

                <footer className="footer">
                     {this.props.footer}
                </footer>
            </div>
        )
    }
});