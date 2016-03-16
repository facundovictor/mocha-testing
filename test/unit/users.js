describe('Users', function() {

  var user, model, ctrl;

  beforeEach(function(){
    sandbox = sinon.sandbox.create();
    user = jsf(mocks.user);

    ctrl = {
      current_user : user,
      editName : function(name){
        return this.current_user.save(name);
      }
    };
  });

  context('When creating a new user', function() {
    it('Should have an id', function() {
      user.should.have.property('user_id');
      user.user_id.should.be.ok();
      user.user_id.should.be.String();
    });

    it('Should have a name', function() {
      user.should.have.property('name');
      user.name.should.be.ok();
      user.name.should.be.String();
    });

    it('Shold have an email', function(){
      user.should.have.property('email_addr');
      user.email_addr.should.be.ok();
      user.email_addr.should.be.String();
    });

    it('The name would be Facu, Robert, or Cesar.', function() {
      user.name.should.match(/^Facu$|^Robert$|^Cesar$/);
    });

    it('The email address should be from the expected domain', function(){
      user.email_addr.should.containEql("altoros.com");
      user.email_addr.should.match(/@altoros.com$/);
    });
  });

  context('When editing an user', function(){

    beforeEach(function(){
      user['save'] = sandbox.stub();
      user.save.withArgs(user).returns(user);
      // model.save.withArgs(sinon.match.any).throws("databaseError");
    });

    it("and this is just for playing", function () {
      console.log(user);
      console.log(ctrl.editName("RUPERT"));
      // console.log(missionImpossible.assignment("accept", tape));
      // missionImpossible.assignment("reject", tape);
    });
  });
});
