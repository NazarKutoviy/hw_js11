// 1
// const movie ={
//    title: "dota 2",
//    directors:"N@z1k",
//    year:"2025",
//    rating:"0",
//    isHighRated(){
//     return this.rating>5;
//    }
// }
// console.log("назва фільму:",movie.title)
// console.log("назва фільму:",movie.directors)
// console.log("назва фільму:",movie.year)
// console.log("назва фільму:",movie.rating)
// console.log("назва фільму:",movie)
// movie.isHighRated();
// 2
const user = {
  name: "Zoro",
  email: "roronoazoro@gmail.com",
  password: 43489,
  login(inputEmail, inputPassword) {
    if (inputEmail === this.email && inputPassword === this.password) {
      return true;
    } else {
      return false;
    }
  },
};
const inputEmail = prompt("ведіть ваш email:");
const inputPassword = prompt("ведіть ваш password:");
if (user.login(inputEmail, inputPassword)) {
  alert("вхід успішний!");
} else {
  alert("невірний пароль або email.");
}
