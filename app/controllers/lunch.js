	
	
function search(evt){
	var w= Alloy.createController('results').getView();
 	Ti.App.fireEvent('myCustomEvent', {
    myCustomEventValue: $.txtsearch.value
});
            w.open();
            $.breakfast.close();
	
}
Ti.App.addEventListener('myCustomEvent', function(event) {
  $.txtarea.value = "Calories: " + event.myCustomEventValue;
});
$.lunch.open();