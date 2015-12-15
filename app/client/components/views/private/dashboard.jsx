App.Dashboard = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        return {
            user: Meteor.user()
        };
    },

    shouldComponentUpdate() {
        return true;
    },

    renderToolbar() {
        let buttonProps = {
            type: 'right icon button',
            route: 'create',
            icon: 'fa fa-plus'
        };

        return (
            <module className="toolbar module">
                <App.Button buttonProps={buttonProps}/>
            </module>
        );
    },

    render() {
        let currentUser = this.data.user.profile.name;

        // @TODO: add projects module to manage projects (update, remove, archive)

        return (
            <view className="animated fadeIn dashboard view">
                <App.Greeting user={currentUser} />
                {this.renderToolbar()}
            </view>
        );
    }
});