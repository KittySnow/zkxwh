(function(){function getClientWidth(){var cw=document.documentElement.clientWidth;cw=cw>750?750:cw;document.documentElement.style.setProperty("font-size",cw/750+"px")}var Timer=null;window.addEventListener("resize",function(){clearTimeout(Timer),Timer=setTimeout(getClientWidth,300)},false);getClientWidth()})(window);

