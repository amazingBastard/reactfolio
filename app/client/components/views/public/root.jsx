App.Root = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        let selector = {author: 'Damir Vazgird'},
            subscription = Meteor.subscribe('projects', selector);

        return {
            isLoading: !subscription.ready(),
            project: Projects.findOne({}, {sort: {created: -1}}).fetch()
        };
    },

    shouldComponentUpdate() {
        return true;
    },

    render() {
        let noProjects = this.data.project.length === 0,
            project = this.data.project,
            messageProps = {
                module: 'messages module',
                type: 'centered message',
                message: 'There are no projects'
            };

        if (this.data.isLoading) {
            return <App.Loading />;
        } else {
            return (
                <view className="animated fadeIn root view">
                    {noProjects ? <App.Messages messageProps={messageProps} /> :
                        <App.Project project={project}/>}
                </view>
            );
        }
    }
});