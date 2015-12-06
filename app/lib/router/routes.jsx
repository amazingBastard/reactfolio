FlowRouter.route('/', {
    name: 'Root',
    action() {
        ReactLayout.render(App.Layout, {
            content: <App.Root />
        });
    }
});

FlowRouter.route('/projects', {
    name: 'projects',
    action(params) {
        ReactLayout.render(App.Layout, {
            content: <App.Admin _id={params._id} />
        });
    }
});