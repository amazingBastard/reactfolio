const privateRedirect = () => {
    if (!Meteor.loggingIn() && !Meteor.userId()) {
        FlowRouter.go('login');
    }
};

const privateRoutes = FlowRouter.group({
    name: 'private',
    triggersEnter: [privateRedirect]
});

privateRoutes.route('/insert', {
    name: 'insert',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Insert />});
        GAnalytics.pageview();
    }
});

privateRoutes.route('/dashboard', {
    name: 'dashboard',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Dashboard />});
        GAnalytics.pageview();
    }
});
