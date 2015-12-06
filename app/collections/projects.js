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
    'created': {
        type: Date,
        label: 'The date the project was created in the projects collection'
    }
});

Projects.attachSchema(ProjectsSchema);