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
        var old_name = this.current_user.name;
        try {
          this.current_user.name = name;
          return this.current_user.save();
        }
        catch (e) {
          this.current_user.name = old_name;
        }
        return this.current_user;
      }
      }
    };
  });

  afterEach(function(){
    sandbox.restore();
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
      // user.save.withArgs(sinon.match.any).throws("database_error");
    });

    it("The new name will be persisted", function () {
      var new_name = "RUPERT";
      var edited_user = ctrl.editName(new_name);
      edited_user.should.have.property('name');
      edited_user.name.should.be.String();
      edited_user.name.should.be.eql(new_name);
    });

    it("On database error, catch and not persist", function () {
      user.save.withArgs().throws("database_error");
      var new_name = "RUPERT";
      var old_name = ctrl.current_user.name;
      var edited_user = ctrl.editName(new_name);
      edited_user.should.have.property('name');
      edited_user.name.should.be.String();
      edited_user.name.should.be.eql(old_name);
    });
  });
});
