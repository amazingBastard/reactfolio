App.Header = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        }
    },
    handleLogout() {
        Meteor.logout();
    },
    render() {
        let buttons;
        let { currentUser } = this.data;

        if (currentUser) {
            buttons = (
                <div className="buttons">
                    <a className="admin icon button" href="/admin"><i className="fa fa-user"></i></a>
                    <button className="logout icon button" onClick={this.handleLogout}><i className="fa fa-sign-out"></i>
                    </button>
                </div>
            )
        } else {
            buttons = (
                <div className="buttons">
                    <a className="login icon button" href="/admin"><i className="fa fa-sign-in"></i></a>
                </div>
            )
        }

        return (
            <header className="animated fadeInDown header">
                <h1 className="title"><a className="route" href="/"><span className="brand font">React</span>folio</a></h1>
                {buttons}
            </header>
        )
    }
});