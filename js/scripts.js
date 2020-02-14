// Business Logic --------------
function Account() {
  this.users = [];
  this.currentId = 26142;
}

Account.prototype.addUser = function(user) {
  this.id += 242;
  this.user.id = this.id;
  Account.users.push(user);
}

function User(firstName, lastName, balance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
}

// Create a new account when the user loads the page
//Note: this is a GLOBAL VARIABLE

let currentAccount = new Account();

// UI Logic --------------------
$(document).ready(function() {
  debugger
  $("form#register").submit(function(event) {
    let firstName = $("input#firstName").val();
    let lastName = $("input#lastName").val();
    let fullname = `${firstName} ${lastName}`;

    debugger
    let openingDeposit = parseFloat(("input#openingDeposit").val());
    debugger
    console.log(fullName);
    event.preventDefault();
  });

  $("form#deposit").submit(function(event) {

    event.preventDefault;
  });

});