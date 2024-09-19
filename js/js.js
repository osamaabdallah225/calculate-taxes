

  
   

    function calculateTax() {
        // Get the values from the input fields
        const totalValue = parseFloat(document.getElementById('totalValue').value);
        const taxRate = parseFloat(document.getElementById('taxRate').value);
                

       
        
      
       // التحقق من صحة الإدخال
       if (isNaN(totalValue) || totalValue <= 0) {
                    alert('الرجاء إدخال قيمة إجمالية صحيحة.');
                        //   البحث نتائج  تصفير
                      document.getElementById('result-total').value = 0;
                      document.getElementById('result-tax').value = 0;
                      document.getElementById('result-totalf').value = 0;
                      return;
                  }
      
       if (isNaN(taxRate) || taxRate <= 0) {
                      alert('الرجاء إدخال نسبة ضريبة القيمة المضافة صحيحة.');
                    //   البحث نتائج  تصفير
                      document.getElementById('result-total').value = 0;
                      document.getElementById('result-tax').value = 0;
                      document.getElementById('result-totalf').value = 0;
                      return;
                  }

                  
                  document.getElementById('result').style.display = "block";
                  document.getElementById('block').style.height = "550px";

        // Calculate the tax amount
      
      
        if (document.getElementById('yes').checked) {
          
      
        const taxAmount = (totalValue * taxRate) / 100;
       
        document.getElementById('result-total').value = (totalValue).toLocaleString(3);
        document.getElementById('result-tax').value = (taxAmount).toLocaleString(3);
        document.getElementById('result-totalf').value = (totalValue+taxAmount).toLocaleString(3);
      
        }
      
        else {
          const taxAmount = (totalValue / (taxRate+100)) * taxRate;
        document.getElementById('result-total').value = (totalValue-taxAmount).toLocaleString(3);
        document.getElementById('result-tax').value = (taxAmount).toLocaleString(3);
        document.getElementById('result-totalf').value = (totalValue).toLocaleString(3);
        }

    }


                  