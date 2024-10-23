import analytics, { InterestInHomeProps } from "@reservamos/browser-analytics";

export function trackInterestInHomeExample() {
  const interestInHomeProps: InterestInHomeProps = {
    product: "web",
  };

  const eventMetadata = {
    "Metadata Property 1": "Metadata Value 1",
    "Metadata Property 2": "Metadata Value 2",
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
