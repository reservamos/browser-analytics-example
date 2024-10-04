import analytics, {
  PassengersCreatedProps,
} from "@reservamos/browser-analytics";

export function trackPassengersCreatedEventExample() {
  const passengersCreatedProps: PassengersCreatedProps = {
    "Departure Arrival": "2024-10-12",
    "Departure Destination": "New York",
    "Departure Destination Terminal": "Terminal 1",
    "Departure Line": "Line 1",
    "Departure Origin": "Boston",
    "Departure Origin Terminal": "Terminal 2",
    "Departure Price": 200,
    "Departure Route": "BOS-NYC",
    "Departure Stops": 0,
    "Departure Time": "2024-10-12T08:00:00",
    "Departure Transporter": "Greyhound",
    "Passenger Count": 2,
    "Recommended Trip": false,
    Routes: 1,
    Total: 400,
    "Trip Length": 4,
    product: "web",
  };

  analytics.track.passengersCreated(passengersCreatedProps);
  console.log("passengersCreated Event Tracked");
}

export function trackPassengersCreatedWithErrors() {
  const passengersCreatedProps: PassengersCreatedProps = {
    "Departure Arrival": "BAD DATE FORMAT", // Error: Incorrect date format
    "Departure Destination": "New York",
    "Departure Destination Terminal": "Terminal 1",
    "Departure Line": "Line 1",
    "Departure Origin": "Boston",
    "Departure Origin Terminal": "Terminal 2",
    "Departure Price": 200,
    "Departure Route": "BOS-NYC",
    "Departure Stops": 0,
    "Departure Time": "2024-10-12T08:00:00",
    "Departure Transporter": "Greyhound",
    "Passenger Count": "2", // Error: Should be a number, not a string
    "Recommended Trip": false,
    Routes: 1,
    Total: "400", // Error: Should be a number, not a string
    "Trip Length": 4,
    product: "mobile", // Error: Invalid product value
  };

  console.log("passengersCreated Event with Errors");
  analytics.track.passengersCreated(passengersCreatedProps);
}
