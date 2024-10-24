import analytics, {
  InterestInSearchProps
} from "@reservamos/browser-analytics";

export function trackInterestInSearchExample() {
  const interestInSearchProps: InterestInSearchProps = {
    Origin: "SAO PAULO",
    Destination: "RIO DE JANEIRO",
    Departure: "2020-12-25",
    Return: "2020-12-30",
    product: "web"
  };

  analytics.track.interestInSearch(interestInSearchProps);
  console.log("Interest In Search Event Tracked");
}

export function trackInterestInSearchWithErrors() {
  const interestInSearchProps: InterestInSearchProps = {
    // Missing required field: product
  };

  console.log("Interest In Search Event with Errors");
  analytics.track.interestInSearch(interestInSearchProps);
}
