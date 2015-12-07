# Reactfolio

Minimal portfolio web-app built with React and Meteor. Based on [React Meteor Template](https://github.com/ryanswapp/react-meteor-template).

[DEMO](http://reactfolio.meteor.com)

> You can use username: admin // password: admin to login to /admin

* [Roadmap](#roadmap)
* [How to use](#how-to-use)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Deployments](#deployments)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [License](#license)

## Roadmap

* Add tests
* Setup build environments
* Security

## How to use

### Requirements

Make sure [Meteor is installed and up to date](https://www.meteor.com/install) or run:

```
curl https://install.meteor.com/ | sh
```

### Installation

```
git clone git@github.com:amazingBastard/reactfolio.git
cd reactfolio
```

Run the following to get the bash file to work:

```
chmod +x ./run.sh
```

Now you can start the app with the following command:

```
./run.sh
```

### Deployments

It is highly recommended to use [Meteor Up](https://github.com/arunoda/meteor-up) for easy deployments.
Have a look at the repository for more information.

## Structure

### Packages Used

* Meteor Core
  * [meteor-base](http://github.com/meteor/meteor/tree/devel/packages/meteor-base)
  * [mobile-experience](https://github.com/meteor/meteor/tree/devel/packages/mobile-experience)
  * [mongo](https://github.com/meteor/meteor/tree/devel/packages/mongo)
  * [blaze-html-templates](https://github.com/meteor/meteor/tree/devel/packages/blaze-html-templates)
  * [session](https://github.com/meteor/meteor/tree/devel/packages/session)
  * [jquery](https://github.com/meteor/meteor/tree/devel/packages/jquery)
  * [tracker](https://github.com/meteor/meteor/tree/devel/packages/tracker)
  * [standard-minifiers](https://github.com/meteor/meteor/tree/devel/packages/standard-minifiers)
  * [es5-shim](https://github.com/meteor/meteor/tree/devel/packages/es5-shim)
  * [ecmascript](https://github.com/meteor/meteor/tree/devel/packages/ecmascript)
* Accounts
  * [accounts-base](https://github.com/meteor/meteor/tree/devel/packages/accounts-base)
  * [accounts-password](https://github.com/meteor/meteor/tree/devel/packages/accounts-password)
* Collections
  * [aldeed:collection2](https://github.com/aldeed/meteor-collection2)
* Router
  * [kadira:flow-router](https://github.com/kadirahq/flow-router)
  * [kadira:react-layout](https://github.com/kadirahq/meteor-react-layout)
  * [meteorhacks:fast-render](https://github.com/meteorhacks/fast-render)
* SEO
  * [spiderable](http://github.com/meteor/meteor/tree/devel/packages/spiderable)
  * [tomwasd:flow-router-seo](https://github.com/tomwasd/flow-router-seo)
* Analytics 
  * [datariot:ganalytics](https://github.com/datariot/meteor-ganalytics)
* UI/UX
  * [natestrauser:animate-css](https://github.com/nate-strauser/meteor-animate-css)
  * [fortawesome:fontawesome](https://github.com/MeteorPackaging/Font-Awesome)
* Development
  * [check](https://github.com/meteor/meteor/tree/devel/packages/check)
  * [react](https://github.com/meteor/meteor/tree/devel/packages/react)
  * [fastclick](http://github.com/meteor/meteor/tree/devel/packages/fastclick)
  * [reactive-var](https://github.com/meteor/meteor/tree/devel/packages/reactive-var)
  * [reactive-dict](https://github.com/meteor/meteor/tree/devel/packages/reactive-dict)
  * [fourseven:scss](https://github.com/fourseven/meteor-scss)
  * [wolves:bourbon](https://github.com/wolvesio/meteor-bourbon)
  * [stevezhu:lodash](https://github.com/stevezhu/meteor-lodash)
  * [momentjs:moment](https://github.com/moment/moment/)

The "insecure" and "autopublish" packages are removed by default (they make your app vulnerable).

### Folder structure

```
app/                # Application folder
  client/             # Client folder
    compatibility/      # Libraries which create a global variable
    config/             # Configuration files (on the client)
    lib/                # Library files that get executed first
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # LESS files
    components/          # Contains react components
      common/             # Common components (i.e. header, footer)
      forms/              # All forms
      layouts/            # Router layouts
      views/              # All the views
  collections/        # All Collections
    client/             # Client Collections
    server/             # Server Collections
  lib/                # Lib files that get executed first
  packages/           # Packages folder (custom meteor packages, npm)
  private/            # Private files
  public/             # Public files
  router/             # All routes
  server/             # Server folder
    fixtures/           # Meteor.Collection fixtures defined
    lib/                # Server side library folder
    methods/            # Server methods
    publications/       # Collection publications
    startup/            # On server startup
  tests/              # All tests
    client/             # client tests
      integration/        # integration tests
      unit/               # unit tests
    server/             # server tests
      integration/        # integration tests
      unit/               # unit tests
environments/       # Environments folder
  build/              # testing environment
  local/              # local environment
  production/         # production environment

```

## License

This project has an MIT License, see the LICENSE.txt for more information.