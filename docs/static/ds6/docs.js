function nodeListToArray(t){return Array.prototype.slice.call(t)}console.log("skin-ds6"),nodeListToArray(document.querySelectorAll('.btn:not([aria-disabled="true"])')).forEach(function(t,e){t.addEventListener("click",function(t){alert("You clicked "+this)})}),nodeListToArray(document.querySelectorAll(".expand-btn")).forEach(function(t,e){t.addEventListener("click",function(t){var e="true"===this.getAttribute("aria-expanded");this.setAttribute("aria-expanded",!e)})});