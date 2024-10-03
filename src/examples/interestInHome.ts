import analytics, { InterestInHomeProps } from "@reservamos/browser-analytics";

export function trackInterestInHomeExample() {
  const interestInHomeProps: InterestInHomeProps = {
    product: "web"
  };

  analytics.track.interestInHome(interestInHomeProps);
  console.log("Interest In Home Event Tracked");
}

export function trackInterestInHomeWithErrors() {
  const interestInHomeProps: InterestInHomeProps = {
    // Missing required field: product
  };

  console.log("Interest In Home Event with Errors");
  analytics.track.interestInHome(interestInHomeProps);
}
