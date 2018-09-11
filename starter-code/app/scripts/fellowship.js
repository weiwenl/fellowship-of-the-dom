console.log("Linked.");
//window.onload = function(){

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // document.createElement("section");
  var createSection = document.createElement("section");
  createSection.setAttribute("id", "middle-earth");

  // add each land as an article tag
  for(var i = 0; i < lands.length; i++){
    var addLand = document.createElement("article");

  // inside each article tag include an h1 with the name of the land
    addLand.innerHTML = "<h1>" +lands[i]+ "</h1>";
  // append middle-earth to your document body
    createSection.appendChild(addLand);
  //body.appendChild(section);
    body.appendChild(createSection);
  }
}

makeMiddleEarth();


// Part 2
/*var theShire = getElementsByTagName("article")[0];
var rivendell = getElementsByTagName("Article")[1];
var modor = getElementsByTagName("Article")[2]; Y doesn't this work?*/
var theShire = body.querySelectorAll("Article")[0];
var rivendell = body.querySelectorAll("Article")[1];
var modor = body.querySelectorAll("Article")[2];

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  var hobbitsList = document.createElement("ul");
  for(var i = 0; i < hobbits.length; i++){
    var hobbit = document.createElement("li");
    hobbit.innerHTML = hobbits[i];
    // give each hobbit a class of hobbit

    hobbit.setAttribute("class", "hobbit");

    hobbitsList.appendChild(hobbit);
  }
  theShire.appendChild(hobbitsList);
}

makeHobbits();

// Part 3
var frodo = document.getElementsByClassName("hobbit")[0];
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var div = document.createElement("div");
  div.setAttribute("id", "the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  div.setAttribute("class", "magic-imbued-jewelry");
  // add the ring as a child of Frodo
  frodo.appendChild(div);

  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  div.addEventListener("click", nazgulScreech);
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  var buddiesList = document.createElement("ul");
  for (var i = 0; i < buddies.length; i++){
    var buddy = document.createElement("li");
    buddy.innerHTML = buddies[i];
    buddiesList.appendChild(buddy);
  }
  // insert your aside as a child element of rivendell
  aside.appendChild(buddiesList);
  rivendell.appendChild(aside);
}

makeBuddies();

// Part 5
var selectStrider = rivendell.querySelectorAll("li")[3];
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  selectStrider.textContent = "Aragorn";

}

beautifulStranger();

// Part 6
var selectHobbits = theShire.querySelector("ul");
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(selectHobbits);
}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
//}
