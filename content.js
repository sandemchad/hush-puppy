console.log("Hush puppy!")

if (typeof findParent != 'function') {
  var findParent = function(element, selector) {
    var parents = [];

    while (element = element.parentElement.closest(selector)) {
      parents.push(element)
    }
    return parents[0]
  };

  var hideElement = function(element) {
    if (element) {
      element.style.display = "none";
    }
  }
}

for (var element of document.querySelectorAll(".author[href='/houndci-bot']")){
  hideElement(findParent(element, ".js-timeline-item"))
  hideElement(findParent(element, ".inline-comments"))
}
