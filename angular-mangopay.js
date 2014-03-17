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

    			var datiMangoPay = {
    				data: preregistrationData,
                	accessKeyRef: accessKey,
                	cardNumber: cardNumber,
                	cardExpirationDate: cardExpirationDate,
                	cardCvx: cardCvx
    			};

    			console.log("Dati mango pay:"+JSON.stringify(datiMangoPay));

    			var parametriMango = "";
				for(key in datiMangoPay) {
					parametriMango += (parametriMango.length > 0 ? '&' : '' ) + key + "=" + encodeURIComponent(datiMangoPay[key]);
				}

				console.log("Parametri:"+parametriMango);


				$http.defaults.useXDomain = true;
    			delete $http.defaults.headers.common['X-Requested-With'];

				return $http({
		            url: cardRegistrationURL,
		            method: 'POST',
		            data: parametriMango,
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