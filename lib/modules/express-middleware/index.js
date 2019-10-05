const _ = require('lodash');

module.exports = {
  name: 'express-middleware',
  construct: (self, options) => {
    self.cookieName = 'WHATEVER_YOUR_COOKIENAME_IS';
    self.expressMiddleware = {
      middleware: [
        redirect
      ]
    };
    function redirect (req, res, next) {
      if (req.user) {
        // continue if user
        return next();
      // Non-logged in conditions as follows
      } else {
        // Need to allow for ApostropheCMS's exposed routes
        // for admin to function correctly, such as the default login page.
        // User header is passed from puppeteer with user id
        // (need to check against users in db or somehow get user object on request from puppeteer).
        if (req.url.startsWith('/modules/') || (req.headers.user) || req.url === '/WHATEVER') {
          return next();
        } else {
          if (_.has(req.cookies, self.cookieName)) {
            // if pin is stored continue
            return next();
          } else {
            // if cookie doesn't exist redirect to pin page
            return res.redirect('/WHATEVER');
          }
        }
      }
    }
  }
};
