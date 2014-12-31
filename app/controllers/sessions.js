function openSessionDetail(){
	var args = {
		id: this.id
	};
	
	var sessionDetail = Alloy.createController("sessiondetail", args);
	sessionDetail.openMainWindow($.SessionsTab);
}

var titleLabel = Titanium.UI.createLabel({
    color:'#FBC9BA',
    text:'Seminario 2014',
    font:{fontWeight:'bold', fontSize:'16'}
});


if(OS_IOS) {   
   $.sessionWindow.setTitleControl(titleLabel);
}

if(Alloy.Globals.seminarID == 1){
	$.event01Filters.visible = true;
	$.event02Filters.visible = false;
	$.day1.visible = true;
}else{
	$.event01Filters.visible = false;
	$.event02Filters.visible = true;	
	$.day4.visible = true;
}

if(Alloy.isTablet) {
    $.day1.top = 100;
    $.day2.top = 100;
    $.day3.top = 100;
    $.day4.top = 100;
    $.day5.top = 100;
    $.day6.top = 100;
}

function day01(){
	$.buttonDay01.backgroundImage = "/images/filters/day01-on.png";
	$.buttonDay02.backgroundImage = "/images/filters/day02-off.png";
	$.buttonDay03.backgroundImage = "/images/filters/day03-off.png";
	
	$.day1.visible = "true";
	$.day2.visible = "false";
	$.day3.visible = "false";
	
}

function day02(){
	$.buttonDay01.backgroundImage = "/images/filters/day01-off.png";
	$.buttonDay02.backgroundImage = "/images/filters/day02-on.png";
	$.buttonDay03.backgroundImage = "/images/filters/day03-off.png";
	
	$.day1.visible = "false";
	$.day2.visible = "true";
	$.day3.visible = "false";
}

function day03(){
	$.buttonDay01.backgroundImage = "/images/filters/day01-off.png";
	$.buttonDay02.backgroundImage = "/images/filters/day02-off.png";
	$.buttonDay03.backgroundImage = "/images/filters/day03-on.png";
	
	$.day1.visible = "false";
	$.day2.visible = "false";
	$.day3.visible = "true";
}


function day04(){
	$.buttonDay04.backgroundImage = "/images/filters/day04-on.png";
	$.buttonDay05.backgroundImage = "/images/filters/day05-off.png";
	$.buttonDay06.backgroundImage = "/images/filters/day06-off.png";
	
	$.day4.visible = "true";
	$.day5.visible = "false";
	$.day6.visible = "false";
	
}

function day05(){
	$.buttonDay04.backgroundImage = "/images/filters/day04-off.png";
	$.buttonDay05.backgroundImage = "/images/filters/day05-on.png";
	$.buttonDay06.backgroundImage = "/images/filters/day06-off.png";
	
	$.day4.visible = "false";
	$.day5.visible = "true";
	$.day6.visible = "false";
}

function day06(){
	$.buttonDay04.backgroundImage = "/images/filters/day04-off.png";
	$.buttonDay05.backgroundImage = "/images/filters/day05-off.png";
	$.buttonDay06.backgroundImage = "/images/filters/day06-on.png";
	
	$.day4.visible = "false";
	$.day5.visible = "false";
	$.day6.visible = "true";
}

/*
var db = Ti.Database.install('/data/Events.sqlite','Events');
var rows = db.execute('SELECT * FROM Session;');

var results = [];
while (rows.isValidRow()) {          	                   
          results.push({
            sessionid: rows.fieldByName('SessionID'),
            sessionname: rows.fieldByName('SessionName'),
            description: rows.fieldByName('Description'),
            sessiondate: rows.fieldByName('SessionDate'),
            sessiontime: rows.fieldByName('SessionTime'),
            venue: rows.fieldByName('Venue')
          });
         
          rows.next();
}
rows.close();
*/
