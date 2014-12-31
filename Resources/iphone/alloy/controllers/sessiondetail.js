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
    var titleLabel = Titanium.UI.createLabel({
        color: "#FBC9BA",
        text: "Detalle de Programa",
        font: {
            fontWeight: "bold",
            fontSize: "16"
        }
    });
    $.sessionDetailWindow.setTitleControl(titleLabel);
    var args = arguments[0] || {};
    if ("session1" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Transportación de Hoteles sede a Expo Bancomer";
        $.description.text = "Para dirigirte al recinto, es necesario que te dirijas al Lobby del hotel donde te estas hospedando. Esta transportación solo es válida de Hoteles sede al recinto.";
        $.place.text = "Lobby del hotel sede";
        $.date.text = "Domingo 13 de Julio";
        $.schedule.text = "09:00 hrs. a 17:30 hrs.";
    }
    if ("session2" == args.id) {
        $.imageURL.image = "/images/sessions/registration-de.png";
        $.sessionName.text = "Registro";
        $.description.text = "En el área de registro podrás recoger tu gafete y programa de evento.";
        $.place.text = "Vestíbulo de Expo Bancomer";
        $.date.text = "Domingo 13 de Julio";
        $.schedule.text = "08:30 hrs. a 20:00 hrs.";
    }
    if ("session3" == args.id) {
        $.imageURL.image = "/images/sessions/expo-icon.jpg";
        $.sessionName.text = "Expo";
        $.description.text = "Descubre lo nuevo que Mary Kay tiene para tí. Asiste a la expo y conocerás las diferentes opciones que Mary Kay y proveedores tienen para tí.";
        $.place.text = "Sala B";
        $.date.text = "Domingo 13 de Julio";
        $.schedule.text = "09:00 hrs. a 20:00 hrs.";
    }
    if ("session4" == args.id) {
        $.imageURL.url = "/images/sessions/information-icon.png";
        $.sessionName.text = "Módulo de Información";
        $.description.text = "En este módulo podrás tener información adicional de este evento.";
        $.place.text = "Vestíbulo de Expo Bancomer";
        $.date.text = "Domingo 13 de Julio";
        $.schedule.text = "09:00 hrs. a 20:00 hrs.";
    }
    if ("session5" == args.id) {
        $.imageURL.image = "/images/sessions/CI.png";
        $.sessionName.text = "Consulta y Aclaraciones de Reconocimientos";
        $.description.text = "Si tienes alguna duda sobre tus reconocimientos para Seminario, asiste a este módulo y te podremos ayudar.";
        $.place.text = "Vestíbulo de Expo Bancomer";
        $.date.text = "Domingo 13 de Julio";
        $.schedule.text = "09:00 hrs. a 20:00 hrs.";
    }
    if ("session6" == args.id) {
        $.imageURL.image = "/images/sessions/taller_maquillaje.png";
        $.sessionName.text = "Talleres de Maquillaje con Francisco Iglesias";
        $.description.text = "Conoce los importantes consejos que Francisco Iglesias tiene para tí";
        $.place.text = "Sala C";
        $.date.text = "Domingo 13 de Julio";
        $.schedule.text = "09:30 hrs. a 13:30 hrs.";
    }
    if ("session7" == args.id) {
        $.imageURL.image = "/images/sessions/comidaespecial.png";
        $.sessionName.text = "Comida especial para Directoras y DIQs";
        $.description.text = "Esta comida especial es para las Directoras y DIQs que tengan este nivel al 1 de Julio 2014, y sus esposos inscritos.";
        $.place.text = "Salones E y F, piso 2";
        $.date.text = "Domingo 13 de Julio";
        $.schedule.text = "13:00 hrs.";
    }
    if ("session8" == args.id) {
        $.imageURL.image = "/images/sessions/generalsession.png";
        $.sessionName.text = "Asamblea de Apertura";
        $.description.text = "¡Descubre las novedades que tenemos para tí!\nNo te pierdas los mensajes importantes que queremos compartir, además de escuchar a increíbles maestras.";
        $.place.text = "Sala B";
        $.date.text = "Domingo 13 de Julio";
        $.schedule.text = "15:00 hrs. a 20:30 hrs.";
    }
    if ("session9" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Transportación de Expo Bancomer a Hoteles sede";
        $.description.text = "Servicio de transportación para regresar a los hoteles sede";
        $.place.text = "Sala B, planta baja";
        $.date.text = "Domingo 13 de Julio";
        $.schedule.text = "19:30 hrs. a 20:00 hrs.";
    }
    if ("session10" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Transportación de Hoteles sede a Expo Bancomer";
        $.description.text = "Para dirigirte al recinto, es necesario que te dirijas al Lobby del hotel donde te estas hospedando. Esta transportación solo es válida de Hoteles sede al recinto.";
        $.place.text = "Lobby del hotel sede";
        $.date.text = "Lunes 14 de Julio";
        $.schedule.text = "06:00 a 08:00 hrs. y 12:00 a 14:30 hrs.";
    }
    if ("session11" == args.id) {
        $.imageURL.image = "/images/sessions/registration-de.png";
        $.sessionName.text = "Registro";
        $.description.text = "En el área de registro podrás recoger tu gafete y programa de evento.";
        $.place.text = "Vestíbulo de Expo Bancomer";
        $.date.text = "Lunes 14 de Julio";
        $.schedule.text = "07:00 hrs. a 12:00 hrs.";
    }
    if ("session12" == args.id) {
        $.imageURL.image = "/images/sessions/lunch.png";
        $.sessionName.text = "Desayuno";
        $.description.text = "Desayuno disponible para las Consultoras inscritas a Seminario";
        $.place.text = "Sala A";
        $.date.text = "Lunes 14 de Julio";
        $.schedule.text = "07:30 hrs. a 09:00 hrs.";
    }
    if ("session13" == args.id) {
        $.imageURL.image = "/images/sessions/vamospor6.png";
        $.sessionName.text = "Desayuno especial Vamos por 6";
        $.description.text = "Tener seis nuevas Red Jackets en tu Unidad al cierre del mes de junio 2014. Para obtener el reconocimiento, todas las Red Jackets deben mantener su Nivel o tener un Nivel superior al cierre de junio 2014.";
        $.place.text = "Sala C";
        $.date.text = "Lunes 14 de Julio";
        $.schedule.text = "07:30 hrs. a 09:00 hrs.";
    }
    if ("session14" == args.id) {
        $.imageURL.url = "/images/sessions/information-icon.png";
        $.sessionName.text = "Módulo de Información";
        $.description.text = "En este módulo podrás tener información adicional de este evento.";
        $.place.text = "Vestíbulo de Expo Bancomer";
        $.date.text = "Lunes 14 de Julio";
        $.schedule.text = "07:30 hrs. a 20:00 hrs";
    }
    if ("session15" == args.id) {
        $.imageURL.image = "/images/sessions/expo-icon.jpg";
        $.sessionName.text = "Expo";
        $.description.text = "Descubre lo nuevo que Mary Kay tiene para tí. Asiste a la expo y conocerás las diferentes opciones que Mary Kay y proveedores tienen para tí.";
        $.place.text = "Sala B";
        $.date.text = "Lunes 14 de Julio";
        $.schedule.text = "09:00 hrs. a 20:00 hrs.";
    }
    if ("session16" == args.id) {
        $.imageURL.image = "/images/awards/class.png";
        $.sessionName.text = "Primera Clase";
        $.description.text = "Revisa la sección de Mis Clases para encontra cuales son las clases correspondientes a tu nivel de carrera.";
        $.place.text = "Ver sección de Mis Clases";
        $.date.text = "Lunes 14 de julio";
        $.schedule.text = "09:00 hrs. a 09:45 hrs.";
    }
    if ("session17" == args.id) {
        $.imageURL.url = "/images/sessions/class.png";
        $.sessionName.text = "Actividad para Esposos";
        $.description.text = "Actividad especial para los esposos inscritos a Seminario";
        $.place.text = "Salón A2";
        $.date.text = "Lunes 14 de Julio";
        $.schedule.text = "09:30 hrs. a 11:00 hrs.";
    }
    if ("session18" == args.id) {
        $.imageURL.image = "/images/awards/class.png";
        $.sessionName.text = "Segunda Clase";
        $.description.text = "Revisa la sección de Mis Clases para encontra cuales son las clases correspondientes a tu nivel de carrera.";
        $.place.text = "Ver sección de Mis Clases";
        $.date.text = "Lunes 14 de julio";
        $.schedule.text = "09:50 hrs. a 10:35 hrs.";
    }
    if ("session19" == args.id) {
        $.imageURL.image = "/images/awards/class.png";
        $.sessionName.text = "Tercera Clase";
        $.description.text = "Revisa la sección de Mis Clases para encontra cuales son las clases correspondientes a tu nivel de carrera.";
        $.place.text = "Ver sección de Mis Clases";
        $.date.text = "Lunes 14 de julio";
        $.schedule.text = "10:40 hrs. a 11:25 hrs.";
    }
    if ("session20" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Transportación de Expo Bancomer a Hoteles sede";
        $.description.text = "Servicio de transportación para regresar a los hoteles sede";
        $.place.text = "Sala B, planta baja";
        $.date.text = "Lunes 14 de Julio";
        $.schedule.text = "19:30 hrs. a 20:00 hrs.";
    }
    if ("session21" == args.id) {
        $.imageURL.image = "/images/sessions/lunch.png";
        $.sessionName.text = "Comida General";
        $.description.text = "Disfruta de la comida que tenemos para tí";
        $.place.text = "Sala A";
        $.date.text = "Lunes 14 de Julio";
        $.schedule.text = "12:30 hrs. a 14:30 hrs.";
    }
    if ("session22" == args.id) {
        $.imageURL.image = "/images/sessions/COCTEL_REAL.png";
        $.sessionName.text = "Comida Real";
        $.description.text = "Comida especial para las integrantes de las Cortes de Seminario";
        $.place.text = "Sala C";
        $.date.text = "Lunes 14 de Julio";
        $.schedule.text = "12:30 hrs. a 14:30 hrs.";
    }
    if ("session23" == args.id) {
        $.imageURL.image = "/images/sessions/generalsession.png";
        $.sessionName.text = "Asamblea de Premiación";
        $.description.text = "Conoce quienes son las integrantes de las Cortes de Seminario, además de quien es la ganadora de Espíritu de Entrega.";
        $.place.text = "Sala B";
        $.date.text = "Lunes 14 de Julio";
        $.schedule.text = "15:00 hrs. a 20:00 hrs.";
    }
    if ("session24" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Transportación de Expo Bancomer a Hoteles sede";
        $.description.text = "Servicio de transportación para regresar a los hoteles sede";
        $.place.text = "Sala B, planta baja";
        $.date.text = "Lunes 14 de Julio";
        $.schedule.text = "19:30 hrs. a 20:30 hrs.";
    }
    if ("session25" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Transportación de Hoteles sede a Expo Bancomer";
        $.description.text = "Para dirigirte al recinto, es necesario que te dirijas al Lobby del hotel donde te estas hospedando. Esta transportación solo es válida de Hoteles sede al recinto.";
        $.place.text = "Lobby del hotel sede";
        $.date.text = "Martes 15 de Julio";
        $.schedule.text = "08:00 hrs. a 08:45 hrs.";
    }
    if ("session26" == args.id) {
        $.imageURL.url = "/images/sessions/information-icon.png";
        $.sessionName.text = "Módulo de Información";
        $.description.text = "En este módulo podrás tener información adicional de este evento.";
        $.place.text = "Vestíbulo de Expo Bancomer";
        $.date.text = "Martes 15 de Julio";
        $.schedule.text = "09:00 hrs. a 12:30 hrs.";
    }
    if ("session27" == args.id) {
        $.imageURL.image = "/images/sessions/expo-icon.jpg";
        $.sessionName.text = "Expo";
        $.description.text = "Descubre lo nuevo que Mary Kay tiene para tí. Asiste a la expo y conocerás las diferentes opciones que Mary Kay y proveedores tienen para tí.";
        $.place.text = "Sala B";
        $.date.text = "Martes 15 de Julio";
        $.schedule.text = "09:00 hrs. a 12:30 hrs.";
    }
    if ("session28" == args.id) {
        $.imageURL.image = "/images/sessions/generalsession.png";
        $.sessionName.text = "Asamblea de Clausura";
        $.description.text = "No te pierdas del cierre de este evento.";
        $.place.text = "Sala B";
        $.date.text = "Martes 15 de Julio";
        $.schedule.text = "09:00 hrs. a 12:30 hrs.";
    }
    if ("session29" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Transportación de Expo Bancomer a Hoteles sede";
        $.description.text = "Servicio de transportación para regresar a los hoteles sede";
        $.place.text = "Sala B, planta baja";
        $.date.text = "Martes 15 de Julio";
        $.schedule.text = "12:00 hrs. a 13:00 hrs.";
    }
    if ("session30" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Transportación de Hoteles sede a Expo Bancomer";
        $.description.text = "Para dirigirte al recinto, es necesario que te dirijas al Lobby del hotel donde te estas hospedando. Esta transportación solo es válida de Hoteles sede al recinto.";
        $.place.text = "Lobby del hotel sede";
        $.date.text = "Miércoles 16 de Julio";
        $.schedule.text = "09:00 hrs. a 17:30 hrs.";
    }
    if ("session31" == args.id) {
        $.imageURL.image = "/images/sessions/registration-de.png";
        $.sessionName.text = "Registro";
        $.description.text = "En el área de registro podrás recoger tu gafete y programa de evento.";
        $.place.text = "Vestíbulo de Expo Bancomer";
        $.date.text = "Miércoles 16 de Julio";
        $.schedule.text = "08:30 hrs. a 20:00 hrs.";
    }
    if ("session32" == args.id) {
        $.imageURL.image = "/images/sessions/expo-icon.jpg";
        $.sessionName.text = "Expo";
        $.description.text = "Descubre lo nuevo que Mary Kay tiene para tí. Asiste a la expo y conocerás las diferentes opciones que Mary Kay y proveedores tienen para tí.";
        $.place.text = "Sala B";
        $.date.text = "Miércoles 16 de Julio";
        $.schedule.text = "09:00 hrs. a 20:00 hrs.";
    }
    if ("session33" == args.id) {
        $.imageURL.url = "/images/sessions/information-icon.png";
        $.sessionName.text = "Módulo de Información";
        $.description.text = "En este módulo podrás tener información adicional de este evento.";
        $.place.text = "Vestíbulo de Expo Bancomer";
        $.date.text = "Miércoles 16 de Julio";
        $.schedule.text = "09:00 hrs. a 20:00 hrs.";
    }
    if ("session34" == args.id) {
        $.imageURL.image = "/images/sessions/CI.png";
        $.sessionName.text = "Consulta y Aclaraciones de Reconocimientos";
        $.description.text = "Si tienes alguna duda sobre tus reconocimientos para Seminario, asiste a este módulo y te podremos ayudar.";
        $.place.text = "Vestíbulo de Expo Bancomer";
        $.date.text = "Miércoles 16 de Julio";
        $.schedule.text = "09:00 hrs. a 20:00 hrs.";
    }
    if ("session35" == args.id) {
        $.imageURL.image = "/images/sessions/taller_maquillaje.png";
        $.sessionName.text = "Talleres de Maquillaje con Francisco Iglesias";
        $.description.text = "Conoce los importantes consejos que Francisco Iglesias tiene para tí";
        $.place.text = "Sala C";
        $.date.text = "Miércoles 16 de Julio";
        $.schedule.text = "09:30 hrs. a 13:30 hrs.";
    }
    if ("session37" == args.id) {
        $.imageURL.image = "/images/sessions/comidaespecial.png";
        $.sessionName.text = "Comida especial para Directoras y DIQs";
        $.description.text = "Esta comida especial es para las Directoras y DIQs que tengan este nivel al 1 de Julio 2014, y sus esposos inscritos.";
        $.place.text = "Salones E y F, piso 2";
        $.date.text = "Miércoles 16 de Julio";
        $.schedule.text = "12:00 hrs.";
    }
    if ("session37" == args.id) {
        $.imageURL.image = "/images/sessions/generalsession.png";
        $.sessionName.text = "Asamblea de Apertura";
        $.description.text = "¡Descubre las novedades que tenemos para tí!\nNo te pierdas los mensajes importantes que queremos compartir, además de escuchar a increíbles maestras.";
        $.place.text = "Sala B";
        $.date.text = "Miércoles 16 de Julio";
        $.schedule.text = "14:30 hrs. a 20:30 hrs.";
    }
    if ("session38" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Transportación de Expo Bancomer a Hoteles sede";
        $.description.text = "Servicio de transportación para regresar a los hoteles sede";
        $.place.text = "Sala B, planta baja";
        $.date.text = "Miércoles 16 de Julio";
        $.schedule.text = "19:30 hrs. a 20:00 hrs.";
    }
    if ("session39" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Transportación de Hoteles sede a Expo Bancomer";
        $.description.text = "Para dirigirte al recinto, es necesario que te dirijas al Lobby del hotel donde te estas hospedando. Esta transportación solo es válida de Hoteles sede al recinto.";
        $.place.text = "Lobby del hotel sede";
        $.date.text = "Jueves 17 de Julio";
        $.schedule.text = "06:00 a 08:00 hrs. y 12:00 a 14:30 hrs.";
    }
    if ("session40" == args.id) {
        $.imageURL.image = "/images/sessions/registration-de.png";
        $.sessionName.text = "Registro";
        $.description.text = "En el área de registro podrás recoger tu gafete y programa de evento.";
        $.place.text = "Vestíbulo de Expo Bancomer";
        $.date.text = "Jueves 17 de Julio";
        $.schedule.text = "07:00 hrs. a 12:00 hrs.";
    }
    if ("session41" == args.id) {
        $.imageURL.image = "/images/sessions/lunch.png";
        $.sessionName.text = "Desayuno";
        $.description.text = "Desayuno disponible para las Consultoras inscritas a Seminario";
        $.place.text = "Sala A";
        $.date.text = "Jueves 17 de Julio";
        $.schedule.text = "07:30 hrs. a 09:00 hrs.";
    }
    if ("session42" == args.id) {
        $.imageURL.image = "/images/sessions/vamospor6.png";
        $.sessionName.text = "Desayuno especial Vamos por 6";
        $.description.text = "Tener seis nuevas Red Jackets en tu Unidad al cierre del mes de junio 2014. Para obtener el reconocimiento, todas las Red Jackets deben mantener su Nivel o tener un Nivel superior al cierre de junio 2014.";
        $.place.text = "Sala C";
        $.date.text = "Jueves 17 de Julio";
        $.schedule.text = "07:30 hrs. a 09:00 hrs.";
    }
    if ("session43" == args.id) {
        $.imageURL.url = "/images/sessions/information-icon.png";
        $.sessionName.text = "Módulo de Información";
        $.description.text = "En este módulo podrás tener información adicional de este evento.";
        $.place.text = "Vestíbulo de Expo Bancomer";
        $.date.text = "Jueves 17 de Julio";
        $.schedule.text = "07:30 hrs. a 20:00 hrs";
    }
    if ("session44" == args.id) {
        $.imageURL.image = "/images/sessions/expo-icon.jpg";
        $.sessionName.text = "Expo";
        $.description.text = "Descubre lo nuevo que Mary Kay tiene para tí. Asiste a la expo y conocerás las diferentes opciones que Mary Kay y proveedores tienen para tí.";
        $.place.text = "Sala B";
        $.date.text = "Jueves 17 de Julio";
        $.schedule.text = "09:00 hrs. a 20:00 hrs.";
    }
    if ("session45" == args.id) {
        $.imageURL.image = "/images/awards/class.png";
        $.sessionName.text = "Primera Clase";
        $.description.text = "Revisa la sección de Mis Clases para encontra cuales son las clases correspondientes a tu nivel de carrera.";
        $.place.text = "Ver sección de Mis Clases";
        $.date.text = "Jueves 17 de Julio";
        $.schedule.text = "09:00 hrs. a 09:45 hrs.";
    }
    if ("session46" == args.id) {
        $.imageURL.url = "/images/sessions/class.png";
        $.sessionName.text = "Actividad para Esposos";
        $.description.text = "Actividad especial para los esposos inscritos a Seminario";
        $.place.text = "Salón A2";
        $.date.text = "Jueves 17 de Julio";
        $.schedule.text = "09:30 hrs. a 11:00 hrs.";
    }
    if ("session47" == args.id) {
        $.imageURL.image = "/images/awards/class.png";
        $.sessionName.text = "Segunda Clase";
        $.description.text = "Revisa la sección de Mis Clases para encontra cuales son las clases correspondientes a tu nivel de carrera.";
        $.place.text = "Ver sección de Mis Clases";
        $.date.text = "Jueves 17 de Julio";
        $.schedule.text = "09:50 hrs. a 10:35 hrs.";
    }
    if ("session48" == args.id) {
        $.imageURL.image = "/images/awards/class.png";
        $.sessionName.text = "Tercera Clase";
        $.description.text = "Revisa la sección de Mis Clases para encontra cuales son las clases correspondientes a tu nivel de carrera.";
        $.place.text = "Ver sección de Mis Clases";
        $.date.text = "Jueves 17 de Julio";
        $.schedule.text = "10:40 hrs. a 11:25 hrs.";
    }
    if ("session49" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Transportación de Expo Bancomer a Hoteles sede";
        $.description.text = "Servicio de transportación para regresar a los hoteles sede";
        $.place.text = "Sala B, planta baja";
        $.date.text = "Jueves 17 de Julio";
        $.schedule.text = "19:30 hrs. a 20:00 hrs.";
    }
    if ("session50" == args.id) {
        $.imageURL.image = "/images/sessions/lunch.png";
        $.sessionName.text = "Comida General";
        $.description.text = "Disfruta de la comida que tenemos para tí";
        $.place.text = "Sala A";
        $.date.text = "Jueves 17 de Julio";
        $.schedule.text = "12:30 hrs. a 14:30 hrs.";
    }
    if ("session51" == args.id) {
        $.imageURL.image = "/images/sessions/COCTEL_REAL.png";
        $.sessionName.text = "Comida Real";
        $.description.text = "Comida especial para las integrantes de las Cortes de Seminario";
        $.place.text = "Sala C";
        $.date.text = "Jueves 17 de Julio";
        $.schedule.text = "12:30 hrs. a 14:30 hrs.";
    }
    if ("session52" == args.id) {
        $.imageURL.image = "/images/sessions/generalsession.png";
        $.sessionName.text = "Asamblea de Premiación";
        $.description.text = "Conoce quienes son las integrantes de las Cortes de Seminario, además de quien es la ganadora de Espíritu de Entrega.";
        $.place.text = "Sala B";
        $.date.text = "Jueves 17 de Julio";
        $.schedule.text = "15:00 hrs. a 20:00 hrs.";
    }
    if ("session53" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Transportación de Expo Bancomer a Hoteles sede";
        $.description.text = "Servicio de transportación para regresar a los hoteles sede";
        $.place.text = "Sala B, planta baja";
        $.date.text = "Jueves 17 de Julio";
        $.schedule.text = "19:30 hrs. a 20:30 hrs.";
    }
    if ("session54" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Transportación de Hoteles sede a Expo Bancomer";
        $.description.text = "Para dirigirte al recinto, es necesario que te dirijas al Lobby del hotel donde te estas hospedando. Esta transportación solo es válida de Hoteles sede al recinto.";
        $.place.text = "Lobby del hotel sede";
        $.date.text = "Viernes 18 de Julio";
        $.schedule.text = "08:00 hrs. a 08:45 hrs.";
    }
    if ("session55" == args.id) {
        $.imageURL.url = "/images/sessions/information-icon.png";
        $.sessionName.text = "Módulo de Información";
        $.description.text = "En este módulo podrás tener información adicional de este evento.";
        $.place.text = "Vestíbulo de Expo Bancomer";
        $.date.text = "Viernes 18 de Julio";
        $.schedule.text = "09:00 hrs. a 12:30 hrs.";
    }
    if ("session56" == args.id) {
        $.imageURL.image = "/images/sessions/expo-icon.jpg";
        $.sessionName.text = "Expo";
        $.description.text = "Descubre lo nuevo que Mary Kay tiene para tí. Asiste a la expo y conocerás las diferentes opciones que Mary Kay y proveedores tienen para tí.";
        $.place.text = "Sala B";
        $.date.text = "Viernes 18 de Julio";
        $.schedule.text = "09:00 hrs. a 12:30 hrs.";
    }
    if ("session57" == args.id) {
        $.imageURL.image = "/images/sessions/generalsession.png";
        $.sessionName.text = "Asamblea de Clausura";
        $.description.text = "No te pierdas del cierre de este evento.";
        $.place.text = "Sala B";
        $.date.text = "Viernes 18 de Julio";
        $.schedule.text = "09:00 hrs. a 12:30 hrs.";
    }
    if ("session58" == args.id) {
        $.imageURL.image = "/images/sessions/transportation.png";
        $.sessionName.text = "Transportación de Expo Bancomer a Hoteles sede";
        $.description.text = "Servicio de transportación para regresar a los hoteles sede";
        $.place.text = "Sala B, planta baja";
        $.date.text = "Viernes 18 de Julio";
        $.schedule.text = "12:00 hrs. a 13:00 hrs.";
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;