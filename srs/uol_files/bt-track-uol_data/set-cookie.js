getQueryString=function(parameterName){var location=new String(window.location);var query_string=location.split("?")[1];if(parameterName){if(query_string){var vars=query_string.split("&");for(var i=0;i<vars.length;i++){var key=new String(vars[i].split("=")[0]);if(key==parameterName){return(vars[i].split("=")[1]).toString().split("#")[0];}}return false;}else{return false;}}else{return false;}};createCookieRA=function(name,value,domain,path,maxage){var exdate=new Date();exdate.setDate(exdate.getDate()+maxage);document.cookie=name+"="+value+";Domain="+domain+";Path="+path+";Expires="+exdate.toUTCString();};try{window.onload=createCookieRA(btcookiename,getQueryString("value"),btcookiedomain,btcookiepath,btcookiemaxage);}catch(e){void (null);}