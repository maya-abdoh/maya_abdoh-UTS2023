function logCustomerInfo(customerInfoString) {
  try {
    const customerInfo = JSON.parse(customerInfoString);
    console.log("Customer Code:", customerInfo.custCode);
    console.log("Customer Name:", customerInfo.custName);
    console.log("Customer Age:", customerInfo.custAge);
    console.log("Customer Phone:", customerInfo.custPhone);
    console.log("Customer Mobile:", customerInfo.custMobile);
    console.log("Customer Address:", customerInfo.custAddress);
    console.log("Customer Email:", customerInfo.custEmail);
  } catch (error) {
    console.error("An error occurred while logging customer information:", error);
  }
}
function myFunction() {
  const zeadAge = 36;
  try {
    alert("Zead Age is: " + zeadAge);
  } catch (error) {
    console.error("An error occurred while showing Zead's age:", error);
  }
}
const customerInfoString = `{
  "custCode": "C123",
  "custName": "Maya abdoh",
  "custAge": 21,
  "custPhone": "123-456-7890",
  "custMobile": "987-654-3210",
  "custAddress": "123 salah al deen St",
  "custEmail": "Maya@example.com"
}`;

try {
  logCustomerInfo(customerInfoString);
  myFunction();
} catch (error) {
  console.error("An unexpected error occurred:", error);
}
