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

publicRoutes.route('/portfolio', {
    name: 'portfolio',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Portfolio />});
        GAnalytics.pageview();
    }
});

publicRoutes.route('/account', {
    name: 'account',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Login />});
        GAnalytics.pageview();
    }
});