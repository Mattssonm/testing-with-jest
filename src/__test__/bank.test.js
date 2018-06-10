import {deposit, withdraw, transfer} from '../bank.js'

describe('Deposit cases', () => {
  it('throws when object doesnt exist', () => {
  	expect( () => deposit([]) ).toThrow();
  });
  it('throws when trying to withdraw with just a number', () => {
    expect( () => deposit(5) ).toThrow();
  });
  it('throws when trying to withdraw with just a string', () => {
    expect( () => deposit("kanintevaratring") ).toThrow();
  });
  it('throws when account doesnt contain a balance', () => {
    expect( () => deposit({ balance: 595489 }, amount) ).toThrow();
  });
  it('throws when account doesnt contain a name', () => {
    expect( () => deposit({ name: 'kalle'}, amount) ).toThrow();
  })
  it('deposit and update new balance', () => {
    let kalle = { name: 'Kalle', balance: 150 };
    deposit(kalle,160);
    expect(kalle.balance).toBe(310);
  });
  it('throws when amount to deposit is 0 or less', () => {
    let kalle = { name: 'Kalle', balance: 150 };
    expect( () => deposit(kalle, -500)).toThrow();
  })
  it('throws when account doesnt exist', () => {
    expect( () => deposit(David, 430)).toThrow();
  })
})

describe('Withdraw cases', () => {
  it('throws when object doesnt exist', () => {
    expect( () => withdraw([]) ).toThrow();
  });
  it('throws when trying to withdraw with just a number', () => {
    expect( () => withdraw(5) ).toThrow();
  });
  it('throws when trying to withdraw with just a string', () => {
    expect( () => withdraw("kanintevaratring") ).toThrow();
  });
  it('throws when account doesnt contain a balance', () => {
    expect( () => withdraw({ balance: 595489 }, amount) ).toThrow();
  });
  it('throws when account doesnt contain a name', () => {
    expect( () => withdraw({ name: 'kalle'}, amount) ).toThrow();
  })
  it('withdraw and update new balance', () =>{
    let kalle = { name: 'Kalle', balance: 3000 };
    withdraw(kalle, 1200);
    expect(kalle.balance).toBe(1800);
  });
  it('throws when amount to deposit is 0 or less', () => {
    let kalle = { name: 'Kalle', balance: 150 };
    expect( () => withdraw(kalle, -500)).toThrow();
  })
  it('throws if there is not enough money in balance', ()=> {
    let kalle = { name: 'Kalle', balance: 150 };
    expect( () => withdraw(kalle, 600)).toThrow();
  })
  it('throws when account doesnt exist', () => {
    expect( () => deposit(David, 430)).toThrow();
  })
})

describe('Bank case transfer', () => {
  it('transfer case send and receive amount', () => {
    let markus = { name: 'Markus', balance: 120000 };
    let kalle = { name: 'Kalle', balance: 150 };
    transfer(kalle, markus, 100);
    expect(markus.balance).toBe(120100);

    expect( () => transfer(kalle, markus, 5000)).toThrow();
    expect( () => transfer(kalle, david, 300)).toThrow();
  });
  it('transfer with not enough money', () => {
    let markus = { name: 'Markus', balance: 120000 };
    let kalle = { name: 'Kalle', balance: 150 };
    expect( () => transfer(kalle, markus, 5000)).toThrow();
  });
  it('transfer to a non-existing account', () => {
    let markus = { name: 'Markus', balance: 120000 };
    let kalle = { name: 'Kalle', balance: 150 };
    expect( () => transfer(kalle, david, 300)).toThrow();
  });
})