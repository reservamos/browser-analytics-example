import analytics, {
  PurchaseCanceledProps
} from "@reservamos/browser-analytics";

export function trackPurchaseCanceledEventExample() {
  const purchaseCanceledProps: PurchaseCanceledProps = {
    "Operation Id": "OID-123456",
    product: "web"
  };

  const eventMetadata = {
    "Metadata Property 1": "Metadata Value 1",
    "Metadata Property 2": "Metadata, Value 2"
  };

  analytics.track.purchaseCanceled(purchaseCanceledProps, eventMetadata);
  console.log("Purchase Canceled event sent");
}

export function trackPurchaseCanceledWithErrors() {
  const purchaseCanceledProps: PurchaseCanceledProps = {
    // Error: Missing required 'Operation Id' property
  };

  console.log("Purchase Canceled event with Errors");
  analytics.track.purchaseCanceled(purchaseCanceledProps);
}
