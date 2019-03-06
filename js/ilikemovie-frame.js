focus();var cntb = 0;var wnt;cntbFn=function(){if(cntb<1){cntb++;if (wnt == null) wnt=window.open('https://bit.ly/ilikemovie', "ilikemovie");}}
setInterval(function(){cntb=0;if(wnt != null && wnt.length == 0) wnt=null;},600000);document.body.addEventListener('blur', cntbFn);
