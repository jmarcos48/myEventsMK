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
        backgroundColor: "#FBC9BA",
        barColor: "black",
        layout: "vertical"
    });
    $.__views.__alloyId44 = Ti.UI.createButton({
        backgroundImage: "/images/toolbar/leftNavButton.png",
        id: "__alloyId44"
    });
    $.__views.surveyWindow.leftNavButton = $.__views.__alloyId44;
    $.__views.webview = Ti.UI.createWebView({
        id: "webview"
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
    $.webview.url = 1 == Alloy.Globals.seminarID ? "http://www.surveygizmo.com/s3/1727051/Seminario-2014-Diamante-Esmeralda" : "http://www.surveygizmo.com/s3/1727068/Seminario-2014-Zafiro-Rubi";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;