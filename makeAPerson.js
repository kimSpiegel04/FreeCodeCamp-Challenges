// Fill in the object constructor with the following methods below:
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;

    this.getFullName = function() {
        return fullName;
    };

    this.getFirstName = function() {;
        return this.firstName=fullName.split(' ')[0];
    };

    this.getLastName = function() {
        return this.lastName=fullName.split(' ')[1];
    };

    this.setFirstName = function(newFirstName) {
        fullName=`${newFirstName} ${fullName.split(' ')[1]}`;
        return `${this.getFirstName()} ${this.getLastName()}`;
    }

    this.setLastName = function(newLastName) {
        fullName=`${fullName.split(' ')[0]} ${newLastName}`;
        return `${this.getFirstName()} ${this.getLastName()}`;
    }

    this.setFullName = function(newFullName) {
        fullName=newFullName;
        return this.fullName;
    }

};

var bob = new Person('Bob Ross');
console.log(bob.setFirstName('Haskell'));
console.log(bob.getFirstName());
console.log(bob.setLastName('Curry'));
console.log(bob.setFullName('Bill Harriss'));
console.log(bob instanceof Person);
console.log(Object.keys(bob).length);
console.log(bob.firstName, bob.lastName);
console.log(bob.getFirstName());
console.log(bob.getFullName());