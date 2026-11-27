/* Add a public module link to the authenticated Universal Lab panel. */
(() => {
  "use strict";
  const marker = "data-ssi-herkules-tab";
  const install = () => {
    const nav = document.querySelector("nav#tabs");
    if (!nav || nav.querySelector("[" + marker + "]")) return Boolean(nav);
    const link = document.createElement("a");
    link.className = "tab";
    link.href = "/herkules/";
    link.textContent = "SSI HERKULES";
    link.setAttribute(marker, "true");
    link.setAttribute("aria-label", "Otwórz moduł SSI HERKULES");
    link.title = "Publiczny opis Labiryntu SSI HERKULES";
    nav.append(link);
    return true;
  };
  if (install()) return;
  const observer = new MutationObserver(() => {
    if (install()) observer.disconnect();
  });
  observer.observe(document.documentElement, {childList:true,subtree:true});
})();
