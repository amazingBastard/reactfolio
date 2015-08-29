FlowRouter.route('/', {
    name: 'Root',
    subscriptions(params) {
        Meteor.subscribe('projects');
    },
    action(params) {
        renderMainLayoutWith(<App.Root />);
    }
});

FlowRouter.route('/admin', {
    name: 'Admin',
    subscriptions(params) {
        Meteor.subscribe('projects');
    },
    action(params) {
        renderMainLayoutWith(<App.Admin />);
    }
});

function renderMainLayoutWith(component) {
    ReactLayout.render(App.Layout, {
        header: <App.Header />,
        content: component,
        footer: <App.Footer />
    });
}