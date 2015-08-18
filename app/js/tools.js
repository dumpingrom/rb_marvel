var app = window.app || {};

app.getRequestParams = function(alt) {
	// timestamp in seconds or 0 if < IE8
	var timestamp = Date.now() | 0;
	// are we using alternate account?
	var key;
	(alt === false) ? key = app.$apikey_pub : key = app.$apikey_pub_alt;
	
	// md5 hash of timestamp and api keys concatenated
	var hash; 
	(alt === false) ? hash = app.calcMD5(timestamp + app.$apikey_pri + app.$apikey_pub) : hash = app.calcMD5(timestamp + app.$apikey_pri_alt + app.$apikey_pub_alt);
	
	//build request parameters
	var requestParams = 'ts='+timestamp+'&apikey='+key+'&hash='+hash;

	return requestParams;
}