console.log("Hush puppy!")

let findParent = function(element, selector) {
  var parents = [];

  while (element = element.parentElement.closest(selector)){
    parents.push(element)
  }
  return parents[0]
}

let hideElement = function(element) {
  if(element){
    element.style.display = "none";
  }
}

for (var element of document.querySelectorAll(".author[href='/houndci-bot']")){
  hideElement(findParent(element, ".js-timeline-item"))
  hideElement(findParent(element, ".inline-comments"))
}
