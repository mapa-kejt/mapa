


 /*TOUCH*/
var svg = document.getElementById('map-svg');
var mapPoints = svg.getElementsByClassName('map-point');

var touchStartTime;
var isMultiTouch = false;

function handleTouchStart(event) {
  if (event.touches.length > 1) {
    isMultiTouch = true;
    return;
  }
  
  touchStartTime = Date.now();
  isMultiTouch = false;
}

function handleTouchEnd(event) {
  if (isMultiTouch) {
    isMultiTouch = false;
    return;
  }
  
  var elapsedTime = Date.now() - touchStartTime;
  if (elapsedTime <= 300) { // Adjust the threshold as per your preference
    handleInteraction.call(this, event);
  }
}

function handleInteraction(event) {
  // Perform the desired action when the interaction event occurs, such as displaying the modal
  var modalId = this.getAttribute('data-modal');
  document.getElementById(modalId).style.display = 'block';
}

for (var i = 0; i < mapPoints.length; i++) {
  mapPoints[i].addEventListener('touchstart', handleTouchStart);
  mapPoints[i].addEventListener('touchend', handleTouchEnd);
  mapPoints[i].addEventListener('click', handleInteraction);
}

  
  
  /*MODAL*/
   // Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener('mousedown', function(e) {
    e.preventDefault();
    var modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  });
}

// When the user clicks on <span> (x) or outside the modal, close the modal
function closeModal(modal) {
  var videoElement = modal.querySelector('video');
  if (videoElement) {
    videoElement.pause();
  }
  modal.scrollTop = 0;
  modal.style.display = "none";
}

for (var i = 0; i < spans.length; i++) {
  spans[i].addEventListener('click', function() {
    var modal = this.closest('.modal');
    closeModal(modal);
  });
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    closeModal(event.target);
  }
});

// Prevent modal closing when clicking on scrollbar
window.addEventListener('mousedown', function(event) {
  if (event.target.classList.contains('modal')) {
    event.stopPropagation();
  }
});






  
  

  // see more button

 
  function closeCurrentModalAndOpenSeeMore(currentModalId, seeMoreModalId) {
    var currentModal = document.getElementById(currentModalId);
    currentModal.style.display = 'none';
    var seeMoreModal = document.getElementById(seeMoreModalId);
    seeMoreModal.style.display = 'block';
  }
 

  // back button

  var backButtons = document.getElementsByClassName("back-button");

for (var i = 0; i < backButtons.length; i++) {
  backButtons[i].addEventListener("click", function() {
    var currentModal = this.closest(".modal");
    currentModal.style.display = "none";

    var previousModal = currentModal.previousElementSibling;
    if (previousModal) {
      previousModal.style.display = "block";
    }
  });
}


/*JUSTIFY TEXT*/



    
    /*FULLSCREEN*/
    var elem = document.getElementById("myDiv");
    function openFullscreen() {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }
    
    function closeFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    }
    
    function openMax() {
      document.getElementById("maximize").style.opacity = "100%";
    }
    
    function closeMax() {
      document.getElementById("maximize").style.opacity = "0%";
    }
    
    function openMin() {
      document.getElementById("minimize").style.opacity = "100%";
    }
    
    function closeMin() {
      document.getElementById("minimize").style.opacity = "0%";
    }
    
    function changez() {
        document.getElementById("minimize").style.zIndex = "0";
    }
    
    
    
    // just grab a DOM element
    var element = document.querySelector('#zoom')
    
    // And pass it to panzoom
    panzoom(element, {
      maxZoom: 100,
      minZoom: 1,
      bounds: true,
      boundsPadding: 1,
      initialZoom: 1.7,
      initialX: 150,
      initialY:50,
     
    });
    
    
    if (window.innerWidth < 500) {
      // just grab a DOM element
  var element = document.querySelector('#zoom')
  
  // And pass it to panzoom
  panzoom(element, {
    maxZoom: 100,
    minZoom: 1,
    bounds: true,
    boundsPadding: 1,
    initialZoom: 4.5,
    initialX: 25,
    initialY: 25,
  });
}
    




     