const privateRedirect = () => {
    if (!Meteor.loggingIn() && !Meteor.userId()) {
        FlowRouter.go('login');
    }
};

const pageView = () => {
    GAnalytics.pageview();
};

const privateRoutes = FlowRouter.group({
    name: 'private',
    triggersEnter: [privateRedirect, pageView]
});

privateRoutes.route('/create', {
    name: 'create',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Create />});
    }
});

privateRoutes.route('/dashboard', {
    name: 'dashboard',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Dashboard />});
    }
});
