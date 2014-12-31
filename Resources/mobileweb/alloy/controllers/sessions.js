function Controller() {
    function openSessionDetail() {
        var args = {
            id: this.id
        };
        var sessionDetail = Alloy.createController("sessiondetail", args);
        sessionDetail.openMainWindow($.SessionsTab);
    }
    function day01() {
        $.buttonDay01.backgroundImage = "/images/filters/day01-on.png";
        $.buttonDay02.backgroundImage = "/images/filters/day02-off.png";
        $.buttonDay03.backgroundImage = "/images/filters/day03-off.png";
        $.day1.visible = "true";
        $.day2.visible = "false";
        $.day3.visible = "false";
    }
    function day02() {
        $.buttonDay01.backgroundImage = "/images/filters/day01-off.png";
        $.buttonDay02.backgroundImage = "/images/filters/day02-on.png";
        $.buttonDay03.backgroundImage = "/images/filters/day03-off.png";
        $.day1.visible = "false";
        $.day2.visible = "true";
        $.day3.visible = "false";
    }
    function day03() {
        $.buttonDay01.backgroundImage = "/images/filters/day01-off.png";
        $.buttonDay02.backgroundImage = "/images/filters/day02-off.png";
        $.buttonDay03.backgroundImage = "/images/filters/day03-on.png";
        $.day1.visible = "false";
        $.day2.visible = "false";
        $.day3.visible = "true";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sessions";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.sessionWindow = Ti.UI.createWindow({
        id: "sessionWindow",
        backgroundColor: "#FBC9BA",
        barColor: "black",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
        backgroundImage: "/images/background/heart_pattern_pink.png"
    });
    $.__views.__alloyId28 = Ti.UI.createButton({
        backgroundImage: "/images/toolbar/leftNavButton.png",
        id: "__alloyId28"
    });
    $.__views.sessionWindow.leftNavButton = $.__views.__alloyId28;
    $.__views.__alloyId29 = Ti.UI.createView({
        layout: "horizontal",
        height: "100px",
        backgroundColor: "gray",
        top: "0",
        id: "__alloyId29"
    });
    $.__views.sessionWindow.add($.__views.__alloyId29);
    $.__views.buttonDay01 = Ti.UI.createButton({
        id: "buttonDay01",
        backgroundImage: "/images/filters/day01-on.png",
        width: "33%",
        height: "100px"
    });
    $.__views.__alloyId29.add($.__views.buttonDay01);
    day01 ? $.__views.buttonDay01.addEventListener("click", day01) : __defers["$.__views.buttonDay01!click!day01"] = true;
    $.__views.buttonDay02 = Ti.UI.createButton({
        id: "buttonDay02",
        backgroundImage: "/images/filters/day02-off.png",
        width: "33%",
        height: "100px"
    });
    $.__views.__alloyId29.add($.__views.buttonDay02);
    day02 ? $.__views.buttonDay02.addEventListener("click", day02) : __defers["$.__views.buttonDay02!click!day02"] = true;
    $.__views.buttonDay03 = Ti.UI.createButton({
        id: "buttonDay03",
        backgroundImage: "/images/filters/day03-off.png",
        width: "33%",
        height: "100px"
    });
    $.__views.__alloyId29.add($.__views.buttonDay03);
    day03 ? $.__views.buttonDay03.addEventListener("click", day03) : __defers["$.__views.buttonDay03!click!day03"] = true;
    var __alloyId30 = [];
    $.__views.session1 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session1",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId30.push($.__views.session1);
    openSessionDetail ? $.__views.session1.addEventListener("click", openSessionDetail) : __defers["$.__views.session1!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
        width: "100px",
        left: "10"
    });
    $.__views.session1.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session1.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Traslado: Hoteles sede - recinto y viceversa"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Lobby del hotal"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Miércoles 5 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "A partir de las 12:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session2 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session2",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId30.push($.__views.session2);
    openSessionDetail ? $.__views.session2.addEventListener("click", openSessionDetail) : __defers["$.__views.session2!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/registration.png",
        width: "100px",
        left: "10"
    });
    $.__views.session2.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session2.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Registro"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Lobby de Forum, Mundo Imperial"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Miércoles 5 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "12:00 hrs. a 19:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session3 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session3",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId30.push($.__views.session3);
    openSessionDetail ? $.__views.session3.addEventListener("click", openSessionDetail) : __defers["$.__views.session3!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/directorsuite.png",
        width: "100px",
        left: "10"
    });
    $.__views.session3.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session3.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Prueba de Traje de Directora"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Salón B10 y B11"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Miércoles 5 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "12:00 hrs. a 19:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session4 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session4",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId30.push($.__views.session4);
    openSessionDetail ? $.__views.session4.addEventListener("click", openSessionDetail) : __defers["$.__views.session4!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
        width: "100px",
        left: "10"
    });
    $.__views.session4.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session4.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Traslado: recinto a hoteles sede"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Promenade"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Miércoles 5 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "19:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.day1 = Ti.UI.createTableView({
        data: __alloyId30,
        top: "50",
        id: "day1",
        height: Titanium.UI.SIZE,
        width: "95%",
        borderRadius: "6",
        borderColor: "gray",
        visible: "true"
    });
    $.__views.sessionWindow.add($.__views.day1);
    var __alloyId31 = [];
    $.__views.session5 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session5",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId31.push($.__views.session5);
    openSessionDetail ? $.__views.session5.addEventListener("click", openSessionDetail) : __defers["$.__views.session5!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
        width: "100px",
        left: "10"
    });
    $.__views.session5.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session5.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Traslado: Hoteles sede - recinto y viceversa"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Lobby del hotal"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Jueves 6 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "07:45 hrs. a 10:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session6 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session6",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId31.push($.__views.session6);
    openSessionDetail ? $.__views.session6.addEventListener("click", openSessionDetail) : __defers["$.__views.session6!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/registration.png",
        width: "100px",
        left: "10"
    });
    $.__views.session6.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session6.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Registro"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Lobby de Forum, Mundo Imperial"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Jueves 6 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "08:00 hrs. a 14:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session7 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session7",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId31.push($.__views.session7);
    openSessionDetail ? $.__views.session7.addEventListener("click", openSessionDetail) : __defers["$.__views.session7!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/directorsuite.png",
        width: "100px",
        left: "10"
    });
    $.__views.session7.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session7.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Prueba de Traje de Directora"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Salón B10 y B11"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Jueves 6 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "08:00 hrs. a 09:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session8 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session8",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId31.push($.__views.session8);
    openSessionDetail ? $.__views.session8.addEventListener("click", openSessionDetail) : __defers["$.__views.session8!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/generalsession.png",
        width: "100px",
        left: "10"
    });
    $.__views.session8.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session8.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Asamblea de Apertura"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Forum"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Jueves 6 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "09:00 hrs. a 14:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session9 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session9",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId31.push($.__views.session9);
    openSessionDetail ? $.__views.session9.addEventListener("click", openSessionDetail) : __defers["$.__views.session9!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/directorsuite.png",
        width: "100px",
        left: "10"
    });
    $.__views.session9.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session9.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Prueba de Traje de Directora"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Salón B10 y B11"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Jueves 6 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "11:40 hrs. a 12:10 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session10 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session10",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId31.push($.__views.session10);
    openSessionDetail ? $.__views.session10.addEventListener("click", openSessionDetail) : __defers["$.__views.session10!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/lunch.png",
        width: "100px",
        left: "10"
    });
    $.__views.session10.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session10.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Comida General"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Expo 1"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Jueves 6 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "14:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session11 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session11",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId31.push($.__views.session11);
    openSessionDetail ? $.__views.session11.addEventListener("click", openSessionDetail) : __defers["$.__views.session11!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/awards/specialpromo_lunch.png",
        width: "100px",
        left: "10"
    });
    $.__views.session11.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session11.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Comida Especial"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Salón 5A y 5B"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Jueves 6 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "14:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session12 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session12",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId31.push($.__views.session12);
    openSessionDetail ? $.__views.session12.addEventListener("click", openSessionDetail) : __defers["$.__views.session12!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/directorsuite.png",
        width: "100px",
        left: "10"
    });
    $.__views.session12.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session12.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Prueba de Traje de Directora"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Salón B10 y B11"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Jueves 6 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "14:40 hrs. a 15:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session13 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session13",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId31.push($.__views.session13);
    openSessionDetail ? $.__views.session13.addEventListener("click", openSessionDetail) : __defers["$.__views.session13!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/generalsession.png",
        width: "100px",
        left: "10"
    });
    $.__views.session13.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session13.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Asamblea General"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Forum"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Jueves 6 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "15:30 hrs. a 17:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session14 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session14",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId31.push($.__views.session14);
    openSessionDetail ? $.__views.session14.addEventListener("click", openSessionDetail) : __defers["$.__views.session14!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/directorsuite.png",
        width: "100px",
        left: "10"
    });
    $.__views.session14.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session14.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Prueba de Traje de Directora"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Salón B10 y B11"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Jueves 6 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "17:00 hrs. a 21:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session15 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session15",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId31.push($.__views.session15);
    openSessionDetail ? $.__views.session15.addEventListener("click", openSessionDetail) : __defers["$.__views.session15!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
        width: "100px",
        left: "10"
    });
    $.__views.session15.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session15.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Traslado: recinto a hoteles sede"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Promenade"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Jueves 6 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "17:30 hrs. a 21:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session16 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session16",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId31.push($.__views.session16);
    openSessionDetail ? $.__views.session16.addEventListener("click", openSessionDetail) : __defers["$.__views.session16!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/awards/specialpromo_class.png",
        width: "100px",
        left: "10"
    });
    $.__views.session16.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session16.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Clase especial con Dayana Polanco"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Forum"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Jueves 6 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "17:30 hrs. a 18:10 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session17 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session17",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId31.push($.__views.session17);
    openSessionDetail ? $.__views.session17.addEventListener("click", openSessionDetail) : __defers["$.__views.session17!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
        width: "100px",
        left: "10"
    });
    $.__views.session17.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session17.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Traslado: hoteles sede a recinto"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Lobby del hotel sede"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Jueves 6 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "19:30 hrs. a 20:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session18 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session18",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId31.push($.__views.session18);
    openSessionDetail ? $.__views.session18.addEventListener("click", openSessionDetail) : __defers["$.__views.session18!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/awards/specialpromo_party.png",
        width: "100px",
        left: "10"
    });
    $.__views.session18.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session18.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Fiesta de los 70's"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Promenade"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Jueves 6 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "20:00 hrs. a 22:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session19 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session19",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId31.push($.__views.session19);
    openSessionDetail ? $.__views.session19.addEventListener("click", openSessionDetail) : __defers["$.__views.session19!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
        width: "100px",
        left: "10"
    });
    $.__views.session19.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session19.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Traslado de recinto a hoteles sede"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Promenade"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Jueves 6 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "21:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.day2 = Ti.UI.createTableView({
        data: __alloyId31,
        id: "day2",
        height: Titanium.UI.SIZE,
        width: "95%",
        borderRadius: "6",
        borderColor: "gray",
        visible: "false",
        top: "50"
    });
    $.__views.sessionWindow.add($.__views.day2);
    var __alloyId32 = [];
    $.__views.session20 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session20",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId32.push($.__views.session20);
    openSessionDetail ? $.__views.session20.addEventListener("click", openSessionDetail) : __defers["$.__views.session20!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
        width: "100px",
        left: "10"
    });
    $.__views.session20.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session20.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Trasportación de hoteles sede a recinto"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Lobby del hotel"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Viernes 7 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "07:15 hrs. a 09:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session21 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session21",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId32.push($.__views.session21);
    openSessionDetail ? $.__views.session21.addEventListener("click", openSessionDetail) : __defers["$.__views.session21!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/lunch.png",
        width: "100px",
        left: "10"
    });
    $.__views.session21.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session21.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Desayuno General"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Expo 1"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Viernes 7 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "07:30 hrs. a 08:50 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session22 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session22",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId32.push($.__views.session22);
    openSessionDetail ? $.__views.session22.addEventListener("click", openSessionDetail) : __defers["$.__views.session22!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/awards/specialpromo_breakfast.png",
        width: "100px",
        left: "10"
    });
    $.__views.session22.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session22.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Desayuno Especial"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Salón A5A, A5B"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Viernes 7 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "07:30 hrs. a 08:50 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session23 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session23",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId32.push($.__views.session23);
    openSessionDetail ? $.__views.session23.addEventListener("click", openSessionDetail) : __defers["$.__views.session23!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/directorsuite.png",
        width: "100px",
        left: "10"
    });
    $.__views.session23.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session23.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Prueba de Traje de Directora"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Salón B10 y B11"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Viernes 7 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "07:30 hrs. a 09:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session24 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session24",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId32.push($.__views.session24);
    openSessionDetail ? $.__views.session24.addEventListener("click", openSessionDetail) : __defers["$.__views.session24!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/class.png",
        width: "100px",
        left: "10"
    });
    $.__views.session24.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session24.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Primera Clase"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Centro de Convenciones"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Viernes 7 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "09:00 hrs. a 09:45 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session25 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session25",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId32.push($.__views.session25);
    openSessionDetail ? $.__views.session25.addEventListener("click", openSessionDetail) : __defers["$.__views.session25!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/class.png",
        width: "100px",
        left: "10"
    });
    $.__views.session25.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session25.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Segunda Clase"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Centro de Convenciones"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Viernes 7 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "09:45 hrs. a 10:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session26 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session26",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId32.push($.__views.session26);
    openSessionDetail ? $.__views.session26.addEventListener("click", openSessionDetail) : __defers["$.__views.session26!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/directorsuite.png",
        width: "100px",
        left: "10"
    });
    $.__views.session26.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session26.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Prueba de Traje de Directora"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Salón B10 y B11"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Viernes 7 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "10:30 hrs. a 11:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session27 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session27",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId32.push($.__views.session27);
    openSessionDetail ? $.__views.session27.addEventListener("click", openSessionDetail) : __defers["$.__views.session27!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/generalsession.png",
        width: "100px",
        left: "10"
    });
    $.__views.session27.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session27.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Asamblea de Clausura"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Forum"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Viernes 7 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "11:00 hrs. a 13:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session28 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session28",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId32.push($.__views.session28);
    openSessionDetail ? $.__views.session28.addEventListener("click", openSessionDetail) : __defers["$.__views.session28!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
        width: "100px",
        left: "10"
    });
    $.__views.session28.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session28.add($.__views.rowContainer);
    $.__views.sessionName = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 20,
        left: 5,
        id: "sessionName",
        text: "Traslado: recinto a hoteles sede"
    });
    $.__views.rowContainer.add($.__views.sessionName);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Promenade"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "Viernes 7 de Febrero"
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.textInfo = Ti.UI.createLabel({
        font: {
            fontSize: 11
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        id: "textInfo",
        text: "13:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.day3 = Ti.UI.createTableView({
        data: __alloyId32,
        id: "day3",
        height: Titanium.UI.SIZE,
        width: "95%",
        borderRadius: "6",
        borderColor: "gray",
        visible: "false",
        top: "50"
    });
    $.__views.sessionWindow.add($.__views.day3);
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
    {
        Titanium.UI.createLabel({
            color: "#FBC9BA",
            text: "Liderazgo 2014",
            font: {
                fontWeight: "bold",
                fontSize: "16"
            }
        });
    }
    if (Alloy.isTablet) {
        $.day1.top = 100;
        $.day2.top = 100;
        $.day3.top = 100;
    }
    __defers["$.__views.buttonDay01!click!day01"] && $.__views.buttonDay01.addEventListener("click", day01);
    __defers["$.__views.buttonDay02!click!day02"] && $.__views.buttonDay02.addEventListener("click", day02);
    __defers["$.__views.buttonDay03!click!day03"] && $.__views.buttonDay03.addEventListener("click", day03);
    __defers["$.__views.session1!click!openSessionDetail"] && $.__views.session1.addEventListener("click", openSessionDetail);
    __defers["$.__views.session2!click!openSessionDetail"] && $.__views.session2.addEventListener("click", openSessionDetail);
    __defers["$.__views.session3!click!openSessionDetail"] && $.__views.session3.addEventListener("click", openSessionDetail);
    __defers["$.__views.session4!click!openSessionDetail"] && $.__views.session4.addEventListener("click", openSessionDetail);
    __defers["$.__views.session5!click!openSessionDetail"] && $.__views.session5.addEventListener("click", openSessionDetail);
    __defers["$.__views.session6!click!openSessionDetail"] && $.__views.session6.addEventListener("click", openSessionDetail);
    __defers["$.__views.session7!click!openSessionDetail"] && $.__views.session7.addEventListener("click", openSessionDetail);
    __defers["$.__views.session8!click!openSessionDetail"] && $.__views.session8.addEventListener("click", openSessionDetail);
    __defers["$.__views.session9!click!openSessionDetail"] && $.__views.session9.addEventListener("click", openSessionDetail);
    __defers["$.__views.session10!click!openSessionDetail"] && $.__views.session10.addEventListener("click", openSessionDetail);
    __defers["$.__views.session11!click!openSessionDetail"] && $.__views.session11.addEventListener("click", openSessionDetail);
    __defers["$.__views.session12!click!openSessionDetail"] && $.__views.session12.addEventListener("click", openSessionDetail);
    __defers["$.__views.session13!click!openSessionDetail"] && $.__views.session13.addEventListener("click", openSessionDetail);
    __defers["$.__views.session14!click!openSessionDetail"] && $.__views.session14.addEventListener("click", openSessionDetail);
    __defers["$.__views.session15!click!openSessionDetail"] && $.__views.session15.addEventListener("click", openSessionDetail);
    __defers["$.__views.session16!click!openSessionDetail"] && $.__views.session16.addEventListener("click", openSessionDetail);
    __defers["$.__views.session17!click!openSessionDetail"] && $.__views.session17.addEventListener("click", openSessionDetail);
    __defers["$.__views.session18!click!openSessionDetail"] && $.__views.session18.addEventListener("click", openSessionDetail);
    __defers["$.__views.session19!click!openSessionDetail"] && $.__views.session19.addEventListener("click", openSessionDetail);
    __defers["$.__views.session20!click!openSessionDetail"] && $.__views.session20.addEventListener("click", openSessionDetail);
    __defers["$.__views.session21!click!openSessionDetail"] && $.__views.session21.addEventListener("click", openSessionDetail);
    __defers["$.__views.session22!click!openSessionDetail"] && $.__views.session22.addEventListener("click", openSessionDetail);
    __defers["$.__views.session23!click!openSessionDetail"] && $.__views.session23.addEventListener("click", openSessionDetail);
    __defers["$.__views.session24!click!openSessionDetail"] && $.__views.session24.addEventListener("click", openSessionDetail);
    __defers["$.__views.session25!click!openSessionDetail"] && $.__views.session25.addEventListener("click", openSessionDetail);
    __defers["$.__views.session26!click!openSessionDetail"] && $.__views.session26.addEventListener("click", openSessionDetail);
    __defers["$.__views.session27!click!openSessionDetail"] && $.__views.session27.addEventListener("click", openSessionDetail);
    __defers["$.__views.session28!click!openSessionDetail"] && $.__views.session28.addEventListener("click", openSessionDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;