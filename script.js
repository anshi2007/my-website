var size = 10;
setInterval(function(){
  document.getElementById("my text").style.fontSize= size + "px";
  size = size + 5; 
}, 1000);
