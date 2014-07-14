/* jshint -W030 */
var Blankie = require('../');
var Hapi = require('hapi');

var Lab = require('lab');

var describe = Lab.experiment;
var expect = Lab.expect;
var it = Lab.test;

describe('Blankie', function () {

    it('loads as a plugin', function (done) {

        var server = new Hapi.Server();
        server.pack.register(Blankie, function (err) {

            expect(err).to.not.exist;
            done();
        });
    });

    it('errors with invalid options', function (done) {

        var server = new Hapi.Server();
        server.pack.register({
            plugin: Blankie,
            options: {
                reportOnly: 'invalid value'
            }
        }, function (err) {
        
            expect(err).to.exist;
            done();
        });
    });
});
