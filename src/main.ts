import analytics, { InitConfig } from "@reservamos/browser-analytics";

const config: InitConfig = {
  mixpanelToken: import.meta.env.VITE_ANALYTICS_MIXPANEL_TOKEN || "",
  identificationKey: import.meta.env.VITE_ANALYTICS_IDENTIFICATION_KEY || "",
  debug: import.meta.env.VITE_ANALYTICS_DEBUG === "true",
};

analytics.init(config);

window.addEventListener("Tracker Ready", () => {
  console.log("Tracker Ready: Module Imports + TS");

  analytics.trackTest();
});
