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

privateRoutes.route('/insert', {
    name: 'insert',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Insert />});
    }
});

privateRoutes.route('/dashboard', {
    name: 'dashboard',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Dashboard />});
    }
});
