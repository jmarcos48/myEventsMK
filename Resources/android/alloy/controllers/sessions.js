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
    function day04() {
        $.buttonDay04.backgroundImage = "/images/filters/day04-on.png";
        $.buttonDay05.backgroundImage = "/images/filters/day05-off.png";
        $.buttonDay06.backgroundImage = "/images/filters/day06-off.png";
        $.day4.visible = "true";
        $.day5.visible = "false";
        $.day6.visible = "false";
    }
    function day05() {
        $.buttonDay04.backgroundImage = "/images/filters/day04-off.png";
        $.buttonDay05.backgroundImage = "/images/filters/day05-on.png";
        $.buttonDay06.backgroundImage = "/images/filters/day06-off.png";
        $.day4.visible = "false";
        $.day5.visible = "true";
        $.day6.visible = "false";
    }
    function day06() {
        $.buttonDay04.backgroundImage = "/images/filters/day04-off.png";
        $.buttonDay05.backgroundImage = "/images/filters/day05-off.png";
        $.buttonDay06.backgroundImage = "/images/filters/day06-on.png";
        $.day4.visible = "false";
        $.day5.visible = "false";
        $.day6.visible = "true";
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
        backgroundImage: "/images/background/heart_pattern_pink.png"
    });
    $.__views.__alloyId21 = Ti.UI.createButton({
        backgroundImage: "/images/toolbar/leftNavButton.png",
        id: "__alloyId21"
    });
    $.__views.sessionWindow.leftNavButton = $.__views.__alloyId21;
    $.__views.event01Filters = Ti.UI.createView({
        id: "event01Filters",
        layout: "horizontal",
        height: "100px",
        backgroundColor: "gray",
        top: "0",
        visible: "true"
    });
    $.__views.sessionWindow.add($.__views.event01Filters);
    $.__views.buttonDay01 = Ti.UI.createButton({
        id: "buttonDay01",
        backgroundImage: "/images/filters/day01-on.png",
        width: "33%",
        height: "100px"
    });
    $.__views.event01Filters.add($.__views.buttonDay01);
    day01 ? $.__views.buttonDay01.addEventListener("click", day01) : __defers["$.__views.buttonDay01!click!day01"] = true;
    $.__views.buttonDay02 = Ti.UI.createButton({
        id: "buttonDay02",
        backgroundImage: "/images/filters/day02-off.png",
        width: "33%",
        height: "100px"
    });
    $.__views.event01Filters.add($.__views.buttonDay02);
    day02 ? $.__views.buttonDay02.addEventListener("click", day02) : __defers["$.__views.buttonDay02!click!day02"] = true;
    $.__views.buttonDay03 = Ti.UI.createButton({
        id: "buttonDay03",
        backgroundImage: "/images/filters/day03-off.png",
        width: "33%",
        height: "100px"
    });
    $.__views.event01Filters.add($.__views.buttonDay03);
    day03 ? $.__views.buttonDay03.addEventListener("click", day03) : __defers["$.__views.buttonDay03!click!day03"] = true;
    $.__views.event02Filters = Ti.UI.createView({
        id: "event02Filters",
        layout: "horizontal",
        height: "100px",
        backgroundColor: "gray",
        top: "0",
        visible: "false"
    });
    $.__views.sessionWindow.add($.__views.event02Filters);
    $.__views.buttonDay04 = Ti.UI.createButton({
        id: "buttonDay04",
        backgroundImage: "/images/filters/day04-on.png",
        width: "33%",
        height: "100px"
    });
    $.__views.event02Filters.add($.__views.buttonDay04);
    day04 ? $.__views.buttonDay04.addEventListener("click", day04) : __defers["$.__views.buttonDay04!click!day04"] = true;
    $.__views.buttonDay05 = Ti.UI.createButton({
        id: "buttonDay05",
        backgroundImage: "/images/filters/day05-off.png",
        width: "33%",
        height: "100px"
    });
    $.__views.event02Filters.add($.__views.buttonDay05);
    day05 ? $.__views.buttonDay05.addEventListener("click", day05) : __defers["$.__views.buttonDay05!click!day05"] = true;
    $.__views.buttonDay06 = Ti.UI.createButton({
        id: "buttonDay06",
        backgroundImage: "/images/filters/day06-off.png",
        width: "33%",
        height: "100px"
    });
    $.__views.event02Filters.add($.__views.buttonDay06);
    day06 ? $.__views.buttonDay06.addEventListener("click", day06) : __defers["$.__views.buttonDay06!click!day06"] = true;
    var __alloyId22 = [];
    $.__views.session1 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session1",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId22.push($.__views.session1);
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
        text: "Transportación de Hoteles sede a Expo Bancomer"
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
        text: "Domingo 13 de Julio"
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
        text: "09:00 hrs. a 17:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session2 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session2",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId22.push($.__views.session2);
    openSessionDetail ? $.__views.session2.addEventListener("click", openSessionDetail) : __defers["$.__views.session2!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/registration-de.png",
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
        text: "Vestíbulo de Expo Bancomer"
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
        text: "Domingo 13 de Julio"
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
        text: "08:30 hrs. a 20:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session3 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session3",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId22.push($.__views.session3);
    openSessionDetail ? $.__views.session3.addEventListener("click", openSessionDetail) : __defers["$.__views.session3!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/expo-icon.jpg",
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
        text: "Expo Mary Kay"
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
        text: "Sala B"
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
        text: "Domingo 13 de Julio"
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
        text: "09:00 hrs. a 20:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session4 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session4",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId22.push($.__views.session4);
    openSessionDetail ? $.__views.session4.addEventListener("click", openSessionDetail) : __defers["$.__views.session4!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/information-icon.png",
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
        text: "Módulo de Información"
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
        text: "Vestíbulo de Expo Bancomer"
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
        text: "Domingo 13 de Julio"
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
        text: "09:00 hrs. a 20:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session5 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session5",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId22.push($.__views.session5);
    openSessionDetail ? $.__views.session5.addEventListener("click", openSessionDetail) : __defers["$.__views.session5!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/CI.png",
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
        text: "Consulta y Aclaraciones de Reconocimientos"
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
        text: "Vestíbulo de Expo Bancomer"
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
        text: "Domingo 13 de Julio"
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
        text: "09:00 hrs. a 20:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session6 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session6",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId22.push($.__views.session6);
    openSessionDetail ? $.__views.session6.addEventListener("click", openSessionDetail) : __defers["$.__views.session6!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/taller_maquillaje.png",
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
        text: "Talleres de Maquillaje con Francisco Iglesias"
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
        text: "Sala C"
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
        text: "Domingo 13 de Julio"
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
        text: "09:30 hrs. a 13:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session7 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session7",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId22.push($.__views.session7);
    openSessionDetail ? $.__views.session7.addEventListener("click", openSessionDetail) : __defers["$.__views.session7!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/comidaespecial.png",
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
        text: "Comida especial para Directoras y DIQs"
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
        text: "Salones E y F, piso 2"
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
        text: "Domingo 13 de Julio"
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
    $.__views.session8 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session8",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId22.push($.__views.session8);
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
        text: "Sala B"
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
        text: "Domingo 13 de Julio"
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
        text: "15:00 hrs. a 20:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session9 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session9",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId22.push($.__views.session9);
    openSessionDetail ? $.__views.session9.addEventListener("click", openSessionDetail) : __defers["$.__views.session9!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
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
        text: "Trasportación de Expo Bancomer a Hoteles sede"
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
        text: "Sala B, planta baja"
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
        text: "Domingo 13 de Julio"
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
        text: "19:30 hrs. a 20:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.day1 = Ti.UI.createTableView({
        data: __alloyId22,
        top: "70",
        id: "day1",
        height: Titanium.UI.SIZE,
        width: "95%",
        borderRadius: "6",
        borderColor: "gray",
        visible: "false",
        backgroundColor: "white"
    });
    $.__views.sessionWindow.add($.__views.day1);
    var __alloyId23 = [];
    $.__views.session10 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session10",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId23.push($.__views.session10);
    openSessionDetail ? $.__views.session10.addEventListener("click", openSessionDetail) : __defers["$.__views.session10!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
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
        text: "Transportación de Hoteles sede a Expo Bancomer"
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
        text: "Lunes 14 de Julio"
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
        text: "06:00 a 08:00 hrs./12:00 a 14:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session11 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session11",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId23.push($.__views.session11);
    openSessionDetail ? $.__views.session11.addEventListener("click", openSessionDetail) : __defers["$.__views.session11!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/registration-de.png",
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
        text: "Vestíbulo de Expo Bancomer"
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
        text: "Lunes 14 de Julio"
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
        text: "07:00 hrs. a 12:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session12 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session12",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId23.push($.__views.session12);
    openSessionDetail ? $.__views.session12.addEventListener("click", openSessionDetail) : __defers["$.__views.session12!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/lunch.png",
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
        text: "Desayuno"
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
        text: "Sala A"
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
        text: "Lunes 14 de Julio"
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
    $.__views.session13 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session13",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId23.push($.__views.session13);
    openSessionDetail ? $.__views.session13.addEventListener("click", openSessionDetail) : __defers["$.__views.session13!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/vamospor6.png",
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
        text: "Desayuno especial Vamos por 6"
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
        text: "Sala C"
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
        text: "Lunes 14 de Julio"
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
    $.__views.session14 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session14",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId23.push($.__views.session14);
    openSessionDetail ? $.__views.session14.addEventListener("click", openSessionDetail) : __defers["$.__views.session14!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/information-icon.png",
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
        text: "Módulo de Información"
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
        text: "Vestíbulo de Expo Bancomer"
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
        text: "Lunes 14 de Julio"
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
        text: "07:30 hrs. a 20:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session15 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session15",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId23.push($.__views.session15);
    openSessionDetail ? $.__views.session15.addEventListener("click", openSessionDetail) : __defers["$.__views.session15!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/expo-icon.jpg",
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
        text: "Expo Mary Kay"
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
        text: "Sala B"
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
        text: "Lunes 14 de Julio"
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
        text: "09:00 hrs. a 20:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session16 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session16",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId23.push($.__views.session16);
    openSessionDetail ? $.__views.session16.addEventListener("click", openSessionDetail) : __defers["$.__views.session16!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/class.png",
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
        text: "Ver sección de Mis Clases"
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
        text: "Lunes 14 de Julio"
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
    $.__views.session17 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session17",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId23.push($.__views.session17);
    openSessionDetail ? $.__views.session17.addEventListener("click", openSessionDetail) : __defers["$.__views.session17!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/class.png",
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
        text: "Actividad para Esposos"
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
        text: "Salón A2"
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
        text: "Lunes 14 de Julio"
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
        text: "09:30 hrs. a 11:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session18 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session18",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId23.push($.__views.session18);
    openSessionDetail ? $.__views.session18.addEventListener("click", openSessionDetail) : __defers["$.__views.session18!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/class.png",
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
        text: "Ver sección de Mis Clases"
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
        text: "Lunes 14 de Julio"
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
        text: "09:50 hrs. a 10:35 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session19 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session19",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId23.push($.__views.session19);
    openSessionDetail ? $.__views.session19.addEventListener("click", openSessionDetail) : __defers["$.__views.session19!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/class.png",
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
        text: "Tercer Clase"
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
        text: "Ver sección de Mis Clases"
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
        text: "Lunes 14 de Julio"
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
        text: "10:40 hrs. a 11:25 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session20 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session20",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId23.push($.__views.session20);
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
        text: "Trasportación de Expo Bancomer a Hoteles sede"
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
        text: "Sala B, planta baja"
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
        text: "Lunes 14 de Julio"
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
        text: "11:30 hrs. a 13:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session21 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session21",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId23.push($.__views.session21);
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
        text: "Sala A"
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
        text: "Lunes 14 de Julio"
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
        text: "12:30 hrs. a 14:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session22 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session22",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId23.push($.__views.session22);
    openSessionDetail ? $.__views.session22.addEventListener("click", openSessionDetail) : __defers["$.__views.session22!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/COCTEL_REAL.png",
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
        text: "Comida Real"
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
        text: "Sala C"
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
        text: "Lunes 14 de Julio"
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
        text: "12:30 hrs. a 14:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session23 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session23",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId23.push($.__views.session23);
    openSessionDetail ? $.__views.session23.addEventListener("click", openSessionDetail) : __defers["$.__views.session23!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/generalsession.png",
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
        text: "Asamblea de Premiación"
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
        text: "Sala B"
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
        text: "Lunes 14 de Julio"
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
        text: "15:00 hrs. a 20:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session24 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session24",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId23.push($.__views.session24);
    openSessionDetail ? $.__views.session24.addEventListener("click", openSessionDetail) : __defers["$.__views.session24!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
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
        text: "Trasportación de Expo Bancomer a Hoteles sede"
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
        text: "Sala B, planta baja"
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
        text: "Lunes 14 de Julio"
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
    $.__views.day2 = Ti.UI.createTableView({
        data: __alloyId23,
        id: "day2",
        height: Titanium.UI.SIZE,
        width: "95%",
        borderRadius: "6",
        borderColor: "gray",
        visible: "false",
        top: "70",
        backgroundColor: "white"
    });
    $.__views.sessionWindow.add($.__views.day2);
    var __alloyId24 = [];
    $.__views.session25 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session25",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId24.push($.__views.session25);
    openSessionDetail ? $.__views.session25.addEventListener("click", openSessionDetail) : __defers["$.__views.session25!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
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
        text: "Transportación de Hoteles sede a Expo Bancomer"
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
        text: "Martes 15 de Julio"
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
        text: "08:00 hrs. a 08:45 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session26 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session26",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId24.push($.__views.session26);
    openSessionDetail ? $.__views.session26.addEventListener("click", openSessionDetail) : __defers["$.__views.session26!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/information-icon.png",
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
        text: "Módulo de Información"
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
        text: "Vestíbulo de Expo Bancomer"
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
        text: "Martes 15 de Julio"
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
        text: "09:30 hrs. a 12:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session27 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session27",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId24.push($.__views.session27);
    openSessionDetail ? $.__views.session27.addEventListener("click", openSessionDetail) : __defers["$.__views.session27!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/expo-icon.jpg",
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
        text: "Expo Mary Kay"
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
        text: "Sala B"
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
        text: "Martes 15 de Julio"
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
        text: "09:00 hrs. a 12:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session28 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session28",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId24.push($.__views.session28);
    openSessionDetail ? $.__views.session28.addEventListener("click", openSessionDetail) : __defers["$.__views.session28!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/generalsession.png",
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
        text: "Sala B"
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
        text: "Martes 15 de Julio"
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
        text: "09:30 hrs. a 12:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session29 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session29",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId24.push($.__views.session29);
    openSessionDetail ? $.__views.session29.addEventListener("click", openSessionDetail) : __defers["$.__views.session29!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
        width: "100px",
        left: "10"
    });
    $.__views.session29.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session29.add($.__views.rowContainer);
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
        text: "Trasportación de Expo Bancomer a Hoteles sede"
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
        text: "Sala B, planta baja"
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
        text: "Martes 15 de Julio"
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
        text: "12:00 hrs. a 13:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.day3 = Ti.UI.createTableView({
        data: __alloyId24,
        id: "day3",
        height: Titanium.UI.SIZE,
        width: "95%",
        borderRadius: "6",
        borderColor: "gray",
        visible: "false",
        top: "70",
        backgroundColor: "white"
    });
    $.__views.sessionWindow.add($.__views.day3);
    var __alloyId25 = [];
    $.__views.session30 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session30",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId25.push($.__views.session30);
    openSessionDetail ? $.__views.session30.addEventListener("click", openSessionDetail) : __defers["$.__views.session30!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
        width: "100px",
        left: "10"
    });
    $.__views.session30.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session30.add($.__views.rowContainer);
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
        text: "Transportación de Hoteles sede a Expo Bancomer"
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
        text: "Miércoles 16 de Julio"
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
        text: "09:00 hrs. a 17:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session31 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session31",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId25.push($.__views.session31);
    openSessionDetail ? $.__views.session31.addEventListener("click", openSessionDetail) : __defers["$.__views.session31!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/registration-de.png",
        width: "100px",
        left: "10"
    });
    $.__views.session31.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session31.add($.__views.rowContainer);
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
        text: "Vestíbulo de Expo Bancomer"
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
        text: "Miércoles 16 de Julio"
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
        text: "08:30 hrs. a 20:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session32 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session32",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId25.push($.__views.session32);
    openSessionDetail ? $.__views.session32.addEventListener("click", openSessionDetail) : __defers["$.__views.session32!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/expo-icon.jpg",
        width: "100px",
        left: "10"
    });
    $.__views.session32.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session32.add($.__views.rowContainer);
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
        text: "Expo Mary Kay"
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
        text: "Sala B"
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
        text: "Miércoles 16 de Julio"
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
        text: "09:00 hrs. a 20:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session33 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session33",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId25.push($.__views.session33);
    openSessionDetail ? $.__views.session33.addEventListener("click", openSessionDetail) : __defers["$.__views.session33!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/information-icon.png",
        width: "100px",
        left: "10"
    });
    $.__views.session33.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session33.add($.__views.rowContainer);
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
        text: "Módulo de Información"
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
        text: "Vestíbulo de Expo Bancomer"
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
        text: "Miércoles 16 de Julio"
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
        text: "09:00 hrs. a 20:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session34 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session34",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId25.push($.__views.session34);
    openSessionDetail ? $.__views.session34.addEventListener("click", openSessionDetail) : __defers["$.__views.session34!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/CI.png",
        width: "100px",
        left: "10"
    });
    $.__views.session34.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session34.add($.__views.rowContainer);
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
        text: "Consulta y Aclaraciones de Reconocimientos"
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
        text: "Vestíbulo de Expo Bancomer"
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
        text: "Miércoles 16 de Julio"
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
        text: "09:00 hrs. a 20:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session35 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session35",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId25.push($.__views.session35);
    openSessionDetail ? $.__views.session35.addEventListener("click", openSessionDetail) : __defers["$.__views.session35!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/taller_maquillaje.png",
        width: "100px",
        left: "10"
    });
    $.__views.session35.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session35.add($.__views.rowContainer);
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
        text: "Talleres de Maquillaje con Francisco Iglesias"
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
        text: "Sala C"
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
        text: "Miércoles 16 de Julio"
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
        text: "09:30 hrs. a 13:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session36 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session36",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId25.push($.__views.session36);
    openSessionDetail ? $.__views.session36.addEventListener("click", openSessionDetail) : __defers["$.__views.session36!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/comidaespecial.png",
        width: "100px",
        left: "10"
    });
    $.__views.session36.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session36.add($.__views.rowContainer);
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
        text: "Comida especial para Directoras y DIQs"
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
        text: "Salones E y F, piso 2"
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
        text: "Miércoles 16 de Julio"
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
        text: "12:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session37 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session37",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId25.push($.__views.session37);
    openSessionDetail ? $.__views.session37.addEventListener("click", openSessionDetail) : __defers["$.__views.session37!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/generalsession.png",
        width: "100px",
        left: "10"
    });
    $.__views.session37.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session37.add($.__views.rowContainer);
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
        text: "Sala B"
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
        text: "Miércoles 16 de Julio"
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
        text: "14:30 hrs. a 20:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session38 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session38",
        dayid: "1",
        hasChild: "true"
    });
    __alloyId25.push($.__views.session38);
    openSessionDetail ? $.__views.session38.addEventListener("click", openSessionDetail) : __defers["$.__views.session38!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
        width: "100px",
        left: "10"
    });
    $.__views.session38.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session38.add($.__views.rowContainer);
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
        text: "Trasportación de Expo Bancomer a Hoteles sede"
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
        text: "Sala B, planta baja"
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
        text: "Miércoles 16 de Julio"
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
        text: "19:30 hrs. a 20:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.day4 = Ti.UI.createTableView({
        data: __alloyId25,
        top: "70",
        id: "day4",
        height: Titanium.UI.SIZE,
        width: "95%",
        borderRadius: "6",
        borderColor: "gray",
        visible: "false",
        backgroundColor: "white"
    });
    $.__views.sessionWindow.add($.__views.day4);
    var __alloyId26 = [];
    $.__views.session39 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session39",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId26.push($.__views.session39);
    openSessionDetail ? $.__views.session39.addEventListener("click", openSessionDetail) : __defers["$.__views.session39!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
        width: "100px",
        left: "10"
    });
    $.__views.session39.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session39.add($.__views.rowContainer);
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
        text: "Transportación de Hoteles sede a Expo Bancomer"
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
        text: "Jueves 17 de Julio"
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
        text: "06:00 a 08:00 hrs./12:00 a 14:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session40 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session40",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId26.push($.__views.session40);
    openSessionDetail ? $.__views.session40.addEventListener("click", openSessionDetail) : __defers["$.__views.session40!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/registration-de.png",
        width: "100px",
        left: "10"
    });
    $.__views.session40.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session40.add($.__views.rowContainer);
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
        text: "Vestíbulo de Expo Bancomer"
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
        text: "Jueves 17 de Julio"
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
        text: "07:00 hrs. a 12:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session41 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session41",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId26.push($.__views.session41);
    openSessionDetail ? $.__views.session41.addEventListener("click", openSessionDetail) : __defers["$.__views.session41!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/lunch.png",
        width: "100px",
        left: "10"
    });
    $.__views.session41.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session41.add($.__views.rowContainer);
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
        text: "Desayuno"
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
        text: "Sala A"
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
        text: "Jueves 17 de Julio"
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
    $.__views.session42 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session42",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId26.push($.__views.session42);
    openSessionDetail ? $.__views.session42.addEventListener("click", openSessionDetail) : __defers["$.__views.session42!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/vamospor6.png",
        width: "100px",
        left: "10"
    });
    $.__views.session42.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session42.add($.__views.rowContainer);
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
        text: "Desayuno especial Vamos por 6"
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
        text: "Sala C"
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
        text: "Jueves 17 de Julio"
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
    $.__views.session43 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session43",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId26.push($.__views.session43);
    openSessionDetail ? $.__views.session43.addEventListener("click", openSessionDetail) : __defers["$.__views.session43!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/information-icon.png",
        width: "100px",
        left: "10"
    });
    $.__views.session43.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session43.add($.__views.rowContainer);
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
        text: "Módulo de Información"
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
        text: "Vestíbulo de Expo Bancomer"
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
        text: "Jueves 17 de Julio"
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
        text: "07:30 hrs. a 20:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session44 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session44",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId26.push($.__views.session44);
    openSessionDetail ? $.__views.session44.addEventListener("click", openSessionDetail) : __defers["$.__views.session44!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/expo-icon.jpg",
        width: "100px",
        left: "10"
    });
    $.__views.session44.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session44.add($.__views.rowContainer);
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
        text: "Expo Mary Kay"
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
        text: "Sala B"
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
        text: "Jueves 17 de Julio"
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
        text: "09:00 hrs. a 20:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session45 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session45",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId26.push($.__views.session45);
    openSessionDetail ? $.__views.session45.addEventListener("click", openSessionDetail) : __defers["$.__views.session45!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/class.png",
        width: "100px",
        left: "10"
    });
    $.__views.session45.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session45.add($.__views.rowContainer);
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
        text: "Ver sección de Mis Clases"
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
        text: "Jueves 17 de Julio"
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
    $.__views.session46 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session46",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId26.push($.__views.session46);
    openSessionDetail ? $.__views.session46.addEventListener("click", openSessionDetail) : __defers["$.__views.session46!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/class.png",
        width: "100px",
        left: "10"
    });
    $.__views.session46.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session46.add($.__views.rowContainer);
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
        text: "Actividad para Esposos"
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
        text: "Salón A2"
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
        text: "Jueves 17 de Julio"
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
        text: "09:30 hrs. a 11:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session47 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session47",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId26.push($.__views.session47);
    openSessionDetail ? $.__views.session47.addEventListener("click", openSessionDetail) : __defers["$.__views.session47!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/class.png",
        width: "100px",
        left: "10"
    });
    $.__views.session47.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session47.add($.__views.rowContainer);
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
        text: "Ver sección de Mis Clases"
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
        text: "Jueves 17 de Julio"
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
        text: "09:50 hrs. a 10:35 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session48 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session48",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId26.push($.__views.session48);
    openSessionDetail ? $.__views.session48.addEventListener("click", openSessionDetail) : __defers["$.__views.session48!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/class.png",
        width: "100px",
        left: "10"
    });
    $.__views.session48.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session48.add($.__views.rowContainer);
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
        text: "Tercer Clase"
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
        text: "Ver sección de Mis Clases"
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
        text: "Jueves 17 de Julio"
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
        text: "10:40 hrs. a 11:25 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session49 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session49",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId26.push($.__views.session49);
    openSessionDetail ? $.__views.session49.addEventListener("click", openSessionDetail) : __defers["$.__views.session49!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
        width: "100px",
        left: "10"
    });
    $.__views.session49.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session49.add($.__views.rowContainer);
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
        text: "Trasportación de Expo Bancomer a Hoteles sede"
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
        text: "Sala B, planta baja"
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
        text: "Jueves 17 de Julio"
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
        text: "11:30 hrs. a 13:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session50 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session50",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId26.push($.__views.session50);
    openSessionDetail ? $.__views.session50.addEventListener("click", openSessionDetail) : __defers["$.__views.session50!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/lunch.png",
        width: "100px",
        left: "10"
    });
    $.__views.session50.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session50.add($.__views.rowContainer);
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
        text: "Sala A"
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
        text: "Jueves 17 de Julio"
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
        text: "12:30 hrs. a 14:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session51 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session51",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId26.push($.__views.session51);
    openSessionDetail ? $.__views.session51.addEventListener("click", openSessionDetail) : __defers["$.__views.session51!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/COCTEL_REAL.png",
        width: "100px",
        left: "10"
    });
    $.__views.session51.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session51.add($.__views.rowContainer);
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
        text: "Comida Real"
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
        text: "Sala C"
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
        text: "Jueves 17 de Julio"
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
        text: "12:30 hrs. a 14:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session52 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session52",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId26.push($.__views.session52);
    openSessionDetail ? $.__views.session52.addEventListener("click", openSessionDetail) : __defers["$.__views.session52!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/generalsession.png",
        width: "100px",
        left: "10"
    });
    $.__views.session52.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session52.add($.__views.rowContainer);
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
        text: "Asamblea de Premiación"
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
        text: "Sala B"
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
        text: "Jueves 17 de Julio"
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
        text: "15:00 hrs. a 20:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session53 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session53",
        dayid: "2",
        hasChild: "true"
    });
    __alloyId26.push($.__views.session53);
    openSessionDetail ? $.__views.session53.addEventListener("click", openSessionDetail) : __defers["$.__views.session53!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
        width: "100px",
        left: "10"
    });
    $.__views.session53.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session53.add($.__views.rowContainer);
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
        text: "Trasportación de Expo Bancomer a Hoteles sede"
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
        text: "Sala B, planta baja"
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
        text: "Jueves 17 de Julio"
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
    $.__views.day5 = Ti.UI.createTableView({
        data: __alloyId26,
        id: "day5",
        height: Titanium.UI.SIZE,
        width: "95%",
        borderRadius: "6",
        borderColor: "gray",
        visible: "false",
        top: "70",
        backgroundColor: "white"
    });
    $.__views.sessionWindow.add($.__views.day5);
    var __alloyId27 = [];
    $.__views.session54 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session54",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId27.push($.__views.session54);
    openSessionDetail ? $.__views.session54.addEventListener("click", openSessionDetail) : __defers["$.__views.session54!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
        width: "100px",
        left: "10"
    });
    $.__views.session54.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session54.add($.__views.rowContainer);
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
        text: "Transportación de Hoteles sede a Expo Bancomer"
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
        text: "Viernes 18 de Julio"
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
        text: "08:00 hrs. a 08:45 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session55 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session55",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId27.push($.__views.session55);
    openSessionDetail ? $.__views.session55.addEventListener("click", openSessionDetail) : __defers["$.__views.session55!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/information-icon.png",
        width: "100px",
        left: "10"
    });
    $.__views.session55.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session55.add($.__views.rowContainer);
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
        text: "Módulo de Información"
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
        text: "Vestíbulo de Expo Bancomer"
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
        text: "Viernes 18 de Julio"
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
        text: "09:00 hrs. a 12:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session56 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session56",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId27.push($.__views.session56);
    openSessionDetail ? $.__views.session56.addEventListener("click", openSessionDetail) : __defers["$.__views.session56!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/expo-icon.jpg",
        width: "100px",
        left: "10"
    });
    $.__views.session56.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session56.add($.__views.rowContainer);
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
        text: "Expo Mary Kay"
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
        text: "Sala B"
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
        text: "Viernes 18 de Julio"
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
        text: "09:00 hrs. a 12:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session57 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session57",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId27.push($.__views.session57);
    openSessionDetail ? $.__views.session57.addEventListener("click", openSessionDetail) : __defers["$.__views.session57!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/generalsession.png",
        width: "100px",
        left: "10"
    });
    $.__views.session57.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session57.add($.__views.rowContainer);
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
        text: "Sala B"
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
        text: "Viernes 18 de Julio"
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
        text: "09:00 hrs. a 12:30 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.session58 = Ti.UI.createTableViewRow({
        height: "100",
        layout: "horizontal",
        id: "session58",
        dayid: "3",
        hasChild: "true"
    });
    __alloyId27.push($.__views.session58);
    openSessionDetail ? $.__views.session58.addEventListener("click", openSessionDetail) : __defers["$.__views.session58!click!openSessionDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/sessions/transportation.png",
        width: "100px",
        left: "10"
    });
    $.__views.session58.add($.__views.image);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.FILL,
        id: "rowContainer"
    });
    $.__views.session58.add($.__views.rowContainer);
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
        text: "Trasportación de Expo Bancomer a Hoteles sede"
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
        text: "Sala B, planta baja"
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
        text: "Viernes 18 de Julio"
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
        text: "12:00 hrs. a 13:00 hrs."
    });
    $.__views.rowContainer.add($.__views.textInfo);
    $.__views.day6 = Ti.UI.createTableView({
        data: __alloyId27,
        id: "day6",
        height: Titanium.UI.SIZE,
        width: "95%",
        borderRadius: "6",
        borderColor: "gray",
        visible: "false",
        top: "70",
        backgroundColor: "white"
    });
    $.__views.sessionWindow.add($.__views.day6);
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
            text: "Seminario 2014",
            font: {
                fontWeight: "bold",
                fontSize: "16"
            }
        });
    }
    if (1 == Alloy.Globals.seminarID) {
        $.event01Filters.visible = true;
        $.event02Filters.visible = false;
        $.day1.visible = true;
    } else {
        $.event01Filters.visible = false;
        $.event02Filters.visible = true;
        $.day4.visible = true;
    }
    if (Alloy.isTablet) {
        $.day1.top = 100;
        $.day2.top = 100;
        $.day3.top = 100;
        $.day4.top = 100;
        $.day5.top = 100;
        $.day6.top = 100;
    }
    __defers["$.__views.buttonDay01!click!day01"] && $.__views.buttonDay01.addEventListener("click", day01);
    __defers["$.__views.buttonDay02!click!day02"] && $.__views.buttonDay02.addEventListener("click", day02);
    __defers["$.__views.buttonDay03!click!day03"] && $.__views.buttonDay03.addEventListener("click", day03);
    __defers["$.__views.buttonDay04!click!day04"] && $.__views.buttonDay04.addEventListener("click", day04);
    __defers["$.__views.buttonDay05!click!day05"] && $.__views.buttonDay05.addEventListener("click", day05);
    __defers["$.__views.buttonDay06!click!day06"] && $.__views.buttonDay06.addEventListener("click", day06);
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
    __defers["$.__views.session29!click!openSessionDetail"] && $.__views.session29.addEventListener("click", openSessionDetail);
    __defers["$.__views.session30!click!openSessionDetail"] && $.__views.session30.addEventListener("click", openSessionDetail);
    __defers["$.__views.session31!click!openSessionDetail"] && $.__views.session31.addEventListener("click", openSessionDetail);
    __defers["$.__views.session32!click!openSessionDetail"] && $.__views.session32.addEventListener("click", openSessionDetail);
    __defers["$.__views.session33!click!openSessionDetail"] && $.__views.session33.addEventListener("click", openSessionDetail);
    __defers["$.__views.session34!click!openSessionDetail"] && $.__views.session34.addEventListener("click", openSessionDetail);
    __defers["$.__views.session35!click!openSessionDetail"] && $.__views.session35.addEventListener("click", openSessionDetail);
    __defers["$.__views.session36!click!openSessionDetail"] && $.__views.session36.addEventListener("click", openSessionDetail);
    __defers["$.__views.session37!click!openSessionDetail"] && $.__views.session37.addEventListener("click", openSessionDetail);
    __defers["$.__views.session38!click!openSessionDetail"] && $.__views.session38.addEventListener("click", openSessionDetail);
    __defers["$.__views.session39!click!openSessionDetail"] && $.__views.session39.addEventListener("click", openSessionDetail);
    __defers["$.__views.session40!click!openSessionDetail"] && $.__views.session40.addEventListener("click", openSessionDetail);
    __defers["$.__views.session41!click!openSessionDetail"] && $.__views.session41.addEventListener("click", openSessionDetail);
    __defers["$.__views.session42!click!openSessionDetail"] && $.__views.session42.addEventListener("click", openSessionDetail);
    __defers["$.__views.session43!click!openSessionDetail"] && $.__views.session43.addEventListener("click", openSessionDetail);
    __defers["$.__views.session44!click!openSessionDetail"] && $.__views.session44.addEventListener("click", openSessionDetail);
    __defers["$.__views.session45!click!openSessionDetail"] && $.__views.session45.addEventListener("click", openSessionDetail);
    __defers["$.__views.session46!click!openSessionDetail"] && $.__views.session46.addEventListener("click", openSessionDetail);
    __defers["$.__views.session47!click!openSessionDetail"] && $.__views.session47.addEventListener("click", openSessionDetail);
    __defers["$.__views.session48!click!openSessionDetail"] && $.__views.session48.addEventListener("click", openSessionDetail);
    __defers["$.__views.session49!click!openSessionDetail"] && $.__views.session49.addEventListener("click", openSessionDetail);
    __defers["$.__views.session50!click!openSessionDetail"] && $.__views.session50.addEventListener("click", openSessionDetail);
    __defers["$.__views.session51!click!openSessionDetail"] && $.__views.session51.addEventListener("click", openSessionDetail);
    __defers["$.__views.session52!click!openSessionDetail"] && $.__views.session52.addEventListener("click", openSessionDetail);
    __defers["$.__views.session53!click!openSessionDetail"] && $.__views.session53.addEventListener("click", openSessionDetail);
    __defers["$.__views.session54!click!openSessionDetail"] && $.__views.session54.addEventListener("click", openSessionDetail);
    __defers["$.__views.session55!click!openSessionDetail"] && $.__views.session55.addEventListener("click", openSessionDetail);
    __defers["$.__views.session56!click!openSessionDetail"] && $.__views.session56.addEventListener("click", openSessionDetail);
    __defers["$.__views.session57!click!openSessionDetail"] && $.__views.session57.addEventListener("click", openSessionDetail);
    __defers["$.__views.session58!click!openSessionDetail"] && $.__views.session58.addEventListener("click", openSessionDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;