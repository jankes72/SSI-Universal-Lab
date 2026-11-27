/* Include once in the authenticated panel entry script. */
(() => {
  "use strict";
  const marker = "data-ssi-herkules-loader";
  if (document.querySelector("script[" + marker + "]")) return;
  const script = document.createElement("script");
  script.src = "/herkules/tab.js";
  script.defer = true;
  script.setAttribute(marker, "true");
  document.head.append(script);
})();
