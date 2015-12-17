App.Project = React.createClass({
    propTypes: {
        project: React.PropTypes.object
    },

    shouldComponentUpdate() {
        return true;
    },

    renderAdminButtons() {
        let updateButtonProps = {
                type: 'icon button',
                route: 'update',
                icon: 'fa fa-wrench'
            },
            archiveButtonProps = {
                type: 'icon button',
                icon: 'fa fa-archive'
            },
            removeButtonProps = {
                type: 'icon button',
                icon: 'fa fa-times'
            };

        return (
            <span className="admin buttons">
                <App.Button buttonProps={updateButtonProps}/>
                <App.Button buttonProps={archiveButtonProps}/>
                <App.Button buttonProps={removeButtonProps}/>
            </span>
        );
    },

    render() {
        let isUser = !Meteor.loggingIn() && Meteor.user(),
            title = this.props.project.title,
            date = DateHelpers.fromNow(this.props.project.created);

        if (RouterHelpers.currentRoute('root')) {
            let content = this.props.project.content;

            return (
                <module className="project module">
                    <h1 className="title">{title}
                        <small className="meta">posted {date}</small>
                    </h1>
                    <App.Markdown content={content}/>
                </module>
            )
        } else {
            return (
                <figure className="project figure">
                    <h1 className="title">{title}
                        <small className="meta">posted {date}</small>
                    </h1>
                    {(isUser) ? this.renderAdminButtons() : ''}
                </figure>
            );
        }
    }
});