const RESOLVED_QUERY = ".js-toggle-outdated-comments, .js-resolvable-thread-toggler-container";

const MENU_CONTENT = {
  "all": {
    id: "all",
    title: "Toggle all Comments",
    query: `.review-comment-contents, ${RESOLVED_QUERY}`
  },
  "hound": {
    id: "hound",
    title: "Toggle Hound Comments",
    query: ".author[href='/houndci-bot'], .author[href='https://github.com/marketplace/hound']"
  },
  "resolved": {
    id: "resolved",
    title: "Toggle Resolved Comments",
    query: RESOLVED_QUERY
  }
};

const sendMessage = (messageJson) => {
  chrome.tabs.query({ active: true, currentWindow: true },
    tabs => (chrome.tabs.sendMessage(tabs[0].id, messageJson))
  );
}

const onClickHandler = (info) => {
  sendMessage({ query: MENU_CONTENT[info.menuItemId].query });
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(() => {
  Object.values(MENU_CONTENT).forEach(menu => {
    const { id, title, ...rest } = menu

    chrome.contextMenus.create({ id, title });
  });
});

chrome.browserAction.onClicked.addListener(() => {
  sendMessage({ query: MENU_CONTENT.hound.query });
})
