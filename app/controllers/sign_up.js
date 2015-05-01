var Cloud = require('ti.cloud');

function sign_up(e){
Cloud.Users.create({
    email: $.txtemail.value,
    first_name: $.txtfirst.value,
    last_name: $.txtlast.value,
    username: $.txtusername.value,
    password: $.txtpass.value,
    password_confirmation: $.txtpassconfirm.value
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'sessionId: ' + Cloud.sessionId + '\n' +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
	var w= Alloy.createController('login').getView();
 
            w.open();
            $.sign_up.close();

}
function cancel(e){
	
	var w= Alloy.createController('login').getView();
 
            w.open();
            $.sign_up.close();
	
}
$.sign_up.open();
