FlowRouter.route('/', {
    name: 'Root',
    action() {
        ReactLayout.render(App.Layout, {
            content: <App.Root />
        });
    }
});

FlowRouter.route('/admin', {
    name: 'Admin',
    action() {
        ReactLayout.render(App.Layout, {
            content: <App.Admin />
        });
    }
});

FlowRouter.route('/projects/:_id', {
    name: 'Project',
    action: function(params) {
        ReactLayout.render(App.Project, {
            content: <App.Project _id={params._id} />
        });
    }
});