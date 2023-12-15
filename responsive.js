$(document).ready(function(){
  $(".toogle-icon").click(function(){
    $(".nav").toggleClass("toggle-ul");
    $(".toogle-icon").toggleClass("fa-xmark")
  });
});