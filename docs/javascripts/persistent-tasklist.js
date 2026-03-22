(function () {
  "use strict";

  var TASK_NOTE_TEXT = "These checkboxes are toggleable and saved on this device so you can track what you have and what you still need.";
  var STEP_NOTE_TEXT = "Tip: Click any step to cross it off. Progress is saved on this device.";

  function normalizeText(text) {
    return (text || "").replace(/\s+/g, " ").trim();
  }

  function getItemKey(checkbox, indexOnPage) {
    var listItem = checkbox.closest("li");
    var labelText = listItem ? normalizeText(listItem.textContent) : "";
    var path = window.location.pathname || "/";
    return path + "::" + indexOnPage + "::" + labelText;
  }

  function getStepKey(stepItem, indexOnPage) {
    var path = window.location.pathname || "/";
    var labelText = normalizeText(stepItem.textContent);
    return path + "::guide-step::" + indexOnPage + "::" + labelText;
  }

  function ensureTrackingNote(listElement, noteText, noteType) {
    if (!listElement || !listElement.parentElement) {
      return;
    }

    var nextSibling = listElement.nextElementSibling;
    if (nextSibling && nextSibling.classList.contains("tracking-note") && nextSibling.dataset.noteType === noteType) {
      return;
    }

    var note = document.createElement("p");
    note.className = "tracking-note";
    note.dataset.noteType = noteType;
    note.textContent = noteText;
    listElement.insertAdjacentElement("afterend", note);
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

  function updateStepVisualState(stepItem, isComplete) {
    if (isComplete) {
      stepItem.classList.add("guide-step-checked");
    } else {
      stepItem.classList.remove("guide-step-checked");
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
      } else {
        checkbox.checked = false;
      }

      updateVisualState(checkbox);

      checkbox.addEventListener("change", function () {
        localStorage.setItem(key, checkbox.checked ? "1" : "0");
        updateVisualState(checkbox);
      });

      var taskList = checkbox.closest("ul, ol");
      if (taskList && taskList.classList.contains("task-list")) {
        ensureTrackingNote(taskList, TASK_NOTE_TEXT, "task");
      }
    });
  }

  function enablePersistentGuideSteps() {
    var steps = document.querySelectorAll(".md-content .md-typeset ol > li");

    steps.forEach(function (stepItem, indexOnPage) {
      if (stepItem.closest(".task-list")) {
        return;
      }

      if (stepItem.dataset.stepBound === "1") {
        return;
      }

      stepItem.dataset.stepBound = "1";
      stepItem.classList.add("guide-step-item");

      var key = getStepKey(stepItem, indexOnPage);
      var saved = localStorage.getItem(key);
      var isComplete = saved === "1";
      updateStepVisualState(stepItem, isComplete);

      stepItem.addEventListener("click", function (event) {
        if (event.target.closest("a, button, input, code, pre")) {
          return;
        }

        var nowComplete = !stepItem.classList.contains("guide-step-checked");
        localStorage.setItem(key, nowComplete ? "1" : "0");
        updateStepVisualState(stepItem, nowComplete);
      });

      var parentList = stepItem.closest("ol");
      if (parentList) {
        ensureTrackingNote(parentList, STEP_NOTE_TEXT, "step");
      }
    });
  }

  function enableTrackingFeatures() {
    enablePersistentTaskLists();
    enablePersistentGuideSteps();
  }

  if (typeof window.document$ !== "undefined" && window.document$.subscribe) {
    window.document$.subscribe(enableTrackingFeatures);
    return;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enableTrackingFeatures);
  } else {
    enableTrackingFeatures();
  }
})();
