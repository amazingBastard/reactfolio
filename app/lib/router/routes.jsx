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
    action(params) {
        ReactLayout.render(App.Layout, {
            content: <App.Admin _id={params._id} />
        });
    }
});

FlowRouter.route('/admin/new', {
    name: 'ProjectInsert',
    action() {
        ReactLayout.render(App.Layout, {
            content: <App.ProjectInsert />
        });
    }
});

FlowRouter.route('/admin/:_id', {
    name: 'ProjectUpdate',
    action: function(params) {
        ReactLayout.render(App.Layout, {
            content: <App.ProjectUpdate _id={params._id} />
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