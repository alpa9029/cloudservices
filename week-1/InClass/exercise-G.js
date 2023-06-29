console.log("Hello World!")
var numberOfStudents = 20;
var numberOfMentors = 7;

var total = numberOfStudents + numberOfMentors;
var studentPercentage = Math.round((numberOfStudents / total) * 100);
var mentorPercentage = Math.round((numberOfMentors / total) * 100);

console.log("Student percentage: " + studentPercentage + "%");
console.log("Mentor percentage: " + mentorPercentage + "%");
