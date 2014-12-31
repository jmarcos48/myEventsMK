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
                    password: rows.fieldByName("Password"),
                    eventid: rows.fieldByName("EventID")
                });
                rows.next();
            }
            rows.close();
            db.close();
            if (results) {
                var item = results[0];
                Alloy.Globals.isLogged = true;
                Alloy.Globals.loggedUser = $.userName.value;
                Alloy.Globals.seminarID = item.eventid;
                $.loginWindow.close();
                var mainView = Alloy.createController("index");
                mainView.openIndex();
            } else alert("No se encontró información de este Número de Consultora");
        }
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
        backgroundImage: "/images/login/login.png"
    });
    $.__views.loginWindow && $.addTopLevelView($.__views.loginWindow);
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
        bottom: "40"
    });
    $.__views.__alloyId11.add($.__views.userPassword);
    $.__views.login = Ti.UI.createButton({
        id: "login",
        title: "Entrar",
        bottom: "0"
    });
    $.__views.__alloyId11.add($.__views.login);
    login ? $.__views.login.addEventListener("click", login) : __defers["$.__views.login!click!login"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.loginWindow.open();
    Alloy.Globals.veriftDataBase();
    __defers["$.__views.login!click!login"] && $.__views.login.addEventListener("click", login);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;