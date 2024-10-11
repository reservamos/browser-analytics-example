import analytics from "@reservamos/browser-analytics";

export function getDistinctIdExample() {
  const distinctId = analytics.identifiers.getDistinctId();
  console.log("Distinct ID: ", distinctId);
}
