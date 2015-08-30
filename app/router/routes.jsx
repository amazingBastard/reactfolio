FlowRouter.route('/', {
    name: 'Root',
    subscriptions(params) {
        this.register('projects', Meteor.subscribe('projects'));
    },
    action() {
        ReactLayout.render(App.Layout, {
            content: <App.Root />
        });
    }
});

FlowRouter.route('/admin', {
    name: 'Admin',
    subscriptions(params) {
        this.register('projects', Meteor.subscribe('projects'));
    },
    action() {
        ReactLayout.render(App.Layout, {
            content: <App.Admin />
        });
    }
});

FlowRouter.route('/:projectId', {
    name: 'ViewProject',
    subscriptions(params) {
        this.register('singlePost', Meteor.subscribe('singlePost', params._id));
    },
    action() {
        renderMainLayoutWith(<App.ViewProject />);
    }
});

function renderMainLayoutWith(component) {
    ReactLayout.render(App.Layout, {
        header: <App.Header />,
        content: component,
        footer: <App.Footer />
    });
}