const privateRedirect = () => {
    if (!Meteor.loggingIn() && !Meteor.userId()) {
        FlowRouter.go('account');
    }
};

const privateRoutes = FlowRouter.group({
    name: 'private',
    triggersEnter: [privateRedirect]
});

privateRoutes.route('/dashboard', {
    name: 'dashboard',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Dashboard />});
        GAnalytics.pageview();
    }
});
