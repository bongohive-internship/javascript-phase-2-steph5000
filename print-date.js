// add a printDate function in here
// eg: console.log("Hello World")
function  currentdatetime() {
  var today = new Date();
  var date = today.getFullYear()+"-"+ today.getMonth() + "-" + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var datetime = date + "" + time;
  console.log(datetime);
}
  
  
