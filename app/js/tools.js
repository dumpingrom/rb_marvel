var app = window.app || {};

app.getRequestParams = function() {
	// timestamp in seconds or 0 if < IE8
	var timestamp = Date.now() | 0;
	// md5 hash of timestamp and api keys concatenated
	var hash = app.calcMD5(timestamp + app.$apikey_pri + app.$apikey_pub);
	//build request parameters
	var requestParams = 'ts='+timestamp+'&apikey='+app.$apikey_pub+'&hash='+hash;

	return requestParams;
}