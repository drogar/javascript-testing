describe('Blog post test', function () {
	it('Should be published at the current time', function() {
		var now = new Date(),
			post = new BlogPost('Hello', 'Hello world');
		expect(post.date.getTime()).toBe(now.getTime());
	});

	it('Should throw an exception', function() {
		var post = new BlogPost('Hello', 'Hello world');
		expect(post.toString).toThrow("This blog post is not published");
	});

	it('Generates some neat HTML', function() {
		var now = new Date(),
			post = new BlogPost('Hello', 'Hello world');
		post.publish();
		expect(post.toString()).toBe("<h1>Hello</h1>" +
			"<h6>Published on " + now.toString() + "</h6>" +
			"<p>Hello world</p>");
	});
});