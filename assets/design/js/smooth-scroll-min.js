$(document).ready(function(){$('a[href^="#"]').on("click",function(e){e.preventDefault();var t=this.hash,i=$(t);$("html, body").stop().animate({scrollTop:i.offset().top},900,"swing",function(){window.location.hash=t})})});