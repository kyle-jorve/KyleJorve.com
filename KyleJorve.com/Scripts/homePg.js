var portScrollBuffer=200,portScrollBreakpoint=600,nodes={portfolioGrid:$("#recent-work"),scrollIcon:$("#scrollIcon")};$(document).ready(function(){$("body").hasClass("touchDevice")||scrollDisapparate(),$(window).scroll(function(){toggleLeftNav(),$("body").hasClass("touchDevice")||scrollDisapparate()})}),parallaxBg(".heroWrp",".heroBg",-.3,800,"center"),animateContent("#recent-work",".animatedEl",100,portScrollBreakpoint,"top",portScrollBuffer),$(window).on("load resize orientationchange",function(){toggleLeftNav()}),$(window).on("resize orientationchange",function(){$(window).outerWidth()>portScrollBreakpoint&&!$("body").hasClass("touchDevice")&&scrollDisapparate()});function toggleLeftNav(){var o=.5*($(".heroWrp").offset().top+$(".heroWrp").outerHeight());$(window).scrollTop()>=o&&!$("body").hasClass("revealLeftNav")&&$(window).outerWidth()>500?$("body").addClass("revealLeftNav"):$(window).scrollTop()<o&&$("body").hasClass("revealLeftNav")&&$(window).outerWidth()>500&&$("body").removeClass("revealLeftNav")}function scrollDisapparate(){var o=nodes.portfolioGrid.offset().top+portScrollBuffer;$(window).scrollTop()+$(window).outerHeight()>o&&$("body").addClass("pView")}