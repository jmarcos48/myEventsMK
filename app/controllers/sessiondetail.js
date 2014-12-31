exports.openMainWindow = function(_tab){
	_tab.open($.sessionDetailWindow);
};

var titleLabel = Titanium.UI.createLabel({
    color:'#FBC9BA',
    text:'Detalle de Programa',
    font:{fontWeight:'bold', fontSize:'16'}
});


if(OS_IOS) {   
   $.sessionDetailWindow.setTitleControl(titleLabel);
}

var args = arguments[0] || {};


if(args.id=="session1"){
	$.imageURL.image = "/images/sessions/transportation.png";
	$.sessionName.text = "Transportación de Hoteles sede a Expo Bancomer";
	$.description.text = "Para dirigirte al recinto, es necesario que te dirijas al Lobby del hotel donde te estas hospedando. Esta transportación solo es válida de Hoteles sede al recinto.";
	$.place.text = "Lobby del hotel sede";
	$.date.text = "Domingo 13 de Julio";
	$.schedule.text = "09:00 hrs. a 17:30 hrs.";
}

if(args.id=="session2"){
	$.imageURL.image = "/images/sessions/registration-de.png";
	$.sessionName.text = "Registro";
	$.description.text = "En el área de registro podrás recoger tu gafete y programa de evento.";
	$.place.text = "Vestíbulo de Expo Bancomer";
	$.date.text = "Domingo 13 de Julio";
	$.schedule.text = "08:30 hrs. a 20:00 hrs.";	
}

if(args.id=="session3"){
	$.imageURL.image = "/images/sessions/expo-icon.jpg";
	$.sessionName.text = "Expo";
	$.description.text = "Descubre lo nuevo que Mary Kay tiene para tí. Asiste a la expo y conocerás las diferentes opciones que Mary Kay y proveedores tienen para tí.";
	$.place.text = "Sala B";
	$.date.text = "Domingo 13 de Julio";
	$.schedule.text = "09:00 hrs. a 20:00 hrs.";	
}

if(args.id=="session4"){
	$.imageURL.url = "/images/sessions/information-icon.png";
	$.sessionName.text = "Módulo de Información";
	$.description.text = "En este módulo podrás tener información adicional de este evento.";
	$.place.text = "Vestíbulo de Expo Bancomer";
	$.date.text = "Domingo 13 de Julio";
	$.schedule.text = "09:00 hrs. a 20:00 hrs.";	
}

if(args.id=="session5"){
	$.imageURL.image = "/images/sessions/CI.png";
	$.sessionName.text = "Consulta y Aclaraciones de Reconocimientos";
	$.description.text = "Si tienes alguna duda sobre tus reconocimientos para Seminario, asiste a este módulo y te podremos ayudar.";
	$.place.text = "Vestíbulo de Expo Bancomer";
	$.date.text = "Domingo 13 de Julio";
	$.schedule.text = "09:00 hrs. a 20:00 hrs.";
}

if(args.id=="session6"){
	$.imageURL.image = "/images/sessions/taller_maquillaje.png";
	$.sessionName.text = "Talleres de Maquillaje con Francisco Iglesias";
	$.description.text = "Conoce los importantes consejos que Francisco Iglesias tiene para tí";
	$.place.text = "Sala C";
	$.date.text = "Domingo 13 de Julio";
	$.schedule.text = "09:30 hrs. a 13:30 hrs.";	
}

if(args.id=="session7"){
	$.imageURL.image = "/images/sessions/comidaespecial.png";
	$.sessionName.text = "Comida especial para Directoras y DIQs";
	$.description.text = "Esta comida especial es para las Directoras y DIQs que tengan este nivel al 1 de Julio 2014, y sus esposos inscritos.";
	$.place.text = "Salones E y F, piso 2";
	$.date.text = "Domingo 13 de Julio";
	$.schedule.text = "13:00 hrs.";	
}

