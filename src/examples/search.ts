import analytics, { SearchProps } from "@reservamos/browser-analytics";

export function trackSearchEventExample() {
  const searchProps: SearchProps = {
    Departure: "2024-11-02",
    "Departure Delta": 1,
    Destination: "test",
    Origin: "test origin",
    "Origin Terminal": "test origin terminal",
    Passengers: 1,
    Route: "acb - def",
    product: "web",
    "Destination Terminal": "abc",
    Categories: ["category 1", "category 2"],
  };

  analytics.track.search(searchProps);
  console.log("Search Event Tracked");
}

export function trackSearchWithErrors() {
  const searchProps: SearchProps = {
    Departure: "BAD DATE FORMAT",
    "Departure Delta": 1,
    Destination: "test",
    Origin: "test origin",
    "Origin Terminal": "test origin terminal",
    Passengers: 1,
    Route: "acb - def",
    product: "web",
    "Destination Terminal": "abc",
  };

  console.log("Search Event with Errors");
  analytics.track.search(searchProps);
}
