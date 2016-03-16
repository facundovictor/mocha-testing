describe('Users', function() {

  var user, model, ctrl;

  beforeEach(function(){
    sandbox = sinon.sandbox.create();
    user = jsf(mocks.user);

    ctrl = {
      current_user : user,
      createUser : function(){
        this.current_user = jsf(mocks.user);
        return this.current_user;
      },
      editName : function(name){
        this.current_user.name = name;
        return this.current_user.save();
      }
    };
  });

  context('When creating a new user', function() {
 
    var new_user;
    beforeEach(function(){
      new_user = ctrl.createUser();
    });

    it('Should have an id', function() {
      new_user.should.have.property('user_id');
      new_user.user_id.should.be.ok();
      new_user.user_id.should.be.String();
    });

    it('Should have a name', function() {
      new_user.should.have.property('name');
      new_user.name.should.be.ok();
      new_user.name.should.be.String();
    });

    it('Shold have an email', function(){
      new_user.should.have.property('email_addr');
      new_user.email_addr.should.be.ok();
      new_user.email_addr.should.be.String();
    });

    it('The name would be Facu, Robert, or Cesar.', function() {
      new_user.name.should.match(/^Facu$|^Robert$|^Cesar$/);
    });

    it('The email address should be from the expected domain', function(){
      new_user.email_addr.should.containEql("altoros.com");
      new_user.email_addr.should.match(/@altoros.com$/);
    });
  });

  context('When editing an user', function(){

    beforeEach(function(){
      user['save'] = sandbox.stub();
      user.save.withArgs().returns(user);
      // model.save.withArgs(sinon.match.any).throws("databaseError");
    });

    it("The new name will be persisted", function () {
      var new_name = "RUPERT";
      var edited_user = ctrl.editName(new_name);
      edited_user.should.have.property('name');
      edited_user.name.should.be.String();
      edited_user.name.should.be.eql(new_name);
    });
  });
});
