import analytics from "@reservamos/browser-analytics";

export function getFingerprintIdExample() {
  const fingerprintId = analytics.identifiers.getFingerprintId();
  console.log("Fingerprint ID: ", fingerprintId);
}
