
var rellax = new Rellax('.rellax');

new Glide('.glide').mount();



let json = [
  {
    "image" : "like-a-magic.webp",
    "title" : "Clothing",
    "location" : ""
  },

  {
    "image" : "fire-ext.jpg",
    "title" : "Safety",
    "location" : ""
  },

  {
    "image" : "slip.jpg",
    "title" : "Fun",
    "location" : ""
  },

  {
    "image" : "rubbish.jpg",
    "title" : "Litteracy",
    "location" : ""
  },

  {
    "image" : "safety.jpg",
    "title" : "Danger",
    "location" : ""
  },

  {
    "image" : "chicken.png",
    "title" : "Food",
    "location" : ""
  }

]

let contentDiv = document.getElementById("contentDiv");

for (var i = 0; i < json.length; i++) {
  createDivs(json[i]);
}


function createDivs(json) {

  let newDiv = document.createElement("DIV");
  newDiv.classList.add("newItem");

  let newDivHeading = document.createElement("H2");
  newDivHeading.classList.add("newItemHeading");
  newDivHeading.innerHTML = json['title'];
  newDivHeading.style.backgroundColor = "white";
  // newDivHeading.style.display = "flex"
  newDiv.appendChild(newDivHeading);

  let newDivImage = document.createElement("IMG");
  newDivImage.classList.add("newItemImage");
  newDivImage.src = json['image'];
  newDivImage.style.display = "flex";
  newDivImage.style.justify = "center";
  newDivImage.style.marginLeft = "20px";
  newDiv.appendChild(newDivImage);

  let newDivLocation = document.createElement("H3");
  newDivLocation.classList.add("newItemLocation");
  newDivLocation.innerHTML = json['location'];
  newDiv.appendChild(newDivLocation);

  // newDiv.setAttribute("id", "item" + index.value);

  contentDiv.appendChild(newDiv);

}




// ### User Interface Application ###

let userInput = document.getElementById("userInput");
let addTextButton = document.getElementById("addToPage");

// addTextButton.addEventListener("mouseover", addTextButton.innerText = "click");

addTextButton.addEventListener("click", addText);

let addedInputs = document.getElementById("addedInputs");
let paragraphContainer = document.getElementById("paragraphContainer");

let paragraphArray = [];

// paragraphArray.push("bb");
// console.log(paragraphArray);

paragraphContainer.appendChild(paragraphArray[0]);


function addText() {
  if (userInput.value.length > 0) {

    let newParagraph = document.createElement("P");
    newParagraph.classList.add("newParagraph");
    newParagraph.innerHTML = userInput.value + "<br>";
    paragraphContainer.appendChild(newParagraph);

    paragraphArray.push(newParagraph);
    console.log(paragraphArray);

    console.log(userInput.value);
  }

  else {
    alert("Please add phrase");
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  paragraphContainer.appendChild(paragraphArray);

});




let sideBar = document.getElementById("sideBar");
// let sideBarPosition = window.screenY;
console.log(sideBar.offsetTop);

// while (sideBarPosition <= "100px") {
//   sideBar.style.position = "fixed";
// }






// function fixSideBar()
