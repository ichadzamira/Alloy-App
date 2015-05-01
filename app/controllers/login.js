var Cloud = require('ti.cloud');

function login(evt){

 Cloud.Users.login({
    login: $.txtuser.value,
    password: $.txtpass.value
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Success');
           var w= Alloy.createController('index').getView();
            w.open();
            $.login.close();
            
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
}
function sign(e){
	
	var w= Alloy.createController('sign_up').getView();
 
            w.open();
            $.login.close();
	
	
	
}
