import analytics, {
  InterestInSearchProps,
} from "@reservamos/browser-analytics";

export function trackInterestInSearchExample() {
  const interestInSearchProps: InterestInSearchProps = {
    product: "web",
  };

  const eventMetadata = {
    "Metadata Property 1": "Metadata Value 1",
    "Metadata Property 2": "Metadata Value 2",
  };

  analytics.track.interestInSearch(interestInSearchProps, eventMetadata);
  console.log("Interest In Search Event Tracked");
}

export function trackInterestInSearchWithErrors() {
  const interestInSearchProps: InterestInSearchProps = {
    // Missing required field: product
  };

  console.log("Interest In Search Event with Errors");
  analytics.track.interestInSearch(interestInSearchProps);
}
