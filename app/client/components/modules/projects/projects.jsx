App.Projects = React.createClass({
    propTypes: {
        projects: React.PropTypes.object
    },

    shouldComponentUpdate() {
        return true;
    },

    render() {
        return (
            <view className="adnimated fadeIn projects view">
                <ul className="unstyled projects list">
                    {this.props.projects.map((project, index) => {
                        return <App.Project key={index} project={project} />;
                    })}
                </ul>
            </view>
        );
    }
});