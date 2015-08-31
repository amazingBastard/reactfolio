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

FlowRouter.route('/project/:_id', {
    name: 'Project',
    action: function(params) {
        ReactLayout.render(App.Layout, {
            content: <App.Project _id={params._id} />
        });
    }
});