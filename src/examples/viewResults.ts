import analytics, { ViewResultsProps } from "@reservamos/browser-analytics";

export function trackViewResultsExample() {
  const viewResultsProps: ViewResultsProps = {
    "Bus count": 2,
    Departure: "2024-11-02",
    "Departure Delta": 1,
    Destination: "test",
    Origin: "test origin",
    "Origin Terminal": "test origin terminal",
    "Has Frequent Buses": true,
    Route: "acb - def",
    product: "app",
    "Destination Terminal": "abc",
  };

  const eventMetadata = {
    "Metadata Property 1": "Metadata Value 1",
    "Metadata Property 2": "Metadata Value 2",
  };

  analytics.track.viewResults(viewResultsProps, eventMetadata);
  console.log("View Results Event Tracked");
}

export function trackViewResultsWithErrors() {
  const viewResultsProps: ViewResultsProps = {
    "Bus count": 2,
    Departure: "BAD DATE FORMAT", // Bad Date Format
    "Departure Delta": 1,
    Destination: "test",
    Origin: "test origin",
    "Origin Terminal": "test origin terminal",
    "Has Frequent Buses": true,
    Route: "", // Empty Route
    product: "app",
    "Destination Terminal": "abc",
  };

  console.log("View Results Event with Errors");
  analytics.track.viewResults(viewResultsProps);
}
