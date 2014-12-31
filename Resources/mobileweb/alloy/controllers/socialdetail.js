function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "socialdetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.socialDetailWindow = Ti.UI.createWindow({
        id: "socialDetailWindow",
        title: "Redes Sociales",
        backButtonTitle: "Regresar",
        layout: "vertical",
        backgroundColor: "#FBC9BA",
        barColor: "black",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK
    });
    $.__views.socialDetailWindow && $.addTopLevelView($.__views.socialDetailWindow);
    $.__views.webview = Ti.UI.createWebView({
        id: "webview"
    });
    $.__views.socialDetailWindow.add($.__views.webview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.openSocialDetailWindow = function(_tab) {
        _tab.open($.socialDetailWindow);
    };
    var args = arguments[0] || {};
    "FACEBOOK" == args.id && ($.webview.url = "https://www.facebook.com/marykaydemexico");
    "TWITTER" == args.id && ($.webview.url = "https://twitter.com/marykaydemexico");
    "YOUTUBE" == args.id && ($.webview.url = "http://www.youtube.com/marykaydemexico");
    "CORPORATE" == args.id && ($.webview.url = "http://www.marykay.com.mx");
    "INSTAGRAM" == args.id && ($.webview.url = "http://instagram.com/marykaydemexico");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;