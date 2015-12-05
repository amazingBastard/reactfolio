Meteor.methods({
    insertProject: function (title, image, description, content) {
        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            throw new Meteor.Error('unauthorized');
        }

        Projects.insert({
            title: title,
            image: image,
            description: description,
            content: content,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    },
    removeProject: function (projectId) {
        Projects.remove(projectId);
    },
    updateProject: function (projectId, title, image, description, content) {
        Projects.update(projectId, {$set: {title: title, image: image, description: description, content: content}});
    }
});