if(args.id=="session8"){
	$.imageURL.image = "/images/sessions/generalsession.png";
	$.sessionName.text = "Asamblea de Apertura";
	$.description.text = "¡Descubre las novedades que tenemos para tí!\nNo te pierdas los mensajes importantes que queremos compartir, además de escuchar a increíbles maestras.";
	$.place.text = "Sala B";
	$.date.text = "Domingo 13 de Julio";
	$.schedule.text = "15:00 hrs. a 20:30 hrs.";	
}

if(args.id=="session9"){
	$.imageURL.image = "/images/sessions/transportation.png";
	$.sessionName.text = "Transportación de Expo Bancomer a Hoteles sede";
	$.description.text = "Servicio de transportación para regresar a los hoteles sede";
	$.place.text = "Sala B, planta baja";
	$.date.text = "Domingo 13 de Julio";
	$.schedule.text = "19:30 hrs. a 20:00 hrs.";	
}

if(args.id=="session10"){
	$.imageURL.image = "/images/sessions/transportation.png";
	$.sessionName.text = "Transportación de Hoteles sede a Expo Bancomer";
	$.description.text = "Para dirigirte al recinto, es necesario que te dirijas al Lobby del hotel donde te estas hospedando. Esta transportación solo es válida de Hoteles sede al recinto.";
	$.place.text = "Lobby del hotel sede";
	$.date.text = "Lunes 14 de Julio";
	$.schedule.text = "06:00 a 08:00 hrs. y 12:00 a 14:30 hrs.";
}

if(args.id=="session11"){
	$.imageURL.image = "/images/sessions/registration-de.png";
	$.sessionName.text = "Registro";
	$.description.text = "En el área de registro podrás recoger tu gafete y programa de evento.";
	$.place.text = "Vestíbulo de Expo Bancomer";
	$.date.text = "Lunes 14 de Julio";
	$.schedule.text = "07:00 hrs. a 12:00 hrs.";
}

if(args.id=="session12"){
	$.imageURL.image = "/images/sessions/lunch.png";
	$.sessionName.text = "Desayuno";
	$.description.text = "Desayuno disponible para las Consultoras inscritas a Seminario";
	$.place.text = "Sala A";
	$.date.text = "Lunes 14 de Julio";
	$.schedule.text = "07:30 hrs. a 09:00 hrs.";	
}

if(args.id=="session13"){
	$.imageURL.image = "/images/sessions/vamospor6.png";
	$.sessionName.text = "Desayuno especial Vamos por 6";
	$.description.text = "Tener seis nuevas Red Jackets en tu Unidad al cierre del mes de junio 2014. Para obtener el reconocimiento, todas las Red Jackets deben mantener su Nivel o tener un Nivel superior al cierre de junio 2014.";
	$.place.text = "Sala C";
	$.date.text = "Lunes 14 de Julio";
	$.schedule.text = "07:30 hrs. a 09:00 hrs.";	
}

if(args.id=="session14"){
	$.imageURL.url = "/images/sessions/information-icon.png";
	$.sessionName.text = "Módulo de Información";
	$.description.text = "En este módulo podrás tener información adicional de este evento.";
	$.place.text = "Vestíbulo de Expo Bancomer";
	$.date.text = "Lunes 14 de Julio";
	$.schedule.text = "07:30 hrs. a 20:00 hrs";	
}

if(args.id=="session15"){
	$.imageURL.image = "/images/sessions/expo-icon.jpg";
	$.sessionName.text = "Expo";
	$.description.text = "Descubre lo nuevo que Mary Kay tiene para tí. Asiste a la expo y conocerás las diferentes opciones que Mary Kay y proveedores tienen para tí.";
	$.place.text = "Sala B";
	$.date.text = "Lunes 14 de Julio";
	$.schedule.text = "09:00 hrs. a 20:00 hrs.";	
}

