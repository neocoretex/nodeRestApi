var hippie = require('hippie');


function api() {
  return hippie()
    .json()
    .base('http://localhost:3000');
}

describe("Routes", function() {

  describe("Blog route", function() {

    it("Get to blog",function() {
      return api()
        .get('/blog')
        .expectStatus(200)
        .end();
    });

    it("Post to blog",function() {
      return api()
        .post('/blog')
        .send({"title":"leol","markdown":"bs"})
        .expectStatus(200)
        .end();
    });

    it("Put to blog",function() {
      return api()
        .post('/blog')
        .send({title:"title",markdown:"markdown"})
        .expectStatus(200)
        .end();
    });

    /*it("Delete to blog",function() {
      return api()
        .del('/blog')
        .send({title:"title",markdown:"markdown"})
        .expectStatus(200)
        .end();
    });*/
  });

  describe("Feedback route", function() {

    it("Get to feedback",function() {
      return api()
        .get('/feedback')
        .expectStatus(200)
        .end();
    });

    it("Post to feedback",function() {
      return api()
        .post('/feedback')
        .send({email:"email@email.com",content:"content"})
        .expectStatus(200)
        .end();
    });

    it("Put to feedback",function() {
      return api()
        .post('/feedback')
        .send({email:"test@test.com",content:"no-content"})
        .expectStatus(200)
        .end();
    });

    /*it("Delete to feedback",function() {
      return api()
        .del('/feedback')
        .send({email:"test1@test.com",content:"nocontent"})
        .expectStatus(200)
        .end();
    });*/
  });
});
