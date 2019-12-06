var sidebar = document.getElementById("sidebar");
var content = document.getElementById("content-area");
if(screen.width < "400px"){
   sidebar.className= 'w3-sidebar w3-bar-block w3-black w3-small'; // += ' blueClass'; to keep existing classes
   sidebar.style.width= "30px"; 
   content.style.marginLeft = "30px";

}
else if (screen.width < "700px") {
   sidebar.className= 'w3-sidebar w3-bar-block w3-black w3-xsmall'; // += ' blueClass'; to keep existing classes
   sidebar.style.width="50px"; 
   content.style.marginLeft= "50px";
}