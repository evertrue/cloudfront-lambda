'use strict';

exports.handler = (event, context, callback) => {
    const response = event.Records[0].cf.response;

    response.headers['strict-transport-security'] = [{
        'key': 'Strict-Transport-Security',
        'value': 'max-age=31536000; includeSubDomains;'
    }];
    response.headers['x-frame-options'] = [{
        'key': 'X-Frame-Options',
        'value': 'DENY'
    }];
    response.headers['cache-control'] = [{
        'key': 'Cache-Control',
        'value': 'no-store'
    }];
    response.headers['pragma'] = [{
        'key': 'Pragma',
        'value': 'no-cache'
    }];

    callback(null, response);
};
