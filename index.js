var easymidi = require('easymidi');
var ComfyJS = require("comfy.js");
require('dotenv').config()

var input = new easymidi.Input('Oxygen 49 1');
var output = new easymidi.Output('Focusrite USB MIDI 1');

console.log('MIDI Inputs: '+ easymidi.getInputs());
console.log('MIDI Outputs: '+ easymidi.getOutputs());
console.log('Disable Stomp-Boxes');

StompC_disable();
StompD_disable();
StompX_disable();

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( command === "tone" ) {
    ComfyJS.Say( "Channel Reward Tone Changes are enabled");
    console.log("Channel Reward Tone Changes are enabled");
  }
}

ComfyJS.onReward = ( user, reward, cost, message, extra ) => {
	console.log( user + " redeemed " + reward + " for " + cost );

  if(reward === "Octave Up"){
    console.log('Octave Up');
    ComfyJS.Say('Engaged Octave Up Pedal');
    StompD(1);
    setTimeout(StompD_disable, 20000);
    
  }
  if(reward === "Space Reverb"){
    console.log('Space Reverb');
    ComfyJS.Say('Engaged Space Reverb Pedal');
    StompX(1);
    setTimeout(StompX_disable, 20000);
    
  }
  if(reward === "Fuzz"){
    console.log('Fuzz');
    ComfyJS.Say('Engaged Big Muff Pedal');
    StompC(1);
    setTimeout(StompC_disable, 20000);
    

  }
}


ComfyJS.Init(process.env.TWITCHUSER, process.env.OAUTH);


input.on('noteon', function (msg) {
  console.log("henlo");
});


//Performance Slot 1
function Performance1(){
  output.send('program',{
    cc: 50,
    value: 1,
  });
} 

//Performance Slot 2
function Performance2(){
  output.send('program',{
    cc: 51,
    value: 1,
  });
} 

//Performance Slot 3
function Performance3(){
  output.send('program',{
    cc: 512,
    value: 1,
  });
} 

//Stomp D
function StompD(value){
  output.send('cc',{
    controller: 20,
    value: value,
  });
}

function StompD_disable(){
  output.send('cc',{
    controller: 20,
    value: 0,
  });
  ComfyJS.Say('Disabled Octave Up Pedal');
}


function StompX(value){
  output.send('cc',{
    controller: 22,
    value: value,
  });
}
function StompX_disable(){
  output.send('cc',{
    controller: 22,
    value: 0,
  });
  ComfyJS.Say('Disabled Space Reverb Pedal');
}

function StompC(value){
  output.send('cc',{
    controller: 19,
    value: value,
  });
  
}

function StompC_disable(){
  output.send('cc',{
    controller: 19,
    value: 0,
  });
  ComfyJS.Say('Disabled Big Muff Pedal');
}