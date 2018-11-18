chrome.runtime.onMessage.addListener((request) => {
  updateElements(request.query);
});

const findParent = (element, selector) => {
  let parents = [];

  while (element = element.parentElement.closest(selector)) {
    parents.push(element);
  }

  return parents[0];
}

const hideElement = (element) => {
  if (element) element.style.display = "none";
}

const showElement = (element) => {
  if (element) element.style.display = "block";
}

const filterHidden = (elements) => (
  elements.filter((element) => {
    const timeline = findParent(element, ".js-timeline-item");
    const comment = findParent(element, ".inline-comments");

    return visible(timeline) || visible(comment)
  })
)

const visible = (element) => {
  if (!element) return null;

  const style = window.getComputedStyle(element);

  return (style.display != 'none') && (style.visibility != 'hidden');
}

const updateElements = (query) => {
  const elements = document.querySelectorAll(query);
  const hiddenElements = filterHidden([...elements])
  action = hiddenElements.length ? hideElement : showElement;

  elements.forEach(element => {
      action(findParent(element, ".js-timeline-item"))
      action(findParent(element, ".inline-comments"))
  });
}
