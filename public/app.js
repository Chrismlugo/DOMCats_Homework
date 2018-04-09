// var app = function(){
//
// // create new parent ul.
// let newCat = document.createElement("ul");
//   newCat.classList.add("cat");
//   //create first child of ul, li with cat name
//   debugger;
//
//   let catName = document.createElement("li");
//     catName.innerText = "Name: Spooky";
//   // create second child of ul, li with favouriteFood.
//   let favouriteFood = document.createElement("li");
//     favouriteFood.innerText = "Favourite food: Plastic wrappers" ;
//     // create image tag within the third li element.
//   let imageLi = document.createElement("li");
//     imageLi.innerHTML = "<img width= 500 src=/images/Spooky_in_a_bag.jpeg>";
//
//     // append li elements to the parent element.
//     newCat.appendChild(catName);
//     newCat.appendChild(favouriteFood);
//     newCat.appendChild(imageLi);
//     let cats = document.querySelector("#cats");
//     cats.appendChild(newCat);
// };
//
// window.onload = app;

// create new parent ul.
const createUl = function(){
let newCat = document.createElement("ul");
  newCat.classList.add("cat");
  return newCat;
};

const createNameLi = function(name){
  let catName = document.createElement("li");
    catName.innerText = "Name: " + name;
    return catName;
  };

  const createFoodLi = function(food){
  let favouriteFood = document.createElement("li");
    favouriteFood.innerText = "Favourite food: " + food;
    return favouriteFood;
  };

const createImageli = function(image){
  let imageLi = document.createElement("li");
    imageLi.innerHTML = image;
    return imageLi;
  };

    const appendElements = function(newCat, catName, favouriteFood, imageLi){
    // append li elements to the parent element.
    newCat.appendChild(catName);
    newCat.appendChild(favouriteFood);
    newCat.appendChild(imageLi);
    let cats = document.querySelector("#cats");
    cats.appendChild(newCat);
  };

var addCat = function(name, favFood, image) {
var newCat = createUl();
var catName = createNameLi(name);
var catFood = createFoodLi(favFood);
var imageLi = createImageli(image);

appendElements(newCat, catName, catFood, imageLi);
}

window.onload = function(){
  addCat("Boba","Sock Fluff", "<img width=500 src=http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg>" );
  addCat("Barnaby","Tuna", "<img width=500 src=https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg>" );
  addCat("Max","Whiskas Temptations", "<img width=500 src=http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg>" );
  addCat("Spooky","plastic wrappers", "<img width= 500 src=/images/Spooky_in_a_bag.jpeg>" );
}
