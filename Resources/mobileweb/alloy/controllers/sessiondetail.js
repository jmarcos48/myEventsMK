function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sessiondetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.sessionDetailWindow = Ti.UI.createWindow({
        id: "sessionDetailWindow",
        title: "Detalle de Programa",
        backButtonTitle: "",
        layout: "vertical",
        backgroundColor: "#FBC9BA",
        barColor: "black",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
        backgroundImage: "/images/background/heart_pattern_pink.png"
    });
    $.__views.sessionDetailWindow && $.addTopLevelView($.__views.sessionDetailWindow);
    $.__views.sessionDetailHeader = Ti.UI.createView({
        id: "sessionDetailHeader",
        layout: "horizontal",
        height: Titanium.UI.SIZE,
        backgroundColor: "white"
    });
    $.__views.sessionDetailWindow.add($.__views.sessionDetailHeader);
    $.__views.imageURL = Ti.UI.createImageView({
        id: "imageURL",
        image: "",
        width: "100"
    });
    $.__views.sessionDetailHeader.add($.__views.imageURL);
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
    $.__views.sessionDetailWindow.add($.__views.detail);
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
    $.__views.sessionDetailWindow.add($.__views.title);
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
    $.__views.sessionDetailWindow.add($.__views.detail);
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
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.openMainWindow = function(_tab) {
        _tab.open($.sessionDetailWindow);
    };
    {
        Titanium.UI.createLabel({
            color: "#FBC9BA",
            text: "Detalle de Programa",
            font: {
                fontWeight: "bold",
                fontSize: "16"
            }
        });
    }
    var args = arguments[0] || {};
    if ("session1" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Traslado: Heteles sede - recinto y viceversa";
        $.description.text = "Para dirigirte al recinto, es necesario que te dirijas al Lobby del hotel donde te estas hospedando. Esta transportación solo es válida de Hoteles sede al recinto.";
        $.place.text = "Lobby del hotel sede";
        $.date.text = "Miércoles 5 de Febrero";
        $.schedule.text = "A partir de las 12:00";
    }
    if ("session2" == args.id) {
        $.imageURL.image = "/images/sessions/registration.png";
        $.sessionName.text = "Registro";
        $.description.text = "En el área de registro podrás recoger tu gafete y programa de evento, además de la bolsa especial si fuiste ganadora de esta promoción.";
        $.place.text = "Lobby Mundo Imperial";
        $.date.text = "Miércoles 5 de Febrero";
        $.schedule.text = "12:00 hrs. a 19:00 hrs.";
    }
    if ("session3" == args.id) {
        $.imageURL.image = "/images/sessions/directorsuite.png";
        $.sessionName.text = "Prueba de Traje de Directora";
        $.description.text = "Conoce el nuevo Traje de Directora y revisa que talla es la que podrás adquirir";
        $.place.text = "Salón B10 y B11";
        $.date.text = "Miércoles 5 de Febrero";
        $.schedule.text = "12:00 hrs. a 19:00 hrs.";
    }
    if ("session4" == args.id) {
        $.imageURL.url = "/images/sessions/transportation.png";
        $.sessionName.text = "Último traslado: recinto a hotel sede";
        $.description.text = "Si deseas regresar a tu hotel sede, es necesario que te dirijas a Promenade para tomar el autobus que te corresponde";
        $.place.text = "Promenade";
        $.date.text = "Miércoles 5 de Febrero";
        $.schedule.text = "19:30 hrs.";
    }
    if ("session5" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Traslado: Heteles sede - recinto y viceversa";
        $.description.text = "Para dirigirte al recinto, es necesario que te dirijas al Lobby del hotel donde te estas hospedando. Esta transportación solo es válida de Hoteles sede al recinto.";
        $.place.text = "Lobby del hotel sede";
        $.date.text = "Jueves 6 de Febrero";
        $.schedule.text = "07:45 hrs. a 10:00 hrs.";
    }
    if ("session6" == args.id) {
        $.imageURL.image = "/images/sessions/registration.png";
        $.sessionName.text = "Registro";
        $.description.text = "En el área de registro podrás recoger tu gafete y programa de evento, además de la bolsa especial si fuiste ganadora de esta promoción.";
        $.place.text = "Lobby Mundo Imperial";
        $.date.text = "Jueves 6 de Febrero";
        $.schedule.text = "08:00 hrs. a 14:00 hrs.";
    }
    if ("session7" == args.id) {
        $.imageURL.image = "/images/sessions/directorsuite.png";
        $.sessionName.text = "Prueba de Traje de Directora";
        $.description.text = "Conoce el nuevo Traje de Directora y revisa que talla es la que podrás adquirir";
        $.place.text = "Salón B10 y B11";
        $.date.text = "Jueves 6 de Febrero";
        $.schedule.text = "08:00 hrs. a 09:00 hrs.";
    }
    if ("session8" == args.id) {
        $.imageURL.image = "/images/sessions/generalsession.png";
        $.sessionName.text = "Asamblea de Apertura";
        $.description.text = "¡Descubre las novedades que tenemos para tí!\nNo te pierdas los mensajes importantes que queremos compartir, además de escuchar a increíbles maestras.";
        $.place.text = "Forum";
        $.date.text = "Jueves 6 de Febrero";
        $.schedule.text = "09:00 hrs. a 14:00 hrs.";
    }
    if ("session9" == args.id) {
        $.imageURL.image = "/images/sessions/directorsuite.png";
        $.sessionName.text = "Prueba de Traje de Directora";
        $.description.text = "Conoce el nuevo Traje de Directora y revisa que talla es la que podrás adquirir";
        $.place.text = "Salón B10 y B11";
        $.date.text = "Jueves 6 de Febrero";
        $.schedule.text = "11:40 hrs. a 12:10 hrs.";
    }
    if ("session10" == args.id) {
        $.imageURL.image = "/images/sessions/lunch.png";
        $.sessionName.text = "Comida General";
        $.description.text = "Disfruta de los alimentos que tenemos especialmente para tí";
        $.place.text = "Expo 1";
        $.date.text = "Jueves 6 de Febrero";
        $.schedule.text = "14:00 hrs.";
    }
    if ("session11" == args.id) {
        $.imageURL.image = "/images/awards/specialpromo_lunch.png";
        $.sessionName.text = "Comida Especial";
        $.description.text = "Disfruta de los alimentos que tenemos especialmente para tí. Esta comida es para las Target del Viaje Internacional al cierre de Diciembre. Verifica que tengas este reconocimiento en la sección de Mis Reconocimientos.";
        $.place.text = "Salón 5A y 5B";
        $.date.text = "Jueves 6 de Febrero";
        $.schedule.text = "14:00 hrs.";
    }
    if ("session12" == args.id) {
        $.imageURL.image = "/images/sessions/directorsuite.png";
        $.sessionName.text = "Prueba de Traje de Directora";
        $.description.text = "Conoce el nuevo Traje de Directora y revisa que talla es la que podrás adquirir";
        $.place.text = "Salón B10 y B11";
        $.date.text = "Jueves 6 de Febrero";
        $.schedule.text = "14:00 hrs. a 15:30 hrs.";
    }
    if ("session13" == args.id) {
        $.imageURL.image = "/images/sessions/generalsession.png";
        $.sessionName.text = "Asamblea General";
        $.description.text = "¡Descubre las novedades que tenemos para tí!\nNo te pierdas los mensajes importantes que queremos compartir, además de escuchar a increíbles maestras.";
        $.place.text = "Forum";
        $.date.text = "Jueves 6 de Febrero";
        $.schedule.text = "15:30 hrs. a 17:00 hrs.";
    }
    if ("session14" == args.id) {
        $.imageURL.image = "/images/sessions/directorsuite.png";
        $.sessionName.text = "Prueba de Traje de Directora";
        $.description.text = "Conoce el nuevo Traje de Directora y revisa que talla es la que podrás adquirir";
        $.place.text = "Salón B10 y B11";
        $.date.text = "Jueves 6 de Febrero";
        $.schedule.text = "17:00 hrs. a 21:00 hrs.";
    }
    if ("session15" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Traslado: recinto a hoteles sede";
        $.description.text = "SI deseas regresar a tu hotel sede, es necesario que te dirijas a Promenade de Mundo Imperial.";
        $.place.text = "Promenade";
        $.date.text = "Jueves 6 de Febrero";
        $.schedule.text = "17:30 hrs. a 21:30 hrs.";
    }
    if ("session16" == args.id) {
        $.imageURL.image = "/images/awards/specialpromo_class.png";
        $.sessionName.text = "Clase especial con Dayana Polanco";
        $.description.text = "Para las Directoras que lograron contar con 40 integrantes o más de su Unidad ordenando un pedido mínimo de 600 puntos durante el mes de Octubre 2013.";
        $.place.text = "Forum";
        $.date.text = "Jueves 6 de Febrero";
        $.schedule.text = "17:30 hrs. a 18:10 hrs.";
    }
    if ("session17" == args.id) {
        $.imageURL.url = "/images/sessions/transportation.png";
        $.sessionName.text = "Traslado: hoteles sede a recinto";
        $.description.text = "Traslado especial para las ganadoras de la Fiesta de los 70's";
        $.place.text = "Lobby hotel";
        $.date.text = "Jueves 6 de Febrero";
        $.schedule.text = "19:30 hrs. a 20:30 hrs.";
    }
    if ("session18" == args.id) {
        $.imageURL.url = "/images/awards/specialpromo_party.png";
        $.sessionName.text = "Fiesta de los 70's'";
        $.description.text = "Participan: Targets del Viaje Internacional al cierre de diciembre 2013. Las Áreas Nacionales que cuenten con 70 Directoras o el 70% de su Área inscritas al evento y las Directoras del área Go Give o de Directoras Nacionales americanas, que al menos cuenten con una Directora Retoño inscrita al evento.";
        $.place.text = "Promenade";
        $.date.text = "Jueves 6 de Febrero";
        $.schedule.text = "20:00 hrs. a 22:00 hrs.";
    }
    if ("session19" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Traslado: recinto a hoteles sede";
        $.description.text = "Para regresar a tu hotel sede, es necesario que te dirijas a Promenade de Mundo Imperial";
        $.place.text = "Promenade";
        $.date.text = "Jueves 6 de Febrero";
        $.schedule.text = "21:30 hrs.";
    }
    if ("session20" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Trasportación de hoteles sede a recinto";
        $.description.text = "Para regresar a Mundo Imperial, es necesario que te dirijas al lobby de tu hotel sede";
        $.place.text = "Promenade";
        $.date.text = "Viernes 7 de Febrero";
        $.schedule.text = "07:15 hrs. a 09:00 hrs.";
    }
    if ("session21" == args.id) {
        $.imageURL.image = "/images/sessions/lunch.png";
        $.sessionName.text = "Desayuno General";
        $.description.text = "Disfruta del desayuno que tenemos para tí";
        $.place.text = "Expo 1";
        $.date.text = "Viernes 7 de Febrero";
        $.schedule.text = "07:30 hrs. a 08:50 hrs.";
    }
    if ("session22" == args.id) {
        $.imageURL.image = "/images/awards/specialpromo_breakfast.png";
        $.sessionName.text = "Desayuno Especial";
        $.description.text = "Desayuno para las poseedoras de Trofeo sobre Ruedas";
        $.place.text = "Salón A5A, A5B";
        $.date.text = "Viernes 7 de Febrero";
        $.schedule.text = "07:30 hrs. a 08:50 hrs.";
    }
    if ("session23" == args.id) {
        $.imageURL.image = "/images/sessions/directorsuite.png";
        $.sessionName.text = "Prueba de Traje de Directora";
        $.description.text = "Conoce el nuevo Traje de Directora y revisa que talla es la que podrás adquirir";
        $.place.text = "Salón B10 y B11";
        $.date.text = "Viernes 7 de Febrero";
        $.schedule.text = "07:30 hrs. a 09:00 hrs.";
    }
    if ("session24" == args.id) {
        $.imageURL.image = "/images/sessions/class.png";
        $.sessionName.text = "Primera Clase";
        $.description.text = "Revisa la sección Mis Clases para verificar tu asiganción de clases de acuerdo a la cantidad de integrantes de tu Unidad Personal.";
        $.place.text = "Centro de Convenciones";
        $.date.text = "Viernes 7 de Febrero";
        $.schedule.text = "09:00 hrs. a 09:45 hrs.";
    }
    if ("session25" == args.id) {
        $.imageURL.image = "/images/sessions/class.png";
        $.sessionName.text = "Segunda Clase";
        $.description.text = "Revisa la sección Mis Clases para verificar tu asiganción de clases de acuerdo a la cantidad de integrantes de tu Unidad Personal.";
        $.place.text = "Centro de Convenciones";
        $.date.text = "Viernes 7 de Febrero";
        $.schedule.text = "09:45 hrs. a 10:30 hrs.";
    }
    if ("session26" == args.id) {
        $.imageURL.image = "/images/sessions/directorsuite.png";
        $.sessionName.text = "Prueba de Traje de Directora";
        $.description.text = "Conoce el nuevo Traje de Directora y revisa que talla es la que podrás adquirir";
        $.place.text = "Salón B10 y B11";
        $.date.text = "Viernes 7 de Febrero";
        $.schedule.text = "10:30 hrs. a 11:00 hrs.";
    }
    if ("session27" == args.id) {
        $.imageURL.image = "/images/sessions/generalsession.png";
        $.sessionName.text = "Asamblea de Clausura";
        $.description.text = "Para cerrar este maravilloso evento, toma nota de lo que más te haya gustado para que tengas éxito desarrollando tu Liderazgo.";
        $.place.text = "Forum";
        $.date.text = "Viernes 7 de Febrero";
        $.schedule.text = "11:00 hrs. a 13:00 hrs.";
    }
    if ("session28" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Traslado: recinto a hoteles sede";
        $.description.text = "Para regresar a tu hotel sede, es necesario que te dirijas a Promenade de Mundo Imperial";
        $.place.text = "Promenade";
        $.date.text = "Viernes 7 de Febrero";
        $.schedule.text = "13:00 hrs.";
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;