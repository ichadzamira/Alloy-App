	
	
function search(evt){
	var w= Alloy.createController('results2').getView();
 	Ti.App.fireEvent('myCustomEvent', {
    myCustomEventValue: $.txtsearch.value
});
            w.open();
            $.lunch.close();
	
}
Ti.App.addEventListener('myCustomEvent', function(event) {
  $.txtarea.value = "Calories: " + event.myCustomEventValue;
});
function Back(e){
	
	var w= Alloy.createController('index').getView();
	 w.open();
            $.lunch.close();
	
}
function submit(evt){
	
	Ti.App.fireEvent('myCustomEvent', {
    myCustomEventValue: $.txtarea.value
	});
	var w= Alloy.createController('index').getView();
	 w.open();
            $.lunch.close();
}
$.lunch.open();