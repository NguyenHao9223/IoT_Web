const firebaseConfig = {
  apiKey: "AIzaSyDIDhBCL5OeQB-9NFGlro4QVdc9Gxzel4A",
  authDomain: "tt-iot-nguyenvanhao.firebaseapp.com",
  databaseURL: "https://tt-iot-nguyenvanhao-default-rtdb.firebaseio.com",
  projectId: "tt-iot-nguyenvanhao",
  storageBucket: "tt-iot-nguyenvanhao.appspot.com",
  messagingSenderId: "638752796851",
  appId: "1:638752796851:web:86749b782e10d2125740c6"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
    // Auto load Temperature-------------------------
    firebase.database().ref("/Kitchen/R_Temperature").on("value",function(snapshot){
      var nd = snapshot.val();  
      document.getElementById("Temperature").innerHTML = nd;
      console.log(nd);
    });
    firebase.database().ref("/Kitchen/R_Humidity").on("value",function(snapshot){
      var nd = snapshot.val();  
      document.getElementById("Humidity").innerHTML = nd;
      console.log(nd);
    });
    firebase.database().ref("/Kitchen/GAS").on("value",function(snapshot){
      var nd = snapshot.val();  
      document.getElementById("GAS").innerHTML = nd;
      console.log(nd);
    });
    firebase.database().ref("/Kitchen/Light").on("value",function(snapshot){
      var nd = snapshot.val();  
      document.getElementById("Light").innerHTML = nd;
      console.log(nd);
    });
  
    firebase.database().ref("/Kitchen").on("value",function(snapshot){
      if(snapshot.exists()){
        console.log(snapshot.val())
        var bulb_01_status = snapshot.val()
        var bulb_02_status = snapshot.val()
        var FRIDGE_status = snapshot.val()
        var COFFEE_status = snapshot.val()
        var STOVE_status = snapshot.val()
        var fan_status = snapshot.val()
        var CB1_status = snapshot.val()
        var CB2_status = snapshot.val()
        var CB3_status = snapshot.val()
        var CB4_status = snapshot.val()
        
             //Den 01
        if (bulb_01_status["K_BULB_01"] == "ON"){
          document.getElementById("d01_img").src = "./img/light_bulb_on.png"
          document.getElementById("d01_on").style.background = "green"
          document.getElementById("d01_off").style.background = "grey"}
        else{
          document.getElementById("d01_img").src = "./img/light_bulb_off.png"
          document.getElementById("d01_on").style.background = "grey"
          document.getElementById("d01_off").style.background = "red"}
        //Den 2
        if (bulb_02_status["K_BULB_02"] == "ON"){
          document.getElementById("d02_img").src = "./img/light_bulb_on.png"
          document.getElementById("d02_on").style.background = "green"
          document.getElementById("d02_off").style.background = "grey"}
        else{
          document.getElementById("d02_img").src = "./img/light_bulb_off.png"
          document.getElementById("d02_on").style.background = "grey"
          document.getElementById("d02_off").style.background = "red"}
        //Fridge
        if (FRIDGE_status["K_Fridge"] == "ON"){
          document.getElementById("d03_img").src = "./img/fridgeon.png"
          document.getElementById("d03_on").style.background = "green"
          document.getElementById("d03_off").style.background = "grey"}
        else{
          document.getElementById("d03_img").src = "./img/fridgeoff.png"
          document.getElementById("d03_on").style.background = "grey"
          document.getElementById("d03_off").style.background = "red"}
        //COFFEE
        if (COFFEE_status["K_Coffee"] == "ON"){
          document.getElementById("d04_img").src = "./img/coffeeon.png"
          document.getElementById("d04_on").style.background = "green"
          document.getElementById("d04_off").style.background = "grey"}
        else{
          document.getElementById("d04_img").src = "./img/coffeeoff.png"
          document.getElementById("d04_on").style.background = "grey"
          document.getElementById("d04_off").style.background = "red"}
        
        //Lo vi song
        if (STOVE_status["K_Stove"] == "ON"){
          document.getElementById("ml_img").src = "./img/stoveon.png"
          document.getElementById("ml_on").style.background = "green"
          document.getElementById("ml_off").style.background = "grey"}
        else{
          document.getElementById("ml_img").src = "./img/stoveoff.png"
          document.getElementById("ml_on").style.background = "grey"
          document.getElementById("ml_off").style.background = "red"}
        
        //FAN
        if (fan_status["K_FAN"] == "ON"){
          document.getElementById("q_img").src = "./img/fanon.png"
          document.getElementById("q_on").style.background = "green"
          document.getElementById("q_off").style.background = "grey"}
        else{
          document.getElementById("q_img").src = "./img/fanoff.png"
          document.getElementById("q_on").style.background = "grey"
          document.getElementById("q_off").style.background = "red"}
      
        //CB1
        if (CB1_status["CB1"] == "ON"){
          document.getElementById("cb1_img").src = "./img/tempon.png";
          document.getElementById("SliderNgangId1").value = 1;
          output1.innerHTML = "SliderNgang1".value = 1}
        else{
          document.getElementById("cb1_img").src = "./img/tempoff.png";
          document.getElementById("SliderNgangId1").value = 0;
          output1.innerHTML = "SliderNgang2".value = 0}
  
        //CB2
        if (CB2_status["CB2"] == "ON"){
          document.getElementById("cb2_img").src = "./img/humon.png";
          document.getElementById("SliderNgangId2").value = 1;
          output2.innerHTML = "SliderNgang2".value = 1}
        else{
          document.getElementById("cb2_img").src = "./img/humoff.png";
          document.getElementById("SliderNgangId2").value = 0;
          output2.innerHTML = "SliderNgang2".value = 0}
  
        //CB3
        if (CB3_status["CB3"] == "ON"){
          document.getElementById("cb3_img").src = "./img/gason.png";
          document.getElementById("SliderNgangId3").value = 1;
          output3.innerHTML = "SliderNgang3".value = 1}
        else{
          document.getElementById("cb3_img").src = "./img/gasoff.png";
          document.getElementById("SliderNgangId3").value = 0;
          output3.innerHTML = "SliderNgang3".value = 0}
  
        //CB4
        if (CB4_status["CB4"] == "ON"){
          document.getElementById("cb4_img").src = "./img/ON.png";
          document.getElementById("SliderNgangId4").value = 1;
          output4.innerHTML = "SliderNgang4".value = 1}
        else{
          document.getElementById("cb4_img").src = "./img/OFF.png";
          document.getElementById("SliderNgangId4").value = 0;
          output4.innerHTML = "SliderNgang4".value = 0}
      }
      else
        console.log("No data available!")
    })
    //Den 01-------------------------------------------------------
  var d01_on = document.getElementById("d01_on");
  var d01_off = document.getElementById("d01_off");
  
  d01_on.onclick = function(){
      console.log("On");
      document.getElementById("d01_img").src = "./img/light_bulb_on.png"
      document.getElementById("d01_on").style.background = "green"
      document.getElementById("d01_off").style.background = "grey"
      firebase.database().ref("/Kitchen").update({
      "K_BULB_01": "ON"
    })
  }
  
  d01_off.onclick = function(){
      document.getElementById("d01_img").src = "./img/light_bulb_off.png"
      document.getElementById("d01_on").style.background = "grey"
      document.getElementById("d01_off").style.background = "red"
    firebase.database().ref("/Kitchen").update({
        "K_BULB_01": "OFF"
      })
  }
  
  //Den 02-------------------------------------------------------
  var d02_on = document.getElementById("d02_on");
  var d02_off = document.getElementById("d02_off");
  
  d02_on.onclick = function(){
      console.log("On");
      document.getElementById("d02_img").src = "./img/light_bulb_on.png"
      document.getElementById("d02_on").style.background = "green"
      document.getElementById("d02_off").style.background = "grey"
      firebase.database().ref("/Kitchen").update({
      "K_BULB_02": "ON"
    })
  }
  
  d02_off.onclick = function(){
      document.getElementById("d02_img").src = "./img/light_bulb_off.png"
      document.getElementById("d02_on").style.background = "grey"
      document.getElementById("d02_off").style.background = "red"
    firebase.database().ref("/Kitchen").update({
          "K_BULB_02": "OFF"
      })
  }
  
  var d03_on = document.getElementById("d03_on");
  var d03_off = document.getElementById("d03_off");
  
  d03_on.onclick = function(){
      console.log("On");
      document.getElementById("d03_img").src = "./img/fridgeon.png"
      document.getElementById("d03_on").style.background = "green"
      document.getElementById("d03_off").style.background = "grey"
      firebase.database().ref("/Kitchen").update({
      "K_Fridge": "ON"
    })
  }
  
  d03_off.onclick = function(){
      document.getElementById("d03_img").src = "./img/fridgeoff.png"
      document.getElementById("d03_on").style.background = "grey"
      document.getElementById("d03_off").style.background = "red"
    firebase.database().ref("/Kitchen").update({
          "K_Fridge": "OFF"
      })
  }
  
  var d04_on = document.getElementById("d04_on");
  var d04_off = document.getElementById("d04_off");
  
  d04_on.onclick = function(){
      console.log("On");
      document.getElementById("d04_img").src = "./img/coffeeon.png"
      document.getElementById("d04_on").style.background = "green"
      document.getElementById("d04_off").style.background = "grey"
      firebase.database().ref("/Kitchen").update({
      "K_Coffee": "ON"
    })
  }
  
  d04_off.onclick = function(){
      document.getElementById("d04_img").src = "./img/coffeeoff.png"
      document.getElementById("d04_on").style.background = "grey"
      document.getElementById("d04_off").style.background = "red"
    firebase.database().ref("/Kitchen").update({
          "K_Coffee": "OFF"
      })
  }
  
  var ml_on = document.getElementById("ml_on");
  var ml_off = document.getElementById("ml_off");
  ml_on.onclick = function(){
    console.log("On");
    document.getElementById("ml_img").src = "./img/stoveon.png"
    document.getElementById("ml_on").style.background = "green"
    document.getElementById("ml_off").style.background = "grey"
    firebase.database().ref("/Kitchen").update({
    "K_Stove": "ON"
  })
  }
  
  ml_off.onclick = function(){
  document.getElementById("ml_img").src = "./img/stoveoff.png"
  document.getElementById("ml_on").style.background = "grey"
  document.getElementById("ml_off").style.background = "red"
  firebase.database().ref("/Kitchen").update({
    "K_Stove": "OFF"
  })
  }
  
  var q_on = document.getElementById("q_on");
  var q_off = document.getElementById("q_off");
  q_on.onclick = function(){
    console.log("On");
    document.getElementById("q_img").src = "./img/fanon.png"
    document.getElementById("q_on").style.background = "green"
    document.getElementById("q_off").style.background = "grey"
    firebase.database().ref("/Kitchen").update({
    "K_FAN": "ON"
  })
  }
  
  q_off.onclick = function(){
  document.getElementById("q_img").src = "./img/fanoff.png"
  document.getElementById("q_on").style.background = "grey"
  document.getElementById("q_off").style.background = "red"
  firebase.database().ref("/Kitchen").update({
    "K_FAN": "OFF"
  })
  }
  
  var sliderNgang1 = document.getElementById("SliderNgangId1");
  var output1 = document.getElementById("SliderNgangValue1");
  var img1 = document.getElementById("cb1_img");
  output1.innerHTML = sliderNgang1.value;
  sliderNgang1.oninput = function(){
    output1.innerHTML = this.value;
    let getvalue1 = sliderNgang1.value;
    if(getvalue1==1){
      img1.setAttribute("src", "./img/ON.jpg")
      firebase.database().ref("/Kitchen").update({"CB1": "ON"})
      firebase.database().ref("/Kitchen/R_Temperature").on("value",function(snapshot){
        var nd = snapshot.val();  
        document.getElementById("Temperature").innerHTML = nd;
        console.log(nd);
      });
    }
    else{
      img1.setAttribute("src", "./img/OFF.jpg")
      firebase.database().ref("/Kitchen").update({"CB1": "OFF"})
      firebase.database().ref("/Kitchen").update({"R_Temperature": "OFF"})
    }
  };
  
  var sliderNgang2 = document.getElementById("SliderNgangId2");
  var output2 = document.getElementById("SliderNgangValue2");
  var img2 = document.getElementById("cb2_img");
  output2.innerHTML = sliderNgang2.value;
  sliderNgang2.oninput = function(){
    output2.innerHTML = this.value;
    let getvalue2 = sliderNgang2.value;
    if(getvalue2==1){
      img2.setAttribute("src", "./img/ON.jpg")
      firebase.database().ref("/Kitchen").update({"CB2": "ON"})
      firebase.database().ref("/Kitchen/R_Humidity").on("value",function(snapshot){
        var nd = snapshot.val();  
        document.getElementById("Humidity").innerHTML = nd;
        console.log(nd);
      });
    }
    else{
      img2.setAttribute("src", "./img/OFF.jpg")
      firebase.database().ref("/Kitchen").update({"CB2": "OFF"})
      firebase.database().ref("/Kitchen").update({"R_Humidity": "OFF"})
    }
  };
  
  var sliderNgang3 = document.getElementById("SliderNgangId3");
  var output3 = document.getElementById("SliderNgangValue3");
  var img3 = document.getElementById("cb3_img");
  output3.innerHTML = sliderNgang3.value;
  sliderNgang3.oninput = function(){
    output3.innerHTML = this.value;
    let getvalue3 = sliderNgang3.value;
    if(getvalue3==1){
      img3.setAttribute("src", "./img/ON.jpg")
      firebase.database().ref("/Kitchen").update({"CB3": "ON"})
      firebase.database().ref("/Kitchen/GAS").on("value",function(snapshot){
        var nd = snapshot.val();  
        document.getElementById("GAS").innerHTML = nd;
        console.log(nd);
      });
    }
    else{
      img3.setAttribute("src", "./img/OFF.jpg")
      firebase.database().ref("/Kitchen").update({"CB3": "OFF"})
      firebase.database().ref("/Kitchen").update({"GAS": "OFF"})
    }
  };
  
  var sliderNgang4 = document.getElementById("SliderNgangId4");
  var output4 = document.getElementById("SliderNgangValue4");
  var img4 = document.getElementById("cb4_img");
  output4.innerHTML = sliderNgang4.value;
  sliderNgang4.oninput = function(){
    output4.innerHTML = this.value;
    let getvalue4 = sliderNgang4.value;
    if(getvalue4==1){
      img4.setAttribute("src", "./img/ON.jpg")
      firebase.database().ref("/Kitchen").update({"CB4": "ON"})
      firebase.database().ref("/Kitchen/Light").on("value",function(snapshot){
        var nd = snapshot.val();  
        document.getElementById("Light").innerHTML = nd;
        console.log(nd);
      });
    }
    else{
      console.log("Off");
      img4.setAttribute("src", "./img/OFF.jpg")
      firebase.database().ref("/Kitchen").update({"CB4": "OFF"})
      firebase.database().ref("/Kitchen").update({"Light": "OFF"})
    }
  };