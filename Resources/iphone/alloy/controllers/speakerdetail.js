function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "speakerdetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.speakerDetailWindow = Ti.UI.createWindow({
        id: "speakerDetailWindow",
        title: "Detalle de Maestra",
        backButtonTitle: "",
        layout: "vertical",
        backgroundColor: "#FBC9BA",
        barColor: "black",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
        backgroundImage: "/images/background/heart_pattern_pink.png"
    });
    $.__views.speakerDetailWindow && $.addTopLevelView($.__views.speakerDetailWindow);
    $.__views.sessionDetailHeader = Ti.UI.createView({
        id: "sessionDetailHeader",
        layout: "horizontal",
        height: Titanium.UI.SIZE,
        backgroundColor: "white"
    });
    $.__views.speakerDetailWindow.add($.__views.sessionDetailHeader);
    $.__views.imageURL = Ti.UI.createImageView({
        id: "imageURL",
        image: "",
        width: "200px"
    });
    $.__views.sessionDetailHeader.add($.__views.imageURL);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: Titanium.UI.SIZE,
        id: "sessionName",
        text: ""
    });
    $.__views.sessionDetailHeader.add($.__views.sessionName);
    $.__views.detail = Ti.UI.createView({
        id: "detail",
        backgroundColor: "white",
        width: "85%",
        borderColor: "black",
        borderRadius: "6",
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: "10"
    });
    $.__views.speakerDetailWindow.add($.__views.detail);
    $.__views.description = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 3,
        right: 3,
        id: "description",
        text: ""
    });
    $.__views.detail.add($.__views.description);
    $.__views.title = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "title",
        text: "Curriculum",
        top: "15"
    });
    $.__views.speakerDetailWindow.add($.__views.title);
    $.__views.detail = Ti.UI.createScrollView({
        id: "detail",
        backgroundColor: "white",
        width: "85%",
        borderColor: "black",
        borderRadius: "6",
        layout: "vertical",
        top: "1",
        scrollingEnabled: "true"
    });
    $.__views.speakerDetailWindow.add($.__views.detail);
    $.__views.place = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 3,
        right: 3,
        id: "place",
        text: ""
    });
    $.__views.detail.add($.__views.place);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.openMainWindow = function(_tab) {
        _tab.open($.speakerDetailWindow);
    };
    var titleLabel = Titanium.UI.createLabel({
        color: "#FBC9BA",
        text: "Detalle de Maestras",
        font: {
            fontWeight: "bold",
            fontSize: "16"
        }
    });
    $.speakerDetailWindow.setTitleControl(titleLabel);
    var args = arguments[0] || {};
    Alloy.Globals.veriftDataBase();
    var db = Titanium.Database.open("Events");
    var rows = db.execute("SELECT * FROM Speaker where SpeakerID = " + args.id + ";");
    var results = [];
    while (rows.isValidRow()) {
        results.push({
            speakerID: rows.fieldByName("SpeakerID"),
            speakerName: rows.fieldByName("SpeakerName"),
            speakerPhoto: rows.fieldByName("SpeakerPhotoURL"),
            title: rows.fieldByName("Title"),
            resume: rows.fieldByName("Resume")
        });
        rows.next();
    }
    rows.close();
    db.close();
    if (results) {
        var item = results[0];
        $.imageURL.image = item.speakerPhoto;
        $.sessionName.text = item.speakerName;
        $.description.text = item.title;
        $.place.text = item.resume;
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;