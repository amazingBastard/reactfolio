Projects = new Mongo.Collection('projects');

Projects.allow({
    insert: () => false,
    update: () => false,
    remove: () => false
});

Projects.deny({
    insert: () => true,
    update: () => true,
    remove: () => true
});

let ProjectsSchema = new SimpleSchema({
    'title': {
        type: String,
        label: 'The title of the project'
    },
    'author': {
        type: String,
        label: 'The author of the project'
    },
    'content': {
        type: String,
        label: 'The content of the project in markdown format'
    },
    'owner': {
        type: String,
        label: 'The user id of the owner of the project'
    },
    'created': {
        type: Date,
        label: 'The date the project was first created'
    },
    'updated': {
        type: Date,
        label: 'The date the project was last updated',
        optional: true
    },
    'archived': {
        type: Date,
        label: 'The date the project was archived',
        optional: true
    }
});

Projects.attachSchema(ProjectsSchema);