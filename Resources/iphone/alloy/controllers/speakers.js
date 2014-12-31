function Controller() {
    function openSpeakerDetail() {
        var args = {
            id: this.id
        };
        var speakerDetail = Alloy.createController("speakerdetail", args);
        speakerDetail.openMainWindow($.SpeakersTab);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "speakers";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.speakersWindow = Ti.UI.createWindow({
        id: "speakersWindow",
        barColor: "black",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
        backgroundImage: "/images/background/heart_pattern_pink.png"
    });
    $.__views.__alloyId46 = Ti.UI.createButton({
        backgroundImage: "/images/toolbar/leftNavButton.png",
        id: "__alloyId46"
    });
    $.__views.speakersWindow.leftNavButton = $.__views.__alloyId46;
    $.__views.speakersTable = Ti.UI.createTableView({
        id: "speakersTable",
        height: Titanium.UI.SIZE,
        width: "95%",
        borderRadius: "6",
        borderColor: "gray",
        top: "7"
    });
    $.__views.speakersWindow.add($.__views.speakersTable);
    $.__views.SpeakersTab = Ti.UI.createTab({
        window: $.__views.speakersWindow,
        id: "SpeakersTab",
        title: "Maestras",
        tintColor: "#FBC9BA",
        backgroundColor: "black",
        icon: "images/toolbar/Follow.png"
    });
    $.__views.SpeakersTab && $.addTopLevelView($.__views.SpeakersTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var titleLabel = Titanium.UI.createLabel({
        color: "#FBC9BA",
        text: "Maestras",
        font: {
            fontWeight: "bold",
            fontSize: "16"
        }
    });
    $.speakersWindow.setTitleControl(titleLabel);
    Alloy.Globals.veriftDataBase();
    var db = Titanium.Database.open("Events");
    var rows = db.execute("SELECT * FROM Speaker where EventID = " + Alloy.Globals.seminarID + ' and Resume <> "";');
    var results = [];
    while (rows.isValidRow()) {
        results.push({
            speakerID: rows.fieldByName("SpeakerID"),
            speakerName: rows.fieldByName("SpeakerName"),
            speakerPhoto: rows.fieldByName("SpeakerPhotoURL"),
            title: rows.fieldByName("Title")
        });
        rows.next();
    }
    rows.close();
    itemRows = [];
    for (var c = 0; results.length > c; c++) {
        var item = results[c];
        var row = Ti.UI.createTableViewRow({
            height: "90",
            layout: "horizontal",
            id: item.speakerID,
            hasChild: true
        });
        row.addEventListener("click", openSpeakerDetail);
        var imagePhoto = Ti.UI.createImageView({
            image: item.speakerPhoto,
            width: "100px",
            left: "10"
        });
        row.add(imagePhoto);
        var customView = Ti.UI.createView({
            id: "rowContainer",
            layout: "vertical",
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            width: Ti.UI.FILL
        });
        var speakerLabel = Ti.UI.createLabel({
            id: "sessionName",
            text: item.speakerName,
            font: {
                fontSize: 14,
                fontWeight: "bold"
            },
            color: "black",
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            top: 20,
            left: 5
        });
        customView.add(speakerLabel);
        var titleLabel = Ti.UI.createLabel({
            id: "textInfo",
            text: item.title,
            font: {
                fontSize: 11
            },
            color: "gray",
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            left: 5
        });
        customView.add(titleLabel);
        row.add(customView);
        itemRows[c] = row;
    }
    $.speakersTable.data = itemRows;
    db.close();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;