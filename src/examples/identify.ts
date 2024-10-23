import analytics from "@reservamos/browser-analytics";

export function identifyExample() {
  analytics.identify(
    "some-user-id", // You can choose any identifier you want, it will be the main key to identify the user,
    {
      // These four properties are the only ones that have a fixed format
      firstName: "John",
      lastName: "Doe",
      email: "example@example.com",
      phone: "123456789",

      // Custom properties - There is no limit to the number of properties you can add
      salesforceId: "123456789", // You can add any custom property you want, I.E. any other identifier
      CPF: "123456789", // You can add any custom indentifier available in your system,
      RJ: "123456789" // You can add any custom indentifier available in your system,
    }
  );
  console.log("User Identified");
}

export function identifyWithErrors() {
  console.log("Identifying User with Errors");
  analytics.identify(
    "some-user-id", // You can choose any identifier you want, it will be the main key to identify the user,
    {
      // These four properties are the only ones that have a fixed format
      firstName: "John",
      lastName: "Doe",
      email: "bad-email", // This email is invalid
      phone: "123456789"
    }
  );
}
