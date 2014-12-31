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
    this.__controllerPath = "classdetail";
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
    $.__views.classDetailWindow = Ti.UI.createWindow({
        id: "classDetailWindow",
        title: "Detalle de Clase",
        backButtonTitle: "",
        layout: "vertical",
        backgroundColor: "#FBC9BA",
        barColor: "black",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
        backgroundImage: "/images/background/heart_pattern_pink.png"
    });
    $.__views.classDetailHeader = Ti.UI.createView({
        id: "classDetailHeader",
        layout: "horizontal",
        height: Titanium.UI.SIZE,
        backgroundColor: "white"
    });
    $.__views.classDetailWindow.add($.__views.classDetailHeader);
    $.__views.imageURL = Ti.UI.createImageView({
        id: "imageURL",
        image: "",
        width: "200px"
    });
    $.__views.classDetailHeader.add($.__views.imageURL);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Titanium.UI.SIZE,
        id: "sessionName",
        text: ""
    });
    $.__views.classDetailHeader.add($.__views.sessionName);
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
    $.__views.classDetailWindow.add($.__views.detail);
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
        text: "LUGAR Y FECHA",
        top: "15"
    });
    $.__views.classDetailWindow.add($.__views.title);
    $.__views.detail = Ti.UI.createView({
        id: "detail",
        backgroundColor: "white",
        width: "85%",
        borderColor: "black",
        borderRadius: "6",
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: "1"
    });
    $.__views.classDetailWindow.add($.__views.detail);
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
    $.__views.date = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 3,
        right: 3,
        id: "date",
        text: ""
    });
    $.__views.detail.add($.__views.date);
    $.__views.schedule = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 3,
        right: 3,
        id: "schedule",
        text: ""
    });
    $.__views.detail.add($.__views.schedule);
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.classDetailWindow,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.openMainWindow = function(_tab) {
        _tab.open($.classDetailWindow);
    };
    var titleLabel = Titanium.UI.createLabel({
        color: "#FBC9BA",
        text: "Detalle de Clases",
        font: {
            fontWeight: "bold",
            fontSize: "16"
        }
    });
    $.classDetailWindow.setTitleControl(titleLabel);
    Alloy.isTablet && ($.speaker1.height = 150);
    var args = arguments[0] || {};
    Alloy.Globals.veriftDataBase();
    var db = Titanium.Database.open("Events");
    var rows = db.execute("SELECT c.ClassID, c.ClassName, c.Description, c.ClassDate, c.ClassTime, c.Venue, c.ClassImageURL, s.SpeakerName, s.SpeakerPhotoURL, s.Title FROM Class c LEFT JOIN Rel_ClassSpeaker rs on c.ClassID = rs.ClassID LEFT JOIN Speaker s on s.SpeakerID = rs.SpeakerID where c.ClassID = " + args.id + ";");
    var results = [];
    while (rows.isValidRow()) {
        results.push({
            classID: rows.fieldByName("ClassID"),
            className: rows.fieldByName("ClassName"),
            classDescription: rows.fieldByName("Description"),
            classDate: rows.fieldByName("ClassDate"),
            classTime: rows.fieldByName("ClassTime"),
            classVenue: rows.fieldByName("Venue"),
            classImageURL: rows.fieldByName("ClassImageURL"),
            speakerName: rows.fieldByName("SpeakerName"),
            speakerTitle: rows.fieldByName("Title"),
            speakerPhoto: rows.fieldByName("SpeakerPhotoURL")
        });
        rows.next();
    }
    rows.close();
    db.close();
    if (results) {
        var item = results[0];
        $.imageURL.image = item.classImageURL;
        $.sessionName.text = item.className;
        $.description.text = item.classDescription;
        $.place.text = item.classVenue;
        $.date.text = item.classDate;
        $.schedule.text = item.classTime;
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;