if(args.id=="session16"){
	$.imageURL.image = "/images/awards/class.png";
	$.sessionName.text = "Primera Clase";
	$.description.text = "Revisa la sección de Mis Clases para encontra cuales son las clases correspondientes a tu nivel de carrera.";
	$.place.text = "Ver sección de Mis Clases";
	$.date.text = "Lunes 14 de julio";
	$.schedule.text = "09:00 hrs. a 09:45 hrs.";	
}

if(args.id=="session17"){
	$.imageURL.url = "/images/sessions/class.png";
	$.sessionName.text = "Actividad para Esposos";
	$.description.text = "Actividad especial para los esposos inscritos a Seminario";
	$.place.text = "Salón A2";
	$.date.text = "Lunes 14 de Julio";
	$.schedule.text = "09:30 hrs. a 11:00 hrs.";	
}

if(args.id=="session18"){
	$.imageURL.image = "/images/awards/class.png";
	$.sessionName.text = "Segunda Clase";
	$.description.text = "Revisa la sección de Mis Clases para encontra cuales son las clases correspondientes a tu nivel de carrera.";
	$.place.text = "Ver sección de Mis Clases";
	$.date.text = "Lunes 14 de julio";
	$.schedule.text = "09:50 hrs. a 10:35 hrs.";	
}

if(args.id=="session19"){
	$.imageURL.image = "/images/awards/class.png";
	$.sessionName.text = "Tercera Clase";
	$.description.text = "Revisa la sección de Mis Clases para encontra cuales son las clases correspondientes a tu nivel de carrera.";
	$.place.text = "Ver sección de Mis Clases";
	$.date.text = "Lunes 14 de julio";
	$.schedule.text = "10:40 hrs. a 11:25 hrs.";	
}

if(args.id=="session20"){
	$.imageURL.image = "/images/sessions/transportation.png";
	$.sessionName.text = "Transportación de Expo Bancomer a Hoteles sede";
	$.description.text = "Servicio de transportación para regresar a los hoteles sede";
	$.place.text = "Sala B, planta baja";
	$.date.text = "Lunes 14 de Julio";
	$.schedule.text = "19:30 hrs. a 20:00 hrs.";		
}

if(args.id=="session21"){
	$.imageURL.image = "/images/sessions/lunch.png";
	$.sessionName.text = "Comida General";
	$.description.text = "Disfruta de la comida que tenemos para tí";
	$.place.text = "Sala A";
	$.date.text = "Lunes 14 de Julio";
	$.schedule.text = "12:30 hrs. a 14:30 hrs.";	
}

if(args.id=="session22"){
	$.imageURL.image = "/images/sessions/COCTEL_REAL.png";
	$.sessionName.text = "Comida Real";
	$.description.text = "Comida especial para las integrantes de las Cortes de Seminario";
	$.place.text = "Sala C";
	$.date.text = "Lunes 14 de Julio";
	$.schedule.text = "12:30 hrs. a 14:30 hrs.";	
}

if(args.id=="session23"){
	$.imageURL.image = "/images/sessions/generalsession.png";
	$.sessionName.text = "Asamblea de Premiación";
	$.description.text = "Conoce quienes son las integrantes de las Cortes de Seminario, además de quien es la ganadora de Espíritu de Entrega.";
	$.place.text = "Sala B";
	$.date.text = "Lunes 14 de Julio";
	$.schedule.text = "15:00 hrs. a 20:00 hrs.";	
}

if(args.id=="session24"){
	$.imageURL.image = "/images/sessions/transportation.png";
	$.sessionName.text = "Transportación de Expo Bancomer a Hoteles sede";
	$.description.text = "Servicio de transportación para regresar a los hoteles sede";
	$.place.text = "Sala B, planta baja";
	$.date.text = "Lunes 14 de Julio";
	$.schedule.text = "19:30 hrs. a 20:30 hrs.";	
}

