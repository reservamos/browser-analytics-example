import analytics, { InitConfig } from "@reservamos/browser-analytics";

const config: InitConfig = {
  mixpanelToken: import.meta.env.VITE_ANALYTICS_MIXPANEL_TOKEN || "",
  identificationKey: import.meta.env.VITE_ANALYTICS_IDENTIFICATION_KEY || "",
  debug: import.meta.env.VITE_ANALYTICS_DEBUG === "true",
};

analytics.init(config);

window.addEventListener("Tracker Ready", async () => {
  console.log("Tracker Ready: Module Imports + TS");

  analytics.track.test();
  //Search Event
  analytics.track.search({
    Departure: "2024-11-02",
    "Departure Delta": 1,
    Destination: "test",
    Origin: "test origin",
    "Origin Terminal": "test origin terminal",
    Passengers: 1,
    Route: "acb - def",
    product: "web",
    "Destination Terminal": "abc",
  });
  //View Results
  analytics.track.viewResults({
    "Bus count": 2,
    Departure: "2024-11-02",
    "Departure Delta": 1,
    Destination: "test",
    "User Fingerprint": "123d12",
    Origin: "test origin",
    "Origin Terminal": "test origin terminal",
    "Has Frequent Buses": true,
    Route: "acb - def",
    product: "app",
    "Destination Terminal": "abc",
  });
  //Seat Change
  analytics.track.seatChange({
    Arrival: "2024-10-21",
    Departure: "2024-10-21",
    Route: "route 1",
    Destination: "test Destinaion",
    "Destination Terminal": "terminal 1",
    Line: "line 1",
    Origin: "test origin",
    "Origin Terminal": "Origin terminal",
    Tickets: 1,
    Way: "Departure",
    product: "web",
    Price: 100,
    Transporter: "Test",
  });
  //Seat Change
  analytics.track.interestInHome({
    product: "web",
  });
  // Identifying a user
  await analytics.identify(
    "some-user-id", // You can choose any identifier you want, it will be the main key to identify the user,
    {
      // These four properties are the only ones that have a fixed format
      firstName: "John",
      lastName: "Doe",
      email: "example@example.com",
      phone: "123456789",

      // Custom properties
      salesforceId: "123456789", // You can add any custom property you want, I.E. any other identifier
    }
  );

  // Failing to identify a user by format
  try {
    await analytics.identify(
      "some-user-id", // You can choose any identifier you want, it will be the main key to identify the user,
      {
        // These four properties are the only ones that have a fixed format
        firstName: "John",
        lastName: "Doe",
        email: "bad-email", // This email is invalid
        phone: "123456789",
      }
    );
  } catch (error) {
    console.log("Error identifying user", error);
  }
  // Failing to search event
  try {
    analytics.track.search({
      Departure: "22/10/2024", // Invalid date format, should be YYYY-MM-DD
      "Departure Delta": 1.5, // Should be an integer
      Destination: "test",
      Origin: "test origin",
      "Origin Terminal": "test origin terminal",
      Passengers: 1,
      Route: "acb - def",
      // Missing required field: product
    });
  } catch (error) {
    console.log("Error search event", error);
  }

  // Failing to view results event
  try {
    analytics.track.viewResults({
      Departure: "22/10/2024", // Invalid date format, should be YYYY-MM-DD
      "Departure Delta": 1,
      Destination: "test",
      Origin: "test origin",
      "Origin Terminal": "test origin terminal",
      Route: "acb - def",
      // Missing required fields: "Bus count", "User Fingerprint", "Has Frequent Buses", product
    });
  } catch (error) {
    console.log("Error View Results event", error);
  }
  // Failing to Seat Change event
  try {
    analytics.track.seatChange({
      Arrival: "2024-10-21",
      Departure: "2025", // Invalid date format, should be YYYY-MM-DD
      Route: "route 1",
      Destination: "test Destinaion",
      "Destination Terminal": "terminal 1",
      "Origin Terminal": "", // Empty string, should be a valid terminal
      Tickets: 1,
      Way: "return", // Invalid value, should be "Departure" or "Arrival"
      product: "web",
      Price: "100", // Should be a number, not a string
      Transporter: "Test",
      // Missing required field: Origin, Line
    });
  } catch (error) {
    console.log("Error Seat Change event", error);
  }
  try {
    analytics.track.interestInHome({
      // Missing required field: product
    });
  } catch (error) {
    console.log("Error Interest in home event", error);
  }
});
