App.Logo = React.createClass({
    render() {
        return (
            <module className="animated fadeInDown logo module">
                <a className="logo" href={RouterHelpers.pathFor('root')}>
                    <h1 className="title">Reactfolio</h1>
                </a>
            </module>
        );
    }
});