# Cordova iOS Shared Web Credentials

Set up associated domains to share credentials with a website related to your Cordova iOS app.

## Overview

Often you will want to associate your website with your app because they are often different versions of the same app or are related and want to share data. To associate a website with an app, you will need to have a file on your website and an entitlement in your app.

An associated domain matches the Associated Domains Entitlement in your app with an apple-app-site-association file on your website.

It’s important to establish an association between domains and your app if you want to share credentials or if features in your app are based on your website.

## Plugin Installation

There are two input parameters to be passed: 
APP_DOMAIN - enter your site domain (eg: outsystems.com)
APP_NAME - enter your app name 

```
$ cordova plugin add iosSharedWebCredentials --variable APP_DOMAIN=<YOUR-DOMAIN-NAME> --variable APP_NAME=<YOUR-APP-NAME-CASE-SENSITIVE>
```

## Post Installation
Next, you should add the Apple App Site Association file to your website.

Create a file named apple-app-site-association (without an extension). Update the file to contain the JSON representation of a dictionary listing the app identifiers associated with your domain for the webcredentials service.

```
{
   "webcredentials": {
       "apps": [    "D3KQX62K1A.com.example.DemoApp",
                    "D3KQX62K1A.com.example.DemoAdminApp" ]
    }
}
```

Use the following format for the app identifiers:

```
<Team Identifier>.<Bundle Identifier>
```

Place this file either in your site’s .well-known directory, or directly in its root directory. If you use the .well-known directory, the file’s URL should match the following format:

```
https://<fully qualified domain>/.well-known/apple-app-site-association
```

You must host the file using https:// with a valid certificate and without using any redirects.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
