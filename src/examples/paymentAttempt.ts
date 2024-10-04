import analytics, { PaymentAttemptProps } from "@reservamos/browser-analytics";

export function trackPaymentAttemptEventExample() {
  const paymentAttemptProps: PaymentAttemptProps = {
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
    "Payment Type": "card",
    "Departure Transporter": "Greyhound",
    "Passenger Count": 1,
    "Recommended Trip": false,
    Routes: 1,
    Total: 200,
    product: "web",
  };

  analytics.track.paymentAttempt(paymentAttemptProps);
  console.log("paymentAttempt Event Tracked");
}

export function trackPaymentAttemptWithErrors() {
  const paymentAttemptProps: PaymentAttemptProps = {
    "Departure Arrival": "BAD DATE FORMATE", // Error: Incorrect date format
    "Departure Destination": "New York",
    "Departure Destination Terminal": "Terminal 1",
    "Departure Line": "Line 1",
    "Departure Origin": "Boston",
    "Departure Origin Terminal": "Terminal 2",
    "Departure Price": 200,
    "Departure Route": "BOS-NYC",
    "Departure Stops": 0,
    "Departure Time": "2024-10-12T08:00:00",
    "Payment Type": "card",
    "Departure Transporter": "Greyhound",
    "Passenger Count": 1,
    "Recommended Trip": false,
    Routes: 1,
    Total: 200,
    product: "desktop", // Error: Invalid product value
  };

  console.log("paymentAttempt Event with Errors");
  analytics.track.paymentAttempt(paymentAttemptProps);
}
