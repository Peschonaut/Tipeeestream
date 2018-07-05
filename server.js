// Connect to https://sso.tipeeestream.com:4242
API_KEY = process.env.API_KEY;
USERNAME = process.env.API_USER;

var io = require('socket.io-client');

var socket = io('https://sso.tipeeestream.com:4242');
socket.on('connect', function(){});
socket.emit('join-room', {room: API_KEY, username: USERNAME});

socket.on('new-event', function(data){
  console.log(data);
  if (data.event.type == "donation") {
    donationAmount = data.event.parameters.amount;
    donationCurrency = data.event.parameters.currency;
    donationMessage = data.event.parameters.message;
    if (currency == "EUR") {
      // Send donationAmount (in EUR) to user donationMessage
    } else {
      // Donation in foreign currency
    }
  }
});
