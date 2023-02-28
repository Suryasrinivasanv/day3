var myresume = [
  {
    name: "surya",
    mailid: "xyz@gmail.com",
    college: "xyzcollege",
    cgpa: "7.5",
    department: "IT",
    Techskills: "javascript",
    place: "chennai",
  },
];
//for loop;
for (var i = 0; i < myresume.length; i++) {
  console.log(myresume);
}
//for in loop;
for (var a in myresume) {
  console.log(myresume[a]);
}
//for of loop;
for (var key of myresume) {
  console.log(key);
}
//for each loop;
myresume.forEach((ele) => console.log(ele));
