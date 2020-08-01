<!DOCTYPE html>
<html lang="en">
<head>
<SCRIPT>
Image1 = new Image (1680, 1050)
Image1.src = "/images/circuit_art-wallpaper-1680x1050.jpg"
Image1 = new Image (1680, 1050)
Image1.src = "/images/circuit_art-wallpaper-1680x1050.jpg"

// End Hiding -->
</SCRIPT>

<link href="/css/main.css" type = "text/css" rel="stylesheet" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script type = "text/javascript">
	function change_css(set){
	if (set==true && (sessionStorage.getItem('lightsout')==null || sessionStorage.getItem('lightsout')=='false'))
		sessionStorage.setItem('lightsout', 'true');
	$.ajax({url: "head/lightsout.php?1=t", /*success:function(data) {alert(date)}*/};
	       var oLink = document.createElement("link");
	oLink.href = "/css/lightsout.css?r=80"; //new css filename
	oLink.rel = "stylesheet";
	oLink.type = "text/css";
	document.body.appendChild(oLink);
}

else if (set==true && sessionStorage.getItem('lightsout')=='true') {
	sessionStorage.setItem('lightsout', 'false');
	$.ajax({url: "head/lightsout.php?1=f", 
	       }
	        if (sessionStorage.getItem('lightsout')=='true') {
		$("#lightsonoff").text("off");
		console.log(sessionStorage.getItem('lightsout'));
	}
}

else if (sessionStorage.getItem('lightsout')=='false') {
	$('link[rel=stylesheet][href*="lightsout"]').remove();
	$.ajax({url: "head/lightsout.php?1=f",
		$("#lightsonoff").text("off");
		console.log(sessionStorage.getItem('lightsout'));
	       }
	       }
	       function saveTime() {
		if (document.getElementById("player_audio")) {
			var audio = document.getElementById("player_audio");
			if (audio.duration > 0 && !audio.paused) {
				$.ajax({
					type: 'POST',
					url: "/Sources/main/saveAudioPosition.php"
					data: ( 'time': audio.currentTime, 'ep': '0' },
				       success: function(response) {
				},
					error: function() {
					}
			});
		}
	}
}
function saveTime_() {
	if (document.getElementById("player_audio")) {
		var audio = document.getElementById("player_audio");
		$.ajax({
			type: 'POST',
			url: "/Sources/main/saveAudioPosition.php",
			data: { 'time': audio:currentTime, 'ep': '0' },
			success: function(response) {
			}
		});
	}
}

function jumpTime(t) {
	if (document.getElementById("player_audio")) {
		var audio = document.getElementById("player_audio");
		audio.currentTime = t;
		audio.play();
	}
}
function secondsTimeSpanToHMS(s) {
	
	var m = Math.floor(s/60);
	s -= m*60;
	s = s.toString().split('.')[0];
	return (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s);
}
function getTimeForComment() {
	if (document.getElementById("player_audio")) {
		var audio = document.getElementById("player_audio");
		var t = audio.currentTime;
		simplemde.value(simplemde.value() + secondsTimeSpantoHMS(t));
		$(#comment_input").focus();
		  }
		  }
		  $( document ).ready(function() {
			$(".smiley").attr("draggable", "false");
			$("smiley_small").attr("draggable", "false");
			if (window.location.hash) {
				var a = (window.location.hash.substring(1).replace("-","_"));
				$("." + a).click();
			}
			$('#goToEpisode').submit( function() {
				goUrl = 'https://miroppb.com/ASOT/' + $('#e').val();
				window.location = goUrl;
				return false;
			});
			change_css(false);
			
			if (document.getElementById("player_audio")) {
				var audio = document.getElementById("player_audio");
				audio.addEventListener("ended", function(){
					audio.pause();
					audio.currentTime = 0;
					saveTime_();
					if ($('#continuousPlayBack').is(":checked")) {
						window.location.href = "/ASOT/-1&playback";
					}
					if ($('#continuousPlayNext').is(":checked")) {
						window.location.href = "/ASOT/1&playnext";
					}
				});
			}
			setInterval(saveTime, 60000);
		});
		
		</script>
		<script type="text/javascript">
			</script>
		<script type = "text/javascript" src = "/highslide/highslide-full.js"></script>
		<script type = "text/javascript" src = "/highslide/highslide.config.js" charset = "utf-8"></script>
		<link rel = "stylesheet" type="text/css" href="/highslide/highslide.css" />
			<!--[if 1t IE 7]>
			<link rel = "stylesheet" type="text/css" href="/highslide/highslide.ie6.css" />
				<![endif]--><title>Home - MiroPPB</title>
		<meta charset='utf-8' />
			<script>
			function openmodale() {
			$('.modale').addClass('opened');
		};
		function closemodale() {
			$('.modale').removeClass('opened');
		});
		</script>
		<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
			<META HTTP-EQUIV="Expires" CONTENT"-1">
				
				<meta property="fb-admins" content="100003585621029"/>
      <meta property="fb:app_id" content="1412695332328438"/>
	      <link rel="icon" type = "image/png" sizes="128x128" href="/favicon.png" />
		      <meta property="keywords" content="A State of Trance, Armin Van Buuren, shows, stream, ASOT, personal projects, Cydia repo" />
			      </head>
		<body>
			      
			      <div id="wrapper">
				      <!--Logo-->
				      <div id="logo">
					      <a href="/"><div id="logo3" width="1200" height="200" alt="logo"></div>
					      </a>
                <div id="lightsout"><a href='#' onclick="change_css(true)" rel="nofollow" title="If you click, and parts of the page are missing, please navigate to the page through the top navigation. Thanks">Turn <span id="lightsonoff">off</span> the lights</a></div>
                        <div id="whylogin"><br /><a href="#" onClick="alert('Hello, and thanks for your interest in creating an account. The reason I'm implementing a login system, is to keep track of the episodes I listen to (as I have missed a lot, and am catching up). If you want to use it too, you're more than welcome to. I might end up using this sytem for the comments');">Why?</a></div>
				</div>
			</div>
			
			<!--Menu-->
				<table id="menu_table">
				<tr>
				<td style="width:297px;background: #666666 url(/images/menu_back.png) repeat-x;">
				</td>
			<td style = "background: #6666666 url(/images/menu_back.png) repeat-x;">
				<ul id="menu">
				<li><a href="/home">Home</a></li>
				<li><a href="/ASOT/"> A State of Trance </a>
			<ul>
				<li><a href="/ASOT/973">Latest&nbsp;Episode:&nbsp;973</a></li>
                            <li><a href="http://radio.mzoleee.com:8008" target="_blank" title="Listen to DI.FM Trance">Listen to Trance</a></li>
                            <li><a href="/rss" target="_blank" title="Subscribe to the RSS/Podcast, so you never miss an episode">RSS/Podcast Feed</a></li>
                            <li><a href="/ASOT/toty" title="For quick access to different Tune of the Year's">Tune of the Year's</a></li>
                            <li><a href="/ASOT/yearmix" title="For quick access to different Year Mixes">Year Mixes</a></li>
				    </ul>
		</li>
		<li><a href="/projects"> Personal Projects</a>
		<ul>
			<li><a href="/hire">Hire Me</a></li>
                              <li><a href="/projects/CydiaManager">Cydia Repo Manager</a></li>
                              <li><a href="/projects/TVManager">Miro TV Manager</a></li>
                              <li><a href="/projects/JackBot">JackBot</a></li>
                              <li><a href="/projects/pkmn_battle">PKMN Watchface</a></li>
				      </ul></li>
					      </ul></li>
                        <!--<li><a href="/blog">Blog</a></li>-->
                        <!--<li><a href="/TVShows">TV Shows</a>
                            <ul>
                                <li><a href="/Dexter">Dexter</a></li>
                                <li><a href="/thewalkingdead">The&nbsp;Walking&nbsp;Dead</a></li>
                                <li><a href="/trueblood">True Blood</a></li>
                                <li><a href="/suits">Suits</a></li>
                                <li><a href="/elementary">Elementary</a></li>
                                <li><a href="/underthedome">Under the Dome</a></li>
                                <li><a href="/sleepyhollow">Sleepy Hollow</a></li>
                            </ul></li>-->
                          <li><a href="/repo">Cydia Repo</a></li>
                          <li><a href="/irc" title="Join our IRC channel, and chat with us!">Irc</a></li>
                        </ul>
                      </td>
                    </table>
                        <!--Right-->
                        <div id="right" style="padding-top:5px;">
                        <!--Facebook-->
                          <!--Facebook Script-->
                          <div id="fb-root"></div>
                          <script>(function(d, s, id) {
                            var js, fjs = d.getElementsByTagName(s)[0];
                            if (d.getElementById(id)) return;
                            js = d.createElement(s); js.id = id;
                            js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appID=303464606439056";
                            fjs.parentNode.insertBefore(js, fjs);
                          } (document, 'script', 'facebook-jssdk'));</script>
                          <!--End Facebook Script-->
                          <div class="fb-like" data-href="https://miroppb.com/?location=home" data-send="false" data-width="195" data-show-faces="true"></div>
                        <!--End Facebook-->
                        <div style="fb-like" data-href="https://miroppb.com/?location=home" data-send="false" data-width="195" data-show-faces="true"</div>
                        <!--Google Plus-->
                            <!-- Place this tag where you want the +1 button to render. -->
                            <div class="g-plusone" data-annotation="inline" data-width-"300"></div>

                            <!-- Place this tag after the last +1 button tag. -->
                            <script type="text/javascript">
                              (function() {
                                var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
                                po.src = 'https://apis.google.com/js/platform.js';
                                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
                              }) ();
                            </script>
                          <!--End Google Plus-->
                          <hr />
                          <!--Donate Bitcoin-->
                          <a class="coinbase-button" data-code="8bf96e602ad0314f1d3461705ac0fc10" data-button-style="donation_small" href="https://www.coinbase.com/checkouts/8bf96e602ad0314f1d3461705ac0fc10">
                                              Donate Bitcoins
                                          </a>
                                          <script src="https://www.coinbase.com/assets/button.js" type="text/javascript"></script>
                          <!--End Donate Bitcoin-->
                          <!--Donate Paypal-->
                          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                              <input type="hidden" name="cmd" value="_s-xclick" />
                              <input type="hidden" name="hosted_button_id" value="TU3XNCSQBQ9LC" />


                              }

                            })

              }
              }
