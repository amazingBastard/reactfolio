App.Admin = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
         return {
              projects: Projects.find({}, {sort: {createdAt: -1}}).fetch(),
              currentUser: Meteor.user()
         }
    },
    render() {
         let gate;
         let { currentUser } = this.data;

         if (currentUser) {
             gate = (
                 <App.InsertProject />
             )
         } else {
             gate = (
                 <App.AdminLogin />
             )
         }

         return (
              <main className="animated fadeIn admin view">
                    {gate}
              </main>
         )
    }
});