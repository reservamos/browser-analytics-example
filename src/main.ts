import analytics, { InitConfig } from "@reservamos/browser-analytics";
import {
  trackSearchEventExample,
  trackSearchWithErrors
} from "./examples/search";
import {
  trackViewResultsExample,
  trackViewResultsWithErrors
} from "./examples/viewResults";
import {
  trackSeatChangeExample,
  trackSeatChangeWithErrors
} from "./examples/seatChange";

const config: InitConfig = {
  mixpanelToken: import.meta.env.VITE_ANALYTICS_MIXPANEL_TOKEN || "",
  identificationKey: import.meta.env.VITE_ANALYTICS_IDENTIFICATION_KEY || "",
  debug: import.meta.env.VITE_ANALYTICS_DEBUG === "true"
};

analytics.init(config);

window.addEventListener("Tracker Ready", async () => {
  console.log("Tracker Ready: Module Imports + TS");

  analytics.track.test();
  //Search Event
  trackSearchEventExample();

  //View Results
  trackViewResultsExample();

  //Seat Change
  trackSeatChangeExample();

  //Seat Change
  analytics.track.interestInHome({
    product: "web"
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
      salesforceId: "123456789" // You can add any custom property you want, I.E. any other identifier
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
        phone: "123456789"
      }
    );
  } catch (error) {
    console.log("Error identifying user", error);
  }
  // Failing to search event
  trackSearchWithErrors();
  // Failing to view results event
  trackViewResultsWithErrors();
  // Failing to Seat Change event
  trackSeatChangeWithErrors();

  try {
    analytics.track.interestInHome({
      // Missing required field: product
    });
  } catch (error) {
    console.log("Error Interest in home event", error);
  }
});
