import analytics, { PurchaseAttemptProps } from "@reservamos/browser-analytics";

export function trackPurchaseAttemptEventExample() {
  const PurchaseAttemptProps: PurchaseAttemptProps = {
    "Passenger Count": 2,
    Total: 250,
    product: "web",
    "Trip Count": 2,
    Trips: [
      {
        "Departure Arrival": "2024-10-12",
        "Departure Destination": "New York",
        "Departure Destination Terminal": "JFK Terminal 4",
        "Departure Line": "AA100",
        "Departure Origin": "Los Angeles",
        "Departure Origin Terminal": "LAX Terminal 5",
        "Departure Price": 150,
        "Departure Route": "LAX-JFK",
        "Departure Stops": 1,
        "Departure Time": "2024-10-12T08:00:00",
        "Departure Transport Type": "Airplane",
        "Departure Transporter": "American Airlines",
        "Recommended Trip": false,
        "Recommended Trip Type": "popular", // optional value
      },
      {
        "Departure Arrival": "2024-10-15",
        "Departure Destination": "Los Angeles",
        "Departure Destination Terminal": "LAX Terminal 5",
        "Departure Line": "DL200",
        "Departure Origin": "New York",
        "Departure Origin Terminal": "JFK Terminal 2",
        "Departure Price": 100,
        "Departure Route": "JFK-LAX",
        "Departure Stops": 1,
        "Departure Time": "2024-10-15T14:30:00",
        "Departure Transport Type": "Airplane",
        "Departure Transporter": "Delta Airlines",
        "Recommended Trip": false,
        // IMPORTANT: Return properties are optional and can be omitted if not needed
        "Return Arrival": "2024-10-20",
        "Return Destination": "New York",
        "Return Destination Terminal": "JFK Terminal 2",
        "Return Line": "AA300",
        "Return Origin": "Los Angeles",
        "Return Origin Terminal": "LAX Terminal 5",
        "Return Price": 120,
        "Return Route": "LAX-JFK",
        "Return Time": "2024-10-20T10:00:00",
        "Return Transport Type": "Airplane",
        "Return Transporter": "American Airlines",
      },
    ],
  };

  const eventMetadata = {
    "Metadata Property 1": "Metadata Value 1",
    "Metadata Property 2": "Metadata Value 2",
  };

  analytics.track.purchaseAttempt(PurchaseAttemptProps, eventMetadata);
  console.log("purchaseAttempt Event Tracked");
}

export function trackPurchaseAttemptWithErrors() {
  const PurchaseAttemptProps: PurchaseAttemptProps = {
    "Passenger Count": 2,
    Routes: 123,
    Total: 123,
    "Trip Length": 1,
    product: "cpu", // Error: Invalid product value (should be "web" or another valid option)
    // Error: Missing required 'Recommended Trip' property (should be false or true)
    trips: [
      {
        "Departure Arrival": "BAD DATE FORMAT", // Error: Incorrect date format
        "Departure Destination": "New York",
        "Departure Destination Terminal": "Terminal 1",
        "Departure Line": 10, // Error: Should be a string, not a number
        "Departure Origin": "Line 2",
        "Departure Origin Terminal": "Terminal 2",
        "Departure Price": "100", // Error: Should be a number, not a string
        "Departure Route": "Route 1",
        "Departure Stops": "1", // Error: Should be a number, not a string
        "Departure Time": "2024-10-13", // Error: Missing time component
        "Departure Transport Type": "Transport type 1",
        "Departure Transporter": "Transporter 1",
        "Recommended Trip": "yes", // Error: Should be a boolean, not a string
      },
      {
        "Departure Arrival": "2024-10-15",
        "Departure Destination": "Los Angeles",
        "Departure Destination Terminal": "LAX Terminal 5",
        "Departure Line": "DL200",
        "Departure Origin": "New York",
        "Departure Origin Terminal": "JFK Terminal 2",
        "Departure Price": 100,
        "Departure Route": "JFK-LAX",
        "Departure Stops": 1,
        "Departure Time": "2024-10-15T14:30:00",
        "Departure Transport Type": "Airplane",
        "Departure Transporter": "Delta Airlines",
        "Recommended Trip": false,
        "Return Arrival": "INVALID DATE", // Error: Invalid date format
        "Return Destination": "New York",
        "Return Destination Terminal": "JFK Terminal 2",
        "Return Line": "AA300",
        "Return Origin": "Los Angeles",
        "Return Origin Terminal": "LAX Terminal 5",
        "Return Price": "120", // Error: Should be a number, not a string
        "Return Route": "LAX-JFK",
        "Return Stops": "0", // Error: Should be a number, not a string
        "Return Time": "2024-10-20", // Error: Missing time component
        "Return Transport Type": "Airplane",
        "Return Transporter": "American Airlines",
      },
    ],
  };

  console.log("purchaseAttempt Event with Errors");
  analytics.track.purchaseAttempt(PurchaseAttemptProps);
}
