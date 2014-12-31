function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sessionbackup";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.sessionWindow = Ti.UI.createWindow({
        id: "sessionWindow",
        layout: "vertical",
        backgroundColor: "#FBC9BA",
        barColor: "black",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK
    });
    $.__views.__alloyId24 = Ti.UI.createView({
        layout: "horizontal",
        height: "100px",
        backgroundColor: "white",
        id: "__alloyId24"
    });
    $.__views.sessionWindow.add($.__views.__alloyId24);
    $.__views.buttonDay01 = Ti.UI.createButton({
        id: "buttonDay01",
        backgroundImage: "/images/toolbars/sessions/day01_on.png",
        width: "33%",
        height: "100px"
    });
    $.__views.__alloyId24.add($.__views.buttonDay01);
    $.__views.buttonDay02 = Ti.UI.createButton({
        id: "buttonDay02",
        backgroundImage: "/images/toolbars/sessions/day02_off.png",
        width: "33%",
        height: "100px"
    });
    $.__views.__alloyId24.add($.__views.buttonDay02);
    $.__views.buttonDay03 = Ti.UI.createButton({
        id: "buttonDay03",
        backgroundImage: "/images/toolbars/sessions/day03_off.png",
        width: "33%",
        height: "100px"
    });
    $.__views.__alloyId24.add($.__views.buttonDay03);
    var __alloyId26 = [];
    $.__views.sessionday01 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "sessionday01",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId26.push($.__views.sessionday01);
    openSessionDetail ? $.__views.sessionday01.addEventListener("click", openSessionDetail) : __defers["$.__views.sessionday01!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/registration.png",
        width: "100px",
        left: "10"
    });
    $.__views.sessionday01.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        id: "rowContainer"
    });
    $.__views.sessionday01.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        id: "sessionName",
        text: "Registro"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        id: "textInfo",
        text: "Lobby de Forum, Mundo Imperial"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        id: "textInfo",
        text: "Miércoles 5 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        id: "textInfo",
        text: "16:00 hrs. a 19:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.sessionday01 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "sessionday01",
        dayid: "1"
    });
    __alloyId26.push($.__views.sessionday01);
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/directorsuite.png",
        width: "100px",
        left: "10"
    });
    $.__views.sessionday01.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        id: "rowContainer"
    });
    $.__views.sessionday01.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        id: "sessionName",
        text: "Prueba de Traje de Directora"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        id: "textInfo",
        text: "Pendiente definir el lugar"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        id: "textInfo",
        text: "Miércoles 5 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        id: "textInfo",
        text: "16:00 hrs. a 19:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.__alloyId25 = Ti.UI.createTableView({
        data: __alloyId26,
        filterAttribute: "dayid",
        height: Titanium.UI.SIZE,
        width: "95%",
        borderRadius: "6",
        borderColor: "gray",
        top: "7",
        id: "__alloyId25"
    });
    $.__views.sessionWindow.add($.__views.__alloyId25);
    $.__views.sessionDetailButton = Ti.UI.createButton({
        id: "sessionDetailButton",
        title: "Open Detail",
        bottom: "0"
    });
    $.__views.sessionWindow.add($.__views.sessionDetailButton);
    openSessionDetail ? $.__views.sessionDetailButton.addEventListener("click", openSessionDetail) : __defers["$.__views.sessionDetailButton!click!openSessionDetail"] = true;
    $.__views.SessionsTab = Ti.UI.createTab({
        window: $.__views.sessionWindow,
        id: "SessionsTab",
        title: "Programa",
        tintColor: "#FBC9BA",
        backgroundColor: "black",
        icon: "images/toolbar/Notepad.png"
    });
    $.__views.SessionsTab && $.addTopLevelView($.__views.SessionsTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.sessionday01!click!openSessionDetail"] && $.__views.sessionday01.addEventListener("click", openSessionDetail);
    __defers["$.__views.sessionDetailButton!click!openSessionDetail"] && $.__views.sessionDetailButton.addEventListener("click", openSessionDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;