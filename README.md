<p align="center">
  <h3 align="center">VTOP AutoOpen</h3>
  <p align="center">
    Extension that intercepts VTOP reference material downloads and opens PDFs directly in the native viewer
  </p>
</p>

---

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about">About</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

---

## About

**VTOP Reference Auto-Open** hooks into the VTOP course page’s hidden download form and button clicks to:

- **Intercept** the form submission or programmatic `.submit()` call for “Reference Material.”
- **Fetch** the PDF via `fetch()` using the authenticated session.
- **Convert** the binary blob to a `data:` URL.
- **Open** that `data:` URL in a new tab, letting the browser's native PDF viewer render it.

### Features

- **Prototype-patch**: Overrides `HTMLFormElement.prototype.submit` to catch any direct form-submit call.
- **Click-capture**: Listens on the capture phase for reference-material button clicks.
- **Seamless preview**: Streams the PDF bytes, converts to Base64 data-URL, and opens in a new tab.
- **Zero prompts**: No “Save as…” dialogs, even under strict CSP.

---

## Built With

- **JavaScript** – Core scripting for content script & service worker  
- **WebExtension APIs** – `browser.tabs`, `browser.runtime`, `fetch`, `FileReader`  

---

## Installation

1. Clone or download this repo to a folder, e.g. `vtop-autoopen`.  
2. In your browser, go to `chrome://extensions`, load unpacked, select that folder and you're good to go. 

---

## Usage

1. Log in and navigate to any **VTOP Course Page**.  
2. Click any **Reference Material** download button.
3. The PDF will open instantly in a **new tab** via your browser's built-in PDF viewer—no file-save dialog.

---

## Contributing

Bug reports, feature requests, and pull requests are welcome!  
1. Fork the repository.  
2. Create a new branch: `git checkout -b feature-name`.  
3. Make your changes and commit: `git commit -m "Add feature"`.  
4. Push to your fork: `git push origin feature-name`.  
5. Open a Pull Request here on GitHub.

Please ensure any additions maintain MV3 compatibility and do not introduce CSP conflicts.
