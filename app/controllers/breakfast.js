
	
	

function search(evt){
	var w= Alloy.createController('results').getView();
 	Ti.App.fireEvent('myCustomEvent', {
    myCustomEventValue: $.txtsearch.value
});
            w.open();
            $.breakfast.close();
	
}
Ti.App.addEventListener('myCustomEvent', function(event) {
  var data = event.myCustomEventValue;
  $.txtarea.value =  data;
});
function submit(evt){
	
	Ti.App.fireEvent('myCustomEvent', {
    myCustomEventValue: $.txtarea.value
	});
	var w= Alloy.createController('index').getView();
	 w.open();
            $.breakfast.close();
}
function Back(e){
	
	var w= Alloy.createController('index').getView();
	 w.open();
            $.breakfast.close();
	
}
$.breakfast.open();
