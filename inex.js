// //1---- file creating using append 

// var fs = require('fs');
// fs.appendFile('TestTwo.txt', 'hello this is my file', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File created successfully');
// });

// //2-----File reading 

// const fs = require('fs');
// fs.readFile('test.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data.toString());
// });

// // // 3------renaming the file 

// var fs = require('fs');
// fs.rename('TestTwo.txt', 'ExampleOne.txt', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File renamed successfully');
// });

// //4-----------File Deleting 

// var fs = require('fs');
// fs.unlink('TestDelete.txt', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     } 
//     console.log('File deleted successfully');
// });
// //5---------File Updating 

// var fs = require('fs');
// fs.writeFile('ExampleOne.txt', 'and my name is saacid abdi jamac', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File updated successfully');
// });

// var fs = require("fs"); 
// var data = 'Simply Easy Learning'; 
 
// // Create a writable stream 
// var writerStream = fs.createWriteStream('output.txt'); 
 
// // Write the data to stream with encoding to be utf8 
// writerStream.write(data,'UTF8');  
// function calculateTotalTarget(startDate, endDate, totalAnnualTarget, excludeDay = 5) {
//     // Convert startDate and endDate to Date objects
//     const start = new Date(startDate);
//     const end = new Date(endDate);
    
//     // Initialize arrays to store the results
//     let daysExcludingFridays = [];
//     let daysWorkedExcludingFridays = [];
//     let monthlyTargets = [];
    
//     let totalWorkingDays = 0;
//     let currentDate = new Date(start);

//     // Helper function to calculate the number of working days excluding specific day (e.g. Friday)
//     function getWorkingDaysInMonth(year, month, excludeDay) {
//         let date = new Date(year, month, 1);
//         let workingDays = 0;

//         while (date.getMonth() === month) {
//             let dayOfWeek = date.getDay();
//             if (dayOfWeek !== excludeDay) {
//                 workingDays++;
//             }
//             date.setDate(date.getDate() + 1);
//         }

//         return workingDays;
//     }

//     // Loop through each month in the range
//     while (currentDate <= end) {
//         const year = currentDate.getFullYear();
//         const month = currentDate.getMonth();

//         // Get working days for the whole month
//         const workingDaysInMonth = getWorkingDaysInMonth(year, month, excludeDay);
//         daysExcludingFridays.push(workingDaysInMonth);

//         // Calculate actual days worked in this month (between start and end dates)
//         let daysWorked = 0;
//         let tempDate = new Date(currentDate);
//         while (tempDate.getMonth() === month && tempDate <= end) {
//             let dayOfWeek = tempDate.getDay();
//             if (dayOfWeek !== excludeDay) {
//                 daysWorked++;
//             }
//             tempDate.setDate(tempDate.getDate() + 1);
//         }

//         daysWorkedExcludingFridays.push(daysWorked);
//         totalWorkingDays += daysWorked;

//         // Move to the next month
//         currentDate = new Date(year, month + 1, 1);
//     }

//     // Calculate proportional target for each month
//     daysWorkedExcludingFridays.forEach(daysWorked => {
//         const monthlyTarget = (daysWorked / totalWorkingDays) * totalAnnualTarget;
//         monthlyTargets.push(monthlyTarget);
//     });

//     // Calculate total target assigned based on the working days
//     const totalTarget = monthlyTargets.reduce((acc, target) => acc + target, 0);

//     // Return the result object
//     return {
//         daysExcludingFridays,
//         daysWorkedExcludingFridays,
//         monthlyTargets,
//         totalTarget
//     };
// }

// // Example usage
// const result = calculateTotalTarget('2024-01-01', '2024-03-31', 5220);
// console.log(result);
// calculateTotalTarget('2024-01-01', '2024-03-31', 5220);
// {
//   "daysExcludingFridays": [27, 25, 26],
//   "daysWorkedExcludingFridays"= [27, 25, 26],
//   "monthlyTargets": [435, 435, 435],
//   "totalTarget": 1305
//   console.log("Reached this point in the code");


// }

