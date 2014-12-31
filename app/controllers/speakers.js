function openSpeakerDetail(){
	var args = {
		id: this.id
	};
			
	var speakerDetail = Alloy.createController("speakerdetail", args);
	speakerDetail.openMainWindow($.SpeakersTab);
}

var titleLabel = Titanium.UI.createLabel({
    color:'#FBC9BA',
    text:'Maestras',
    font:{fontWeight:'bold', fontSize:'16'}
});


if(OS_IOS) {   
   $.speakersWindow.setTitleControl(titleLabel);
}



Alloy.Globals.veriftDataBase();
var db = Titanium.Database.open('Events');
var rows = db.execute('SELECT * FROM Speaker where EventID = ' + Alloy.Globals.seminarID + ' and Resume <> "";');

var results = [];
while (rows.isValidRow()) {          	                   
          results.push({
            speakerID: rows.fieldByName('SpeakerID'),
            speakerName: rows.fieldByName('SpeakerName'),
            speakerPhoto: rows.fieldByName('SpeakerPhotoURL'),
            title: rows.fieldByName('Title')
          });
         
          rows.next();
}
rows.close();

// create item table view
itemRows = [];
for (var c=0;c<results.length;c++)
{
	var item = results[c];
	var row = Ti.UI.createTableViewRow({height:'90',layout:'horizontal',id:item.speakerID,hasChild:true});
	row.addEventListener('click', openSpeakerDetail);
		
	var imagePhoto = Ti.UI.createImageView({image:item.speakerPhoto, width:'100px', left:'10'});
	row.add(imagePhoto);

	var customView = Ti.UI.createView({
		id:'rowContainer',
		layout:'vertical',
		textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,
		width: Ti.UI.FILL
		});
	
	var speakerLabel = Ti.UI.createLabel({
		id: 'sessionName',
		text: item.speakerName,
		font: { fontSize: 14, fontWeight:'bold'},
		color: "black",
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		top: 20,
		left: 5
	});
	customView.add(speakerLabel);
	
	var titleLabel = Ti.UI.createLabel({
		id: 'textInfo',
		text: item.title,
		font: { fontSize: 11},
		color: "gray",
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		left: 5
	});
	customView.add(titleLabel);
	row.add(customView);
	
	itemRows[c] = row;
}

$.speakersTable.data = itemRows;
db.close();
