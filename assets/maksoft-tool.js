(() => {
  const body = document.body;
  if (!body) return;

  // Identify the existing tool without rebuilding or moving any of its elements.
  let tool = "unknown";
  const has = id => !!document.getElementById(id);

  if (has("productList")) tool = "stock";
  else if (has("inp-title") && document.querySelector(".wrap")) tool = "event";
  else if (has("excelTable")) tool = "akamai";
  else if (has("resultTable")) tool = "monthly";
  else if (has("pdfFile")) tool = "pageturner";
  else if (has("work-canvas")) tool = "photoshop";
  else if (has("codeInput")) tool = "gift";
  else if (has("editor")) tool = "mini";
  else if (has("inputsPanel")) tool = "landing";
  else if (has("colorPicker") && has("canvas")) tool = "frame";
  else if (document.querySelector(".connection-state")) tool = "inzone";

  body.setAttribute("data-maksoft-tool", tool);

  // Keep the original floating navigation link in its original position.
  const homeLink = document.querySelector("a.html-tools-hub-link");
  if (homeLink) {
    homeLink.href = "../../index.html";
    homeLink.title = "Back to Maksoft";
    homeLink.setAttribute("aria-label", "Back to Maksoft");
    const spans = homeLink.querySelectorAll("span");
    if (spans.length) spans[spans.length - 1].textContent = "Maksoft";
  }

  // Remove only a stale injected header from an earlier cached version.
  document.querySelectorAll(".mk-header").forEach(node => node.remove());
})();