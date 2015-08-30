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

FlowRouter.route('/:projectId', {
    name: 'Project',
    action: function(params) {
        ReactLayout.render(App.Project, {
            content: <App.Project projectId={params.projectId} />
        });
    }
});