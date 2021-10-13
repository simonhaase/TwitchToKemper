var easymidi = require('easymidi');
var ComfyJS = require("comfy.js");
require('dotenv').config()


//Your MIDI Output Device Here
var output = new easymidi.Output('Focusrite USB MIDI 1');

console.log('MIDI Inputs: '+ easymidi.getInputs());
//console.log('MIDI Outputs: '+ easymidi.getOutputs());

var Outputs = easymidi.getOutputs();

Outputs.forEach(element => {
  console.log(element);
});
// console.log('Disable Stomp-Boxes');

// StompA_disable();
// StompB_disable();
// StompC_disable();
// StompD_disable();
// StompX_disable();

// ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
//   if( command === "tone" ) {
//     ComfyJS.Say( "Channel Reward Tone Changes are enabled");
//     console.log("Channel Reward Tone Changes are enabled");
//   }
// }

// ComfyJS.onReward = ( user, reward, cost, message, extra ) => {
// 	console.log( user + " redeemed " + reward + " for " + cost );

//   if(reward === "Octave Up"){
//     console.log('Octave Up');
//     ComfyJS.Say('Engaged Octave Up Pedal');
//     StompD(1);
//     setTimeout(StompD_disable, 20000);
//     setTimeout()
    
//   }
//   if(reward === "Space Reverb"){
//     console.log('Space Reverb');
//     ComfyJS.Say('Engaged Space Reverb Pedal');
//     StompX(1);
//     setTimeout(StompX_disable, 20000);
    
//   }
//   if(reward === "Fuzz"){
//     console.log('Fuzz');
//     ComfyJS.Say('Engaged Big Muff Pedal');
//     StompC(1);
//     setTimeout(StompC_disable, 20000);
//   }
// }


// ComfyJS.Init(process.env.TWITCHUSER, process.env.OAUTH);


// function Performance1(value){
//   output.send('program',{
//     cc: 50,
//     value: value,
//   });
// } 

// function Performance2(value){
//   output.send('program',{
//     cc: 51,
//     value: value,
//   });
// } 

// function Performance3(value){
//   output.send('program',{
//     cc: 52,
//     value: value,
//   });
// } 

// function Performance4(value){
//   output.send('program',{
//     cc: 53,
//     value: value,
//   });
// }

// function StompA(value){
//   output.send('cc',{
//     controller: 17,
//     value: value,
//   });
  
// }

// function StompB(value){
//   output.send('cc',{
//     controller: 18,
//     value: value,
//   });
  
// }

// function StompC(value){
//   output.send('cc',{
//     controller: 19,
//     value: value,
//   });
  
// }

// function StompD(value){
//   output.send('cc',{
//     controller: 20,
//     value: value,
//   });
// }

// function StompX(value){
//   output.send('cc',{
//     controller: 22,
//     value: value,
//   });
// }

// function StompA_disable(){
//   output.send('cc',{
//     controller: 17,
//     value: 0,
//   });
//   ComfyJS.Say('Disabled StompA Pedal');
// }

// function StompB_disable(){
//   output.send('cc',{
//     controller: 18,
//     value: 0,
//   });
//   ComfyJS.Say('Disabled StompB Pedal');
// }


// function StompC_disable(){
//   output.send('cc',{
//     controller: 19,
//     value: 0,
//   });
//   ComfyJS.Say('Disabled Big Muff Pedal');
// }

// function StompD_disable(){
//   output.send('cc',{
//     controller: 20,
//     value: 0,
//   });
//   ComfyJS.Say('Disabled Octave Up Pedal');
// }
// function StompX_disable(){
//   output.send('cc',{
//     controller: 22,
//     value: 0,
//   });
//   ComfyJS.Say('Disabled Space Reverb Pedal');
// }

