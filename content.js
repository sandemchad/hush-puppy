console.log("Hush puppy!")
if (typeof puppyHushed === "undefined") {
  var puppyHushed = false
}
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

  var showElement = function(element) {
    if (element) {
      element.style.display = "block";
    }
  }
}

for (var element of document.querySelectorAll(".author[href='/houndci-bot']")) {
  method = puppyHushed ? showElement : hideElement

  method(findParent(element, ".js-timeline-item"))
  method(findParent(element, ".inline-comments"))
}
puppyHushed = !puppyHushed
