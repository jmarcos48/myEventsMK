function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId4 = [];
    $.__views.__alloyId5 = Alloy.createController("sessions", {
        id: "__alloyId5"
    });
    __alloyId4.push($.__views.__alloyId5.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId6 = Alloy.createController("classes", {
        id: "__alloyId6"
    });
    __alloyId4.push($.__views.__alloyId6.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId7 = Alloy.createController("awards", {
        id: "__alloyId7"
    });
    __alloyId4.push($.__views.__alloyId7.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId8 = Alloy.createController("speakers", {
        id: "__alloyId8"
    });
    __alloyId4.push($.__views.__alloyId8.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId9 = Alloy.createController("social", {
        id: "__alloyId9"
    });
    __alloyId4.push($.__views.__alloyId9.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId10 = Alloy.createController("survey", {
        id: "__alloyId10"
    });
    __alloyId4.push($.__views.__alloyId10.getViewEx({
        recurse: true
    }));
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId4,
        tabsBackgroundColor: "black",
        activeTabIconTint: "#FBC9BA",
        tabsTintColor: "#FBC9BA",
        tintColor: "#FBC9BA",
        barColor: "black",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var seminar = "";
    seminar = 1 == Alloy.Globals.seminarID ? "DE" : "ZR";
    if (!Alloy.Globals.isLogged) {
        var loginView = Alloy.createController("login").getView();
        loginView.open();
    }
    exports.openIndex = function() {
        $.index.open();
    };
    Ti.include("Urban.js");
    UrbanAirship.key = "GkdW4Uu_TyKAFxvmTfNtDg";
    UrbanAirship.secret = "J5UJZkawTZWOWrU1wX7G4g";
    UrbanAirship.master_secret = "QDH0oZWDSb-0BeYOiNDiPA";
    UrbanAirship.baseurl = "https://go.urbanairship.com";
    Ti.Network.registerForPushNotifications({
        types: [ Ti.Network.NOTIFICATION_TYPE_BADGE, Ti.Network.NOTIFICATION_TYPE_ALERT, Ti.Network.NOTIFICATION_TYPE_SOUND ],
        success: function(e) {
            e.deviceToken;
            Ti.API.info("successfully registered for apple device token with " + e.deviceToken);
            var params = {
                tags: [ "MX", "SEM2014", seminar ],
                alias: Alloy.Globals.loggedUser
            };
            UrbanAirship.register(params, function(data) {
                Ti.API.debug("registerUrban success: " + JSON.stringify(data));
            }, function() {
                Ti.API.warn("Couldn't register for Urban Airship");
            });
        },
        error: function(e) {
            Ti.API.warn("push notifications disabled: " + e);
        },
        callback: function(e) {
            var a = Ti.UI.createAlertDialog({
                title: "Nuevo mensaje",
                message: e.data.alert
            });
            a.show();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;