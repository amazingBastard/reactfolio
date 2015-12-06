App.Logo = React.createClass({
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
                    <a className="admin icon button" href="/dashboard"><i className="fa fa-user"></i></a>
                    <button className="logout icon button" onClick={this.handleLogout}><i className="fa fa-sign-out"></i>
                    </button>
                </div>
            )
        } else {
            buttons = (
                <div className="buttons">
                    <a className="login icon button" href="/login"><i className="fa fa-sign-in"></i></a>
                </div>
            )
        }

        return (
            <module className="animated fadeInDown logo module">
                <h1 className="title"><a className="route" href="/"><span className="brand font">React</span>folio</a></h1>
                {buttons}
            </module>
        )
    }
});