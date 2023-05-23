/*TOPIC_XBATTERY = "X/Battery";
TOPIC_XCOATING = "X/Coating";
ELEMENTID_XBATTERY = "XBattery";
ELEMENTID_XCOATING = "XCoating";
ELEMENTID_BTNBATTERY = "btn_Battery";
ELEMENTID_BTNCOATING = "btn_Coating"; */

/*MOVEMENT = "topic";
GO_TO_CHARGER = "topic";
BATTERY = "topic";*/

TOPIC_UI = "MQTT/UI";

function startConnect(){

    clientID = "clientID - "+parseInt(Math.random() * 100);

    host = "192.168.30.3";
    port = "1880"; //change this?
    userId  = "avatar"; 
    passwordId = "avatar";  

    client = new Paho.MQTT.Client(host, Number(port), clientID);
    client.onConnected = onConnected;
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({
        onSuccess: onConnect,
        userName: userId,
        password: passwordId
    });
}

function onConnect(){
    client.subscribe(TOPIC_UI);
}
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
}

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

/*
function onMessageArrived(message){
    console.log("OnMessageArrived: "+message.payloadString);
    document.getElementById("messages").innerHTML 
            += "<span> Subscribed Topic:<b>"+message.destinationName+"</b>"
            + " | Message : <b>"+message.payloadString + "</b></span><br>";

    // ADDITIONAL DEDICATED TOPICS PROCESSING FOR LIVE UPDATES TO PAGE DISPLAY
    if (message.destinationName === TOPIC_XBATTERY) {
        document.getElementById(ELEMENTID_XBATTERY).innerHTML = message.payloadString;
        var element = document.getElementById(ELEMENTID_BTNBATTERY);
        if (! isNaN(parseFloat(message.payloadString))) {
            batteryValue = parseFloat(message.payloadString);
            if (batteryValue >= 50) {
                //element.style.backgroundColor = "green";
                element.setAttribute("style","background:LightGreen");
            } else {
                //element.style.backgroundColor = "yellow";
                element.setAttribute("style","background:LightPink");
            }
        }
    } else if (message.destinationName === TOPIC_XCOATING) {
        document.getElementById(ELEMENTID_XCOATING).innerHTML = message.payloadString;
        var element = document.getElementById(ELEMENTID_BTNCOATING);
        if (! isNaN(parseFloat(message.payloadString))) {
            coatingValue = parseFloat(message.payloadString);
            if (coatingValue >= 50) {
                //element.style.backgroundColor = "green";
                element.setAttribute("style","background:LightGreen");
            } else  {
                //element.style.backgroundColor = "yellow";
                element.setAttribute("style","background:LightPink");
            }
        }
    }
}




function startDisconnect(){
    client.disconnect();
    document.getElementById("messages").innerHTML += "<span> Disconnected. </span><br>";
}

function setBatteryTopic(){
    document.getElementById("topic_p").value = TOPIC_XBATTERY;
}
function setCoatingTopic(){
    document.getElementById("topic_p").value = TOPIC_XCOATING;
}

function formsubmit(){
    return false;
}
function publishMessage(){
    msg = document.getElementById("Message").value;
    topic = document.getElementById("topic_p").value;

    Message = new Paho.MQTT.Message(msg);
    Message.destinationName = topic;

    client.send(Message);
    document.getElementById("messages").innerHTML += "<span> Message to topic "+topic+" is sent </span><br>";
}

function clearMessage(){
    document.getElementById("messages").innerHTML = "";
}
*/