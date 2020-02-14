// Business Logic ---------------

// Bank function and methods - COME BACK TO THIS

function Bank(bankName) {
  this.bankName = bankName;
  this.customers = [];
  this.customerIdCounter = 0;
}

//Customer constructor function and methods
function Customer(fullName) {
  this.fullName = fullName;
  this.transactions = [];
  this.balance = 0;
  this.transactionIdCounter = 0;
}

Customer.prototype.deposit = function(date, amount) {
  // Definte properties
  this.date = date;
  this.balance += amount;
  // Assign the transaction a unique ID
  this.transactionIdCounter +=1;
  this.id = this.transactionIdCounter;

  // Tests ------------
  console.log(this.balance);
  console.log(this.id);
  console.log(this.date);

  // Push entire transaction to Customer object's "transactions" array
  this.transactions.push(["deposit", amount, date, this.balance, this.id]);
  console.log(this.transactions);

}
  
// Test it out!
let wintersBank = new Bank("Winter's Bank");

let george = new Customer("Curious George");
george.deposit("new date", 250);
//console.log(george.balance);


// UI Logic --------------------
$(document).ready(function() {
  //console.log('jQuery is working');
  $("form#register").submit(function(event) {
    //console.log("form has been submitted");
    let firstName = $("input#firstName").val();
    let lastName = $("input#lastName").val();
    let fullName = firstName + " " + lastName;

    let openingDeposit = parseFloat($("input#openingDeposit").val());
    console.log(firstName);
    console.log(lastName);
    console.log(fullName);
    console.log(openingDeposit);

    let newUser = new User(firstName, lastName, balance);
    console.log(newUser);     

    event.preventDefault();
  });

  // $("form#deposit").submit(function(event) {

  //   event.preventDefault;
  // });

});