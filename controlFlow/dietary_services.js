let userRole = "enrolled member";
let accessMessage;

switch (userRole) {
    case "employee":
        accessMessage = "You have access to Dietary Services.";
        break;
    case "enrolled member":
        accessMessage = "You have access to Dietary Services and one-on-one interaction with a dietician.";
        break;
    case "subscriber":
        accessMessage = "You have partial access to Dietary Services.";
        break;
    default:
        accessMessage = "Please enroll or subscribe first to use Dietary Services.";
}

console.log(accessMessage);