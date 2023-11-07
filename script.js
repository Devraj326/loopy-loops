//challenge 1

function printName(){
  const personId = document.getElementById("user");
  if (personId){
    personId.innerHTML = "Devraj Patil"
  }
}
window.onload = printName;

//challenge 2

function btnn(){
  var btn = document.getElementById("btn-click");
  btn.style.backgroundColor = 'blue';
}

//challenge 3

function makeSentence(){
  let noun = document.getElementById("noun").value;
  let verb = document.getElementById("verb").value;
  let adverb = document.getElementById("adverb").value;
  let sentence = noun + " " + verb + " " + adverb + ".";
  document.getElementById("statement").innerHTML = sentence;
}

let btnnn = document.getElementById("build-button");
btnnn.addEventListener("click", makeSentence);

//challenge 4.1

var grandparent =document.getElementById("grandparent");
grandparent.addEventListener("click", function(){
  console.log("grandparent clicked");
});

var parent =document.getElementById("parent");
parent.addEventListener("click", function(){
  console.log("parent clicked");
});

var child =document.getElementById("child");
child.addEventListener("click", function(){
  console.log("child clicked");
});

//challenge 4.2

var grandparent =document.getElementById("grandparent");
grandparent.addEventListener("click", function(){
  console.log("grandparentclicked");
}, true);

var parent =document.getElementById("parent");
parent.addEventListener("click", function(){
  console.log("parent clicked");
}, true);

var child =document.getElementById("child");
child.addEventListener("click", function(){
  console.log("child clicked");
}, true);

// challenge 5

let cat = document.getElementById("category");
cat.addEventListener("click", function(event){
  var target = event.target;
  if (target.id === "blazers") {
    console.log("blazers");
  }
});