function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "about";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.surveyWindow = Ti.UI.createWindow({
        id: "surveyWindow",
        barColor: "black",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
        backgroundImage: "/images/background/heart_pattern_pink.png",
        tintColor: "#FBC9BA",
        backButtonTitle: "Regresar",
        navTintColor: "#FBC9BA"
    });
    $.__views.surveyWindow && $.addTopLevelView($.__views.surveyWindow);
    $.__views.webview = Ti.UI.createWebView({
        id: "webview",
        url: "http://www.marykay.com.mx/Contact.aspx"
    });
    $.__views.surveyWindow.add($.__views.webview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;