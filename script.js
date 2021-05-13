let gallery =[];
$(".add").click(function() {
let movie = $(".picture-url").val();
    gallery.push(movie);
   for(let pic of gallery){
  $(".gallery").append("<img src=" + pic + ">");
   }
   });
