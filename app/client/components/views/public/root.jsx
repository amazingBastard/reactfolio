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

    render() {
        let project = this.data.project,
            messageProps = {
                module: 'messages module',
                type: 'centered message',
                message: 'There are no projects'
            },
            buttonProps = {
                type: 'bottom centered icon button',
                route: 'insert',
                icon: 'fa fa-plus'
            };

        if (this.data.isLoading) {
            return <App.Loading />;
        } else {
            return (
                <view className="animated fadeIn root view">
                    {!project ? <App.Messages messageProps={messageProps} /> :
                        <App.Project project={project}/>}
                    <App.Button buttonProps={buttonProps} />
                </view>
            );
        }
    }
});