//= require jquery
//= require jquery_ujs
//= require jquery.ui.core
//= require jquery.ui.widget
//= require jquery.ui.mouse
//= require jquery.ui.draggable

var $me = null; // 自分オブジェクト
var cnt = 0; // 自分オブジェクトのカウンタ

//-------------------------------------------------------------------------
// '自分'ボタン
$( function() {
    $( '#me' ).click( function(evt) {
	cnt++;
	if (cnt == 1){ // 自分は1つだけ
	    $me = $('<div class = "object_me"><img src = "/assets/me.png"></div>')
	    
	    // シングルクリック -> 選択タグを追加
		.mousedown( function() {
		    $('*').removeClass('selected_img');
		    $(this).addClass('selected_img');
		})
	    
      	    // ダブルクリック -> 対象を消去
		.dblclick( function() {
		    $('.object_me').remove();
		    $me = null
		    cnt = 0;
		    save();
		})
		.css('position', 'absolute')
		.appendTo('div.ui-widget-content')
		.draggable( {
		    containment: '#jquery-ui-draggable-wrap',
		    grid: [25, 25],
		    opacity: 0.5,
		    scroll: false,
		    
		    // ドラッグが終わったとき情報を保存
		    stop:function() {
			save();
		    }
		});
	    save();
	}});
});
//-------------------------------------------------------------------------
// '面接官'ボタン
$( function() {
    $( '#interviewer' ).click( function(evt) {
	$('<div class="object_interviewer"><img src = "/assets/interviewer.png" ></div>')
	
	// シングルクリック -> 選択タグを追加
	    .mousedown( function() {
		$('*').removeClass('selected_img');
		$(this).addClass('selected_img');
	    })
	
	// ダブルクリック -> 対象を消去
	    .dblclick( function() {
		$('.selected_img').remove();
		save(); // オブジェクトが消去されたとき再度保存し直す
	    })
	    .css("position", "absolute")
	    .appendTo('div.ui-widget-content')
	    .draggable( {
		containment: "#jquery-ui-draggable-wrap",
		grid: [25, 25],
		opacity: 0.5,
		scroll: false,
		
		// ドラッグが終わったとき情報を保存
		stop:function() {
		    save();
		}
	    });
	save();
    });
});
//-------------------------------------------------------------------------
// '他の受験者'ボタン
$( function() {
    $( '#other' ).click( function(evt) {
	$('<div class="object_other"><img src = "/assets/other.png" ></div>')
	
	// シングルクリック -> 選択タグを追加
	    .mousedown( function() {
		$('*').removeClass('selected_img');
		$(this).addClass('selected_img');
	    })

	// ダブルクリック -> 対象を消去
	    .dblclick( function() {
		$('.selected_img').remove();
		save();  // オブジェクトが消去されたとき再度保存し直す
	    })
	    .css("position", "absolute")
	    .appendTo('div.ui-widget-content')
	    .draggable( {
		containment: "#jquery-ui-draggable-wrap",
		grid: [25, 25],
		opacity: 0.5,
		scroll: false,

		// ドラッグが終わったとき情報を保存				
		stop:function() {
		    save();
		}
	    });
	save();
    });
});
//-------------------------------------------------------------------------
// 'メモ'ボタン
$( function() {
    $( '#addtext' ).click( function(evt) {
	$('<div class = "sticky" style="width:160px">メモを入力してください</div>')
	
	// ダブルクリック -> 編集へ
	    .dblclick( function() {
		$(this).wrapInner('<textarea id=input maxlength="25"></textarea>')
		    .find('textarea')
		    .focus()
		    .select()

		// フォーカスが外れたとき
		    .blur( function() {
			// テキストが空ならオブジェクトを削除し全体を保存
			if ($(this).val() == ""){
			    $(this).parent().remove();
			    save();
			}
			else { // テキスト情報を保存
			    $(this).parent().html($(this).val());
			    save();
			}
		    })
	    })
	    .css("position", "absolute")
	    .appendTo('div.ui-widget-content')
	    .draggable( {
		containment: "#jquery-ui-draggable-wrap",
		grid: [25, 25],
		opacity: 0.5,
		scroll: false,

		// ドラッグが終わったとき情報を保存
		stop:function() {
		    save();
		}
	    });
	save();
    });
});
//-------------------------------------------------------------------------
// 'ホワイトボード'ボタン
$( function() {
    $( '#whiteboard' ).click( function(evt) {
	$('<div class="object_whiteboard_horizontal"><img src = "/assets/whiteboard_horizontal.png" ></div>')

	// シングルクリック -> 選択タグを追加
	    .mousedown( function() {
		$('.object_whiteboard').removeClass('selected_img_large');
		$(this).addClass('selected_img_large');
	    })


	// 右クリック -> 画像差し替えによる回転
	    .bind('contextmenu', function() {
		var $img = $(this).children();
		if ($img.attr('src') == '/assets/whiteboard_horizontal.png'){
		    $img.attr('src', '/assets/whiteboard_vertical.png');
		    $(this).attr('class', 'object_whiteboard_vertical');
		}
		else {
		    $img.attr('src', '/assets/whiteboard_horizontal.png');
		    $(this).attr('class', 'object_whiteboard_horizontal');
		}
		save();
		
		return false;
	    })

	// ダブルクリック -> 対象を消去
	    .dblclick( function() {
		$('.selected_img_large').remove();
		save();
	    })
	    .css("position", "absolute")
	    .appendTo('div.ui-widget-content')
	    .draggable( {
		containment: "#jquery-ui-draggable-wrap",
		grid: [25, 25],
		opacity: 0.5,
		scroll: false,

		// ドラッグが終わったとき情報を保存
		stop:function() {
		    save();
		}
	    });
	save();
    });
});
//-------------------------------------------------------------------------
// 'ドア'ボタン
$( function() {
    $( '#door' ).click( function(evt) {
	$('<div class="object_door"><img src = "/assets/door.png" ></div>')

	// シングルクリック -> 選択タグを追加
	    .mousedown( function() {
		$('*').removeClass('selected_img');
		$(this).addClass('selected_img');
	    })

	// ダブルクリック -> 対象を消去
	    .dblclick( function() {
		$('.selected_img').remove();
		save();
	    })

	    .css("position", "absolute")
	    .appendTo('div.ui-widget-content')
	    .draggable( {
		containment: "#jquery-ui-draggable-wrap",
		grid: [25, 25],
		opacity: 0.5,
		scroll: false,

		stop:function() {
		    save();
		}
	    });
	save();
    });
});
//-------------------------------------------------------------------------
// 'テーブル'ボタン
$( function() {
    $( '#table' ).click( function(evt) {
	$('<div class="object_table"><img src = "/assets/table.png" ></div>')

	// シングルクリック -> 選択タグを追加
	    .mousedown( function() {
		$('*').removeClass('selected_img');
		$(this).addClass('selected_img');
	    })

	// ダブルクリック -> 対象を消去
	    .dblclick( function() {
		$('.selected_img').remove();
		save();
	    })

	    .css("position", "absolute")
	    .appendTo('div.ui-widget-content')
	    .draggable( {
		containment: "#jquery-ui-draggable-wrap",
		grid: [25, 25],
		opacity: 0.5,
		scroll: false,

		stop:function() {
		    save();
		}
	    });
	save();
    });
});
//-------------------------------------------------------------------------
// オブジェクト情報を保存
function save() {
    var parent = $("div.ui-widget-content").offset();
    var interviewers = [];
    var others = [];
    var stickies = [];
    var txt = "";
    var separator = "&&";

    // 自分
    if ($me != null){
	txt += "me" + separator;
	txt += Math.floor(($me.position().top - parent.top)/25).toString() + separator; 
	txt += Math.floor(($me.position().left - parent.left)/25).toString() + separator + "nil" + separator;
    }

    // 面接官
    $('.object_interviewer').each( function() {
	txt += "iv" + separator;
	txt += Math.floor(($(this).position().top - parent.top)/25).toString() + separator;
	txt += Math.floor(($(this).position().left - parent.left)/25).toString() + separator + "nil" + separator;
    });

    // 他の受験者
    $('.object_other').each( function() {
	txt += "ot" + separator;
	txt += Math.floor(($(this).position().top - parent.top)/25).toString() + separator;
	txt += Math.floor(($(this).position().left - parent.left)/25).toString() + separator + "nil" + separator;
    });

    // ホワイトボード(縦)
    $('.object_whiteboard_vertical').each( function() {
	txt += "wv" + separator;
	txt += Math.floor(($(this).position().top - parent.top)/25).toString() + separator;
	txt += Math.floor(($(this).position().left - parent.left)/25).toString() + separator + "nil" + separator;
    });

    // ホワイトボード(横)
    $('.object_whiteboard_horizontal').each( function() {
	txt += "wh" + separator;
	txt += Math.floor(($(this).position().top - parent.top)/25).toString() + separator;
	txt += Math.floor(($(this).position().left - parent.left)/25).toString() + separator + "nil" + separator;
    });

    // テーブル
    $('.object_table').each( function() {
	txt += "tb" + separator;
	txt += Math.floor(($(this).position().top - parent.top)/25).toString() + separator;
	txt += Math.floor(($(this).position().left - parent.left)/25).toString() + separator + "nil" + separator;
    });
    
    // ドア
    $('.object_door').each( function() {
	txt += "dr" + separator;
	txt += Math.floor(($(this).position().top - parent.top)/25).toString() + separator;
	txt += Math.floor(($(this).position().left - parent.left)/25).toString() + separator + "nil" + separator;
    });

    // メモ
    $('.sticky').each( function() {
	txt += "mm" + separator;
	txt += Math.floor(($(this).position().top - parent.top)/25).toString() + separator;
	txt += Math.floor(($(this).position().left - parent.left)/25).toString() + separator;
	txt += $(this).text() + separator;
    });

    console.log(txt)
    document.getElementById('draw_txt').value = txt
}
//-------------------------------------------------------------------------
// 'クリア'ボタン
$( function() {
    $( '#clear-button' ).click( function(evt) {
	$("div.ui-widget-content").empty(); // すべてのオブジェクトを消去
	cnt = 0;
    });
});