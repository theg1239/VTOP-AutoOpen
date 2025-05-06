chrome.runtime.onMessage.addListener((msg) => {
    if (msg?.type !== "open-pdf" || !msg.dataUrl) return;
    chrome.tabs.create({ url: msg.dataUrl });
  });
  