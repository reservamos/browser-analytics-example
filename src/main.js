const analytics = require("@reservamos/browser-analytics");

const config = {
  mixpanelToken: import.meta.env.VITE_ANALYTICS_MIXPANEL_TOKEN || "",
  identificationKey: import.meta.env.VITE_ANALYTICS_IDENTIFICATION_KEY || "",
  debug: import.meta.env.VITE_ANALYTICS_DEBUG === "true"
};

analytics.init(config);

window.addEventListener("Tracker Ready", async () => {
  console.log("Tracker Ready: Require Imports");

  analytics.track.test();

  // Identifying a user

  await analytics.identify(
    "some-user-id", // You can choose any identifier you want, it will be the main key to identify the user,
    {
      // These four properties are the only ones that have a fixed format
      firstName: "John",
      lastName: "Doe",
      email: "example@example.com",
      phone: "123456789",

      // Custom properties
      salesforceId: "123456789" // You can add any custom property you want, I.E. any other identifier
    }
  );

  // Failing to identify a user by format
  try {
    await analytics.identify(
      "some-user-id", // You can choose any identifier you want, it will be the main key to identify the user,
      {
        // These four properties are the only ones that have a fixed format
        firstName: "John",
        lastName: "Doe",
        email: "bad-email", // This email is invalid
        phone: "123456789"
      }
    );
  } catch (error) {
    console.log("Error identifying user", error);
  }
});
