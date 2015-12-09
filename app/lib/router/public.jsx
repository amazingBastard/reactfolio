const pageView = () => {
    GAnalytics.pageview();
};

const publicRoutes = FlowRouter.group({
    name: 'public',
    triggersEnter: [pageView]
});

publicRoutes.route('/', {
    name: 'root',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Root />});
    }
});

publicRoutes.route('/portfolio', {
    name: 'portfolio',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Portfolio />});
    }
});

publicRoutes.route('/login', {
    name: 'login',
    action() {
        ReactLayout.render(App.Layout, {view: <App.Login />});
    }
});

FlowRouter.notFound = {
    action() {
        ReactLayout.render(App.Layout, {view: <App.Redirect />});
    }
};