#!/usr/bin/env node
'use strict';

var fs = require('fs');
var path = require('path');
var plist = require('plist');
var utils = require("./utils");
var DOMParser = require('xmldom').DOMParser;
var XMLSerializer = require('xmldom').XMLSerializer;

module.exports = function(context) {
        
        //Gets app domain
        if(process.argv.join("|").indexOf("APP_DOMAIN=") > -1) {
            var APP_DOMAIN = process.argv.join("|").match(/APP_DOMAIN=(.*?)(\||$)/)[1]
        } else {
            var config = fs.readFileSync("config.xml").toString()
            var APP_DOMAIN = getPreferenceValue(config, "APP_DOMAIN")
        }

        const platformRoot = path.join(context.opts.projectRoot, 'platforms/ios/HelloCordova/Resources/app.entitlements');

        var fullXMLPath = path.join("Resources", "app.entitlements");

        fs.readFile(platformRoot, 'utf8', (err, result) => {
            if (err) {
                return reject(
                    "Error reading XML file: " + err
                );
            } else {

                var parser = new DOMParser();
                var doc = parser.parseFromString(result, "text/xml");

                doc.getElementsByTagName("string")[0].textContent = "webcredentials:" + APP_DOMAIN;
                var xmlSerializer = new XMLSerializer();
                fs.writeFileSync(platformRoot, xmlSerializer.serializeToString(doc));

                const entitlementsFile = path.join(context.opts.projectRoot, 'platforms/ios/HelloCordova/Resources/HelloCordova.entitlements');
                fs.rename(platformRoot, entitlementsFile, function(err) {
                if ( err ) console.log('ERROR: ' + err);
});
            }
        });
    
};










