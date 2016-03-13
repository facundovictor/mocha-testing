describe('Users', function() {

  describe('Creation', function () {

    context('When creating a new user', function() {
      var some_guy = jsf(mocks.user);
      it('Should have an id', function() {
        some_guy.should.have.property('userId');
        some_guy.userId.should.be.ok();
        some_guy.userId.should.be.String();
      });
      });
    });
  });
});


