document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  const mobileTabs = document.querySelector(".mobile-tabs");

  function switchTab(tabId) {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    document.querySelector(`[data-tab="${tabId}"]`)?.classList.add("active");
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      switchTab(this.dataset.tab);
    });
  });

  mobileTabs.addEventListener("change", function () {
    switchTab(this.value);
  });

  switchTab("tab1");
});
