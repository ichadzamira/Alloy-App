var Cloud = require('ti.cloud');

function doClick(e) {
 var w= Alloy.createController('breakfast').getView();
            w.open();
            $.index.close();
}
function doClick2(e) {
 var w= Alloy.createController('lunch').getView();
            w.open();
            $.index.close();
}
function doClick3(e) {
 var w= Alloy.createController('dinner').getView();
            w.open();
            $.index.close();
}


Ti.App.addEventListener('myCustomEvent', function(event) {


	var counter = parseInt($.counter.text);
	var data = parseInt(event.myCustomEventValue);
  counter = counter - data;
  $.counter.text = String(counter);

});



//open window
    var w= Alloy.createController('login').getView();
            w.open();



 
