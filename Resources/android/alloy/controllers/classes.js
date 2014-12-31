function Controller() {
    function openClassDetail() {
        var args = {
            id: this.id
        };
        var sessionDetail = Alloy.createController("classdetail", args);
        sessionDetail.openMainWindow($.ClassesTab);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "classes";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.classWindow = Ti.UI.createWindow({
        id: "classWindow",
        layout: "vertical",
        backgroundColor: "#FBC9BA",
        barColor: "black",
        backgroundImage: "/images/background/heart_pattern_pink.png"
    });
    $.__views.__alloyId3 = Ti.UI.createButton({
        backgroundImage: "/images/toolbar/leftNavButton.png",
        id: "__alloyId3"
    });
    $.__views.classWindow.leftNavButton = $.__views.__alloyId3;
    $.__views.classTable = Ti.UI.createTableView({
        id: "classTable",
        height: Titanium.UI.SIZE,
        width: "95%",
        borderRadius: "6",
        borderColor: "gray",
        top: "7",
        backgroundColor: "white"
    });
    $.__views.classWindow.add($.__views.classTable);
    $.__views.ClassesTab = Ti.UI.createTab({
        window: $.__views.classWindow,
        id: "ClassesTab",
        title: "Clases",
        tintColor: "#FBC9BA",
        backgroundColor: "black",
        icon: "images/toolbar/Pen.png"
    });
    $.__views.ClassesTab && $.addTopLevelView($.__views.ClassesTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    {
        Titanium.UI.createLabel({
            color: "#FBC9BA",
            text: "Mis Clases",
            font: {
                fontWeight: "bold",
                fontSize: "16"
            }
        });
    }
    Alloy.Globals.veriftDataBase();
    var db = Titanium.Database.open("Events");
    var rows = db.execute("SELECT * FROM Class c LEFT JOIN Rel_UserClass r where c.GroupID = r.GroupID and r.ConsultantID = '" + Alloy.Globals.loggedUser + "' and c.EventID = " + Alloy.Globals.seminarID);
    var results = [];
    while (rows.isValidRow()) {
        results.push({
            classID: rows.fieldByName("ClassID"),
            className: rows.fieldByName("ClassName"),
            classDate: rows.fieldByName("ClassDate"),
            classTime: rows.fieldByName("ClassTime"),
            classVenue: rows.fieldByName("Venue"),
            classImageURL: rows.fieldByName("ClassImageURL")
        });
        rows.next();
    }
    rows.close();
    itemRows = [];
    for (var c = 0; results.length > c; c++) {
        var item = results[c];
        var row = Ti.UI.createTableViewRow({
            height: "150",
            layout: "horizontal",
            id: item.classID,
            hasChild: true
        });
        row.addEventListener("click", openClassDetail);
        var imagePhoto = Ti.UI.createImageView({
            image: item.classImageURL,
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
        var classNameLabel = Ti.UI.createLabel({
            id: "sessionName",
            text: item.className,
            font: {
                fontSize: 14,
                fontWeight: "bold"
            },
            color: "black",
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            top: 10,
            left: 5
        });
        customView.add(classNameLabel);
        var venueLabel = Ti.UI.createLabel({
            id: "textInfo",
            text: item.classVenue,
            font: {
                fontSize: 11
            },
            color: "gray",
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            left: 5
        });
        customView.add(venueLabel);
        var classDate = Ti.UI.createLabel({
            id: "textInfo",
            text: item.classDate,
            font: {
                fontSize: 11
            },
            color: "gray",
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            left: 5
        });
        customView.add(classDate);
        var classTime = Ti.UI.createLabel({
            id: "textInfo",
            text: item.classTime,
            font: {
                fontSize: 11
            },
            color: "gray",
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            left: 5
        });
        customView.add(classTime);
        row.add(customView);
        itemRows[c] = row;
    }
    $.classTable.data = itemRows;
    db.close();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;