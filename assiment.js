function calculateTotalTarget(startDate, endDate, totalAnnualTarget, excludeDay = 5) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    let daysExcludingFridays = [], daysWorkedExcludingFridays = [], monthlyTargets = [], totalWorkingDays = 0;
    let currentDate = new Date(start);

    // Helper function to get working days excluding a specific day
    const getWorkingDaysInMonth = (year, month, excludeDay) => {
        let date = new Date(year, month, 1), workingDays = 0;
        while (date.getMonth() === month) {
            if (date.getDay() !== excludeDay) workingDays++;
            date.setDate(date.getDate() + 1);
        }
        return workingDays;
    };

    // Loop through each month in the range
    while (currentDate <= end) {
        const year = currentDate.getFullYear(), month = currentDate.getMonth();
        daysExcludingFridays.push(getWorkingDaysInMonth(year, month, excludeDay));

        let daysWorked = 0, tempDate = new Date(currentDate);
        while (tempDate.getMonth() === month && tempDate <= end) {
            if (tempDate.getDay() !== excludeDay) daysWorked++;
            tempDate.setDate(tempDate.getDate() + 1);
        }

        daysWorkedExcludingFridays.push(daysWorked);
        totalWorkingDays += daysWorked;
        currentDate = new Date(year, month + 1, 1);
    }

    monthlyTargets = daysWorkedExcludingFridays.map(daysWorked => (daysWorked / totalWorkingDays) * totalAnnualTarget);
    const totalTarget = monthlyTargets.reduce((acc, target) => acc + target, 0);

    return { daysExcludingFridays, daysWorkedExcludingFridays, monthlyTargets, totalTarget };
}

// Example usage
const result = calculateTotalTarget('2024-01-01', '2024-03-31', 5220);
console.log(result);
