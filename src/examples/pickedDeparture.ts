import analytics, { PickedDepartureProps } from "@reservamos/browser-analytics";

export function trackPickedDepartureEventExample() {
  const PickedDepartureProps: PickedDepartureProps = {
    Arrival: "2024-11-02",
    Departure: "2024-11-02",
    Destination: "terminal 2",
    "Destination Terminal": "Terminal 2",
    Line: "Line 1",
    Origin: "Aguascalientes",
    "Origin Terminal": "terminal 1",
    Price: 689,
    "Result Position": 2,
    Route: "test1 - test2",
    Stops: 1,
    "Transport Type": "Bus",
    Transporter: "Test",
    product: "web",
    "Recommended Trip": true,
    "Recommended Trip Type": "popular",
  };

  analytics.track.pickedDeparture(PickedDepartureProps);
  console.log("pickedDeparture Event Tracked");
}

export function trackPickedDepartureWithErrors() {
  const PickedDepartureProps: PickedDepartureProps = {
    // Error: Missing required 'Arrival' property
    // Error: Missing required 'Departure' property
    Destination: "terminal 2",
    "Destination Terminal": "Terminal 2",
    Line: "Line 1",
    Origin: "Aguascalientes",
    "Origin Terminal": "terminal 1",
    Price: 689,
    "Result Position": 2,
    Route: "test1 - test2",
    Stops: 1,
    "Transport Type": "Bus",
    Transporter: "Test",
    product: "web",
    "Recommended Trip": false,
  };

  console.log("pickedDeparture Event with Errors");
  analytics.track.pickedDeparture(PickedDepartureProps);
}
