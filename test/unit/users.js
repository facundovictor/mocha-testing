describe('Users', function() {

  var user, model, ctrl;

  beforeEach(function(){
    sandbox = sinon.sandbox.create();
    user = jsf(mocks.user);

    // This is just a user controller only for learning purposes.
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
      },
      editMail : function(mail){
        if (mail !== null && mail.match(/@altoros.com$/)){
          this.current_user.email_addr = mail;
          return this.current_user.save();
        }
        throw new Error("Wrong domain");
      },
      getBestFriend : function(){
        return this.current_user.getBestFriend();
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
      expect(new_user.user_id).to.be.ok;
      new_user.user_id.should.be.a('string');
    });

    it('Should have a name', function() {
      new_user.should.have.property('name');
      expect(new_user.name).to.be.ok;
      new_user.name.should.be.a('string');
    });

    it('Shold have an email', function() {
      new_user.should.have.property('email_addr');
      expect(new_user.email_addr).to.be.ok;
      new_user.email_addr.should.be.a('string');
    });

    it('The name would be Facu, Robert, or Cesar.', function() {
      new_user.name.should.match(/^Facu$|^Robert$|^Cesar$/);
    });

    it('The email address should be from the expected domain', function() {
      expect(new_user.email_addr).to.include("altoros.com");
      expect(new_user.email_addr).to.match(/@altoros.com$/);
    });
  });

  context('When editing an user', function() {

    beforeEach(function(){
      user['save'] = sandbox.stub();
      user.save.withArgs().returns(user);
    });

    it("The new name will be persisted", function () {
      var new_name = "RUPERT";
      var edited_user = ctrl.editName(new_name);
      ctrl.current_user.should.have.property('name');
      ctrl.current_user.email_addr.should.be.a('string');
      ctrl.current_user.name.should.be.eql(new_name);
    });

    it("On database error, catch and not persist", function () {
      user.save.withArgs().throws("database_error");
      var new_name = "RUPERT";
      var old_name = ctrl.current_user.name;
      ctrl.editName(new_name);
      ctrl.current_user.should.have.property('name');
      ctrl.current_user.name.should.be.a('string');
      ctrl.current_user.name.should.be.eql(old_name);
    });

    it("The new mail will be persisted", function () {
      var new_mail = "facuuuu@altoros.com";
      ctrl.editMail(new_mail);
      ctrl.current_user.should.have.property('email_addr');
      ctrl.current_user.email_addr.should.be.a('string');
      ctrl.current_user.email_addr.should.be.eql(new_mail);
    });

    it("An invalid new mail wont be persisted", function () {
      var new_mail = "facundovt@gmail.com";
      var current_mail = ctrl.current_user.email_addr;
      (function(){
        ctrl.editMail(new_mail);
      }).should.throw("Wrong domain");
      ctrl.current_user.should.have.property('email_addr');
      ctrl.current_user.email_addr.should.be.a('string');
      ctrl.current_user.email_addr.should.be.eql(current_mail);
    });
  });

  context('When getting an user', function() {
    beforeEach(function(){
      user['getBestFriend'] = sandbox.stub();
      user.getBestFriend.withArgs().returns(promise.resolve(jsf(mocks.user)));
    });

    it(", on getting his best friend user", function() {
      friend_promise = ctrl.getBestFriend();
      friend_promise.should.be.fulfilled;
      expect(friend_promise).to.eventually.have.property("name")
                            .and.be.a('string')
                            .that.match(/^Facu$|^Robert$|^Cesar$/);
      expect(friend_promise).to.eventually.have.property("user_id")
                            .and.be.a('string');
      expect(friend_promise).to.eventually.have.property("email_addr")
                            .and.be.a('string')
                            .that.match(/@altoros.com$/);
    });
  });
});
