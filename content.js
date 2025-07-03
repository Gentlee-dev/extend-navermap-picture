const MAX_LEVEL = 5;
const MIN_WIDTH = 405;

// 메시지 리스너
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // const isExtend = request.action === "extend";
  console.log(request);
  const level = request.level;
  controlPictureArea(level);
});

// transition 설정 함수
const setTransition = (element) => {
  if (element && !element.style.transition) {
    element.style.transition = "width 0.3s ease-in-out";
  }
};

const getWidth = (max, min, level) => {
  const one = (max - min) / (MAX_LEVEL - 1);
  return min + one * (level - 1);
};

const controlPictureArea = (level) => {
  console.log(level);
  const $entryIframe = document.getElementById("entryIframe");
  if (!$entryIframe) return;

  const $sub_panel = document.getElementById("sub_panel");
  const $app_layout = document.getElementById("app-layout");
  const $left_panel = document.getElementById("section_content");

  const appLayoutWidth = $app_layout.offsetWidth;
  const leftPanelWidth = $left_panel.offsetWidth;

  if ($sub_panel) {
    setTransition($sub_panel);

    const max = appLayoutWidth - leftPanelWidth;
    const width = getWidth(max, MIN_WIDTH, level);
    $sub_panel.style.width = width + "px";
  } else {
    setTransition($entryIframe);
    const max = appLayoutWidth;
    const width = getWidth(max, leftPanelWidth, level);
    $entryIframe.style.width = width + "px";
  }
};
const enablePlugin = () => {
  const $entryIframe = document.getElementById("entryIframe");
  if (!$entryIframe) return;

  const $sub_panel = document.getElementById("sub_panel");
  const $app_layout = document.getElementById("app-layout");
  const $left_panel = document.getElementById("section_content");

  const appLayoutWidth = $app_layout.offsetWidth;

  if ($sub_panel) {
    setTransition($sub_panel);
    const leftPanelWidth = $left_panel.offsetWidth;
    const subPanelWidth = appLayoutWidth - leftPanelWidth;
    $sub_panel.style.width = subPanelWidth + "px";
  } else {
    setTransition($entryIframe);
    $entryIframe.style.width = appLayoutWidth + "px";
  }
};

const shrinkPlugin = () => {
  const $sub_panel = document.getElementById("sub_panel");
  const $entryIframe = document.getElementById("entryIframe");

  if ($sub_panel) {
    setTransition($sub_panel);
    $sub_panel.style.width = "405px";
  } else {
    setTransition($entryIframe);
    $entryIframe.style.width = "100%";
  }
};
