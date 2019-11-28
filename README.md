# Cordova iOS Shared Web Credentials

Set up associated domains to share credentials with a website related to your Cordova iOS app.

## Overview

Often you will want save user credentials to KeyChain or to associate your website with your app because they are often different versions of the same app or are related and want to share data. To associate a website with an app, you will need to have a file on your website and an entitlement in your app.

An associated domain matches the Associated Domains Entitlement in your app with an apple-app-site-association file on your website.

It’s important to establish an association between domains and your app if you want to share credentials or if features in your app are based on your website.

## Prerequisites

Enabling Password AutoFill on an HTML Input Element

To ensure your HTML input element displays the right AutoFill suggestion, set the autocomplete attribute for an input element.

Use the following autocomplete attribute values:

User Name: ```username```

Password: ```current-password```

New Password: ```new-password```

One-Time Code: ```one-time-code```


Explicitly defining an input element’s autocomplete value lets you support login workflows that couldn’t otherwise be detected by Password AutoFill’s heuristics. For example, the heuristics assume the user name and password inputs are on the same page. If you have a multipage login form, explicitly setting the username and current-password types lets the user tap and fill those inputs, even if they are on separate pages. Similarly, the heuristics assume that password and new password inputs always use secure text; therefore, if you want to let the user type their passwords in plain text, you’ll need to set the input’s text content type to either current-password or new-password.

By default, the system selects a keyboard based on the input element’s autocomplete value; however, you can mix the input element’s type and autocomplete values to explicitly define the desired keyboard. For example, if your site uses email addresses as user names, set the input view’s autocomplete attribute to username, and set the type property to email.

This example defines text fields for logging in:
```
<input id="user-text-field" type="email" autocomplete="username"/>
<input id="password-text-field" type="password" autocomplete="current-password"/>
```

When creating a new account or changing the password, use the new-password attribute value instead:
```
<input id="new-password-text-field" type="password" autocomplete="new-password"/>
<input id="confirm-password-text-field" type="password" autocomplete="new-password"/>
```

Additionally, you can autocomplete security codes from single-factor SMS login flows:
```
<input id="single-factor-code-text-field" autocomplete="one-time-code"/>
```

## Plugin Installation

There are two input parameters to be passed: 

APP_DOMAIN - enter your site domain (eg: outsystems.com)

APP_NAME - enter your app name (Case Sensitive)

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

This project is licensed under the MIT License
