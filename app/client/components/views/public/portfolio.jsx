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

    renderToolbar() {
        let isUser = !Meteor.loggingIn() && Meteor.user(),
            buttonProps = {
                type: 'right icon button',
                route: 'root',
                icon: 'fa fa-square'
            }, adminButton = {
                type: 'left icon button',
                route: 'create',
                icon: 'fa fa-plus'
            };

        return (
            <module className="toolbar module">
                {(isUser) ? <App.Button buttonProps={adminButton}/> : ''}
                <App.Button buttonProps={buttonProps}/>
            </module>
        );
    },

    render() {
        let projects = this.data.projects,
            noProjects = projects.length === 0,
            messageProps = {
                module: 'message module',
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
                    {this.renderToolbar()}
                </view>
            );
        }
    }
});