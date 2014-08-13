/**
 * Generate files specific to unit testing
 */

'use strict';

var testingFiles = function testingFiles() {
    this.mkdir('test');
    this.mkdir('test/spec');
    if (this.jsOption === 'RequireJS') {
        this.copy('test/test-main.js', 'test/test-main.js');
    }
    this.template('test/spec/app-spec.js', 'test/spec/app-spec.js');
    this.template('karma.conf.js', 'karma.conf.js');
};

module.exports = testingFiles;