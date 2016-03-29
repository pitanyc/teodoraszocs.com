/**
 * Gets the request URL as string.  Returns the responseText of the response (String).
 */
function ajaxRequest(url, container) {
  alert('url: ' + url + ', container: ' + container);
  var xmlhttp;
  if ( window.XMLHttpRequest ) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange = function() {
    alert('xmlhttp.readyState: ' + xmlhttp.readyState + ', xmlhttp.status: ' + xmlhttp.status);
    if ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
	  alert(xmlhttp.responseText);
      document.getElementById(container).innerHTML = xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
/**
 * Disable right click on entire site.
 */
document.oncontextmenu = function(e) {return false;};