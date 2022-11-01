// Business Logic for AccountBook
function AccountBook() {
    this.accounts = {};
    this.currentId = 0;
}

AccountBook.prototype.addAccount = function (account) {
    account.id = this.assignId();
    this.accounts[account.id] = account;
}; 

AccountBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

    // AccountBook.prototype.setBalance = function (initialDeposit) {
    //     this.balance = initialDeposit;
    //     return this.balance;
    // }

// Business Logic for BankAccount
function BankAccount(accountName, balance) {
    this.accountName = accountName;
    this.balance = balance;
}


BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
    return parseInt(this.balance);
}



// UI Logic