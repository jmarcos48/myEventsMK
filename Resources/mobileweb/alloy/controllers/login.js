function Controller() {
    function login() {
        "" == $.userName.value && alert("Es necesario que proporciones tu Número de Consultora");
        "" == $.userPassword.value && alert("Es necesario que proporciones tu Número de Consultora");
        if ("" != $.userName.value && "" != $.userPassword.value) {
            var db = Titanium.Database.open("Events");
            var query = "";
            query = "SELECT * FROM Users where ConsultantID = '" + $.userName.value + "';";
            var rows = db.execute(query);
            var results = [];
            while (rows.isValidRow()) {
                results.push({
                    consultantID: rows.fieldByName("ConsultantID"),
                    password: rows.fieldByName("Password")
                });
                rows.next();
            }
            rows.close();
            db.close();
            if (results) {
                var item = results[0];
                var tempPassword = $.userPassword.value.toUpperCase();
                var tempPasswordDB = item.password.toUpperCase();
                if (tempPassword == tempPasswordDB) {
                    Alloy.Globals.isLogged = true;
                    Alloy.Globals.loggedUser = $.userName.value;
                    $.navGroupWin.close();
                    var mainView = Alloy.createController("index");
                    mainView.openIndex();
                } else alert("Número de Consultora o Contraseña incorrectos");
            } else alert("No se encontró información de este Número de Consultora");
        }
    }
    function about() {
        var view = Alloy.createController("about", args).getView();
        $.navGroupWin.openWindow(view);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.loginWindow = Ti.UI.createWindow({
        id: "loginWindow",
        backgroundImage: "/images/login/login.png",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK
    });
    $.__views.__alloyId11 = Ti.UI.createView({
        id: "__alloyId11"
    });
    $.__views.loginWindow.add($.__views.__alloyId11);
    $.__views.userName = Ti.UI.createTextField({
        id: "userName",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Escribe aquí tu número de Consultora",
        width: Titanium.UI.SIZE,
        bottom: "80"
    });
    $.__views.__alloyId11.add($.__views.userName);
    $.__views.userPassword = Ti.UI.createTextField({
        id: "userPassword",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Escribe aquí tu contraseña",
        passwordMask: "true",
        width: Titanium.UI.SIZE,
        bottom: "50"
    });
    $.__views.__alloyId11.add($.__views.userPassword);
    var __alloyId14 = [];
    $.__views.add = Ti.UI.createButton({
        id: "add",
        title: "Entrar"
    });
    __alloyId14.push($.__views.add);
    login ? $.__views.add.addEventListener("click", login) : __defers["$.__views.add!click!login"] = true;
    $.__views.__alloyId15 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId14.push($.__views.__alloyId15);
    $.__views.about = Ti.UI.createButton({
        id: "about",
        title: "Acerca de"
    });
    __alloyId14.push($.__views.about);
    about ? $.__views.about.addEventListener("click", about) : __defers["$.__views.about!click!about"] = true;
    $.__views.__alloyId12 = Ti.UI.iOS.createToolbar({
        items: __alloyId14,
        bottom: "0",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.loginWindow,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.navGroupWin.open();
    Alloy.Globals.veriftDataBase();
    __defers["$.__views.add!click!login"] && $.__views.add.addEventListener("click", login);
    __defers["$.__views.about!click!about"] && $.__views.about.addEventListener("click", about);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;