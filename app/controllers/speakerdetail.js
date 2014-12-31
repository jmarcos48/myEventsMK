exports.openMainWindow = function(_tab){
	_tab.open($.speakerDetailWindow);
};

var titleLabel = Titanium.UI.createLabel({
    color:'#FBC9BA',
    text:'Detalle de Maestras',
    font:{fontWeight:'bold', fontSize:'16'}
});


if(OS_IOS) {   
   $.speakerDetailWindow.setTitleControl(titleLabel);
}

var args = arguments[0] || {};

Alloy.Globals.veriftDataBase();
var db = Titanium.Database.open('Events');
var rows = db.execute("SELECT * FROM Speaker where SpeakerID = " + args.id + ";");

var results = [];
while (rows.isValidRow()) {          	                   
          results.push({
            speakerID: rows.fieldByName('SpeakerID'),
            speakerName: rows.fieldByName('SpeakerName'),
            speakerPhoto: rows.fieldByName('SpeakerPhotoURL'),
            title: rows.fieldByName('Title'),
            resume: rows.fieldByName('Resume'),
          });
         
          rows.next();
}
rows.close();
db.close();

if(results){
	var item = results[0];
	
	$.imageURL.image = item.speakerPhoto;
	$.sessionName.text = item.speakerName;
	$.description.text = item.title;
	$.place.text = item.resume;
	
}


