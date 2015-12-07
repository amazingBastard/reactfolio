let currentUser = () => {
    return Meteor.user();
};

let isAdmin = (admin) => {
    return 'admin' === admin;
};

AccountHelpers = {
    currentUser: currentUser,
    isAdmin: isAdmin
};