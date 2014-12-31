var args = arguments[0] || {};


if(OS_IOS){
	$.navGroupWin.open();	
}else{
	$.loginWindow.open();
}


Alloy.Globals.veriftDataBase();

function login(){
	
	if($.userName.value == ""){
		alert("Es necesario que proporciones tu Número de Consultora");
	}
	
	if($.userPassword.value == ""){
		alert("Es necesario que proporciones tu Número de Consultora");
	}
	
	if($.userName.value != "" && $.userPassword.value != ""){		


		var db = Titanium.Database.open('Events');
		var query = "";
		query = "SELECT * FROM Users where ConsultantID = '" + $.userName.value + "';";
		var rows = db.execute(query);
		
		var results = [];
		while (rows.isValidRow()) {          	                   
		          results.push({
		            consultantID: rows.fieldByName('ConsultantID'),
		            password: rows.fieldByName('Password'),
		            eventid: rows.fieldByName('EventID')
		          });
		         
		          rows.next();
		}
		rows.close();
		db.close();
		
		
		if(results){
			
			var item = results[0];
			
			//var tempPassword = $.userPassword.value.toUpperCase();
			//var tempPasswordDB = item.password.toUpperCase();			
		
			//if(tempPassword == tempPasswordDB){
				
				Alloy.Globals.isLogged = true;
				Alloy.Globals.loggedUser = $.userName.value;
				Alloy.Globals.seminarID = item.eventid;
				
				
				
				
				if(OS_IOS){
					$.navGroupWin.close();	
				}else{
					$.loginWindow.close();
				}
				
				
				var mainView = Alloy.createController("index");
				mainView.openIndex();			
						
			//}else{
			//	alert("Número de Consultora o Contraseña incorrectos");
			//}						
		}else{
			alert("No se encontró información de este Número de Consultora");
		}	

	}
	
}

function about(){
	var view = Alloy.createController("about", args).getView();
	//view.open();
	$.navGroupWin.openWindow(view);
}
