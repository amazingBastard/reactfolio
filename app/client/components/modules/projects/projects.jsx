App.Projects = React.createClass({
    propTypes: {
        projects: React.PropTypes.array
    },

    shouldComponentUpdate() {
        return true;
    },

    render() {
        return (
            <module className="projects module">
                {this.props.projects.map((project, index) => {
                    return <App.Project key={index} project={project}/>;
                })}
            </module>
        );
    }
});