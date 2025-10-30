function setMode(mode) {
  // Hide all sections
  document.querySelectorAll(".form-section").forEach(sec => sec.classList.add("hidden"));
  // Show chosen section
  document.getElementById(mode + "Form").classList.remove("hidden");
}

// Floor
function calcFloor() {
  const L = parseFloat(document.getElementById("floorL").value) || 0;
  const W = parseFloat(document.getElementById("floorW").value) || 0;
  const T = parseFloat(document.getElementById("floorT").value) || 0;
  const rate = parseFloat(document.getElementById("floorRate").value) || 0;

  const volume = L * W * T;
  const cost = volume * rate;

  document.getElementById("floorResult").textContent =
    `Volume: ${volume.toFixed(2)} m³, Cost: RM ${cost.toFixed(2)}`;
}

// Wall
function calcWall() {
  const L = parseFloat(document.getElementById("wallL").value) || 0;
  const H = parseFloat(document.getElementById("wallH").value) || 0;
  const O = parseFloat(document.getElementById("wallO").value) || 0;
  const rate = parseFloat(document.getElementById("wallRate").value) || 0;

  const area = (L * H) - O;
  const cost = area * rate;

  document.getElementById("wallResult").textContent =
    `Wall Area: ${area.toFixed(2)} m², Cost: RM ${cost.toFixed(2)}`;
}

// Paint
function calcPaint() {
  const A = parseFloat(document.getElementById("paintA").value) || 0;
  const cov = parseFloat(document.getElementById("paintCov").value) || 0;
  const rate = parseFloat(document.getElementById("paintRate").value) || 0;

  const litres = A / cov;
  const cost = litres * rate;

  document.getElementById("paintResult").textContent =
    `Litres Needed: ${litres.toFixed(2)} L, Cost: RM ${cost.toFixed(2)}`;
}

// Default mode: Floor
setMode("floor");
