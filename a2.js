/*********************************************************************************
* WEB700 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
* 
* Name: ACHAL MEHTA Student ID: 120449228  Date: 1 june
*
********************************************************************************/


const collegeData = require('./collegeData');

collegeData.initialize()
  .then(() => {
    console.log('Successfully initialized.');

    collegeData.getAllStudents()
      .then(students => {
        console.log(`Successfully retrieved ${students.length} students`);
      })
      .catch(error => {
        console.error(error);
      });

    collegeData.getCourses()
      .then(courses => {
        console.log(`Successfully retrieved ${courses.length} courses`);
      })
      .catch(error => {
        console.error(error);
      });

    collegeData.getTAs()
      .then(tas => {
        console.log(`Successfully retrieved ${tas.length} TAs`);
      })
      .catch(error => {
        console.error(error);
      });
  })
  .catch(error => {
    console.error(error);
  });
