import analytics, { InterestInHomeProps } from "@reservamos/browser-analytics";

export function trackInterestInHomeExample() {
  const interestInHomeProps: InterestInHomeProps = {
    product: "web"
  };

  const eventMetadata = {
    "Additional Property First": "Value 1",
    "Additional Property Last": "Value 2"
  };

  analytics.track.interestInHome(interestInHomeProps, eventMetadata);
  console.log("Interest In Home Event Tracked");
}

export function trackInterestInHomeWithErrors() {
  const interestInHomeProps: InterestInHomeProps = {
    // Missing required field: product
  };

  console.log("Interest In Home Event with Errors");
  analytics.track.interestInHome(interestInHomeProps);
}
