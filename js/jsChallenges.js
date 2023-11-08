
function challenge1(checkbox) {
    // 获取email输入框对应的div元素
    var emailDiv = document.getElementById('emailDiv');
    
    // 检查复选框是否被选中
    if (checkbox.checked) {
      // 如果被选中，则显示email输入框
      emailDiv.style.display = 'block';
    } else {
      // 如果没有被选中，则隐藏email输入框
      emailDiv.style.display = 'none';
    }
  }// function challenge1(checkbox) {
    // if (document.getElementById("subscribe").checked == true){
    //     document.getElementById("emailDiv").style.display = "block";
    // }else {
    //     document.getElementById("emailDiv").style.display = "none";
    // }
    // var emailDiv = document.getElementById('emailDiv');
//     if (checkbox.checked) {

//       emailDiv.style.display = 'block';
//     } else {
//       emailDiv.style.display = 'none';
//     }
//   }
function challenge2() {
    let bill = document.querySelector("#bill");
    let home = document.querySelector("#home");

    if(document.querySelector("#sameAddress").checked) {
      home.value = bill.value;
      home.disabled = true;
    } else {
      home.value = " ";
      home.disabled = false;
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    let checkbox = document.querySelector("#sameAddress");
    let homeAddress = document.querySelector("#home");
  
    checkbox.addEventListener("click", function() {
      let billingAddress = document.querySelector("#bill").value;
  
      if(this.checked) {
        homeAddress.value = billingAddress;
        homeAddress.disabled = true;
      } else {
        homeAddress.value = "";
        homeAddress.disabled = false;
      }
    });
  });
  
  