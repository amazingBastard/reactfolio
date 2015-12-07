App.Portfolio = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        let selector = {author: 'Damir Vazgird'},
            subscription = Meteor.subscribe('projects', selector);

        return {
            isLoading: !subscription.ready(),
            projects: Projects.find({}, {sort: {created: -1}}).fetch()
        };
    },

    shouldComponentUpdate() {
        return true;
    },

    render() {
        let projects = this.data.projects,
            noProjects = projects.length === 0,
            messageProps = {
                module: 'messages module',
                type: 'centered message',
                message: 'There are no projects'
            };

        if (this.data.isLoading) {
            return <App.Loading />;
        } else {
            return (
                <view className="animated fadeIn portfolio view">
                    {noProjects ? <App.Message messageProps={messageProps}/> :
                        <App.Projects projects={projects}/>}
                </view>
            );
        }
    }
});