if(args.id=="session25"){
	$.imageURL.image = "/images/sessions/transportation.png";
	$.sessionName.text = "Transportación de Hoteles sede a Expo Bancomer";
	$.description.text = "Para dirigirte al recinto, es necesario que te dirijas al Lobby del hotel donde te estas hospedando. Esta transportación solo es válida de Hoteles sede al recinto.";
	$.place.text = "Lobby del hotel sede";
	$.date.text = "Martes 15 de Julio";
	$.schedule.text = "08:00 hrs. a 08:45 hrs.";	
}

if(args.id=="session26"){
	$.imageURL.url = "/images/sessions/information-icon.png";
	$.sessionName.text = "Módulo de Información";
	$.description.text = "En este módulo podrás tener información adicional de este evento.";
	$.place.text = "Vestíbulo de Expo Bancomer";
	$.date.text = "Martes 15 de Julio";
	$.schedule.text = "09:00 hrs. a 12:30 hrs.";	
}

if(args.id=="session27"){
	$.imageURL.image = "/images/sessions/expo-icon.jpg";
	$.sessionName.text = "Expo";
	$.description.text = "Descubre lo nuevo que Mary Kay tiene para tí. Asiste a la expo y conocerás las diferentes opciones que Mary Kay y proveedores tienen para tí.";
	$.place.text = "Sala B";
	$.date.text = "Martes 15 de Julio";
	$.schedule.text = "09:00 hrs. a 12:30 hrs.";		
}

if(args.id=="session28"){
	$.imageURL.image = "/images/sessions/generalsession.png";
	$.sessionName.text = "Asamblea de Clausura";
	$.description.text = "No te pierdas del cierre de este evento.";
	$.place.text = "Sala B";
	$.date.text = "Martes 15 de Julio";
	$.schedule.text = "09:00 hrs. a 12:30 hrs.";	
}

if(args.id=="session29"){
	$.imageURL.image = "/images/sessions/transportation.png";
	$.sessionName.text = "Transportación de Expo Bancomer a Hoteles sede";
	$.description.text = "Servicio de transportación para regresar a los hoteles sede";
	$.place.text = "Sala B, planta baja";
	$.date.text = "Martes 15 de Julio";
	$.schedule.text = "12:00 hrs. a 13:00 hrs.";	
}



// EVENTO ZAFIRO RUBI

if(args.id=="session30"){
	$.imageURL.image = "/images/sessions/transportation.png";
	$.sessionName.text = "Transportación de Hoteles sede a Expo Bancomer";
	$.description.text = "Para dirigirte al recinto, es necesario que te dirijas al Lobby del hotel donde te estas hospedando. Esta transportación solo es válida de Hoteles sede al recinto.";
	$.place.text = "Lobby del hotel sede";
	$.date.text = "Miércoles 16 de Julio";
	$.schedule.text = "09:00 hrs. a 17:30 hrs.";
}

if(args.id=="session31"){
	$.imageURL.image = "/images/sessions/registration-de.png";
	$.sessionName.text = "Registro";
	$.description.text = "En el área de registro podrás recoger tu gafete y programa de evento.";
	$.place.text = "Vestíbulo de Expo Bancomer";
	$.date.text = "Miércoles 16 de Julio";
	$.schedule.text = "08:30 hrs. a 20:00 hrs.";	
}

if(args.id=="session32"){
	$.imageURL.image = "/images/sessions/expo-icon.jpg";
	$.sessionName.text = "Expo";
	$.description.text = "Descubre lo nuevo que Mary Kay tiene para tí. Asiste a la expo y conocerás las diferentes opciones que Mary Kay y proveedores tienen para tí.";
	$.place.text = "Sala B";
	$.date.text = "Miércoles 16 de Julio";
	$.schedule.text = "09:00 hrs. a 20:00 hrs.";	
}

