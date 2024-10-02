const analytics = require("@reservamos/browser-analytics");

const config = {
  mixpanelToken: import.meta.env.VITE_ANALYTICS_MIXPANEL_TOKEN || "",
  identificationKey: import.meta.env.VITE_ANALYTICS_IDENTIFICATION_KEY || "",
  debug: import.meta.env.VITE_ANALYTICS_DEBUG === "true",
};

analytics.init(config);

window.addEventListener("Tracker Ready", () => {
  console.log("Tracker Ready: Require Imports");

  analytics.trackTest();
});
