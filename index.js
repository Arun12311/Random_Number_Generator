function generateNumber() {
    var num = Math.floor(Math.random() * 100) + 1;
    var OTP = Math.round(Math.random() * 9000) + 1000;
  
    document.getElementById("output").innerHTML = "Your random number is  : " + num;
    document.getElementById("outputOTP").innerHTML = "Your OTP is : " + OTP;
  }