C.Root = React.createClass({
    getProjects() {
        return [
            { _id: 1, title: 'Project 1', thumb: 'http://placehold.it/400x200', content: 'This is the content.' },
            { _id: 2, title: 'Project 2', thumb: 'http://placehold.it/400x200', content: 'This is the content.' },
            { _id: 3, title: 'Project 3', thumb: 'http://placehold.it/400x200', content: 'This is the content.' }
        ];
    },

    renderProjects() {
         return this.getProjects().map((project) => {
                return <C.Project key={project._id} project={project} />;
         });
    },

    render() {
        return (
            <main className="root view">
                <div className="projects">
                    {this.renderProjects()}
                </div>
            </main>
        )
    }
});