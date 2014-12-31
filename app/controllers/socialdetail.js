exports.openSocialDetailWindow = function(_tab){
	_tab.open($.socialDetailWindow);
};

var args = arguments[0] || {};

if(args.id == "FACEBOOK"){
	$.webview.url = "https://www.facebook.com/marykaydemexico";
}

if(args.id == "TWITTER"){
	$.webview.url = "https://twitter.com/marykaydemexico";
}

if(args.id == "YOUTUBE"){
	$.webview.url = "http://www.youtube.com/marykaydemexico";
}

if(args.id == "CORPORATE"){
	$.webview.url = "http://www.marykay.com.mx";
}

if(args.id == "INSTAGRAM"){
	$.webview.url = "http://instagram.com/marykaydemexico";
}