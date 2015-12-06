App.Layout = React.createClass({
    render() {
        return (
            <layout className="layout">
                <header className="header">
                    <App.Logo />
                </header>

                <main className="main">
                    {this.props.view}
                </main>

                <footer className="footer">
                    <App.Toolbar />
                    <App.Copyright />
                </footer>
            </layout>
        )
    }
});