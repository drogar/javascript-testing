if(typeof window == 'undefined') {
	var should = require('should'),
		BlogPost = require('../blog-post');
}

describe('BlogPost test', function() {

	it('Should be published at the current time', function() {
		var now = new Date(),
			post = new BlogPost('Hello', 'Hello world');
		assert(post.date.getTime() == now.getTime());
	});

	it('Should throw an exception', function() {
		var post = new BlogPost('Hello', 'Hello world');
		try {
			post.toString();
			assert(false);
		}
		catch(e) {
			assert(true);
			assert(e == "This blog post is not published");
		}
	});

	it('Generates some neat HTML', function() {
		var now = new Date(),
			post = new BlogPost('Hello', 'Hello world');
		post.publish();
		assert(post.toString() == "<h1>Hello</h1>" +
			"<h6>Published on " + now.toString() + "</h6>" +
			"<p>Hello world</p>");
	});

});
