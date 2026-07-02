import analytics, { GeolocationSelectedProps } from "@reservamos/browser-analytics";

export function trackGeolocationSelectedExample() {
  const geolocationSelectedProps: GeolocationSelectedProps = {
    "Selected City": "São Paulo",
    "Selected Country Code": "BR"
  };

  analytics.track.geolocationSelected(geolocationSelectedProps);
  console.log("Geolocation Selected Event Tracked");
}

export function trackGeolocationSelectedWithErrors() {
  const geolocationSelectedProps: GeolocationSelectedProps = {
    "Selected City":123,
    "Selected Country Code": "BAD COUNTRY CODE"
  };

  console.log("Geolocation Selected Event with Errors");
  analytics.track.geolocationSelected(geolocationSelectedProps);
}
