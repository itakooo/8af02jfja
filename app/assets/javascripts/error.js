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