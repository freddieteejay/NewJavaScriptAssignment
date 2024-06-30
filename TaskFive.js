let classTiming = ["9:00 AM", "11:00 AM", "1:00PM", "3:00 PM", "5:00 PM"];
let afternoonClassTiming = classTiming.filter(timing => timing.includes("PM"));
console.log(afternoonClassTiming);