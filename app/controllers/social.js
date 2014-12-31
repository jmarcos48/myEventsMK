function openSocialNetworks(){
	var sessionDetail = Alloy.createController("socialdetail");
	sessionDetail.openSocialDetailWindow($.SocialTab);
}

var titleLabel = Titanium.UI.createLabel({
    color:'#FBC9BA',
    text:'Redes Sociales',
    font:{fontWeight:'bold', fontSize:'16'}
});


if(OS_IOS) {   
   $.socialWindow.setTitleControl(titleLabel);
}

function openSocialWeb(event){
	var args = {
		id: this.id
	};
	var detailview = Alloy.createController("socialdetail", args);	
	detailview.openSocialDetailWindow($.SocialTab);
	
}
