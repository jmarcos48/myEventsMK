// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

Alloy.Globals.isLogged = false;
Alloy.Globals.loggedUser = '000000';
Alloy.Globals.seminarID = 0;


Alloy.Globals.veriftDataBase = function() {

	//Check if the file is there (see the database path above)
	var f = Ti.Filesystem.getFile(
	Ti.Filesystem.applicationDataDirectory, '/data_version01/Events.sqlite');
	//If it's there, delete it and reinstall the DB
	if(f.exists() == true){
	     
	     f.deleteFile();
	     Ti.Database.install('/data_version01/Events.sqlite', 'Events');
	}else{
	     //Otherwise, install it for the first time
	     Ti.Database.install('/data_version01/Events.sqlite', 'Events');
	}

};