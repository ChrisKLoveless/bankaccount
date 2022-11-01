Describe: function BankAccount(); 
Test: "It should store the name of the account and the initial deposit"
Code:  function BankAccount(accountName, initialDeposit) {
        this.accountName = accountName;
        this.initialDeposit = initialDeposit;
        let test = new BankAccount("Yoonis", "5000000");
        }
Expected Output: test;
                  BankAccount{accountName: "Yoonis" initialDeposit: "5000000"};

Describe: function AccountBook();
Test: "It should store bank accounts inside the object"
Code: function AccountBook() {
        this.accounts = {};
        }
Expected Output: null

Describe: AccountBook.prototype.addAccount(account);
Test: "It should add accounts to the AccountBook"
Code: newBook.addAccount(account);
Expected Output: newBook;
                    newBook {account: test};
Describe: 
Test:
Code:
Expected Output: