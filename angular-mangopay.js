/*
 * angular-mangopay v0.0.1
 * (c) 2014 Jacopo Cappelli http://www.keepup.pro
 * License: MIT
 */

'use strict';

angular.module('jcappelli.mangopay', [])
	.factory('mangopay', function ($rootScope, $http) {
		return {
			sendData: function(cardRegistrationURL, preregistrationData, accessKey, cardNumber, cardExpirationDate, cardCvx , onSuccess, onError) {

				console.log("senddata");

				$http.defaults.useXDomain = true;
    			delete $http.defaults.headers.common['X-Requested-With'];
    			//$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

				return $http({
		            url: cardRegistrationURL,
		            method: 'POST',
		            data: {
						'data': preregistrationData,
                		'accessKeyRef': accessKey,
                		'cardNumber': cardNumber,
                		'cardExpirationDate': cardExpirationDate,
                		'cardCvx': cardCvx
		            },
		            headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'} 
		        })
		        .success(function(data, status, headers, config) {
		        	$rootScope.$apply(function () {
						onSuccess.apply(that, args);
					});
		        }). 
		        error(function(data, status, headers, config) {
					$rootScope.$apply(function () {
						onError.apply(that, args);
					});
		        });
			},
		};
	});