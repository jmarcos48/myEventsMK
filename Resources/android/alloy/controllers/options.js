function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "options";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.optionsWindow = Ti.UI.createWindow({
        id: "optionsWindow",
        backgroundColor: "#FBC9BA",
        layout: "vertical",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK
    });
    var __alloyId12 = [];
    $.__views.socialnetworksTable = Ti.UI.createTableViewSection({
        id: "socialnetworksTable"
    });
    __alloyId12.push($.__views.socialnetworksTable);
    $.__views.TWITTER = Ti.UI.createTableViewRow({
        layout: "horizontal",
        hasChild: "true",
        id: "TWITTER"
    });
    $.__views.socialnetworksTable.add($.__views.TWITTER);
    $.__views.__alloyId13 = Ti.UI.createImageView({
        image: "/images/toolbal/Cloud.png",
        width: "20",
        height: "20",
        left: "5",
        top: "5",
        bottom: "5",
        right: "5",
        id: "__alloyId13"
    });
    $.__views.TWITTER.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        text: "Redes Sociales",
        id: "__alloyId14"
    });
    $.__views.TWITTER.add($.__views.__alloyId14);
    $.__views.TWITTER = Ti.UI.createTableViewRow({
        layout: "horizontal",
        hasChild: "true",
        id: "TWITTER"
    });
    $.__views.socialnetworksTable.add($.__views.TWITTER);
    $.__views.__alloyId15 = Ti.UI.createImageView({
        image: "/images/toolbal/Invitation.png",
        width: "20",
        height: "20",
        left: "5",
        top: "5",
        bottom: "5",
        right: "5",
        id: "__alloyId15"
    });
    $.__views.TWITTER.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        text: "Inbox",
        id: "__alloyId16"
    });
    $.__views.TWITTER.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        hasChild: "true",
        id: "__alloyId17"
    });
    $.__views.socialnetworksTable.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createImageView({
        image: "/images/toolbar/Settings.png",
        width: "20",
        height: "20",
        left: "5",
        top: "5",
        bottom: "5",
        right: "5",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        text: "Ajustes",
        id: "__alloyId19"
    });
    $.__views.__alloyId17.add($.__views.__alloyId19);
    $.__views.optionsTable = Ti.UI.createTableView({
        data: __alloyId12,
        id: "optionsTable",
        borderRadius: "6",
        height: Titanium.UI.SIZE,
        borderColor: "gray",
        width: "85%",
        top: "7"
    });
    $.__views.optionsWindow.add($.__views.optionsTable);
    $.__views.OptionsTab = Ti.UI.createTab({
        window: $.__views.optionsWindow,
        id: "OptionsTab",
        title: "Más opciones",
        tintColor: "#FBC9BA",
        backgroundColor: "black",
        icon: "images/toolbar/Bar-Chart.png",
        badge: "3"
    });
    $.__views.OptionsTab && $.addTopLevelView($.__views.OptionsTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    {
        Titanium.UI.createLabel({
            color: "#FBC9BA",
            text: "Más Opciones",
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