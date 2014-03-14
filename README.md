angular-mangopay
================

AngularJS Service for Making registration card operation


# Features

It's a substitution of mangopay.min.js for CardRegistration Process
  * Independent
  * Make only card registration 

# Usage

Import module
    'jcappelli.mangopay'

Usage in code

    mangopay.sendData(CardRegistrationURL,PreregistrationData,AccessKey,NumberCard,expiry,cvv)
    .success(function(data, status, headers, config) {
      console.log("OK:"+JSON.stringify(data));
    }).
    error(function(data, status, headers, config) {
      console.log("Error:"+JSON.stringify(data));
    });
    
Important
expiry date format is 0915 two digit for month and last two digit for year
