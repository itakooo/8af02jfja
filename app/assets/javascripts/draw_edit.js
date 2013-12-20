//= require jquery
//= require jquery_ujs
//= require jquery.ui.core
//= require jquery.ui.widget
//= require jquery.ui.mouse
//= require jquery.ui.draggable

var $me = null;
var cnt = 0; // me counter

//////////////////////////////////////////////////////
// ready to drag existed objects
$( function() {
	// me
	$me = $( '.object_me' )
	    // single click event
		.mousedown( function() {
			$('.object_me').removeClass('selected_img');
			$('.object_interviewer').removeClass('selected_img');
			$('.object_other').removeClass('selected_img');
			$(this).addClass('selected_img');
		})
        // double click event
		.dblclick( function() {
			$('.object_me').remove();
			$me = null
			cnt = 0;
			save();
		})
		.draggable( {
			containment: "#jquery-ui-draggable-wrap",
			grid: [25, 25],
			opacity: 0.5,
			scroll: false,
			
			// save when draggging stopped
			stop:function() {
				save();
			}
		});

	// interviewer
	$( '.object_interviewer' )
 	    // single click event
		.mousedown( function() {
			$('.object_me').removeClass('selected_img');
			$('.object_interviewer').removeClass('selected_img');
			$('.object_other').removeClass('selected_img');
			$(this).addClass('selected_img');
		})

		// double click event
		.dblclick( function() {
			$('.selected_img').remove();
			save(); // immediately save if a selected object removed
		})
		.draggable( {
			containment: "#jquery-ui-draggable-wrap",
			grid: [25, 25],
			opacity: 0.5,
			scroll: false,
			
			// save when draggging stopped
			stop:function() {
				save();
			}
		});

	// other
	$( '.object_other' )
		.mousedown( function() {
			$('.object_me').removeClass('selected_img');
			$('.object_interviewer').removeClass('selected_img');
			$('.object_other').removeClass('selected_img');
			$(this).addClass('selected_img');
		})

		// double click event
		.dblclick( function() {
			$('.selected_img').remove();
			save(); // immediately save if a selected object removed
		})
		.draggable( {
			containment: "#jquery-ui-draggable-wrap",
			grid: [25, 25],
			opacity: 0.5,
			scroll: false,
				
			// save when draggging stopped
			stop:function() {
				save();
			}
		});
	

	// sticky
	$( '.object_sticky' )
		// double click event
		.dblclick( function() {
			$(this).wrapInner('<textarea id=input maxlength="25"></textarea>')
				.find('textarea')
				.focus()
				.select()
			
			    // when focus is gone
				.blur( function() {
					// if text is none, object will remove
					if ($(this).val() == ""){
						$(this).parent().remove();
						save();
					} else {
						$(this).parent().html($(this).val());
						save();
					}
				})
		})
		.draggable( {
			containment: "#jquery-ui-draggable-wrap",
			grid: [25, 25],
			opacity: 0.5,
			scroll: false,
			// save when draggging stopped
			stop:function() {
				save();
			}
		});
});
//////////////////////////////////////////////////////
// button of 'me'
$( function() {
	$( '#me' ).click( function(evt) {
		cnt++;
		if (cnt == 1){ // me can only exist alone
			$me = $('<div class = "object_me"><img src = "/assets/me.png"></div>')

		        // single click event
				.mousedown( function() {
					$('.object_me').removeClass('selected_img');
					$('.object_interviewer').removeClass('selected_img');
					$('.object_other').removeClass('selected_img');
					$(this).addClass('selected_img');
				})
			
      			// double click event
				.dblclick( function() {
					$('.object_me').remove();
					$me = null
					cnt = 0;
					save();
				})
				.css("position", "absolute")
				.prependTo('div.ui-widget-content')
				.draggable( {
					containment: "#jquery-ui-draggable-wrap",
					grid: [25, 25],
					opacity: 0.5,
					scroll: false,

					// save objects when dragging stopped
					stop:function() {
						save();
					}
				});
		}});
});
//////////////////////////////////////////////////////
// button of 'interviewer'
$( function() {
	$( '#interviewer' ).click( function(evt) {
		$('<div class="object_interviewer"><img src = "/assets/interviewer.png" ></div>')

		    // single click event
			.mousedown( function() {
				$('.object_me').removeClass('selected_img');
				$('.object_interviewer').removeClass('selected_img');
				$('.object_other').removeClass('selected_img');
				$(this).addClass('selected_img');
			})

		    // double click event
			.dblclick( function() {
				$('.selected_img').remove();
				save(); // immediately save if a selected object removed
			})
			.css("position", "absolute") // absolute(important)
			.prependTo('div.ui-widget-content')
			.draggable( {
				containment: "#jquery-ui-draggable-wrap",
				grid: [25, 25],
				opacity: 0.5,
				scroll: false,

				// save when draggging stopped
				stop:function() {
					save();
				}
			});
	});
});
//////////////////////////////////////////////////////
// button of 'other'
$( function() {
	$( '#other' ).click( function(evt) {
		$('<div class="object_other"><img src = "/assets/other.png" ></div>')

		    // single click event
			.mousedown( function() {
				$('.object_me').removeClass('selected_img');
				$('.object_interviewer').removeClass('selected_img');
				$('.object_other').removeClass('selected_img');
				$(this).addClass('selected_img');
			})

		    // double click event
			.dblclick( function() {
				$('.selected_img').remove();
				save(); // immediately save if a selected object removed
			})
			.css("position", "absolute") // absolute(important)
			.prependTo('div.ui-widget-content')
			.draggable( {
				containment: "#jquery-ui-draggable-wrap",
				grid: [25, 25],
				opacity: 0.5,
				scroll: false,

				// save when draggging stopped
				stop:function() {
					save();
				}
			});
	});
});
//////////////////////////////////////////////////////
// button of 'sticky'
$( function() {
	$( '#addtext' ).click( function(evt) {
		$('<div class = "object_sticky" style="width=100px">メモを入力してください</div>')
		    // double click event
			.dblclick( function() {
				$(this).wrapInner('<textarea id=input maxlength="25"></textarea>')
					.find('textarea')
					.focus()
					.select()

				    // when focus is gone
					.blur( function() {
						// if text is none, object will remove
						if ($(this).val() == ""){
							$(this).parent().remove();
							save();
						} else {
							$(this).parent().html($(this).val());
							save();
						}
					})
			})
			.css("position", "absolute")
			.prependTo('div.ui-widget-content')
			.draggable( {
				containment: "#jquery-ui-draggable-wrap",
				grid: [25, 25],
				opacity: 0.5,
				scroll: false,
				// save when draggging stopped
				stop:function() {
					save();
				}
			});
	});
});
//////////////////////////////////////////////////////
// button of 'whiteboard'

