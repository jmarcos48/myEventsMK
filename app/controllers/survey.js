var args = arguments[0] || {};

var titleLabel = Titanium.UI.createLabel({
    color:'#FBC9BA',
    text:'Encuesta',
    font:{fontWeight:'bold', fontSize:'16'}
});


if(OS_IOS) {   
   $.surveyWindow.setTitleControl(titleLabel);
}

if(Alloy.Globals.seminarID != 1){
	$.webview.url = "http://www.surveygizmo.com/s3/1727068/Seminario-2014-Zafiro-Rubi";
	
}else{
	$.webview.url = "http://www.surveygizmo.com/s3/1727051/Seminario-2014-Diamante-Esmeralda";
}

