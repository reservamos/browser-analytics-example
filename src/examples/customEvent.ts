import analytics from "@reservamos/browser-analytics";

export function customEventExample() {
  const eventData = {
    // Custom properties
    property1: "value1",
    property2: "value2",
    property4: true,
  };

  const eventMetadata = {
    "Metadata Property 1": "Metadata Value 1",
    "Metadata Property 2": "Metadata Value 2",
  };

  analytics.track.customEvent("Custom Event", eventData, eventMetadata);
  console.log("Custom Event Tracked");
}
