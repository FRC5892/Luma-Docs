(function () {
  "use strict";

  function isHttpUrl(url) {
    return url.protocol === "http:" || url.protocol === "https:";
  }

  function isExternalLink(anchor) {
    var href = anchor.getAttribute("href");
    if (!href || href.startsWith("#")) {
      return false;
    }

    var parsed;
    try {
      parsed = new URL(anchor.href, window.location.href);
    } catch (_error) {
      return false;
    }

    if (!isHttpUrl(parsed)) {
      return false;
    }

    return parsed.host !== window.location.host;
  }

  function markExternalLinks() {
    var anchors = document.querySelectorAll("a[href]");

    anchors.forEach(function (anchor) {
      if (!isExternalLink(anchor)) {
        return;
      }

      anchor.setAttribute("target", "_blank");

      var existingRel = (anchor.getAttribute("rel") || "").toLowerCase();
      var relTokens = existingRel.split(/\s+/).filter(Boolean);

      if (relTokens.indexOf("noopener") === -1) {
        relTokens.push("noopener");
      }
      if (relTokens.indexOf("noreferrer") === -1) {
        relTokens.push("noreferrer");
      }

      anchor.setAttribute("rel", relTokens.join(" "));
    });
  }

  if (typeof window.document$ !== "undefined" && window.document$.subscribe) {
    window.document$.subscribe(markExternalLinks);
    return;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", markExternalLinks);
  } else {
    markExternalLinks();
  }
})();