//////////////////////////////////////////////////////
// save objects
function save() {
	var parent = $("div.ui-widget-content").offset();
	var interviewers = [];
	var others = [];
	var stickies = [];
	var txt = "";
	var separator = "&&";

	if ($me != null){
		txt += "me" + separator;
		txt += Math.floor(($me.position().top - parent.top)/25).toString() + separator; 
		txt += Math.floor(($me.position().left - parent.left)/25).toString() + separator + "nil" + separator;
	}

	$('.object_interviewer').each( function() {
		txt += "iv" + separator;
		txt += Math.floor(($(this).position().top - parent.top)/25).toString() + separator;
		txt += Math.floor(($(this).position().left - parent.left)/25).toString() + separator + "nil" + separator;
	});

	$('.object_other').each( function() {
		txt += "ot" + separator;
		txt += Math.floor(($(this).position().top - parent.top)/25).toString() + separator;
		txt += Math.floor(($(this).position().left - parent.left)/25).toString() + separator + "nil" + separator;
	});

	$('.object_sticky').each( function() {
		txt += "mm" + separator;
		txt += Math.floor(($(this).position().top - parent.top)/25).toString() + separator;
		txt += Math.floor(($(this).position().left - parent.left)/25).toString() + separator;
		txt += $(this).text() + separator;
	});

	console.log(txt)
	document.getElementById('draw_txt').value = txt
}
//////////////////////////////////////////////////////
// clear button
$( function() {
	$( '#clear-button' ).click( function(evt) {
		$("div.ui-widget-content").empty();
		cnt = 0;
	});
});
