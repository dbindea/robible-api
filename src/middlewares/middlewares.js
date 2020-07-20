module.exports = {
  initAppData: function (req, res, next) {
    (req.appData = {}), next();
  },

  getBible: function (req, res, next) {
    // TODO: get data from headers

    const lang = 'ro';
    const version = 'VDCC';

    req.appData['bible'] = {
      lang,
      version,
    };
    next();
  },
};
