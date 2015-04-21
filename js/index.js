var flag = false;	

$(document).on('pagebeforechange', function () {
    if(flag==false) {
        $.mobile.loading( "show" );
        flag=true;
    }
});

$(document).on('pageshow', function () {
	$.mobile.loading( "hide" );
    flag=false;
}); 

var postid = getQueryVariable("id");

$( document ).on( "pagebeforeshow", "#postIndex", function() {

	var url = "http://pulanam.omtamil.com/api/get_recent_posts/?json=1&count=100";

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
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});




$( document ).on( "pagebeforeshow", "#postLanguage", function() {

	var url = "http://pulanam.omtamil.com/api/get_recent_posts/?json=get_category_posts&slug=language&count=100";

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
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});

$( document ).on( "pagebeforeshow", "#postRace", function() {

	var url = "http://pulanam.omtamil.com/api/get_recent_posts/?json=get_category_posts&slug=race&count=100";

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
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});

$( document ).on( "pagebeforeshow", "#postCulture", function() {

	var url = "http://pulanam.omtamil.com/api/get_recent_posts/?json=get_category_posts&slug=culture&count=100";

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
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});

$( document ).on( "pagebeforeshow", "#postTechnology", function() {

	var url = "http://pulanam.omtamil.com/api/get_recent_posts/?json=get_category_posts&slug=technology&count=100";

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
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});

$( document ).on( "pagebeforeshow", "#postScience", function() {

	var url = "http://pulanam.omtamil.com/api/get_recent_posts/?json=get_category_posts&slug=science&count=100";

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
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});

$( document ).on( "pagebeforeshow", "#postBusiness", function() {

	var url = "http://pulanam.omtamil.com/api/get_recent_posts/?json=get_category_posts&slug=business&count=100";

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
		    	}
		    	else {
		    		console.log("error");
		    	}
		       
		    },
		    error: function(e) {
		       console.log(e.message);
		    }
		});
	 
});





$( document ).on( "pagebeforeshow", "#postPage", function() {
                
    var postid = getQueryVariable("id");
    var url = "http://pulanam.omtamil.com/api/get_post/?post_id="+postid+"&callback=?";

    $.ajax({
       type: 'GET',
        url: url,
        async: false,
        jsonpCallback: 'callback',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            if(json.status=="ok") {
                post(json);
            }
            else {
                console.log("error");
            }
           
        },
        error: function(e) {
           console.log(e.message);
        }
    });
     
});



function getQueryVariable(variable)
{
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){return pair[1];}
   }
   return(false);
}

document.addEventListener('deviceready', function() {
 	setTimeout(function() { navigator.splashscreen.hide(); }, 3000);
});

function tarih(date){

	if(date % 1 !== 0) return false;  
	if(date<1000) return false;

	var time    = (parseInt(new Date().getTime()))/1000;
	var fark 	= time-parseInt(date); //to get the time since that moment

	if(fark<0) fark= fark * -1;
		
	var tokens = new Array();
		tokens[0] = "yıl";
		tokens[1] = "ay";
		tokens[2] = "hafta";
		tokens[3] = "gün";
		tokens[4] = "saat";
		tokens[5] = "dakika";
		tokens[6] = "saniye";
				
	var values = new Array();
		values[0] = 31536000;
		values[1] = 2592000;
		values[2] = 604800;
		values[3] = 86400;
		values[4] = 3600;
		values[5] = 60;
		values[6] = 1;
		
	for(i=0; i<=tokens.length; i++) {
		if(values[i] > fark) continue;
		var numberOfUnits=Math.ceil(fark/values[i]);
		return numberOfUnits+" "+tokens[i]+" once ";
	}
}

function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

function post(json) {

	document.getElementById("title").innerHTML = json.post.title;

    var html = "<h1>"+json.post.title+"</h1>";
    html += "<p>"+json.post.content+"</p>";

	document.getElementById("post").innerHTML = html;
}

function posts(json) {

    var html = "";

  	for (var i = 0; i < json.posts.length; i++)
	{
		
	   
	    if ("url" in json.posts[i]) {
	        var posturl = json.posts[i].url;	     
	    }

	    if ("id" in json.posts[i]) {
	        var postid = json.posts[i].id;	     
	    }
	    
	 	if ("title" in json.posts[i]) {
	      var postcontent = json.posts[i].title;}
		  
		  	if ("thumbnail" in json.posts[i]) {
	      var postthumbnail = json.posts[i].thumbnail;}
		  
		  
		  
	    else
	    if ("content" in json.posts[i]) {
	      var postcontent = json.posts[i].content;}
	    else var postcontent = "Başlıksız";

	    if (postcontent.length > 200) postcontent = strip(postcontent).substring(0,200);
	    else postcontent = strip(postcontent);

		if ("date" in json.posts[i]) {
	      	var date = json.posts[i].date;
	  	}
	  	else {
	  		var date = "null";
	  	}
        
        html = html + "<li>" + "<a href=\"post.html?id=" + postid + "\">" + '<img src="' + postthumbnail + '"/ height="80px"/ width="80px"/>' + "<h2>" + postcontent + "</h2>" + "<p>" + date + "</p></a></li>";
        
        document.getElementById("postsList").innerHTML = html;
        $("#postsList").listview("refresh");

	}	

}

function open_browser(link)
{
    window.open(link, '_blank', 'location=yes','closebuttoncaption=back');
}

function getParameter(query, url) {
 	var query = query.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var expr = "[\\?&]"+query+"=([^&#]*)";
        var regex = new RegExp( expr );
        var results = regex.exec( url );

	if(results!=null) return results[1];
	else return false;
}

