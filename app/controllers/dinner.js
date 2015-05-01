function search(evt){
	var w= Alloy.createController('results3').getView();
 	Ti.App.fireEvent('myCustomEvent', {
    myCustomEventValue: $.txtsearch.value
});
            w.open();
            $.dinner.close();
	
}
Ti.App.addEventListener('myCustomEvent', function(event) {
  $.txtarea.value = "Calories: " + event.myCustomEventValue;
});
function Back(e){
	
	var w= Alloy.createController('index').getView();
	 w.open();
            $.dinner.close();
	
}
function submit(evt){
	
	Ti.App.fireEvent('myCustomEvent', {
    myCustomEventValue: $.txtarea.value
	});
	var w= Alloy.createController('index').getView();
	 w.open();
            $.dinner.close();
}
$.dinner.open();