

var titleLabel = Titanium.UI.createLabel({
    color:'#FBC9BA',
    text:'Mis Reconocimientos',
    font:{fontWeight:'bold', fontSize:'16'}
});


if(OS_IOS) {   
   $.socialWindow.setTitleControl(titleLabel);
}

Alloy.Globals.veriftDataBase();
var db = Titanium.Database.open('Events');
var rows = db.execute("SELECT a.* FROM Award a JOIN Rel_UserAward ra where a.AwardID = ra.AwardID and ra.ConsultantID = '" + Alloy.Globals.loggedUser + "';");

var results = [];
while (rows.isValidRow()) {          	                   
          results.push({
            awardID: rows.fieldByName('AwardID'),
            awardName: rows.fieldByName('AwardName'),
            awardRules: rows.fieldByName('Rules'),
            awardImage: rows.fieldByName('AwardImageURL')
          });
         
          rows.next();
}
rows.close();

// create item table view
itemRows = [];
for (var c=0;c<results.length;c++)
{
	var item = results[c];
	var row = Ti.UI.createTableViewRow({height:'80',layout:'horizontal',id:item.awardID});
		
	var imagePhoto = Ti.UI.createImageView({image:item.awardImage, left:'5'});
	row.add(imagePhoto);

	var customView = Ti.UI.createView({
		id:'rowContainer',
		layout:'vertical',
		textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,
		width: Ti.UI.FILL
		});
	
	var awardLabel = Ti.UI.createLabel({
		id: 'awardName',
		text: item.awardName,
		font: { fontSize: 12, fontWeight:'bold'},
		color: "black",
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		top: 20,
		left: 5
	});
	customView.add(awardLabel);
	
	var rulesLabel = Ti.UI.createLabel({
		id: 'textInfo',
		text: item.awardRules,
		font: { fontSize: 10},
		color: "gray",
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		left: 5
	});
	customView.add(rulesLabel);
	row.add(customView);
	
	itemRows[c] = row;
}

$.awardsTable.data = itemRows;
db.close();