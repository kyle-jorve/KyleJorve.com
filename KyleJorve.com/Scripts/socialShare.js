var socialShareController=function(){var e={body:document.querySelector("body"),overlay:document.querySelector("#toastOverlay"),buttons:{share:Array.prototype.slice.call(document.querySelectorAll(".shareBtn")),close:document.querySelector("#closeToast")}};!function(){var o=function(){e.body.classList.remove("showSocialShareToast")};e.buttons.share.forEach(function(o){o.addEventListener("click",function(){e.body.classList.add("showSocialShareToast")})}),e.buttons.close.addEventListener("click",o),e.overlay.addEventListener("click",o)}()}();