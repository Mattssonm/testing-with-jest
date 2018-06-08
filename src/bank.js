/*
Tänk dig att någon har skrivit ett betalningssystem för en bank. Dessvärre tänkte inte första utvecklaren på att använda TDD, så det finns inga testfall. Din uppgift är att skriva testfall för alla tre funktionerna i koden nedan. Observera att första utvecklaren var en total noob, så det kan finnas buggar i koden. På VG-nivå ska du dessutom skriva klart funktionerna och rätta felen.

Allmänt gäller att om funktionerna anropas med tillåtna värden på sina parametrar så ska de åstadkomma side effects på parametrarna. Funktionerna ska inte returnera något.
Men om man försöker ta ut eller överföra mer pengar än det finns på kontot, då ska funktionen kasta ett Error.

*/
let kalle = { name: 'Kalle', balance: 150 };
let greta = { name: 'Greta', balance: 1200 };

function deposit(account, amount) {
  if( (typeof account) !== 'object' || !account){
    throw new Error('Wrong account')
  }
  if((typeof amount) !== 'number'){
    throw new Error('Wrong type of number')
  }
  if((typeof amount) === 'string') {
    throw new Error('Amount is not allowed to be type string')
  }
  if(amount < 1){
    throw new Error('Cannot deposit 0 or negative numbers')
  }
  else if(!account.name){
    throw new Error('No name in account')
  }
  else if(!account.balance){
    throw new Error('No balance in account')
  }else{
    account.balance += amount
  }
}

function withdraw(account, amount) {
  if((typeof account) !== 'object' || !account){
	throw new Error('Wrong account')
  }
  if((typeof amount) !== 'number'){
    throw new Error('Wrong type of number')
  }
  if((typeof amount) === 'string') {
    throw new Error('Amount is not allowed to be type string')
  }
  if(amount < 1){
    throw new Error('Cannot withdraw 0 or negative numbers')
  }
  else if(account.balance < amount){
    throw new Error('Not sufficient funds to withdraw')
  }
  else if(!account.name){
    throw new Error('No name in account')
  }
  else if(!account.balance){
    throw new Error('No balance in account')
  }else{
    account.balance -= amount
  }
}

function transfer(accountSender, accountReceiver, amount) {
    withdraw(accountSender, amount)
    deposit(accountReceiver, amount)
}

export  {deposit, withdraw, transfer};