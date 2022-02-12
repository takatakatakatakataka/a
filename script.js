
  /*=================================================
  スティッキー
  ===================================================*/
  let navPos = $("nav").offset().top;

  
  $(window).scroll(function(){
    
    if($(window).scrollTop() > navPos){
      
      $("nav").css("position", "fixed");
    }else{
      
      $("nav").css("position", "static");
    }
  });




/*=================================================
  アコーディオンパネル
  ===================================================*/
  
  $('.works dd[id != "acc1"]').css("width", "0px");

 
  $("dt a").click(function(){
    
    if(!$(this).hasClass("currentBtn")){
     
      $(".current").animate({"width" : "0px"}, 300);

      
      $($(this).attr("href")).animate({"width" : "800px"}, 300);

      
      $("dd").removeClass();

     
      $($(this).attr("href")).addClass("current");

      
      $("dt a").removeClass();

      
      $(this).addClass("currentBtn");
    }

    return false;
  });


/*=================================================
  キャプション表示
  ===================================================*/


  $(".caption li").append("<div></div>");

  
  $(".caption div").each(function(){
    $(this).html("<p>" + $(this).parent().children("img").attr("alt") + "</p>");
  });

  
  $("li").hover(function(){
    
    $(this).children("div").stop().fadeIn(300);

    
    $(this).children("div").children("p").stop().animate({"top" : 0}, 300);
  }, function(){
    
    $(this).children("div").stop().fadeOut(300);

    
    $(this).children("div").children("p").stop().animate({"top":"10px"}, 300);
  });


/*=================================================
  チェック機能
  ===================================================*/

  $(".alert").hide();

  
  $(".submitBtn").click(function(){
    
    let sendFlag = true;

    
    if(!$(".text").val()){
      
      $(".textSection .alert").show();
      sendFlag = false; 
    }else{
      
      $(".textSection .alert").hide();
    }
    if(!$(".email").val()){
      
      $(".emailSection .alert").show();
      sendFlag = false; 
    }else{
      
      $(".emailSection .alert").hide();
    }
    if(!$(".tel").val()){
      
      $(".telSection .alert").show();
      sendFlag = false; 
    }else{
     
      $(".tellSection .alert").hide();
    }

    if(($('input[name="your-tel1"]').val() == "") ||
    ($('input[name="your-tel2"]').val() == "") ||
    ($('input[name="your-tel3"]').val() == "")){
      
      $("#telSection .alert").show();
      sendFlag = false; 
    }else{
      
      $("#telSection .alert").hide();
    }


    
    let chkboxChk = $('input[name = "checkbox"]:checked').length;

    
    if(chkboxChk < 1){
      
      $(".checkboxSection .alert").show();
      sendFlag = false; 
    }else{
      
      $(".checkboxSection .alert").hide();
    }

    
    if($("select").val() == "none"){
      
      $(".selectSection .alert").show();
      sendFlag = false; 
    }else{
      
      $(".selectSection .alert").hide();
    }

    
    if(!$(".textarea").val()){
      
      $(".textareaSection .alert").show();
      sendFlag = false; 
    }else{
      
      $(".textareaSection .alert").hide();
    }

    
    if(sendFlag == false){
      return false; 
    }
  });




/*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
 
  $(window).scroll(function() {
    
    $('.fadein').each(function() {
      
      let scroll = $(window).scrollTop();
      
      let target = $(this).offset().top;
      
      let windowHeight = $(window).height();
      
      
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
