var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.isLogged = false;

Alloy.Globals.loggedUser = "000000";

Alloy.Globals.seminarID = 0;

Alloy.Globals.veriftDataBase = function() {
    var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "/data_version01/Events.sqlite");
    if (true == f.exists()) {
        f.deleteFile();
        Ti.Database.install("/data_version01/Events.sqlite", "Events");
    } else Ti.Database.install("/data_version01/Events.sqlite", "Events");
};

Alloy.createController("index");