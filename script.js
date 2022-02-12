$(function(){
  // 変数navPosに、nav要素の初期位置を代入
  var navPos = $("nav").offset().top;

  // ブラウザをスクロール
  $(window).scroll(function(){
    // スクロール量とnav要素の初期位置を比較
    if($(window).scrollTop() > navPos){
      // 条件を満たした場合：nav要素をブラウザ上部に固定
      $("nav").css("position", "fixed");
    }else{
      // 満たさない場合：nav要素を通常の配置にする
      $("nav").css("position", "static");
    }
  });
});


$(function(){
  // #acc1以外を縮める
  $('.works dd[id != "acc1"]').css("width", "0px");

  // a要素をクリック
  $("dt a").click(function(){
    // currentBtnクラスがついていなければ、if文の中を実行
    if(!$(this).hasClass("currentBtn")){
      // 現在のコンテンツを縮める
      $(".current").animate({"width" : "0px"}, 300);

      // 次のコンテンツを展開
      $($(this).attr("href")).animate({"width" : "800px"}, 300);

      // currentクラスを削除
      $("dd").removeClass();

      // 展開されたコンテンツにcurrentクラスを追加
      $($(this).attr("href")).addClass("current");

      // currentBtnクラスを削除
      $("dt a").removeClass();

      // 選択されたタイトル（自分自身）にcurrentBtnクラスを追加
      $(this).addClass("currentBtn");
    }

    return false;
  });
});

$(function(){
  // li要素の最後にdiv要素を追加
  $(".caption li").append("<div></div>");

  // div要素内に画像のキャプションを追加
  $(".caption div").each(function(){
    $(this).html("<p>" + $(this).parent().children("img").attr("alt") + "</p>");
  });

  // li要素をマウスオーバー
  $("li").hover(function(){
    // キャプション部分の表示：フェードイン
    $(this).children("div").stop().fadeIn(300);

    // キャプションのテキスト位置：10pxから0pxへ移動
    $(this).children("div").children("p").stop().animate({"top" : 0}, 300);
  }, function(){
    // キャプション部分の非表示：フェードアウト
    $(this).children("div").stop().fadeOut(300);

    // キャプションのテキスト位置：0pxから10pxへ移動
    $(this).children("div").children("p").stop().animate({"top":"10px"}, 300);
  });
});

$(function() {
  // 全てのアラート文を非表示にする
  $(".alert").hide();

  // 送信ボタンをクリック
  $("#submitBtn").click(function(){
    // チェック用の変数sendFlag
    var sendFlag = true;

    // 一行入力フィールドのチェック
    if(!$("#text").val()){
      // 入力がない：アラート文を表示
      $("#textSection .alert").show();
      sendFlag = false; // 入力がなければfalseに
    }else{
      // 入力がある：アラート文を非表示
      $("#textSection .alert").hide();
    }
    if(!$("#email").val()){
      // 入力がない：アラート文を表示
      $("#emailSection .alert").show();
      sendFlag = false; // 入力がなければfalseに
    }else{
      // 入力がある：アラート文を非表示
      $("#emailSection .alert").hide();
    }

    if(($('input[name="your-tel1"]').val() == "") ||
    ($('input[name="your-tel2"]').val() == "") ||
    ($('input[name="your-tel3"]').val() == "")){
      // 入力がない：アラート文を表示
      $("#telSection .alert").show();
      sendFlag = false; // 入力がなければfalseに
    }else{
      // 入力がある：アラート文を非表示
      $("#telSection .alert").hide();
    }


    // チェックボックスのチェック
    var chkboxChk = $('input[name = "checkbox"]:checked').length;

    // 選択されたチェックボックスの数を調べる
    if(chkboxChk < 1){
      // 選択が3つ未満：アラート文を表示
      $("#checkboxSection .alert").show();
      sendFlag = false; // 選択が3つ未満ならfalseに
    }else{
      // 選択が3つ以上：アラート文を非表示
      $("#checkboxSection .alert").hide();
    }

    // セレクトボックスのチェック
    if($("select").val() == "none"){
      // 選択がない：アラート文を表示
      $("#selectSection .alert").show();
      sendFlag = false; // 「---」を選択していたらfalseに
    }else{
      // 選択がある：アラート文を非表示
      $("#selectSection .alert").hide();
    }

    // 複数行入力フィールドのチェック
    if(!$("#textarea").val()){
      // 入力がない：アラート文を表示
      $("#textareaSection .alert").show();
      sendFlag = false; // 入力がなければfalseに
    }else{
      // 入力がある：アラート文を非表示
      $("#textareaSection .alert").hide();
    }

    // 変数sendFlagの値をチェック
    if(sendFlag == false){
      return false; // falseであれば送信を許可しない（そうでなければ送信）
    }
  });
});



/*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function() {
    // fadeinクラスに対して順に処理を行う
    $('.fadein').each(function() {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
