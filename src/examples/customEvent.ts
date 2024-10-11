import analytics from "@reservamos/browser-analytics";

export function customEventExample() {
  analytics.track.customEvent("Custom Event", {
    // Custom properties
    property1: "value1",
    property2: "value2",
    property4: true,
    property5: 123
  });
  console.log("Custom Event Tracked");
}
