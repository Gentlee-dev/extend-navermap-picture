let url = "";
const PICTURE_URL = "placePath=/photo";
// URL 변경 감지
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(tab.url);
  const isSameUrl = tab.url === url;
  const isPictureUrl = tab.url.includes(PICTURE_URL);
  const hasTabUrl = tab.url !== "undefined";
  if (isSameUrl) return;
  if (!hasTabUrl) return;
  if (!isPictureUrl) return;
  url = tab.url;
  console.log("url 변경됨");
});
