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

FlowRouter.route('/admin/new', {
    name: 'ProjectNew',
    action() {
        ReactLayout.render(App.Layout, {
            content: <App.ProjectNew />
        });
    }
});

FlowRouter.route('/admin/:_id', {
    name: 'ProjectEdit',
    action() {
        ReactLayout.render(App.Layout, {
            content: <App.ProjectEdit _id={params._id} />
        });
    }
});

FlowRouter.route('/:_id', {
    name: 'Project',
    action: function(params) {
        ReactLayout.render(App.Layout, {
            content: <App.Project _id={params._id} />
        });
    }
});