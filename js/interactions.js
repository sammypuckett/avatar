TOPIC_UI = "button_topic";

function startConnect(){

    clientID = "clientID - "+parseInt(Math.random() * 100);

    host = "192.168.30.3";
    port = "9001"; //change this?
    userId  = "avatar"; 
    passwordId = "avatar";  

    client = new Paho.MQTT.Client(host, Number(port), clientID);
    /*client.onConnected = onConnected;
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;*/
    client.connect({
        onSuccess: onConnect,
        userName: userId,
        password: passwordId
    });
}

function onConnect(){
    client.subscribe(TOPIC_UI);
}


//forward button
function buttonForward(){
    var message = new Paho.MQTT.Message("forward");
    message.destinationName = TOPIC_UI;
    client.send(message);
}

//right button
function buttonRight(){
    var message = new Paho.MQTT.Message("right");
    message.destinationName = TOPIC_UI;
    client.send(message);
}

//left button
function buttonLeft(){
    var message = new Paho.MQTT.Message("left");
    message.destinationName = TOPIC_UI;
    client.send(message);
}

//back button
function buttonBack(){
    var message = new Paho.MQTT.Message("back");
    message.destinationName = TOPIC_UI;
    client.send(message);
}

//go to charger button
function toCharger(){
    message = new Paho.MQTT.Message("go to charger");
    message.destinationName = TOPIC_UI;
    client.send(message);
}




/*
//forward button
document.getElementById("w-node-d548b916-a1d5-5d37-4771-34a8557dee06-0f42d208").onclick = function(){ //link block: w-node-d548b916-a1d5-5d37-4771-34a8557dee07-0f42d208
    var message = new Paho.MQTT.Message("forward");
    message.destinationName = TOPIC_UI;
    mqtt.send(message);
}

//right button
document.getElementById("w-node-d548b916-a1d5-5d37-4771-34a8557dee12-0f42d208").onclick = function(){ //link block: w-node-d548b916-a1d5-5d37-4771-34a8557dee13-0f42d208
    var message = new Paho.MQTT.Message("right");
    message.destinationName = TOPIC_UI;
    mqtt.send(message);
}

//left button
document.getElementById("w-node-d548b916-a1d5-5d37-4771-34a8557dee0c-0f42d208").onclick = function(){ //link block: w-node-d548b916-a1d5-5d37-4771-34a8557dee0d-0f42d208
    var message = new Paho.MQTT.Message("left");
    message.destinationName = TOPIC_UI;
    mqtt.send(message);
}

//back button
document.getElementById("w-node-d548b916-a1d5-5d37-4771-34a8557dee18-0f42d208").onclick = function(){ //link block: w-node-d548b916-a1d5-5d37-4771-34a8557dee19-0f42d208
    var message = new Paho.MQTT.Message("back");
    message.destinationName = TOPIC_UI;
    mqtt.send(message);
}

//go to charger button
document.getElementById("c282e0a0-165b-69a3-0992-ab94b61a223b").onclick = function(){
    message = new Paho.MQTT.Message("go to charger");
    message.destinationName = TOPIC_UI;
    mqtt.send(message);
}
*/





/*
function onConnected(){
    document.getElementById("messages").innerHTML += "<span> SUCCESS: Connected! </span><br>";
    document.getElementById("btn_connect").disabled = true;
    document.getElementById("btn_disconnect").disabled = false;
    document.getElementById("btn_publish").disabled = false;
}
function onFailure(){
    document.getElementById("messages").innerHTML += "<span> FAILURE: NOT Connected! </span><br>";
    document.getElementById("btn_connect").disabled = false;
    document.getElementById("btn_disconnect").disabled = true;
    document.getElementById("btn_publish").disabled = true;
}
function onConnectionLost(responseObject){
    document.getElementById("messages").innerHTML += "<span> ERROR: Connection is lost.</span><br>";
    if(responseObject !=0){
        document.getElementById("messages").innerHTML += "<span> ERROR:"+ responseObject.errorMessage +"</span><br>";
    }
    document.getElementById("btn_connect").disabled = false;
    document.getElementById("btn_disconnect").disabled = true;
    document.getElementById("btn_publish").disabled = true;
}*/



















/*
var MOVEMENT = "topic";
var GO_TO_CHARGER = "topic";
var BATTERY = "topic";

var mqtt;
var host = "192.168.30.3";
var port = "1880"; //change this?
var userpass = "avatar";

function MQTTconnect() {
    mqtt = new Paho.MQTT.Client(host, port, userpass, userpass); //check syntax for username, password
}

function onConnect() {
    mqtt.subscribe(MOVEMENT, { qos: 0 });
    mqtt.subscribe(GO_TO_CHARGER, { qos: 0 });
    mqtt.subscribe(BATTERY, { qos: 0 });
}

//forward button
document.getElementById("w-node-d548b916-a1d5-5d37-4771-34a8557dee06-0f42d208").onclick = function(){ //link block: w-node-d548b916-a1d5-5d37-4771-34a8557dee07-0f42d208
    var message = new Paho.MQTT.Message("forward");
    message.destinationName = MOVEMENT;
    mqtt.send(message);
}

//right button
document.getElementById("w-node-d548b916-a1d5-5d37-4771-34a8557dee12-0f42d208").onclick = function(){ //link block: w-node-d548b916-a1d5-5d37-4771-34a8557dee13-0f42d208
    var message = new Paho.MQTT.Message("right");
    message.destinationName = MOVEMENT;
    mqtt.send(message);
}

//left button
document.getElementById("w-node-d548b916-a1d5-5d37-4771-34a8557dee0c-0f42d208").onclick = function(){ //link block: w-node-d548b916-a1d5-5d37-4771-34a8557dee0d-0f42d208
    var message = new Paho.MQTT.Message("left");
    message.destinationName = MOVEMENT;
    mqtt.send(message);
}

//back button
document.getElementById("w-node-d548b916-a1d5-5d37-4771-34a8557dee18-0f42d208").onclick = function(){ //link block: w-node-d548b916-a1d5-5d37-4771-34a8557dee19-0f42d208
    var message = new Paho.MQTT.Message("back");
    message.destinationName = MOVEMENT;
    mqtt.send(message);
}

//go to charger button
document.getElementById("c282e0a0-165b-69a3-0992-ab94b61a223b").onclick = function(){
    message = new Paho.MQTT.Message("go to charger");
    message.destinationName = GO_TO_CHARGER;
    mqtt.send(message);
}

//battery
function call {
    var percentage = received message; //message from topic BATTERY
    var chargeTime;

    //not sure what the correct values for this are...
    if (percentage <= 20) {
        chargeTime = "2 day."
    } else if (percentage > 20 && percentage <= 40) {
        chargeTime = "4 days."
    } else if (percentage > 40 && percentage <= 60) {
        chargeTime = "6 days."
    } else if (percentage > 60 && percentage <= 80) {
        chargeTime = "8 days."
    } else {
        chargeTime = "10 days."
    }

    document.getElementById("batterypercentagetext").value = percentage + " Charged";
    document.getElementById("batterypercentagetextcaregiver").value = percentage + " Charged";

    document.getElementById("batterycharging").value = "Charge in " + chargeTime;
    document.getElementById("batterychargingcaregiver").value = "Charge in " + chargeTime;
}
*/