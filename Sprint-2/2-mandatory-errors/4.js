const twelveHourClockTime = "8:53pm";
const twentyFourHourClockTime = "20:53";

// To convert 12HourClockTime to 24-hour format, we can use the following steps:
// 1. Split the string into hours and minutes using the split() method.
// 2. Check if the time is in the "pm" period. If it is, add 12 to the hours (unless it's 12pm).
// 3. If the time is in the "am" period and the hour is 12, set the hour to 0.
//The error is SyntaxError: Invalid or unexpected token, because a variable name cannot start with a digit.
