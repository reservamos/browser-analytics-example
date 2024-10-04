import analytics, { InitConfig } from "@reservamos/browser-analytics";
import {
  trackSearchEventExample,
  trackSearchWithErrors,
} from "./examples/search";
import {
  trackViewResultsExample,
  trackViewResultsWithErrors,
} from "./examples/viewResults";
import {
  trackSeatChangeExample,
  trackSeatChangeWithErrors,
} from "./examples/seatChange";
import {
  trackInterestInHomeExample,
  trackInterestInHomeWithErrors,
} from "./examples/interestInHome";
import {
  trackInterestInSearchExample,
  trackInterestInSearchWithErrors,
} from "./examples/interestInSearch";

import {
  trackPurchaseAttemptEventExample,
  trackPurchaseAttemptWithErrors,
} from "./examples/purchaseAttempt";
import { identifyExample, identifyWithErrors } from "./examples/identify";
import {
  trackPickedDepartureEventExample,
  trackPickedDepartureWithErrors,
} from "./examples/pickedDeparture";

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
  trackSearchEventExample();

  //View Results
  trackViewResultsExample();

  //Seat Change
  trackSeatChangeExample();

  //Interest in Home
  trackInterestInHomeExample();

  //Interest in Search
  trackInterestInSearchExample();

  // Identifying a user
  identifyExample();

  //Purchase Attempt
  trackPurchaseAttemptEventExample();

  //Picked Departure
  trackPickedDepartureEventExample();

  //Failing to Picked Departure
  trackPickedDepartureWithErrors();

  //Failing to Purchase Attempt
  trackPurchaseAttemptWithErrors();

  // Failing to identify a user by format
  identifyWithErrors();

  // Failing to search event
  trackSearchWithErrors();

  // Failing to view results event
  trackViewResultsWithErrors();

  // Failing to Seat Change event
  trackSeatChangeWithErrors();

  // Failing to Interest in Home event
  trackInterestInHomeWithErrors();

  // Failing to Interest in Search event
  trackInterestInSearchWithErrors();
});
