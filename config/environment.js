/* eslint-env node */

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'biscuitman',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    DS: {
      host: process.env.API_HOST || 'http://localhost:4000'
    },

    'ember-simple-auth': {
      authenticatedRoute: 'auth.login',
      routeIfAlreadyAuthenticated: 'admin.index',
      routeAfterAuthentication: 'admin.index'
    },

    flashMessageDefaults: {
      timeout: 3000,
      extendedTimeout: 375
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.DS.host = 'http://api.biscuitmancompost.com';
  }

  return ENV;
};
