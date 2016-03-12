describe('Users', function() {

  describe('Creation', function () {

    context('When creating a new user', function() {
      it('Should have an id', function() {
        var some_guy = jsf(mocks.user);
        // ADD SHOULD.JS
        some_guy.should.have.property('id');
        some_guy.id.should.be.ok();
        some_guy.id.should.be.String();
      });
    });
  });
});


