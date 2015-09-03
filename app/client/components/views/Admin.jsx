App.Admin = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
         return {
              projects: Projects.find({}, {sort: {createdAt: -1}}).fetch(),
              currentUser: Meteor.user()
         }
    },
    render() {
         let dashboard;
         let { currentUser } = this.data;

         if (currentUser) {
             dashboard = (
                 <App.InsertProject />
             )
         } else {
             dashboard = (
                 <App.AdminLogin />
             )
         }

         return (
              <main className="animated fadeIn admin view">
                    {dashboard}
              </main>
         )
    }
});