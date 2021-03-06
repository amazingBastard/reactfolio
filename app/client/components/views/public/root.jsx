App.Root = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        let selector = {author: 'Damir Vazgird'},
            subscription = Meteor.subscribe('projects', selector);

        return {
            isLoading: !subscription.ready(),
            project: Projects.findOne({}, {sort: {created: -1}})
        };
    },

    shouldComponentUpdate() {
        return true;
    },

    renderToolbar() {
        let isUser = !Meteor.loggingIn() && Meteor.user(),
            buttonProps = {
                type: 'right icon button',
                route: 'portfolio',
                icon: 'fa fa-th'
            },
            adminButton = {
                type: 'left icon button',
                route: 'dashboard',
                icon: 'fa fa-user'
            };

        return (
            <module className="toolbar module">
                {(isUser) ? <App.Button buttonProps={adminButton}/> : ''}
                <App.Button buttonProps={buttonProps}/>
            </module>
        );
    },

    render() {
        let messageProps = {
            module: 'message module',
            type: 'centered message',
            message: 'There are no projects'
        };

        if (this.data.isLoading) {
            return <App.Loading />;
        } else {
            let project = this.data.project;

            return (
                <view className="animated fadeIn root view">
                    {!project ? <App.Message messageProps={messageProps}/> :
                        <App.Project project={project}/>}
                    {this.renderToolbar()}
                </view>
            );
        }
    }
});