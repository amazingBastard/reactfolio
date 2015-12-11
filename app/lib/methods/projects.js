Meteor.methods({
    createProject(projectKeys) {
        check(projectKeys, {
            title: String,
            content: String
        });

        let now = new Date(),
            user = Meteor.user(),
            duplicateTitle = Projects.findOne({title: projectKeys.title});

        if (!user) {
            throw new Meteor.Error('user-not-logged-in', 'You need to be logged in to create a project.');
        }
        if (duplicateTitle) {
            return Meteor.Error('project-title-already-exists', 'This project title already exists.');
        } else {

            let project = _.extend(projectKeys, {
                author: user.profile.name,
                owner: user._id,
                created: now
            }), projectId = Projects.insert(project);

            return {
                _id: projectId
            };
        }
    },
    updateProject: function (projectKeys) {
        check(projectKeys, {
            projectId: String,
            title: String,
            content: String
        });

        let user = Meteor.user(),
            project = Projects.findOne({_id: projectKeys.projectId});

        if (!user) {
            throw new Meteor.Error('user-not-logged-in', 'You need to be logged in to insert a project.');
        }

        if (!project) {
            throw new Meteor.Error('project-does-not-exist', 'This project is not in the projects collection');
        }

        Projects.update(projectKeys.projectId, {
            $set: {
                title: projectKeys.title,
                content: projectKeys.content
            }
        });
    },
    deleteProject: function (projectId) {
        check(projectId, String);

        Projects.remove(projectId);
    }
});