describe("Hello", function(){
	it ('return hello world', function(){
		expect(sayHello()).toBe('Hello World!!!');
	});

	it ('return response to receiver', function(){
		expect(respondTo('Jane')).toBe('Hello Jane!!!');
	})
});