//= require gmaps4rails/gmaps4rails.base
//= require gmaps4rails/gmaps4rails.bing
//= require gmaps4rails/gmaps4rails.googlemaps
//= require gmaps4rails/gmaps4rails.mapquest
//= require gmaps4rails/gmaps4rails.openlayers

// エラーフォームを適用
$( function() {
    var errors = $('.field_with_errors').children();
    for (var i = 0; i < errors.length; i++){
	var target = errors.eq(i);
	target.prependTo(target.parent().parent());
	if (target.parent().attr('class') == 'control-group')
	    target.parent().attr('class', 'control-group error')
    }
    $('.field_with_errors').remove();
});