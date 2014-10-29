'use strict';

var _ = require('lodash');

// Get list of logs
exports.index = function(req, res) {
  var AWS = require('aws-sdk');
  AWS.config.loadFromPath('./server/config.json');

  var s3 = new AWS.S3();
  s3.listObjects({'Bucket': 'nuk-tnl-editorial-cloudtrail'}, function(err, data){
    if (err) {
      console.log(err, err.stack);
    } else {
      console.dir(data);
      res.json(data);
    }
  });



};