if(args.id=="session33"){
	$.imageURL.url = "/images/sessions/information-icon.png";
	$.sessionName.text = "Módulo de Información";
	$.description.text = "En este módulo podrás tener información adicional de este evento.";
	$.place.text = "Vestíbulo de Expo Bancomer";
	$.date.text = "Miércoles 16 de Julio";
	$.schedule.text = "09:00 hrs. a 20:00 hrs.";	
}

if(args.id=="session34"){
	$.imageURL.image = "/images/sessions/CI.png";
	$.sessionName.text = "Consulta y Aclaraciones de Reconocimientos";
	$.description.text = "Si tienes alguna duda sobre tus reconocimientos para Seminario, asiste a este módulo y te podremos ayudar.";
	$.place.text = "Vestíbulo de Expo Bancomer";
	$.date.text = "Miércoles 16 de Julio";
	$.schedule.text = "09:00 hrs. a 20:00 hrs.";
}

if(args.id=="session35"){
	$.imageURL.image = "/images/sessions/taller_maquillaje.png";
	$.sessionName.text = "Talleres de Maquillaje con Francisco Iglesias";
	$.description.text = "Conoce los importantes consejos que Francisco Iglesias tiene para tí";
	$.place.text = "Sala C";
	$.date.text = "Miércoles 16 de Julio";
	$.schedule.text = "09:30 hrs. a 13:30 hrs.";	
}

if(args.id=="session37"){
	$.imageURL.image = "/images/sessions/comidaespecial.png";
	$.sessionName.text = "Comida especial para Directoras y DIQs";
	$.description.text = "Esta comida especial es para las Directoras y DIQs que tengan este nivel al 1 de Julio 2014, y sus esposos inscritos.";
	$.place.text = "Salones E y F, piso 2";
	$.date.text = "Miércoles 16 de Julio";
	$.schedule.text = "12:00 hrs.";	
}

if(args.id=="session37"){
	$.imageURL.image = "/images/sessions/generalsession.png";
	$.sessionName.text = "Asamblea de Apertura";
	$.description.text = "¡Descubre las novedades que tenemos para tí!\nNo te pierdas los mensajes importantes que queremos compartir, además de escuchar a increíbles maestras.";
	$.place.text = "Sala B";
	$.date.text = "Miércoles 16 de Julio";
	$.schedule.text = "14:30 hrs. a 20:30 hrs.";	
}

if(args.id=="session38"){
	$.imageURL.image = "/images/sessions/transportation.png";
	$.sessionName.text = "Transportación de Expo Bancomer a Hoteles sede";
	$.description.text = "Servicio de transportación para regresar a los hoteles sede";
	$.place.text = "Sala B, planta baja";
	$.date.text = "Miércoles 16 de Julio";
	$.schedule.text = "19:30 hrs. a 20:00 hrs.";	
}

if(args.id=="session39"){
	$.imageURL.image = "/images/sessions/transportation.png";
	$.sessionName.text = "Transportación de Hoteles sede a Expo Bancomer";
	$.description.text = "Para dirigirte al recinto, es necesario que te dirijas al Lobby del hotel donde te estas hospedando. Esta transportación solo es válida de Hoteles sede al recinto.";
	$.place.text = "Lobby del hotel sede";
	$.date.text = "Jueves 17 de Julio";
	$.schedule.text = "06:00 a 08:00 hrs. y 12:00 a 14:30 hrs.";
}

if(args.id=="session40"){
	$.imageURL.image = "/images/sessions/registration-de.png";
	$.sessionName.text = "Registro";
	$.description.text = "En el área de registro podrás recoger tu gafete y programa de evento.";
	$.place.text = "Vestíbulo de Expo Bancomer";
	$.date.text = "Jueves 17 de Julio";
	$.schedule.text = "07:00 hrs. a 12:00 hrs.";
}

if(args.id=="session41"){
	$.imageURL.image = "/images/sessions/lunch.png";
	$.sessionName.text = "Desayuno";
	$.description.text = "Desayuno disponible para las Consultoras inscritas a Seminario";
	$.place.text = "Sala A";
	$.date.text = "Jueves 17 de Julio";
	$.schedule.text = "07:30 hrs. a 09:00 hrs.";	
}

