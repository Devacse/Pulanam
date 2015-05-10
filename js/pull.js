
(function pullPagePullImplementation($) {
  "use strict";
  var listSelector = "div.indexpage ul.ui-listview";
  var litod1;
  
  function gotPullDownData(event, data) {
    var url = "http://pulanam.omtamil.com/api/get_recent_posts/?json=1&count=300";

        $.ajax({
           type: 'GET',
            url: url,
            async: false,
            jsonpCallback: 'callback',
            contentType: "application/json",
            dataType: 'jsonp',
            success: function(json) {
              if(json.status=="ok") {
              posts(json);          
              $(listSelector).prepend(posts(json)).listview("refresh"); 
              data.iscrollview.refresh(); 
              }
              else {
                console.log("error");
              }
               
            },
            error: function(e) {
               console.log(e.message);
            }
        });

    var eon=$('div.eon');
    if(eon.is(':visible')){eon.hide();$('div.iscroll-pullup').show();}
  }

  function gotPullUpData(event, data) {
    litod1=litod+15;   
    if(litod<=listlength){ 
       var newContent= $('ul#postsList>li').slice(litod,litod1).css("display","block");
       litod=litod1;
       $(listSelector).listview("refresh");    
       
    }
    else{ 
       $('div.iscroll-pullup').hide();$('div.eon').fadeIn(100);}
    }
  
  function onPullDown (event, data) { 
    setTimeout(function fakeRetrieveDataTimeout() {
      gotPullDownData(event, data);
      }, 
      500); 
    } 

  function onPullUp (event, data) { 
    setTimeout(function fakeRetrieveDataTimeout() {
      gotPullUpData(event, data);
      }, 
      1500); 
    }    

   $(document).delegate("div.indexpage", "pageinit", 
    function bindPullPagePullCallbacks(event) {
      $(".iscroll-wrapper", this).bind( {
      iscroll_onpulldown : onPullDown,
      iscroll_onpullup   : onPullUp
      } );

    } );   
   
  }(jQuery));