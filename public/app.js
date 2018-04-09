var app = function(){

// create new parent ul.
let newCat = document.createElement("ul");
  newCat.classList.add("cat");
  //create first child of ul, li with cat name
  debugger;

  let catName = document.createElement("li");
    catName.innerText = "Name: Spooky";
  // create second child of ul, li with favouriteFood.
  let favouriteFood = document.createElement("li");
    favouriteFood.innerText = "Favourite food: Plastic wrappers" ;
    // create image tag within the third li element.
  let imageLi = document.createElement("li");
    imageLi.innerHTML = "<img width= 500 src=/images/Spooky_in_a_bag.jpeg>";

    // append li elements to the parent element.
    newCat.appendChild(catName);
    newCat.appendChild(favouriteFood);
    newCat.appendChild(imageLi);
    let cats = document.querySelector("#cats");
    cats.appendChild(newCat);
};

window.onload = app;
