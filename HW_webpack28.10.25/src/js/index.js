import $ from 'jquery';

function changeColor() {
   let startColor = "pink";
   
   setInterval(function() {
        $('body').css("backgroundColor", startColor);
        startColor = (startColor === "pink") ? "green" : "pink";
   }, 3000);
}

$(document).ready(function() {
   changeColor();
});