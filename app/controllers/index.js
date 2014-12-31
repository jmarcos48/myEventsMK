var seminar = "";

if(Alloy.Globals.seminarID == 1){
	seminar = "DE";
}else{
	seminar = "ZR";
}

function doClick(e) {
    alert($.label.text);
}

if(!Alloy.Globals.isLogged){
	
	var loginView = Alloy.createController("login").getView();
	loginView.open();
	
}

exports.openIndex = function(){
	$.index.open();
};

if(OS_IOS){
	Ti.include('Urban.js');
	UrbanAirship.key='GkdW4Uu_TyKAFxvmTfNtDg';
	UrbanAirship.secret ='J5UJZkawTZWOWrU1wX7G4g';
	UrbanAirship.master_secret='QDH0oZWDSb-0BeYOiNDiPA';
	UrbanAirship.baseurl = 'https://go.urbanairship.com';
	Ti.Network.registerForPushNotifications({
	  types: [
	    Ti.Network.NOTIFICATION_TYPE_BADGE,
	    Ti.Network.NOTIFICATION_TYPE_ALERT,
	    Ti.Network.NOTIFICATION_TYPE_SOUND
	  ],
	  success:function(e){
	    var deviceToken = e.deviceToken;
	    Ti.API.info('successfully registered for apple device token with '+e.deviceToken);
	    var params = {
	      tags: ['MX', 'SEM2014', seminar],
	      alias: Alloy.Globals.loggedUser
	    };
	    UrbanAirship.register(params, function(data) {
	      Ti.API.debug("registerUrban success: " + JSON.stringify(data));
	    }, function(errorregistration) {
	      Ti.API.warn("Couldn't register for Urban Airship");
	    });
	  },
	  error:function(e) {
	    Ti.API.warn("push notifications disabled: "+e);
	  },
	  callback:function(e) {
	    var a = Ti.UI.createAlertDialog({
	      title:'Nuevo mensaje',
	      message:e.data.alert
	    });
	    a.show();
	  }
	});	
}

if(OS_ANDROID){
	Ti.include(Titanium.Filesystem.resourcesDirectory+'Urban.js');
}

 