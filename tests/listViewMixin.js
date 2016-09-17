var hippie = require('hippie');
var server = require('../server');

function api() {
  return hippie()
    .json()
    .base('http://localhost:3000');
}

describe("listViewMixin", function() {
  after(function () {
    server.close();
  });

  describe("CRUD operations", function() {

    it("Read all",function() {
      return api()
        .get('/blog')
        .expectStatus(200)
        .end();
    });

    it("Add data",function() {
      return api()
        .post('/blog')
        .send({"title":"leol","markdown":"bs"})
        .expectStatus(200)
        .end();
    });

    it("Update data",function() {
      return api()
        .post('/blog')
        .send({title:"title",markdown:"markdown"})
        .expectStatus(200)
        .end();
    });

    it("Delete data",function() {
      return api()
        .del('/blog')
        .send({title:"title",markdown:"markdown"})
        .expectStatus(200)
        .end();
    });
  });
});
