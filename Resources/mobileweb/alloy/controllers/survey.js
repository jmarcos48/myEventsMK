function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "survey";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.surveyWindow = Ti.UI.createWindow({
        id: "surveyWindow",
        barColor: "black",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
        backgroundImage: "/images/background/heart_pattern_pink.png"
    });
    $.__views.webview = Ti.UI.createWebView({
        id: "webview",
        url: "http://www.surveygizmo.com/s3/1530459/CL2014-myEvents"
    });
    $.__views.surveyWindow.add($.__views.webview);
    $.__views.surveyTab = Ti.UI.createTab({
        window: $.__views.surveyWindow,
        id: "surveyTab",
        title: "Encuesta",
        tintColor: "#FBC9BA",
        backgroundColor: "black",
        icon: "images/toolbar/Bar-Chart.png"
    });
    $.__views.surveyTab && $.addTopLevelView($.__views.surveyTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    {
        Titanium.UI.createLabel({
            color: "#FBC9BA",
            text: "Encuesta",
            font: {
                fontWeight: "bold",
                fontSize: "16"
            }
        });
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;