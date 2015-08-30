App.Admin = React.createClass({
    mixins: [ReactMeteorData],
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
             formModule = (
                 <App.AdminLogin />
             )
         }

         return (
              <main className="animated fadeIn admin view">
                    {formModule}
              </main>
         )
    }
});