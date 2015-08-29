App.Admin = React.createClass({
    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    // Loads items from the Projects collection and puts them on this.data.projects
    getMeteorData() {
         return {
              projects: Projects.find({}, {sort: {createdAt: -1}}).fetch(),
              currentUser: Meteor.user()
         }
    },
    render() {
         let formModule;
         let { currentUser } = this.data;

         if (currentUser) {
             formModule = (
                 <App.InsertProject / >
             )
         } else {
             form = (
                 <App.UserLogin />
             )
         }

         return (
              <main className="admin view">
                    {formModule}
              </main>
         )
    }
});