if(args.id=="session42"){
	$.imageURL.image = "/images/sessions/vamospor6.png";
	$.sessionName.text = "Desayuno especial Vamos por 6";
	$.description.text = "Tener seis nuevas Red Jackets en tu Unidad al cierre del mes de junio 2014. Para obtener el reconocimiento, todas las Red Jackets deben mantener su Nivel o tener un Nivel superior al cierre de junio 2014.";
	$.place.text = "Sala C";
	$.date.text = "Jueves 17 de Julio";
	$.schedule.text = "07:30 hrs. a 09:00 hrs.";	
}

if(args.id=="session43"){
	$.imageURL.url = "/images/sessions/information-icon.png";
	$.sessionName.text = "Módulo de Información";
	$.description.text = "En este módulo podrás tener información adicional de este evento.";
	$.place.text = "Vestíbulo de Expo Bancomer";
	$.date.text = "Jueves 17 de Julio";
	$.schedule.text = "07:30 hrs. a 20:00 hrs";	
}

if(args.id=="session44"){
	$.imageURL.image = "/images/sessions/expo-icon.jpg";
	$.sessionName.text = "Expo";
	$.description.text = "Descubre lo nuevo que Mary Kay tiene para tí. Asiste a la expo y conocerás las diferentes opciones que Mary Kay y proveedores tienen para tí.";
	$.place.text = "Sala B";
	$.date.text = "Jueves 17 de Julio";
	$.schedule.text = "09:00 hrs. a 20:00 hrs.";	
}

if(args.id=="session45"){
	$.imageURL.image = "/images/awards/class.png";
	$.sessionName.text = "Primera Clase";
	$.description.text = "Revisa la sección de Mis Clases para encontra cuales son las clases correspondientes a tu nivel de carrera.";
	$.place.text = "Ver sección de Mis Clases";
	$.date.text = "Jueves 17 de Julio";
	$.schedule.text = "09:00 hrs. a 09:45 hrs.";	
}

if(args.id=="session46"){
	$.imageURL.url = "/images/sessions/class.png";
	$.sessionName.text = "Actividad para Esposos";
	$.description.text = "Actividad especial para los esposos inscritos a Seminario";
	$.place.text = "Salón A2";
	$.date.text = "Jueves 17 de Julio";
	$.schedule.text = "09:30 hrs. a 11:00 hrs.";	
}

if(args.id=="session47"){
	$.imageURL.image = "/images/awards/class.png";
	$.sessionName.text = "Segunda Clase";
	$.description.text = "Revisa la sección de Mis Clases para encontra cuales son las clases correspondientes a tu nivel de carrera.";
	$.place.text = "Ver sección de Mis Clases";
	$.date.text = "Jueves 17 de Julio";
	$.schedule.text = "09:50 hrs. a 10:35 hrs.";	
}

if(args.id=="session48"){
	$.imageURL.image = "/images/awards/class.png";
	$.sessionName.text = "Tercera Clase";
	$.description.text = "Revisa la sección de Mis Clases para encontra cuales son las clases correspondientes a tu nivel de carrera.";
	$.place.text = "Ver sección de Mis Clases";
	$.date.text = "Jueves 17 de Julio";
	$.schedule.text = "10:40 hrs. a 11:25 hrs.";	
}

if(args.id=="session49"){
	$.imageURL.image = "/images/sessions/transportation.png";
	$.sessionName.text = "Transportación de Expo Bancomer a Hoteles sede";
	$.description.text = "Servicio de transportación para regresar a los hoteles sede";
	$.place.text = "Sala B, planta baja";
	$.date.text = "Jueves 17 de Julio";
	$.schedule.text = "19:30 hrs. a 20:00 hrs.";		
}

