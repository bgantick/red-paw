const path = require('path');

const apos = require('apostrophe')({
  shortName: 'red-paw',
  // Be sure to override in local.js on staging/prod
  baseUrl: 'http://localhost:3000',
  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'apostrophe-browser-requirements': {
      minimums: {
        ie: 11
      },
      browseHappy: true
    },
    'apostrophe-attachments': {
      uploadfs: {
        disabledFileKey: 'a1e1cc773d708082'
      }
    },
    'apostrophe-admin-bar': {},
    'apostrophe-redirects': {},
    'helpers': {},
    'clients': { extend: 'apostrophe-pieces' },
    'clients-submit-widgets': { extend: 'apostrophe-pieces-submit-widgets' },
    'service-providers': { extend: 'apostrophe-pieces' },
    'service-providers-submit-widgets': { extend: 'apostrophe-pieces-submit-widgets' },
    'service-providers-pages': { extend: 'apostrophe-pieces-pages' }
  }
});