/*
if(args.id=="speaker1"){
	$.imageURL.image = "/images/speakers/speaker1.png";
	$.sessionName.text = "Beatriz Lozano de LLaca";
	$.description.text = "Directora Nacional de Ventas Independiente";
	$.place.text = "Inició su carrera en diciembre de 1994 debutando como Directora de Ventas Independiente al siguiente año.\n Su liderazgo la llevó a debutar como Directora Nacional de Ventas Independiente en abril de 2006.\n\n Su carrera ha sido tenaz lo que le ha permitido disfrutar de muchos reconocimientos entre los que destacan ser integrante de la corte de la Reina de Iniciación en 2 ocasiones, integrante de la Corte de la Reina de Ventas Personales Directoras en una ocasión, integrante de la Corte de la Reina de Unit Club en 7 ocasiones.\n Ganadora de 4 Viajes Internacionales y 8 viajes como Directora Nacional.\n Se caracteriza por ser una mujer organizada, activa y alegre.";
}


if(args.id=="speaker2"){
	$.imageURL.image = "/images/speakers/speaker2.png";
	$.sessionName.text = "Laura Valdés de Perry";
	$.description.text = "Directora Nacional de Ventas Independiente";
	$.place.text = "Inició su carrera en noviembre de 1990 debutando como Directora de Ventas Independiente en mayo de 1994.  \n Su tenacidad la llevó a debutar como Directora Nacional de Ventas Independiente en enero de 2003.\n\nSu carrera ha sido comprometida y estable lo que le ha permitido disfrutar de grandes reconocimientos entre los que destacan integrante de la Corte de la Reina de Iniciación en 2 ocasiones, integrante de la corte de la Reina de Ventas Personales Directoras en 10 ocasiones como Primera Princesa en el año de 1993, integrante de la corte de la Reina de Unit Club en 8 ocasiones. \nGanadora de 8 Viajes Internacionales y 10 viajes como Directora Nacional. Se caracteriza por ser una mujer mentora, dinámica y aventurada.";
}


if(args.id=="speaker3"){
	$.imageURL.image = "/images/speakers/speaker3.png";
	$.sessionName.text = "Rocío A. Hernandez de la Fuente";
	$.description.text = "Directora Nacional de Ventas Independiente";
	$.place.text = "Inició su Carrera en agosto de 1996 debutando como Directora de Ventas Independiente en noviembre de 1997.\nSu tenacidad y gran ilusión la llevó a debutar como Directora Nacional de Ventas Independiente en noviembre de 2006.\n\nSu Carrera ha sido disciplinada lo que le ha permitido disfrutar de muchos reconocimientos entre los que destacan ser integrante de la Corte de la Reina de Iniciación en 2 ocasiones, integrante de la Corte de la Reina de Unit Club en 8 ocasiones.\nGanadora de 6 Viajes Internacionales y 7 viajes como Directora Nacional.\nSe caracteriza por ser una mujer espiritual, sensible y valiente.";
}

if(args.id=="speaker4"){
	$.imageURL.image = "/images/speakers/speaker4.png";
	$.sessionName.text = "Sonia Munguía Ceballos";
	$.description.text = "Directora Nacional de Ventas Independiente";
	$.place.text = "Inició su Carrera en enero de 1994 debutando como Directora de Ventas Independiente en mayo de 1995.\nSu actitud firme la llevó a debutar como Directora Nacional de Ventas Independiente en agosto de 2004.\n\nSu carrera ha sido exitosa y brillante lo que le ha permitido disfrutar de muchos reconocimientos entre los que destacan ganadora del Espíritu de Entrega en el año de 2004, integrante de la Corte de la Reina de Iniciación en 8 ocasiones, integrante de la corte de la Reina de Ventas Directoras en 6 ocasiones, integrante de la corte de la Reina de Unit Club en 8 ocasiones, como segunda Princesa en el año de 2001, como Reina en los años 2002, 2003 y 2004.\nGanadora de 12 Viajes Internacionales y 9 viajes como Directora Nacional.\nSe caracteriza por ser una mujer perseverante, positiva y transparente.";
}

if(args.id=="speaker5"){
	$.imageURL.image = "/images/speakers/speaker5.png";
	$.sessionName.text = "Alejandra del Rocío Becerra González";
	$.description.text = "Directora Nacional Ejecutiva de Ventas Independiente";
	$.place.text = "Inició su carrera en enero de 1989  debutando como Directora de Ventas Independiente en febrero de 1991.\n\nSu gran liderazgo la llevó a debutar como Directora Nacional de Ventas Independiente en diciembre de 1994, siendo la segunda Directora Nacional en nuestro país, en julio de 1998 debuta como Directora Nacional Senior y como Directora Nacional Ejecutiva de Ventas Independiente a partir de abril de 2007.\n\nSu carrera ha sido llevada con perseverancia y constancia lo que le ha permitido disfrutar de muchos reconocimientos entre los que destacan ser  integrante de la Corte de la Reina de Iniciación en 3 ocasiones, de la cuál fue Princesa en el año de 1993, integrante de la Corte de la Reina de Ventas Personales Directoras en una ocasión, integrante de la Corte de la Reina de Unit Club en 4 ocasiones.\n\nGanadora de 13 Viajes Internacionales y 38 viajes como Directora Nacional. Integrante del Inner Circle.\n\nSe caracteriza por ser una mujer vanguardista, analítica y activa.";
}

if(args.id=="speaker6"){
	$.imageURL.image = "/images/speakers/speaker6.png";
	$.sessionName.text = "Aydé González de Martínez";
	$.description.text = "Directora Nacional Senior de Ventas Independiente";
	$.place.text = "Inició su carrera en noviembre de 1988 debutando como Directora de Ventas Independiente en noviembre de 1989. \n\nSu anhelo y compromiso la llevó a debutar como Directora Nacional de Ventas Independiente en mayo de 1999, y como Directora Nacional Senior de Ventas Independiente en enero de 2003.\n\nSu carrera ha sido disciplinada lo que le ha permitido disfrutar de reconocimientos entre los que destacan ser integrante de la Corte de la Reina de Unit Club en 6 ocasiones.\n\nGanadora de 11 Viajes Internacionales y 14 viajes como Directora Nacional. Es Miembro Fundador de Mary Kay Cosmetics. Integrante del prestigioso Inner Circle.\n\nSe caracteriza por ser una mujer honesta, espiritual e integra.";
}

if(args.id=="speaker7"){
	$.imageURL.image = "/images/speakers/speaker7.png";
	$.sessionName.text = "Elizabeth Ojeda Bustamante";
	$.description.text = "Directora Nacional de Ventas Independiente";
	$.place.text = "Inició su Carrera en septiembre de 1989 debutando como Directora de Ventas Independiente en septiembre del siguiente año.\n\nSu dedicación y esfuerzo la llevó a debutar como Directora Nacional de Ventas Independiente en mayo de 2000.\n\nSu gran entusiasmo le ha permitido disfrutar de muchos reconocimientos entre los que destacan ser integrante de la Corte de la Reina de Iniciación en 2 ocasiones, integrante de la Corte de la Reina de Ventas Personales Directora en una ocasión, integrante de la Corte de la Reina de Unit Club en 8 ocasiones.\n\nGanadora de 9 Viajes Internacionales y 12 viajes como Directora Nacional, Liz es integrante del prestigioso Inner Circle.\n\nSe caracteriza por ser una mujer fiel, responsable y organizada.";
}

if(args.id=="speaker8"){
	$.imageURL.image = "/images/speakers/speaker8.png";
	$.sessionName.text = "Guadalupe Castro Mendoza, Pipis";
	$.description.text = "Directora Nacional Senior de Ventas Independiente";
	$.place.text = "Inició su carrera en enero de 1991 debutando como Directora de Ventas Independiente en noviembre de 1992.\n\nSu liderazgo la llevó a debutar como Directora Nacional de Ventas Independiente en Mayo de 1997, y en Abril de 2006 como Directora Nacional Senior de Ventas Independiente.\n\nSu gran compromiso y entusiasmo le ha permitido disfrutar de muchos reconocimientos entre los que destacan ser integrante de la Corte de la Reina de Unit Club en 4 ocasiones.\n\nGanadora de 11 Viajes Internacionales y 17 viajes como Directora Nacional.\n\nSe caracteriza por ser una mujer entusiasta, carismática y alegre.";
}

if(args.id=="speaker9"){
	$.imageURL.image = "/images/speakers/speaker9.png";
	$.sessionName.text = "Julieta Ruiz de Rivera";
	$.description.text = "Directora Nacional Senior de Ventas Independiente";
	$.place.text = "Inició su carrera en diciembre de 1990 debutando como Directora de Ventas Independiente en junio de 1993.\n\nSu gran compromiso la llevó a debutar como Directora Nacional de Ventas Independiente en abril de 2007, y como Directora Nacional Senior a partir de Junio de 2008.\n\nSu carrera ha sido entusiasta, su enfoque le ha permitido disfrutar de muchos reconocimientos entre los que destacan ser integrante de la Corte de la Reina de Ventas Personales Directoras en una ocasión, integrante de la Corte de la Reina de Unit Club en 11 ocasiones.\n\nGanadora de 6 Viajes Internacionales y 7 viajes como Directora Nacional.\n\nSe caracteriza por ser una mujer franca, valiente y tenaz.";
}


if(args.id=="speaker10"){
	$.imageURL.image = "/images/speakers/speaker10.png";
	$.sessionName.text = "Laura DeGivez Camacho";
	$.description.text = "Directora Nacional de Ventas Independiente";
	$.place.text = "Inició su carrera en marzo de 1995 debutando como Directora de Ventas Independiente en agosto del siguiente año.\n\nSu gran sueño la llevó a debutar como Directora Nacional de Ventas Independiente en agosto del 2011.\n\nBrillante y exitosa ha sido su carrera lo que le ha permitido disfrutar de muchos reconocimientos entre los que destacan ser integrante de la Corte de la Reina de Unit Club en 14 ocasiones, como primera Princesa en 2 ocasiones en los años de 2009 y 2010, como segunda Princesa en 3 ocasiones en los años 2003, 2004  y 2005, y como Reina de la Corte en 4 ocasiones durante los años de 2006, 2007, 2008 y 2011.\n\nGanadora de 20 Viajes Internacionales y 2 viajes como Directora Nacional.\n\nSe caracteriza por ser una mujer constante, disciplinada y organizada.";
}

if(args.id=="speaker11"){
	$.imageURL.image = "/images/speakers/speaker11.png";
	$.sessionName.text = "Lilia Lazareno de Cuevas";
	$.description.text = "Directora Nacional de Ventas Independiente";
	$.place.text = "Inició su carrera en septiembre de 1992 debutando como Directora de Ventas Independiente en noviembre del siguiente año.\n\nSu liderazgo la llevó a debutar como Directora Nacional de Ventas Independiente en julio de 1998 y como Directora Nacional Senior de Ventas Independiente a partir de diciembre del 2006.\n\nSu carrera ha sido disciplinada lo que le ha permitido disfrutar de muchos reconocimientos entre los que destacan ser integrante de la corte de la Reina de Unit Club en 3 ocasiones.\n\nGanadora de 8 Viajes Internacionales y 18 viajes como Directora Nacional. Integrante del prestigioso Inner Circle.\n\nSe caracteriza por ser una mujer soñadora, leal y generosa.";
}

if(args.id=="speaker12"){
	$.imageURL.image = "/images/speakers/speaker12.png";
	$.sessionName.text = "Luz Ma. Almaraz de García";
	$.description.text = "Directora Nacional Senior de Ventas Independiente";
	$.place.text = "Inició su Carrera en junio de 1993 debutando como Directora de Ventas Independiente al siguiente año en diciembre.\n\nSu gran liderazgo la llevó a debutar como Directora Nacional de Ventas Independiente en agosto de 2003, y Directora Nacional Senior de Ventas Independiente en mayo de 2008.\n\nSu exitosa y constante carrera le ha permitido disfrutar de muchos reconocimientos entre los que destacan, ganadora de Espíritu de Entrega en los años 1998, 2000 y 2002, integrante de la Corte de la Reina de Ventas Personales Directoras en 5 ocasiones, integrante de la Corte de Unit Club en 8 ocasiones, como Princesa en 3 ocasiones durante los años 2000, 2002 y 2003, y como Reina en el año de 2001.\n\nGanadora de 10 Viajes Internacionales y 12 viajes como Directora Nacional. Es integrante del reconocido Inner Circle.\n\nSe caracteriza por ser una mujer trabajadora, dinámica y emprendedora.";
}


if(args.id=="speaker13"){
	$.imageURL.image = "/images/speakers/speaker13.png";
	$.sessionName.text = "Ma. Isabel González González";
	$.description.text = "Directora Nacional de Ventas Independiente";
	$.place.text = "Inició su Carrera en marzo de 1990 debutando como Directora de Ventas Independiente al siguiente año durante el mes de diciembre.\n\nSu tenacidad  la llevó a debutar como Directora Nacional de Ventas Independiente en Diciembre de 2006, como Directora Nacional Senior en julio de 2013.\n\nSu Carrera ha sido extraordinaria, su liderazgo le ha permitido disfrutar de muchos reconocimientos entre los que destacan ser integrante de la Corte de Iniciación en 10 ocasiones como primera Princesa en 3 ocasiones y como segunda Princesa en una ocasión, Reina en los años de 1995 y 1997, integrante de la Corte de la Reina de Ventas Personales Directoras en 6 ocasiones, como primera Princesa en el año de 2003, como Reina en el año de 2004,  integrante de la Corte de la Reina de Unit Club en 11 ocasiones.\n\nGanadora de 10 Viajes Internacionales y 7 viajes como Directora Nacional.\n\nSe caracteriza por ser una mujer humana, comprometida y segura de sí misma.";
}

if(args.id=="speaker14"){
	$.imageURL.image = "/images/speakers/speaker14.png";
	$.sessionName.text = "Maricela Becerra de Meza";
	$.description.text = "Directora Nacional Senior de Ventas Independiente";
	$.place.text = "Inició su carrera en febrero de 1989 debutando como Directora de Ventas Independiente al siguiente año durante el mes de diciembre.\n\nSu fortaleza y tenacidad la llevó a debutar como Directora Nacional de Ventas Independiente en octubre de 1999, como Directora Nacional Senior en octubre de 2004.\n\nSu gran liderazgo y compromiso le ha permitido disfrutar de muchos reconocimientos entre los que destacan ser integrante de la Corte de la Reina de Iniciación en 3 ocasiones, integrante de la Corte de la Reina de Ventas Directoras en 4 ocasiones, integrante de la Corte de la Reina de Unit Club en 5 ocasiones.\n\nGanadora de 8 Viajes Internacionales y 20 viajes como Directora Nacional. Integrante del prestigioso Inner Circle.\n\nSe caracteriza por ser una mujer honrada, compartida e intuitiva.";
}

if(args.id=="speaker15"){
	$.imageURL.image = "/images/speakers/speaker15.png";
	$.sessionName.text = "Maricela Leal de Dávila";
	$.description.text = "Directora Nacional Ejecutiva de Ventas Independiente";
	$.place.text = "Inició su carrera en noviembre de 1988 debutando como Directora de Ventas Independiente en enero de 1990.\n\nSu tenacidad y liderazgo la llevó a debutar como Directora Nacional de Ventas Independiente en agosto de 1996, como Directora Nacional Senior en mayo de 2003, y como Directora Nacional Ejecutiva en enero de 2006.\n\nSu exitosa, brillante y sobresaliente carrera le ha permitido disfrutar de muchos reconocimientos entre los que destacan ser integrante de la Corte de la Reina de Ventas Consultoras en una ocasión, integrante de la corte de la Reina de Ventas Directoras en una ocasión, integrante de la Corte de la Reina de Iniciación en 5 ocasiones siendo Princesa en los años de 1990, 1991 y 1992, Reina en los años de 1993 y 1994, integrante de la corte de la Reina de Unit Club en 6 ocasiones, como Princesa en los años de 1993, 1994 y 1996 y Reina en el año de 1995.\n\nGanadora de 16 Viajes Internacionales y 32 viajes como Directora Nacional.\n\nSe caracteriza por ser una mujer perseverante, mujer de reto y audaz.";
}

if(args.id=="speaker16"){
	$.imageURL.image = "/images/speakers/speaker16.png";
	$.sessionName.text = "Ma. Trinidad Rubio de Villegas “Paloma”";
	$.description.text = "Directora Nacional de Ventas Independiente";
	$.place.text = "Inició su carrera en junio de 1998 debutando como Directora de Ventas Independiente en septiembre del siguiente año.\n\nSu entrega y compromiso  la llevó a debutar como Directora Nacional de Ventas Independiente en marzo de 2013.\n\nSu exitosa carrera le ha permitido disfrutar de muchos reconocimientos entre los que destacan ser integrante del Espíritu de Entrega en 2 ocasiones, integrante de la Corte de la Reina de Iniciación en 7 ocasiones, integrante de la Corte de la Reina de Ventas Personales Directoras en 10 ocasiones, integrante de la Corte de la Reina de Unit Club en 11 ocasiones.\n\nGanadora de 7 Viajes Internacionales y un viaje como Directora Nacional.\n\nSe caracteriza por ser una mujer entusiasta, alegre y servicial.";
}

if(args.id=="speaker17"){
	$.imageURL.image = "/images/speakers/speaker17.png";
	$.sessionName.text = "Mireya Aurora Fernández de Narváez";
	$.description.text = "Directora Nacional Senior de Ventas Independiente";
	$.place.text = "Inició su carrera en diciembre de 1988 debutando como Directora de Ventas Independiente en enero de 1990.\n\nSu notable liderazgo la llevó a debutar como Directora Nacional de Ventas Independiente en octubre de 1996, y como Directora Nacional Senior en agosto de 2003, Directora Nacional Ejecutiva en Noviembre de 2013.\n\nSu carrera ha sido constante y brillante, lo que le ha permitido disfrutar de muchos reconocimientos entre los que destacan ser integrante de la corte de la Reina de Iniciación en una ocasión, integrante de la Corte de la Reina de Ventas Personales Directoras en una ocasión, integrante de la Corte de la Reina de Unit Club en 6 ocasiones, como segunda Princesa en los años de 1992, 1993 y 1996.\n\nGanadora de 19 Viajes Internacionales y 34 viajes como Directora Nacional. Integrante del prestigioso Inner Circle. Miembro fundador de Mary Kay Cosmétics de México.\n\nSe caracteriza por ser una mujer detallista, creativa e imparable.";
}

if(args.id=="speaker18"){
	$.imageURL.image = "/images/speakers/speaker18.png";
	$.sessionName.text = "Patricia Leyva de Medina";
	$.description.text = "Directora Nacional Senior de Ventas Independiente";
	$.place.text = "Inició su carrera en octubre de 1989 debutando como Directora de Ventas Independiente en junio de 1991.\n\nSu compromiso y desarrollo de Directoras la llevó a debutar como Directora Nacional de Ventas Independiente en enero de 2002 y como Directora Nacional Senior en abril de 2012.\n\nSu carrera ha sido exitosa y excepcional lo que le ha permitido disfrutar de muchos reconocimientos entre los que destacan, ganadora del Espíritu de Entrega en el año de 1998, integrante de la Corte de la Reina de Iniciación en 2 ocasiones, integrante de la Corte de la Reina de Ventas Directoras en 4 ocasiones, integrante de la Corte de la Reina de Unit Club en 8 ocasiones, como Princesa en una ocasión, y como Reina en 3 ocasiones en los años de 1998, 1999 y 2000.\n\nGanadora de 14 Viajes Internacionales y  18 viajes como Directora Nacional, integrante del Inner Circle.\n\nSe caracteriza por ser una mujer tranquila, tenaz y triunfadora.";
}

if(args.id=="speaker19"){
	$.imageURL.image = "/images/speakers/speaker19.png";
	$.sessionName.text = "Patricia Rivera Noriega";
	$.description.text = "Directora Nacional Ejecutiva de Ventas Independiente";
	$.place.text = "Inició su carrera en abril de 1989 debutando como Directora de Ventas Independiente en marzo de 1991.\n\nSu gran fortaleza y compromiso la llevó a debutar como Directora Nacional de Ventas Independiente en marzo de 1997, en agosto de 2003 debuta como Directora Nacional Senior y a partir de septiembre de 2011 debuta como Directora Nacional Ejecutiva de Ventas Independiente.\n\nSu dedicación en su carrera le ha permitido disfrutar de muchos reconocimientos entre los que destacan ser integrante de la Corte de la Reina de Unit Club en 4 ocasiones.\n\nGanadora de 13 Viajes Internacionales y 32 viajes como Directora Nacional. Integrante del Inner Circle.\n\nSe caracteriza por ser una mujer optimista, trabajadora y constante.";
}

if(args.id=="speaker20"){
	$.imageURL.image = "/images/speakers/speaker20.png";
	$.sessionName.text = "Paulina Leticia Márquez de Islas";
	$.description.text = "Directora Nacional Ejecutiva de Ventas Independiente";
	$.place.text = "Inició su carrera en enero de 1989 debutando como Directora de Ventas Independiente en mayo de 1990.\n\nSu gran visión y liderazgo la llevó a debutar como Directora Nacional de Ventas Independiente en julio de 1996, como Directora Nacional Senior en enero de 2002, y como Directora Nacional Ejecutiva a partir de septiembre de 2011.\n\nSu excepcional y admirable carrera le ha permitido disfrutar de muchos reconocimientos entre los que destacan, ser integrante de la Corte de la Reina de Iniciación en una ocasión, integrante de la Corte de la Reina de Ventas Directoras en 3 ocasiones, integrante de la Corte de la Reina de Unit Club en 6 ocasiones, como Princesa en el año de 1995, y como Reina durante los años de 1994 y 1996.\n\nGanadora de 15 Viajes Internacionales y 32 viajes como Directora Nacional, Directora Nacional Número uno del Seminario Zafiro-Rubí en 13 ocasiones, es integrante del reconocido Inner Circle.\n\nSe caracteriza por ser una mujer segura de sí misma, fiel a sus metas, y disciplinada.";
}

if(args.id=="speaker21"){
	$.imageURL.image = "/images/speakers/speaker21.png";
	$.sessionName.text = "Rosa Irma Gordillo de Esquivel";
	$.description.text = "Directora Nacional de Ventas Independiente";
	$.place.text = "Inició su Carrera en diciembre de 1990 debutando como Directora de Ventas Independiente en septiembre de 1991.\n\nSu gran liderazgo y visión la llevó a debutar como Directora Nacional de Ventas Independiente en enero de 1996,  y como Directora Nacional Senior en Julio de 2013.\n\nSu carrera ha sido exitosa, su entrega y compromiso le han permitido disfrutar de muchos reconocimientos entre los que destacan, ser integrante de la Corte de la Reina de Ventas Personales Directoras en 2 ocasiones, integrante de la Corte de Unit Club en 5 ocasiones de la cual fue Princesa en el año de 1995.\n\nGanadora de 11 Viajes Internacionales y 22 como Directora Nacional. Fundadora del Consejo Nacional de Directoras, Integrante del prestigioso Inner Circle.\n\nSe caracteriza por ser una mujer positiva, entregada y trabajadora.";
}

if(args.id=="speaker22"){
	$.imageURL.image = "/images/speakers/speaker22.png";
	$.sessionName.text = "Sandra Tamayo de Islas";
	$.description.text = "Directora Nacional de Ventas Independiente";
	$.place.text = "Inició su Carrera en agosto de 1996 y al año se gradúa como Directora de Ventas Independiente en octubre de 1997.\n\nEl desarrollo de Directoras fortaleció su liderazgo que la llevó a debutar como Directora Nacional de Ventas Independiente en mayo de 2008.\n\nSu Carrera ha sido comprometida, su capacidad y entusiasmo le han permitido disfrutar de muchos reconocimientos entre los que destacan ser integrante de la Corte de la Reina de Iniciación en 3 ocasiones, integrante de la Corte de la Reina de Ventas en 5 ocasiones, integrante de la Corte de la Reina de Unit Club en 9 ocasiones como primera Princesa en el 2007.\n\nHa ganado 12 Viajes Internacionales y 6 viajes como Directora Nacional.\n\nSe caracteriza por ser una mujer feliz, comprometida y positiva.";
}

if(args.id=="speaker23"){
	$.imageURL.image = "/images/speakers/speaker23.png";
	$.sessionName.text = "Yazmine Alfaro Fattel";
	$.description.text = "Directora Nacional Senior de Ventas Independiente";
	$.place.text = "Inició su Carrera en julio de 1992 debutando como Directora de Ventas Independiente en marzo del siguiente año.\n\nSu entusiasmo y compromiso la llevó a debutar como Directora Nacional Senior de Ventas Independiente en septiembre de 2011.\n\nSu carrera ha sido notable, su tenacidad le ha permitido disfrutar de muchos reconocimientos entre los que destacan Ganadora de Espíritu de Entrega en el año de 1995, integrante de la Corte de la Reina de Ventas Personales Directoras en 15 ocasiones, integrante de la Corte de la Reina de Unit Club en 17 ocasiones de la cual fue primera Princesa en 2010. \n\nGanadora de 13 Viajes Internacionales y  2 viajes como Directora Nacional.\n\nSe caracteriza por ser una mujer comprometida, perseverante y activa.";
}

*/