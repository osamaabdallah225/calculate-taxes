
    function calculateTax() {
        // Get the values from the input fields
        const totalValue = parseFloat(document.getElementById('totalValue').value);
        const taxRate = parseFloat(document.getElementById('taxRate').value);
       // التحقق من صحة الإدخال
       if (isNaN(totalValue) || totalValue <= 0) {
                    alert('الرجاء إدخال قيمة إجمالية صحيحة.');
                        //تصفير نتائج البحث 
                      document.getElementById('result-total').value = 0;
                      document.getElementById('result-tax').value = 0;
                      document.getElementById('result-totalf').value = 0;
                      return;
                  }
      
       if (isNaN(taxRate) || taxRate <= 0) {
                      alert('الرجاء إدخال نسبة ضريبة القيمة المضافة صحيحة.');
                    //تصفير نتائج البحث 
                      document.getElementById('result-total').value = 0;
                      document.getElementById('result-tax').value = 0;
                      document.getElementById('result-totalf').value = 0;
                      return;
                  }

                  // عرض result
                  document.getElementById('result').style.display = "block";
                  // تغيير الطول عندما يتم عرض result
                  document.getElementById('block').style.height = "550px";

        // Calculate the tax amount
        


        if (document.getElementById('yes').checked) {
          
      
        const taxAmount = (totalValue * taxRate) / 100;
       
        document.getElementById('result-total').value = (totalValue).toLocaleString();
        document.getElementById('result-tax').value = (taxAmount).toLocaleString();
        document.getElementById('result-totalf').value = (totalValue+taxAmount).toLocaleString();
      
        }
      
        else {
          const taxAmount = (totalValue / (taxRate+100)) * taxRate;
        document.getElementById('result-total').value = (totalValue-taxAmount).toLocaleString();
        document.getElementById('result-tax').value = (taxAmount).toLocaleString();
        document.getElementById('result-totalf').value = (totalValue).toLocaleString();
        }

    }

    
  //  جعل زر الانتر يعمل كنقر علي الزر
  document.addEventListener("keydown", function(event) {
    // تحقق إذا كان المفتاح هو Enter (رمزه 13 أو 'Enter')
    if (event.key === "Enter") {
        // تنشيط الزر كما لو تم النقر عليه
        document.getElementById("button").click();
    }
});




  
function myFunction() {

  const totalValue = parseFloat(document.getElementById('totalValue').value);
        const taxRate = parseFloat(document.getElementById('taxRate').value);
       // التحقق من صحة الإدخال
       if (isNaN(totalValue) || totalValue <= 0) {
                  
                        //تصفير نتائج البحث 
                      document.getElementById('result-total').value = 0;
                      document.getElementById('result-tax').value = 0;
                      document.getElementById('result-totalf').value = 0;
                      return;
                  }
      
       if (isNaN(taxRate) || taxRate <= 0) {
                     
                    //تصفير نتائج البحث 
                      document.getElementById('result-total').value = 0;
                      document.getElementById('result-tax').value = 0;
                      document.getElementById('result-totalf').value = 0;
                      return;
                  }

                  // عرض result
                  document.getElementById('result').style.display = "block";
                  // تغيير الطول عندما يتم عرض result
                  document.getElementById('block').style.height = "550px";

        // Calculate the tax amount
        


        if (document.getElementById('yes').checked) {
          
      
        const taxAmount = (totalValue * taxRate) / 100;
       
        document.getElementById('result-total').value = (totalValue).toLocaleString();
        document.getElementById('result-tax').value = (taxAmount).toLocaleString();
        document.getElementById('result-totalf').value = (totalValue+taxAmount).toLocaleString();
      
        }
      
        else {
          const taxAmount = (totalValue / (taxRate+100)) * taxRate;
        document.getElementById('result-total').value = (totalValue-taxAmount).toLocaleString();
        document.getElementById('result-tax').value = (taxAmount).toLocaleString();
        document.getElementById('result-totalf').value = (totalValue).toLocaleString();
        }

    }




