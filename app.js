const courseName = $("#course-details").attr("data-coursecode");
const courseTitleJQueryElement = $("#course-details").children("h1").first();

const title = courseTitleJQueryElement.html();
courseTitleJQueryElement.html("<a target=\"_blank\" href=\"https://grades.no/course/" + courseName + "/\">" + title + "</a>");


/*
const paragraphElement = $("#assessment-toggler > div.content-assessment > p").first();
let paragraphText = paragraphElement.html();
const gradesApiUrl = "https://grades.no/api/courses/" + courseName + "/grades";
*/


console.log("Script ran");