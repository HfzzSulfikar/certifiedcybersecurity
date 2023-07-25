function disableInspect() {
  // Prevent the user from opening the developer tools.
  document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });

  // Prevent the user from inspecting the element.
  document.addEventListener("keydown", function(event) {
    if (event.keyCode == 123) {
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode == 'I'.charCodeAt(0)) {
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode == 'C'.charCodeAt(0)) {
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode == 'J'.charCodeAt(0)) {
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode == 'U'.charCodeAt(0)) {
      event.preventDefault();
    }
  });
}

// Call the function when the page loads.
document.addEventListener("DOMContentLoaded", disableInspect);
