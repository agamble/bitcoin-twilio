var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bitcoin-twilio'
    },
    port: 3000,
    db: 'mongodb://localhost/bitcoin-twilio-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'bitcoin-twilio'
    },
    port: 3000,
    db: 'mongodb://localhost/bitcoin-twilio-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'bitcoin-twilio'
    },
    port: 3000,
    db: 'mongodb://localhost/bitcoin-twilio-production'
    
  }
};

module.exports = config[env];
