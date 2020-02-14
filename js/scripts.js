// Business Logic ---------------

// Bank function and methods - COME BACK TO THIS

function Bank(bankName) {
  this.bankName = bankName;
  this.customers = [];
  this.customerIdCounter = 1;
}

//Customer constructor function and methods
function Customer(fullName) {
  this.fullName = fullName;
  this.transactions = [];
  this.balance = 0;
  this.tranactionId = 0;
  // Temporary static assignment until I can go back and make it dymanic 
  this.id = 128;
}


// Could I set inheritance in such a way that the Transaction constructor could use and access properties of Customer? 
// function Transaction(date, amount, transactionType) {
//   this.date = date;
//   this.amount = amount;
//   this.transactionType = transactionType;
// }

//OR 

// Customer.prototype.transaction = function(date, amount, transactionType) {
//   this.date = date;
//   this.amount = amount;
//   this.transactionType = transactionType;

//   this.tranactionId += 1;
//   this.id = this.tranactionId;

//   this.logTransaction = function() {
    
//   }
// }

// Refactor this into a series of functions OR possibly a child constructor function that can still access the properties of Customer

// GO BACK AND USE THIS
// Customer.prototype.deposit = function(date, amount) {
//   this.transactionType = "deposit";

// }

// Customer.prototype.assignTransactionId = function() {
//   this.transactionId += 1;
//   return this.tranactionId;
// }


// Customer.prototype.transactionId = function(type) {
//   this.tranactionId += 1;
//   return this.transactionId;

//   // this.amount = amount; 
//   // this.date = date;
// }

// THIS IS WORKING
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
  // console.log(this.balance);
  // console.log(this.id);
  // console.log(this.date);
  // console.log(this.transactionType);
  // console.log(this.transactions);
}
  
// SAVE THESE
Customer.prototype.deposit = function(amount) {
  this.balance += amount;
  return this.balance;
}

Customer.prototype.withdrawal = function(amount) {
  this.balance -= amount;
  return this.balance;
}

// Test it out!
let wintersBank = new Bank("Winter's Bank");

let george = new Customer("Curious George");

george.transaction("new date", 250, "deposit");
//console.log(george.balance);

// Create objects to use for webpage
let currentCustomer;

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

    currentCustomer = new Customer(fullName);
    //console.log(currentCustomer);
    currentCustomer.deposit(openingDeposit);

    // Hide the registration form and show welcome message
    //console.log(currentCustomer.balance); 
    $("#register-div").hide();


    $("#registration-success").show();
      $("span#userIntro").append(firstName);
      let registrationMessage = `Your account number is ${currentCustomer.id} and your balance is $${currentCustomer.balance}.<br> Please save this information for your records.`;
      $("#newAccountInfo").append(registrationMessage);
  
    event.preventDefault();
  });

  $("form#deposit").submit(function(event) {
    // Insert customer id into account number input
    //$("input#accountNumber").val() = currentCustomer.id;

    let deposit = $("input#deposit").val();
    let withdrawal = $("input#withdrawal").val();
    
    console.log(deposit);
    console.log(withdrawal);


    event.preventDefault();
  });

});