var schema = {
  type: "object",
  properties: {
    user_id: {
      type: "string",
      chance: "guid"
    },
    name: {
      type: "string",
      pattern: "Robert|Cesar|Facu"
    },
    email_addr: {
      type: "string",
      chance: {
        email: {
          "domain": "altoros.com"
        }
      },
      pattern: ".+@altoros.com"
    }
  },
  required: [
    "user_id",
    "name",
    "email_addr"
  ]
};

module.exports = schema;
