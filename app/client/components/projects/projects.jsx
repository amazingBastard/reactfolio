App.Projects = React.createClass({
    propTypes: {
        projects: React.PropTypes.object
    },

    shouldComponentUpdate() {
        return true;
    },

    render() {
        return (
            <module className="projects module">
                <ul className="unstyled projects list">
                    {this.props.games.map((game, index) => {
                        return <App.GameItem key={index} game={game} />;
                    })}
                </ul>
            </module>
        );
    }
});