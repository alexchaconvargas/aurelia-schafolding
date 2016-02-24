export class Metadata {
  heading = 'Welcome to Aurelia!';
  firstName = 'John';
  lastName = 'Doe';

  constructor() {
  		console.log('constructor');
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    alert(`Welcome, ${this.fullName}!`);
  }
}