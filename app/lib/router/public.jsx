const publicRedirect = () => {
    if (Meteor.userId()) {
        FlowRouter.go('root');
    }
};

const publicRoutes = FlowRouter.group({
    name: 'public',
    triggersEnter: [publicRedirect]
});

publicRoutes.route('/', {
    name: 'root',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Root />});
        GAnalytics.pageview();
    }
});

publicRoutes.route('/projects', {
    name: 'projects',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Projects />});
        GAnalytics.pageview();
    }
});

publicRoutes.route('/login', {
    name: 'login',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Login />});
        GAnalytics.pageview();
    }
});