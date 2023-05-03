function Solution(D) {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
    const result = {};
  
    const sortedData = Object.entries(D).sort((a, b) => {
      return new Date(a[0]) - new Date(b[0]);
    });
  
    const earliestDate = new Date(sortedData[0][0]);
    const currentDate = new Date();
    const date = new Date(earliestDate);
  
    while (date <= currentDate) {
      const dateString = date.toISOString().substring(0, 10);
      const dayOfWeek = daysOfWeek[date.getDay()];
  
      if (!result[dayOfWeek]) {
        result[dayOfWeek] = 0;
      }
  
      if (D[dateString]) {
        result[dayOfWeek] += D[dateString];
      }
  
      date.setDate(date.getDate() + 1);
    }
  
    return result;
  }

  
//   const D = {
//     '2023-04-30': 10,
//     '2023-05-01': 20,
//     '2023-05-03': 30,
//     '2023-05-04': 40,
//     '2023-05-05': 50,
//   };

// const result = Solution(D);
// console.log(result);

export default Solution;

  