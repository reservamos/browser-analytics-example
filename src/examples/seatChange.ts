import analytics, { SeatChangeProps } from "@reservamos/browser-analytics";

export function trackSeatChangeExample() {
  const seatChangeProps: SeatChangeProps = {
    Arrival: "2024-10-21",
    Departure: "2024-10-21",
    Route: "route 1",
    Destination: "test Destination",
    "Destination Terminal": "terminal 1",
    Line: "line 1",
    Origin: "test origin",
    "Origin Terminal": "Origin terminal",
    Tickets: 1,
    Way: "Departure",
    product: "web",
    Price: 100,
    Transporter: "Test",
  };

  const eventMetadata = {
    "Metadata Property 1": "Metadata Value 1",
    "Metadata Property 2": "Metadata Value 2",
  };

  analytics.track.seatChange(seatChangeProps, eventMetadata);
  console.log("Seat Change Event Tracked");
}

export function trackSeatChangeWithErrors() {
  const seatChangeProps: SeatChangeProps = {
    Arrival: "BAD DATE FORMAT", // Bad Date Format
    Departure: "BAD DATE FORMAT", // Bad Date Format
    Route: "route 1",
    Destination: "test Destination",
    "Destination Terminal": "terminal 1",
    Line: "line 1",
    Origin: "test origin",
    "Origin Terminal": "Origin terminal",
    Tickets: 1,
    Way: "Departure",
    product: "web",
    Price: 100,
    Transporter: "Test",
  };

  console.log("Seat Change Event with Errors");
  analytics.track.seatChange(seatChangeProps);
}
