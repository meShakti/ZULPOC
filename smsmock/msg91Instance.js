var msg91=require('msg91-sms');
 
//Authentication Key 
var authkey='239763AHFf0PKCmkP5bac96df';
 
//for multiple numbers
var numbers=[];
numbers.push('919161310568');
numbers.push('919649567739');
 
//for single number
var number='919649567739';
 
//message
var message='Hello this is a text';
 
//Sender ID
var senderid='MSGIND';
 
//Route
var route='4';
 
//Country dial code
var dialcode='91';
 
 
//send to single number
 
msg91.sendOne(authkey,number,message,senderid,route,dialcode,function(response){
 
//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);
});
 
//send to multiple numbers
 
msg91.sendMultiple(authkey,numbers,message,senderid,route,dialcode,function(response){
 
//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);
 
});
