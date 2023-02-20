// Select all click handler element from the dom
const triangleCalculationBtn = document.getElementById("triangle-calculation-btn");
const rectangleCalculationBtn = document.getElementById("rectangle-calculation-btn");
const parallelogramCalculationBtn = document.getElementById("parallelogram-calculation-btn");
const rhombusCalculationBtn = document.getElementById("rhombus-calculation-btn");
const pentagonCalculationBtn = document.getElementById("pentagon-calculation-btn");
const ellipseCalculationBtn = document.getElementById("ellipse-calculation-btn");


// get input value function
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputStringValue = inputField.value;
    inputField.value = "";
    if (isNaN(inputStringValue)) {
      return alert("Please Enter Only Number");
    }
    const value = parseFloat(inputStringValue);
    return value;
}


// error handling function
function validation(baseId, heightId) {
    const base = getInputValue(baseId);
    const height = getInputValue(heightId);
    if (typeof base === 'undefined' || typeof height === 'undefined' || (typeof base === 'undefined' && typeof height === 'undefined')) {
      return alert("Value should not be string");
    }else if (base < 0 || height < 0 || (base < 0 && height < 0)) {
      return alert("Value should be positive number");
    }else if (!base || !height || (!base && !height)) {
      return alert("Field value should not be empty!");
    } 
    const values = { base: base, height: height };
    return values;
}


// get item name using this function
function getName(nameId) {
    return document.getElementById(nameId).innerText;
}


// get area using calculation function
function calculation(name, baseId, heightId) {
    const values = validation(baseId, heightId);
    if (values) {
      let area = 0;
      switch (name) {
        case "Triangle":
          area = 0.5 * values.base * values.height;
          break;
        case "Rectangle":
          area = values.base * values.height;
          break;
        case "Parallelogram":
          area = values.base * values.height;
          break;
        case "Rhombus":
          area = 0.5 * values.base * values.height;
          break;
        case "Pentagon":
          area = 0.5 * values.base * values.height;
          break;
        case "Ellipse":
          area = 3.14 * values.base * values.height;
          break;
      }
      return area;
    }
}


// for dynamic seral number
let serial = 0;

// displayOutput() function to create dynamic row and display output
const rowContainer = document.getElementById("row-container");
function displayOutput(name, area) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
        <th>${serial}</th>
        <td>${name}</td>
        <td>${parseFloat(area.toFixed(2))}cm<sup>2</sup></td>
        <td>
        <button id="convert-${serial}" class="btn btn-primary w-24">
            Meter <sup>2</sup>
        </button>
        </td>
        <td><button id="close-${serial}" class="py-2 px-3 border rounded-full border-gray-700">x</button></td>
    `;
  rowContainer.appendChild(newRow);
}

// Triangle Area using addEventListener()
triangleCalculationBtn.addEventListener("click", function () {
    const name = getName("triangle-name");
    const area = calculation(name, "triangle-base-field", "triangle-height-field");
    serial++;
    if(area){
      displayOutput(name, area);
    }
});


// Rectangle Area using onclick attribute via rectangleArea() function
function rectangleArea() {
    const name = getName("rectangle-name");
    const area = calculation(
      name,
      "rectangle-width-field",
      "rectangle-length-field"
    );
    serial++;
    if(area){
        displayOutput(name, area);
    }
};


// Parallelogram Area using addEventListener()
parallelogramCalculationBtn.addEventListener("click", function () {
    const name = getName("parallelogram-name");
    const area = calculation(
      name,
      "parallelogram-base-field",
      "parallelogram-height-field"
    );
    serial++;
    if(area){
        displayOutput(name, area);
    }
});


// Rhombus Area using addEventListener()
rhombusCalculationBtn.addEventListener("click", function () {
    const name = getName("rhombus-name");
    const area = calculation(
      name,
      "rhombus-diagonal-one-field",
      "rhombus-diagonal-two-field"
    );
    serial++;
    if(area){
        displayOutput(name, area);
    }
});

// Pentagon Area using addEventListener()
pentagonCalculationBtn.addEventListener("click", function () {
    const name = getName("pentagon-name");
    const area = calculation(
      name,
      "pentagon-base-field",
      "pentagon-height-field"
    );
    serial++;
    if(area){
        displayOutput(name, area);
    }
});

// Ellipse Area using addEventListener()
ellipseCalculationBtn.addEventListener("click", function () {
    const name = getName("ellipse-name");
    const area = calculation(name, "ellipse-major-field", "ellipse-minor-field");
    serial++;
    if(area){
        displayOutput(name, area);
    }
});


// Redirect to Blog page
function goToBlog(){
    location.href = 'blog.html'
}
  

// Change bg color randomly with hover 
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
} 
  
const cards = document.querySelectorAll('.card')
for(const card of cards){
    card.addEventListener("mouseover", function(){
      card.style.backgroundColor = randomColor();
    });
}

// Added remove functionality by clicking close btn
rowContainer.addEventListener('click', function(e){
    const element = e.target.parentNode.parentNode
    this.removeChild(element)
})
  
// Live Site: lively-polish.surge.sh