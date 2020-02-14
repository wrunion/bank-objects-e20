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
  this.transactionsObj = {};
  this.balance = 0;
  this.tranactionId = 0;
}


// Could I set inheritance in such a way that the Transaction constructor could use and access properties of Customer? 
// function Transaction(date, amount, transactionType) {
//   this.date = date;
//   this.amount = amount;
//   this.transactionType = transactionType;
// }

//OR 

Customer.prototype.transaction = function(date, amount, transactionType) {
  this.date = date;
  this.amount = amount;
  this.transactionType = transactionType;

  this.tranactionId += 1;
  this.id = this.tranactionId;

  this.logTransaction = function() {

  }
}

// Refactor this into a series of functions OR possibly a child constructor function that can still access the properties of Customer
Customer.prototype.transaction = function(date, amount, transactionType) {
  // Assign properties
  this.date = date;
  this.amount = amount;
  this.transactionType = transactionType;

  // Increase the balance
  this.balance += amount;
  // Assign the transaction a unique ID
  this.tranactionId +=1;
  this.id = this.tranactionId;

  // Push the transaction info to the customer's transaction array
  this.transactions.push([this.id, this.transactionType, this.date, this.balance, this.balance]);

  // Tests ------------
  console.log(this.balance);
  console.log(this.id);
  console.log(this.date);
  console.log(this.transactionType);
  console.log(this.transactions);
}
  
Customer.prototype.logTransaction = function() {
  this.amount = amount; 
  this.date = date;
}


// Test it out!
let wintersBank = new Bank("Winter's Bank");

let george = new Customer("Curious George");
george.transaction("new date", 250, "deposit");
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