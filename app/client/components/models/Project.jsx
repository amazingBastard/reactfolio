App.Project = React.createClass({
    propTypes: {
        // This component gets the project to display through a React prop.
        // We can use propTypes to indicate it is required
        project: React.PropTypes.object.isRequired
    },
    render() {
         return (
              <article className="project">
                   <h2 className="title">{this.props.project.title}</h2>
                   <img className="image" src="http://placehold.it/400x200" />
                   <div className="content">
                       {this.props.project.content}
                   </div>
              </article>
         );
    }
});