   /*GALERIJE*/
    
   var imageThumbsStosija = document.getElementById("image-thumbs-stosija");
   var currentImageStosija = document.getElementById("current-image-stosija");
   
   for (var i = 1; i <= 5; i++) {
     var thumb = document.createElement("img");
     thumb.src = "images/crkva-stosija" + i + ".jpg";
     thumb.alt = "crkva-stosija " + i;
     thumb.classList.add("thumb");
     imageThumbsStosija.appendChild(thumb);
     thumb.addEventListener(
       "click", function() {
         currentImageStosija.src = this.src;
       }
     );
   }
   
   
   var imageThumbsMuzej = document.getElementById("image-thumbs-muzej");
   var currentImageMuzej = document.getElementById("current-image-muzej");
   
   for (var i = 1; i <= 5; i++) {
     var thumb = document.createElement("img");
     thumb.src = "images/muzej" + i + ".jpg";
     thumb.alt = "muzej" + i;
     thumb.classList.add("thumb");
     imageThumbsMuzej.appendChild(thumb);
     thumb.addEventListener(
       "click", function() {
         currentImageMuzej.src = this.src;
       }
     );
   }
   
   
   
   var imageThumbsRoko = document.getElementById("image-thumbs-roko");
   var currentImageRoko = document.getElementById("current-image-roko");
   
   for (var i = 1; i <= 4; i++) {
     var thumb = document.createElement("img");
     thumb.src = "images/crkva-roko" + i + ".jpg";
     thumb.alt = "crkva-roko" + i;
     thumb.classList.add("thumb");
     imageThumbsRoko.appendChild(thumb);
     thumb.addEventListener(
       "click", function() {
         currentImageRoko.src = this.src;
       }
     );
   }
    
   