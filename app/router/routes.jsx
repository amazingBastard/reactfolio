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
    name: 'NewProject',
    action() {
        ReactLayout.render(App.Layout, {
            content: <App.NewProject />
        });
    }
});

FlowRouter.route('/admin/:_id', {
    name: 'EditProject',
    action() {
        ReactLayout.render(App.Layout, {
            content: <App.EditProject _id={params._id} />
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