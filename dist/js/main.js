function SVG(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function replaceRectsWithPaths(t){var a=$(t).find("rect");$.each(a,function(){var t=$(this).attr("x"),a=$(this).attr("y"),s=parseFloat(t)+parseFloat($(this).attr("width")),e=parseFloat(a)+parseFloat($(this).attr("height")),r="M"+t+","+a+" "+s+","+a+" "+s+","+e+" "+t+","+e+" "+t+","+a;$(SVG("path")).attr("d",r).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).attr("stroke-linecap",$(this).attr("stroke-linecap")).insertAfter(this)}),$(a).remove()}function replaceLinesWithPaths(t){var a=$(t).find("line");$.each(a,function(){var t="M"+$(this).attr("x1")+","+$(this).attr("y1")+" "+$(this).attr("x2")+","+$(this).attr("y2");$(SVG("path")).attr("d",t).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).attr("stroke-linecap",$(this).attr("stroke-linecap")).insertAfter(this)}),$(a).remove()}function replaceCirclesWithPaths(t){var a=$(t).find("circle");$.each(a,function(){var t=$(this).attr("cx"),a=$(this).attr("cy"),s=$(this).attr("r"),e=parseFloat(2*s),r="M"+t+", "+a+" m"+-s+", 0 a "+s+", "+s+" 0 1,0 "+e+",0 a "+s+", "+s+" 0 1,0 "+-e+",0 ";$(SVG("path")).attr("d",r).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).attr("stroke-linecap",$(this).attr("stroke-linecap")).insertAfter(this)}),$(a).remove()}function replaceEllipsesWithPaths(t){var a=$(t).find("ellipse");$.each(a,function(){var t=$(this).attr("cx"),a=$(this).attr("cy"),s=$(this).attr("rx"),e=$(this).attr("ry"),r="M"+t+", "+a+" m"+-s+", 0 a "+s+", "+e+" 0 1,0 "+2*s+",0 a "+s+", "+e+" 0 1,0 "+2*-s+",0 ";$(SVG("path")).attr("d",r).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).attr("stroke-linecap",$(this).attr("stroke-linecap")).insertAfter(this)}),$(a).remove()}function replacePolygonsWithPaths(t){var a=$(t).find("polygon");$.each(a,function(){var t=$(this).attr("points"),a=t.split(/[ ,]+/),s=a[0]+", "+a[1];$(SVG("path")).attr("d","M"+t+" "+s).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).attr("stroke-linecap",$(this).attr("stroke-linecap")).insertAfter(this)}),$(a).remove()}function replacePolylinesWithPaths(t){var a=$(t).find("polyline");$.each(a,function(){var t=$(this).attr("points");$(SVG("path")).attr("d","M"+t).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).attr("stroke-linecap",$(this).attr("stroke-linecap")).insertAfter(this)}),$(a).remove()}function hideSVGPaths(t){var a=$(t).find("path");$.each(a,function(){var t=this.getTotalLength();$(this).css({"stroke-dashoffset":t,"stroke-dasharray":t+" "+t})})}function drawSVGPaths(t,s,e,r){var a=$(t).find("path");$.each(a,function(t){var a=this.getTotalLength();$(this).css({"stroke-dashoffset":a,"stroke-dasharray":a+" "+a}),$(this).delay(r*t).animate({"stroke-dashoffset":0},{duration:Math.floor(Math.random()*e)+s,easing:"easeInOutQuad"})})}function replaceWithPaths(t){replaceRectsWithPaths(t),replaceLinesWithPaths(t),replaceEllipsesWithPaths(t),replaceCirclesWithPaths(t),replacePolygonsWithPaths(t),replacePolylinesWithPaths(t)}function startSVGAnimation(t){drawSVGPaths(t,500,700,25)}function startSVGAnimationMain(t){drawSVGPaths(t,1400,1200,444)}$(".image-scale").mouseover(function(){var t=$(this).find("img").attr("id");$("#overlay-"+t).css("opacity","1")}),$(".image-scale").mouseleave(function(){var t=$(this).find("img").attr("id");$("#overlay-"+t).css("opacity","0")}),$("#svg-square-icon").on("click",function(){drawSVGPaths("svg",2222,500,400)}),jQuery.extend(jQuery.easing,{easeInOutQuad:function(t,a,s,e,r){return(a/=r/2)<1?e/2*a*a+s:-e/2*(--a*(a-2)-1)+s}}),replaceWithPaths($("svg")),$(window).scroll(function(){0<$(this).scrollTop()?($("#nav-logo").show(100),$(".logo-icon").hide(300)):($("#nav-logo").hide(100),$(".logo-icon").show(300))});var isScrolled=!0;$(document).on("scroll",function(){$(this).scrollTop()<=$("#banner-loc").position().top&&isScrolled&&(startSVGAnimation($("#svg-icon-code")),isScrolled=!1)}),startSVGAnimationMain($("#code-debugcon")),$(function(){$(".md-trigger").on("click",function(){console.log($(this).attr("data-nr"));var t=$(this).attr("data-nr");$("#name-speaker").text(speakers.speakersks[t].name),$("#occupation").text(speakers.speakersks[t].occupation),$("#paragraph-1").text(speakers.speakersks[t].p1),$("#paragraph-2").text(speakers.speakersks[t].p2),$("#days-text").text(speakers.speakersks[t].daysText),$("#days-subject").text(speakers.speakersks[t].daysSubject),$("#image-speaker").attr("src",speakers.speakersks[t].img),$(".md-modal").addClass("md-show"),$(".md-modal").hasClass("md-show")&&$("body").css("overflow","hidden"),startSVGAnimation($("#code-debugcon-overlay"))}),$(document).keyup(function(t){27===t.keyCode&&$(".md-close").click()}),$(".md-close").on("click",function(){$(".md-modal").removeClass("md-show"),$("body").css("overflow","unset")})});