(() => {
    const FORM_ID = "getDownloadSemPdfButtonForm";
  
    const nativeSubmit = HTMLFormElement.prototype.submit;
    HTMLFormElement.prototype.submit = function (...args) {
      if (this.id === FORM_ID) {
        handleDownload(this);
        return;                       
      }
      return nativeSubmit.apply(this, args);
    };
  
    document.addEventListener(
      "click",
      (ev) => {
        const btn = ev.target.closest('button[name="getDownloadSemPdf"]');
        if (!btn) return;
  
        const form = document.getElementById(FORM_ID);
        if (!form) return;
  
        ev.preventDefault();
        ev.stopImmediatePropagation();
  
        form.semSubId.value     = btn.dataset.semid;
        form.classId.value      = btn.dataset.clsid;
        form.materialId.value   = btn.dataset.matid;
        form.materialDate.value = btn.dataset.mdate;
  
        handleDownload(form);
      },
      true
    );
  
    async function handleDownload(form) {
      try {
        const res = await fetch(form.action, {
          method: "POST",
          credentials: "include",
          body: new FormData(form)
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
  
        const blob = await res.blob();
        const dataUrl = await new Promise((ok, bad) => {
          const fr = new FileReader();
          fr.onload = () => ok(fr.result);
          fr.onerror = bad;
          fr.readAsDataURL(blob);
        });
  
        chrome.runtime.sendMessage({ type: "open-pdf", dataUrl });
      } catch (e) {
        console.error("[VTOP-AutoOpen] failed:", e);
        alert("Couldn’t auto-open the PDF – see console.");
      }
    }
  })();
  