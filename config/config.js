var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bitcoin-twilio'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://heroku:sqmyqnAudrYSbFTN9pYugHTCuDTTblGNMp8MuYOcA_mKj_8qPCoSeQ7OVVT6b-StXoNqAEoNlHw0ZO6fEtsedA@linus.mongohq.com:10024/app30372159'
  },

  test: {
    root: rootPath,
    app: {
      name: 'bitcoin-twilio'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://heroku:sqmyqnAudrYSbFTN9pYugHTCuDTTblGNMp8MuYOcA_mKj_8qPCoSeQ7OVVT6b-StXoNqAEoNlHw0ZO6fEtsedA@linus.mongohq.com:10024/app30372159'
  },

  production: {
    root: rootPath,
    app: {
      name: 'bitcoin-twilio'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://heroku:sqmyqnAudrYSbFTN9pYugHTCuDTTblGNMp8MuYOcA_mKj_8qPCoSeQ7OVVT6b-StXoNqAEoNlHw0ZO6fEtsedA@linus.mongohq.com:10024/app30372159'
  }
};

module.exports = config[env];