if(args.id=="session50"){
	$.imageURL.image = "/images/sessions/lunch.png";
	$.sessionName.text = "Comida General";
	$.description.text = "Disfruta de la comida que tenemos para tí";
	$.place.text = "Sala A";
	$.date.text = "Jueves 17 de Julio";
	$.schedule.text = "12:30 hrs. a 14:30 hrs.";	
}

if(args.id=="session51"){
	$.imageURL.image = "/images/sessions/COCTEL_REAL.png";
	$.sessionName.text = "Comida Real";
	$.description.text = "Comida especial para las integrantes de las Cortes de Seminario";
	$.place.text = "Sala C";
	$.date.text = "Jueves 17 de Julio";
	$.schedule.text = "12:30 hrs. a 14:30 hrs.";	
}

if(args.id=="session52"){
	$.imageURL.image = "/images/sessions/generalsession.png";
	$.sessionName.text = "Asamblea de Premiación";
	$.description.text = "Conoce quienes son las integrantes de las Cortes de Seminario, además de quien es la ganadora de Espíritu de Entrega.";
	$.place.text = "Sala B";
	$.date.text = "Jueves 17 de Julio";
	$.schedule.text = "15:00 hrs. a 20:00 hrs.";	
}

if(args.id=="session53"){
	$.imageURL.image = "/images/sessions/transportation.png";
	$.sessionName.text = "Transportación de Expo Bancomer a Hoteles sede";
	$.description.text = "Servicio de transportación para regresar a los hoteles sede";
	$.place.text = "Sala B, planta baja";
	$.date.text = "Jueves 17 de Julio";
	$.schedule.text = "19:30 hrs. a 20:30 hrs.";	
}

if(args.id=="session54"){
	$.imageURL.image = "/images/sessions/transportation.png";
	$.sessionName.text = "Transportación de Hoteles sede a Expo Bancomer";
	$.description.text = "Para dirigirte al recinto, es necesario que te dirijas al Lobby del hotel donde te estas hospedando. Esta transportación solo es válida de Hoteles sede al recinto.";
	$.place.text = "Lobby del hotel sede";
	$.date.text = "Viernes 18 de Julio";
	$.schedule.text = "08:00 hrs. a 08:45 hrs.";	
}

if(args.id=="session55"){
	$.imageURL.url = "/images/sessions/information-icon.png";
	$.sessionName.text = "Módulo de Información";
	$.description.text = "En este módulo podrás tener información adicional de este evento.";
	$.place.text = "Vestíbulo de Expo Bancomer";
	$.date.text = "Viernes 18 de Julio";
	$.schedule.text = "09:00 hrs. a 12:30 hrs.";	
}

if(args.id=="session56"){
	$.imageURL.image = "/images/sessions/expo-icon.jpg";
	$.sessionName.text = "Expo";
	$.description.text = "Descubre lo nuevo que Mary Kay tiene para tí. Asiste a la expo y conocerás las diferentes opciones que Mary Kay y proveedores tienen para tí.";
	$.place.text = "Sala B";
	$.date.text = "Viernes 18 de Julio";
	$.schedule.text = "09:00 hrs. a 12:30 hrs.";		
}

if(args.id=="session57"){
	$.imageURL.image = "/images/sessions/generalsession.png";
	$.sessionName.text = "Asamblea de Clausura";
	$.description.text = "No te pierdas del cierre de este evento.";
	$.place.text = "Sala B";
	$.date.text = "Viernes 18 de Julio";
	$.schedule.text = "09:00 hrs. a 12:30 hrs.";	
}

if(args.id=="session58"){
	$.imageURL.image = "/images/sessions/transportation.png";
	$.sessionName.text = "Transportación de Expo Bancomer a Hoteles sede";
	$.description.text = "Servicio de transportación para regresar a los hoteles sede";
	$.place.text = "Sala B, planta baja";
	$.date.text = "Viernes 18 de Julio";
	$.schedule.text = "12:00 hrs. a 13:00 hrs.";	
}
