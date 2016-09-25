/**
 * Created by igor on 25.09.16.
 */
Package.describe({
    // Short two-sentence summary.
    summary: "What this does",
    // Version number.
    version: "0.0.1"
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.1.1');
    api.addFiles('styles.styl', 'client');
    api.mainModule('main.js');
});
Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.mainModule('miraries-tests.js');
});
