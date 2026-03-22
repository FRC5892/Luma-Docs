(function () {
  "use strict";

  function normalizeText(text) {
    return (text || "").replace(/\s+/g, " ").trim();
  }

  function getItemKey(checkbox, indexOnPage) {
    var listItem = checkbox.closest("li");
    var labelText = listItem ? normalizeText(listItem.textContent) : "";
    var path = window.location.pathname || "/";
    return path + "::" + indexOnPage + "::" + labelText;
  }

  function updateVisualState(checkbox) {
    var listItem = checkbox.closest("li");
    if (!listItem) {
      return;
    }

    if (checkbox.checked) {
      listItem.classList.add("task-item-checked");
    } else {
      listItem.classList.remove("task-item-checked");
    }
  }

  function enablePersistentTaskLists() {
    var checkboxes = document.querySelectorAll(".task-list-item input[type='checkbox']");

    checkboxes.forEach(function (checkbox, indexOnPage) {
      if (checkbox.dataset.persistentBound === "1") {
        updateVisualState(checkbox);
        return;
      }

      checkbox.disabled = false;
      checkbox.dataset.persistentBound = "1";

      var key = getItemKey(checkbox, indexOnPage);
      var saved = localStorage.getItem(key);

      if (saved === "1") {
        checkbox.checked = true;
      } else if (saved === "0") {
        checkbox.checked = false;
      }

      updateVisualState(checkbox);

      checkbox.addEventListener("change", function () {
        localStorage.setItem(key, checkbox.checked ? "1" : "0");
        updateVisualState(checkbox);
      });
    });
  }

  if (typeof window.document$ !== "undefined" && window.document$.subscribe) {
    window.document$.subscribe(enablePersistentTaskLists);
    return;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enablePersistentTaskLists);
  } else {
    enablePersistentTaskLists();
  }
})();
