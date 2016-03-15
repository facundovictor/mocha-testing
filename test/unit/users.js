describe('Users', function() {

  var some_guy, model, ctrl;

  beforeEach(function(){
    sandbox = sinon.sandbox.create();
    some_guy = jsf(mocks.user);
    model = {};

    ctrl = {
      amountOfUsers : 0,
      current_user : model,
      editName : function(name){
        return current_user.save(name);
      }
    };
  });

  context('When creating a new user', function() {
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

    it('Shold have an email', function(){
      some_guy.should.have.property('emailAddr');
      some_guy.emailAddr.should.be.ok();
      some_guy.emailAddr.should.be.String();
    });

    it('The name would be Facu, Robert, or Cesar.', function() {
      some_guy.name.should.match(/^Facu$|^Robert$|^Cesar$/);
    });

    it('The email address should be from the expected domain', function(){
      some_guy.emailAddr.should.containEql("altoros.com");
      some_guy.emailAddr.should.match(/@altoros.com$/);
    });
  });

  context('When editing an user', function(){

    beforeEach(function(){
      model['save'] = sandbox.stub();
      model.save.withArgs(some_guy).returns(some_guy);
      model.save.withArgs(sinon.match.any).throws("databaseError");
    });

    it("and this is just for playing", function () {

      // console.log(missionImpossible.assignment("accept", tape));
      // missionImpossible.assignment("reject", tape);

    });
  });
});
