App.Project = React.createClass({
    propTypes: {
        // This component gets the project to display through a React prop.
        // We can use propTypes to indicate it is required
        project: React.PropTypes.object.isRequired
    },
    render() {
         return (
              <article className="project">
                   <h1 className="title">{this.props.project.title}</h1>
                   <img className="image" src={this.props.project.image} />
                   <div className="content">
                       {this.props.project.content}
                   </div>
              </article>
         );
    }
});