import analytics, { PurchaseAttemptProps } from "@reservamos/browser-analytics";

export function trackPurchaseAttemptEventExample() {
  const PurchaseAttemptProps: PurchaseAttemptProps = {
    "Departure Arrival": "2024-10-12",
    "Departure Destination": "New York",
    "Departure Destination Terminal": "Terminal 1",
    "Departure Line": "Line 1",
    "Departure Origin": "Line 2",
    "Departure Origin Terminal": "Terminal 2",
    "Departure Price": 100,
    "Departure Route": "Route 1",
    "Departure Stops": 1,
    "Departure Time": "2024-10-13",
    "Departure Transport Type": "Transport type 1",
    "Departure Transporter": "Transporter 1",
    "Passenger Count": 2,
    "Recommended Trip": true,
    "Recommended Trip Type": "popular", //optional value
    Routes: 123,
    Total: 123,
    "Trip Length": 1,
    product: "web",
  };

  analytics.track.purchaseAttempt(PurchaseAttemptProps);
  console.log("purchaseAttempt Event Tracked");
}

export function trackPurchaseAttemptWithErrors() {
  const PurchaseAttemptProps: PurchaseAttemptProps = {
    "Departure Arrival": "BAD DATE FORMATE", // Error: Incorrect date format
    "Departure Destination": "New York",
    "Departure Destination Terminal": "Terminal 1",
    "Departure Line": 10, // Error: Should be a string, not a number
    "Departure Origin": "Line 2",
    "Departure Origin Terminal": "Terminal 2",
    "Departure Price": 100,
    "Departure Route": "Route 1",
    "Departure Stops": 1,
    "Departure Time": "2024-10-13",
    "Departure Transport Type": "Transport type 1",
    "Departure Transporter": "Transporter 1",
    "Passenger Count": 2,
    Routes: 123,
    Total: 123,
    "Trip Length": 1,
    product: "cpu", // Error: Invalid product value (should be "web" or another valid option)
    // Error: Missing required 'Recommended Trip' property (should be false or  true)
  };

  console.log("purchaseAttempt Event with Errors");
  analytics.track.purchaseAttempt(PurchaseAttemptProps);
}
