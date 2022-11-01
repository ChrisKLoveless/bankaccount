// Business Logic for AccountBook
function AccountBook() {
    this.accounts = {};
}

AccountBook.prototype.addAccount = function (account) {
    this.accounts[account.accountName] = account;
}; 


// Business Logic for BankAccount
function BankAccount(accountName, initialDeposit) {
    this.accountName = accountName;
    this.initialDeposit = initialDeposit;
}





// UI Logic