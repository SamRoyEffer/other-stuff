var facebookProfile = {
  name: "Sam",
  friends: 200,
  messages: ["Hi", "You look great", "Have a swell day"],
  postMessage: function (message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friends = facebookProfile.friends + 1;
  },
  removeFriends: function () {
    if (facebookProfile.friends>0)
    facebookProfile.friends = facebookProfile.friends - 1;
  }
};