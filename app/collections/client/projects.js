Projects = new Mongo.Collection('projects');

Projects.allow({
    update: ownsDocument,
    remove: ownsDocument
});

Projects.deny({
    update: function(userId, post, fieldNames) {
        // may only edit the following fields:
        return (_.without(fieldNames, 'title', 'image', 'description', 'content').length > 0);
    }
});