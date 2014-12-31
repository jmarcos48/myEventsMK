function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "awards";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.socialWindow = Ti.UI.createWindow({
        id: "socialWindow",
        backgroundColor: "#FBC9BA",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
        barColor: "black",
        layout: "vertical",
        backgroundImage: "/images/background/heart_pattern_pink.png"
    });
    $.__views.__alloyId1 = Ti.UI.createButton({
        backgroundImage: "/images/toolbar/leftNavButton.png",
        id: "__alloyId1"
    });
    $.__views.socialWindow.leftNavButton = $.__views.__alloyId1;
    $.__views.awardsTable = Ti.UI.createTableView({
        id: "awardsTable",
        borderRadius: "6",
        borderColor: "gray",
        width: "95%",
        top: "7",
        scrollable: "true"
    });
    $.__views.socialWindow.add($.__views.awardsTable);
    $.__views.AwardsTab = Ti.UI.createTab({
        window: $.__views.socialWindow,
        id: "AwardsTab",
        title: "Reconocimientos",
        tintColor: "#FBC9BA",
        backgroundColor: "black",
        icon: "images/toolbar/Award.png"
    });
    $.__views.AwardsTab && $.addTopLevelView($.__views.AwardsTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    {
        Titanium.UI.createLabel({
            color: "#FBC9BA",
            text: "Mis Reconocimientos",
            font: {
                fontWeight: "bold",
                fontSize: "16"
            }
        });
    }
    Alloy.Globals.veriftDataBase();
    var db = Titanium.Database.open("Events");
    var rows = db.execute("SELECT a.* FROM Award a JOIN Rel_UserAward ra where a.AwardID = ra.AwardID and ra.ConsultantID = '" + Alloy.Globals.loggedUser + "';");
    var results = [];
    while (rows.isValidRow()) {
        results.push({
            awardID: rows.fieldByName("AwardID"),
            awardName: rows.fieldByName("AwardName"),
            awardRules: rows.fieldByName("Rules"),
            awardImage: rows.fieldByName("AwardImageURL")
        });
        rows.next();
    }
    rows.close();
    itemRows = [];
    for (var c = 0; results.length > c; c++) {
        var item = results[c];
        var row = Ti.UI.createTableViewRow({
            height: "80",
            layout: "horizontal",
            id: item.awardID
        });
        var imagePhoto = Ti.UI.createImageView({
            image: item.awardImage,
            left: "5"
        });
        row.add(imagePhoto);
        var customView = Ti.UI.createView({
            id: "rowContainer",
            layout: "vertical",
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            width: Ti.UI.FILL
        });
        var awardLabel = Ti.UI.createLabel({
            id: "awardName",
            text: item.awardName,
            font: {
                fontSize: 12,
                fontWeight: "bold"
            },
            color: "black",
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            top: 20,
            left: 5
        });
        customView.add(awardLabel);
        var rulesLabel = Ti.UI.createLabel({
            id: "textInfo",
            text: item.awardRules,
            font: {
                fontSize: 10
            },
            color: "gray",
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            left: 5
        });
        customView.add(rulesLabel);
        row.add(customView);
        itemRows[c] = row;
    }
    $.awardsTable.data = itemRows;
    db.close();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;