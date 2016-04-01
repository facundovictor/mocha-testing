var userCtrl = function(schema) {
  self = {
    current_user : schema,
    editName : function(name){
      var old_name = self.current_user.name;
      try {
        self.current_user.name = name;
        return self.current_user.save();
      }
      catch (e) {
        self.current_user.name = old_name;
      }
      return self.current_user;
    },
    editMail : function(mail){
      if (mail !== null && mail.match(/@altoros.com$/)){
        self.current_user.email_addr = mail;
        return self.current_user.save();
      }
      throw new Error("Wrong domain");
    },
    getBestFriend : function(){
      return self.current_user.getBestFriend();
    },
    getAPIInformation : function(callback){
      /* The next function is for testing asynchronous code */
      self.current_user.getAPIInformation(callback);
    },
    saveNewData : function(new_data, callback){
      setTimeout(function(){
        callback(self.current_user.saveAPIInformation(new_data));
      }, 300);
    }
  };
  return self;
};

// This is just a user controller only for learning purposes.
module.exports = userCtrl;
