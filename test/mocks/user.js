var schema = {
  type: "object",
  properties: {
    userId: {
      type: "string",
      chance: "guid"
    },
    name: {
      type: "string",
      pattern: "Robert|Cesar|Facu"
    },
    emailAddr: {
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
    "userId",
    "name",
    "emailAddr"
  ]
};

module.exports = {
  obj: schema
};
