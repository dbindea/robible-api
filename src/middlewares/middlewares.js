module.exports = {
  initAppData: function (req, res, next) {
    (req.appData = {}), next();
  },

  getBible: function (req, res, next) {
    const lv = req.headers['lv'];
    if (lv) {
      req.appData['bible'] = {
        lang: lv.slice(0, 2).toLowerCase(),
        version: lv.slice(2).toUpperCase(),
      };
    } else {
      req.appData['bible'] = {
        lang: '',
        version: '',
      };
    }
    next();
  },
};
