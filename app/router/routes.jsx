FlowRouter.route('/', {
    name: 'Root',
    subscriptions(params) {
        Meteor.subscribe('projects');
    },
    action(params) {
        renderMainLayoutWith(<C.Root />);
    }
});

FlowRouter.route('/admin', {
    name: 'Admin',
    subscriptions(params) {

    },
    action(params) {
        renderMainLayoutWith(<C.UserLogin />);
    }
});

function renderMainLayoutWith(component) {
    ReactLayout.render(C.Layout, {
        header: <C.Header />,
        content: component,
        footer: <C.Footer />
    });
}