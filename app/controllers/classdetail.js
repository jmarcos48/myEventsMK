exports.openMainWindow = function(_tab){
	_tab.open($.classDetailWindow);
};

var titleLabel = Titanium.UI.createLabel({
    color:'#FBC9BA',
    text:'Detalle de Clases',
    font:{fontWeight:'bold', fontSize:'16'}
});


if(OS_IOS) {   
   $.classDetailWindow.setTitleControl(titleLabel);

}

if(Alloy.isTablet) {
    $.speaker1.height = 150;
}


var args = arguments[0] || {};

Alloy.Globals.veriftDataBase();
var db = Titanium.Database.open('Events');
var rows = db.execute("SELECT c.ClassID, c.ClassName, c.Description, c.ClassDate, c.ClassTime, c.Venue, c.ClassImageURL, s.SpeakerName, s.SpeakerPhotoURL, s.Title FROM Class c LEFT JOIN Rel_ClassSpeaker rs on c.ClassID = rs.ClassID LEFT JOIN Speaker s on s.SpeakerID = rs.SpeakerID where c.ClassID = " + args.id + ";");

var results = [];
while (rows.isValidRow()) {          	                   
          results.push({
            classID: rows.fieldByName('ClassID'),
            className: rows.fieldByName('ClassName'),
            classDescription: rows.fieldByName('Description'),
            classDate: rows.fieldByName('ClassDate'),
            classTime: rows.fieldByName('ClassTime'),
            classVenue: rows.fieldByName('Venue'),
            classImageURL: rows.fieldByName('ClassImageURL'),
            speakerName: rows.fieldByName('SpeakerName'),
            speakerTitle: rows.fieldByName('Title'),
            speakerPhoto: rows.fieldByName('SpeakerPhotoURL'),
            
          });
         
          rows.next();
}
rows.close();
db.close();

if(results){
	
	var item = results[0];
	
	$.imageURL.image = item.classImageURL;
	$.sessionName.text = item.className;
	$.description.text = item.classDescription;
	$.place.text = item.classVenue;
	$.date.text = item.classDate;
	$.schedule.text = item.classTime;
	
	//$.speakerName.text = item.speakerName;
	//$.speakerTitle.text = item.speakerTitle;
	//$.speakerPhoto.image = item.speakerPhoto;		
		
}