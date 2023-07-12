// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  var html = "";
  for (var i = 0; i < height; i++) {
    html += "<tr>";
    for (var j = 0; j < width; j++) {
      html += "<td></td>";
    }
    html += "</tr>";
  }
  document.getElementById("pixel_canvas").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function() {
  var height, width;
  document.getElementById("sizePicker").addEventListener("submit", function(event) {
    event.preventDefault();
    height = document.getElementById("input_height").value;
    width = document.getElementById("input_width").value;
    makeGrid(height, width);
  });
  
  document.getElementById("pixel_canvas").addEventListener("click", function(event) {
    var color = document.getElementById("colorPicker").value;
    var target = event.target;
    if (target.nodeName === "TD") {
      if (
        target.style.backgroundColor === "" ||
        target.style.backgroundColor === "rgba(0, 0, 0, 0)" ||
        target.style.backgroundColor === "rgb(255, 255, 255)"
      ) {
        target.style.backgroundColor = color;
      } else {
        target.style.backgroundColor = "#FFFFFF";
      }
    }
  });
});
