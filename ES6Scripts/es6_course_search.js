"use strict";

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

// When does the PROG200 course start?

function findStartDate(course) {
    if (course.CourseId == "PROG200") {
        return true;
    }
    else {
        return false;
    }
}
let startOfCourse = courses.find(findStartDate).StartDate;

if (startOfCourse != undefined) {
    console.log("The start date for this course is " + startOfCourse + ".");
}
else {
    console.log("No start dates for this course.");
}

// What is the title of the PROJ500 course?

function findCourseTitle(course) {
    if (course.CourseId == "PROJ500") {
        return true;
    }
    else {
        return false;
    }
}

let courseTitle = courses.find(findCourseTitle).Title;

if (courseTitle != undefined) {
    console.log("The title of the PROJ500 course is " + courseTitle + ".");
}
else {
    console.log("No such title for this course exists.");
}

// What are the titles of the courses that cost $50 or less?

function findCheaperCourses(course) {
    if (course.Fee <= 50.00) {
        return true;
    }
    else {
        return false;
    }
}

let cheaperCourses = courses.filter(findCheaperCourses);

if (cheaperCourses.length > 0) {
    console.log("The titles available which cost $50 or less are: ");
    for (let i = 0; i < cheaperCourses.length; i++) {
        console.log(cheaperCourses[i].Title);
    }
}
else {
    console.log("No such course exist at that fee price.");
}

// What classes meet in "Classroom 1"?

function findCoursesCl1(course) {
    if (course.Location == "Classroom 1") {
        return true;
    }
    else {
        return false;
    }
}

let classroom1Courses = courses.filter(findCoursesCl1);

// Reminder to Self: if (cheaperCourses.length > 0) checks if 
// the length of the cheaperCourses array is greater than 0, 
// which means there are one or more courses in the array that
// meet the specified criteria.

if(classroom1Courses.length > 0) {
    console.log("The classes that meet in 'Classroom 1' are: ");
    for (let course of classroom1Courses) {
        console.log(course.Title);
    }
}
