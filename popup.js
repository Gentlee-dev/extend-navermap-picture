document.addEventListener("DOMContentLoaded", function () {
  const naverMapExtendToggleButton = document.getElementById(
    "naverMapExtendToggleButton"
  );
  const naverMapShrinkToggleButton = document.getElementById(
    "naverMapShrinkToggleButton"
  );
  const level = document.getElementById("level");
  let levelValue = 1;

  // 저장된 levelValue 불러오기
  chrome.storage.local.get(["levelValue"], function (result) {
    if (result.levelValue) {
      levelValue = result.levelValue;
      level.textContent = `${levelValue}`;
      // 팝업이 열릴 때 현재 단계로 메시지 전송(선택)
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          level: levelValue,
        });
      });
    } else {
      level.textContent = `${levelValue}`;
    }
  });

  const sendLevel = (levelValue) => {
    level.textContent = `${levelValue}`;
    chrome.storage.local.set({ levelValue }); // 저장
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        level: levelValue,
      });
    });
  };

  naverMapExtendToggleButton.addEventListener("click", function () {
    if (levelValue >= 5) return;
    levelValue++;
    sendLevel(levelValue);
  });

  naverMapShrinkToggleButton.addEventListener("click", function () {
    if (levelValue <= 1) return;
    levelValue--;
    sendLevel(levelValue);
  });
});
