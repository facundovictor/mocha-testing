describe('Users', function() {

  describe('Creation', function () {

    context('When creating a new user', function() {
      var some_guy = jsf(mocks.user);
      it('Should have an id', function() {
        some_guy.should.have.property('userId');
        some_guy.userId.should.be.ok();
        some_guy.userId.should.be.String();
      });

      it('Should have a name', function() {
        some_guy.should.have.property('name'); 
        some_guy.name.should.be.ok();
        some_guy.name.should.be.String();
      });

      it('Shold have a email', function(){
        some_guy.should.have.property('emailAddr'); 
        some_guy.emailAddr.should.be.ok();
        some_guy.emailAddr.should.be.String();
      });
    });
  });
});


