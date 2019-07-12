var size = 10;
setInterval(function(){
  document.getElementById("mytext").style.fontSize= size + "px";
  size = size + 5; 
}, 1000);
