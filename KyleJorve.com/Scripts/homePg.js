$(document).ready(function(){$(window).scroll(function(){toggleLeftNav()})}),$(window).on("load resize orientationchange",function(){toggleLeftNav()});function toggleLeftNav(){var e=.5*($(".heroWrp").offset().top+$(".heroWrp").outerHeight());$(window).scrollTop()>=e&&!$("body").hasClass("revealLeftNav")?$("body").addClass("revealLeftNav"):$(window).scrollTop()<e&&$("body").hasClass("revealLeftNav")&&$("body").removeClass("revealLeftNav")}