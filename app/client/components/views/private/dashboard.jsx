App.Dashboard = React.createClass({
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

    renderToolbar() {
        let leftButtonProps = {
                type: 'left icon button',
                route: 'root',
                icon: 'fa fa-home'
            },
            rightButtonProps = {
                type: 'right icon button',
                route: 'create',
                icon: 'fa fa-plus'
            };

        return (
            <module className="toolbar module">
                <App.Button buttonProps={leftButtonProps}/>
                <App.Button buttonProps={rightButtonProps}/>
            </module>
        );
    },

    render() {
        let currentUser = Meteor.user().profile.name,
            projects = this.data.projects,
            noProjects = projects.length === 0,
            messageProps = {
                module: 'message module',
                type: 'centered message',
                message: 'There are no projects, try adding some!'
            };

        if (this.data.isLoading) {
            return <App.Loading />;
        } else {
            return (
                <view className="animated fadeIn dashboard view">
                    <App.Greeting user={currentUser}/>
                    {noProjects ? <App.Message messageProps={messageProps}/> :
                        <App.Projects projects={projects}/>}
                    {this.renderToolbar()}
                </view>
            );
        }
    }
});