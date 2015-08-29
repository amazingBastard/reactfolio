FlowRouter.route('/', {
    name: 'Root',
    subscriptions(params) {
        Meteor.subscribe('projects');
    },
    action(params) {
        renderMainLayoutWith(<C.Root />);
    }
});

FlowRouter.route('/login', {
    name: 'Login',
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