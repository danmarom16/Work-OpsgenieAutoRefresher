const autoRefreshAlertList = () => {
  isUpdatePossible = () => {
    // Check if we are on the alert-list
    if (!document.getElementById("alert-list")) {
      return false;
    }
    // Check if the search dialog is open
    if (
      !(
        window.getComputedStyle(document.getElementById("assistant-frame"))
          .display === "none"
      )
    ) {
      return false;
    }
    // Check if the search bar has focus
    if (document.querySelector("#editorA.ace_focus")) {
      return false;
    }
    // Check if at least one checkbox is on
    if (!document.querySelector(".date-options")) {
      return false;
    }
    return true;
  };

  const pressAck = () => {
    const elem = document
      .querySelector(".bulk-actions__button__group")
      .querySelector(".tiny")
      .click();
  };

  const markAlerts = (substring) => {
    const alertContainer = document.querySelector(".alert-list-item-vue-cover");
    const alertItems = alertContainer.querySelectorAll(".og-alert-item");
    alertItems.forEach((alertItem) => {
      if (alertItem.textContent.toLowerCase().includes(substring)) {
        alertItem
          .querySelector(".og-alert-item__left")
          .querySelector(".og-alert-item__left__checkbox")
          .querySelector(".checkbox-area")
          .querySelector(".genie-checkbox")
          .querySelector(".genie-checkbox-frame")
          .click();
      }
    });
  };

  const refresh = () => {
    document
      .querySelector(".og-advance-page__header__query-box")
      .querySelector(".search-query-area")
      .querySelector(".search-bar")
      .querySelector(".query-area")
      .querySelector(".search-n-actions")
      .querySelector(".tiny-button-group")
      .querySelectorAll(".tiny")[1]
      .click();
  };
  return {
    autoRefresh: () => {
      if (isUpdatePossible()) {
        markAlerts("no new mdl");
        markAlerts("the utilization of");
        markAlerts("errors in puppet log");
        setTimeout(pressAck, 500);
        setTimeout(refresh, 3000);
      }
    },
  };
};

const autoUpdate = autoRefreshAlertList();
setInterval(autoUpdate.autoRefresh, 30000);
