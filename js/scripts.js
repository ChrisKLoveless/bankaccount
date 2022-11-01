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


// Business Logic for BankAccount

function BankAccount(accountName, initialDeposit) {
    this.accountName = accountName;
    this.initialDeposit = initialDeposit;
}





// UI Logic