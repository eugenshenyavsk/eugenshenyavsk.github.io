const app = require('../js/dist/app.js');

describe("app", function() {
	it("sayHi", function() {
		//prepare
		let result;
		//act
		result=app.sayHi('Felix');
		expect(result).toBe("Hello, Felix");
	});
	it("pow", function() {
		//prepare
		let result;
		//act
		result=app.myPow(2,3);
		expect(result).toBe(8);
	});
	it("sum", function() {
		//prepare
		let result;
		//act
		result=app.mySum(7,8);
		expect(result).toBe(15);
	});
});