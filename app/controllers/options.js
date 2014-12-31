function openSocialNetworks(){
	var sessionDetail = Alloy.createController("socialdetail");
	sessionDetail.openSocialDetailWindow($.SocialTab);
}

var titleLabel = Titanium.UI.createLabel({
    color:'#FBC9BA',
    text:'Más Opciones',
    font:{fontWeight:'bold', fontSize:'16'}
});


if(OS_IOS) {   
   $.optionsWindow.setTitleControl(titleLabel);
}
