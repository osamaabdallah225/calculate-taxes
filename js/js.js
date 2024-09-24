function calculateTax(clickonbutton) {
  // Get the values from the input fields
  const totalValue = parseFloat(document.getElementById('totalValue').value);
  const taxRate = parseFloat(document.getElementById('taxRate').value);
  const taxRateElement = document.getElementById('taxRate');
  var totalValueElement = document.getElementById('totalValue');
 // التحقق من صحة الإدخال
 if (clickonbutton) {
  
  if (isNaN(totalValue) || totalValue <= 0) {
   
    // alert('الرجاء إدخال قيمة إجمالية صحيحة.');
//  لو مش محقق الشروط اللي فوق جعل الحقل احمر
if (totalValueElement) {
    if (totalValueElement.validity ) {
        totalValueElement.style.border = '1px solid red'; // وضع border أحمر إذا كان الحقل غير صالح
    }
    // إزالة الـ border عند الكتابة في الحقل
    totalValueElement.addEventListener('input', function() {
        totalValueElement.style.border = ''; // إزالة الـ border عند الكتابة
    });
}

       //تصفير نتائج البحث 
      document.getElementById('result-total').value = 0;
      document.getElementById('result-tax').value = 0;
      document.getElementById('result-totalf').value = 0;
      
  }

if (isNaN(taxRate) || taxRate <= 0) {
      // alert('الرجاء إدخال نسبة ضريبة القيمة المضافة صحيحة.');
//  لو مش محقق الشروط اللي فوق جعل الحقل احمر
if (taxRateElement) {
  if (taxRateElement.validity ) {
    taxRateElement.style.border = '1px solid red'; // وضع border أحمر إذا كان الحقل غير صالح
  }
  // إزالة الـ border عند الكتابة في الحقل
  taxRateElement.addEventListener('input', function() {
    taxRateElement.style.border = ''; // إزالة الـ border عند الكتابة
  });
}
    //تصفير نتائج البحث 
      document.getElementById('result-total').value = 0;
      document.getElementById('result-tax').value = 0;
      document.getElementById('result-totalf').value = 0;
      
  }
  return;
 }
 
 
else {
  if (isNaN(totalValue) || totalValue <= 0) {
    //تصفير نتائج البحث 
    resetResults()
  return;
}

if (isNaN(taxRate) || taxRate <= 0) {

//تصفير نتائج البحث 
resetResults()
  return;
}
}
// عرض result
document.getElementById('result').style.display = "block";
// تغيير الطول عندما يتم عرض result
document.getElementById('block').style.height = "550px";
// Calculate the tax amount
let taxAmount, totalBeforeTax, totalAfterTax;
if (document.getElementById('yes').checked) {
  // If tax is not included in total
  taxAmount = (totalValue * taxRate) / 100;
  totalBeforeTax = totalValue;
  totalAfterTax = totalValue + taxAmount;
} else {
  // If tax is included in total
  taxAmount = (totalValue / (taxRate + 100)) * taxRate;
  totalBeforeTax = totalValue - taxAmount;
  totalAfterTax = totalValue;
}
// دالة لتصفير النتائج
function resetResults() {
  document.getElementById('result-total').value = 0;
  document.getElementById('result-tax').value = 0;
  document.getElementById('result-totalf').value = 0;
}
// Display the results
document.getElementById('result-total').value = totalBeforeTax.toLocaleString("en" , {maximumFractionDigits: 2}); 
document.getElementById('result-tax').value = taxAmount.toLocaleString("en" , {maximumFractionDigits: 2});
document.getElementById('result-totalf').value = totalAfterTax.toLocaleString("en" , {maximumFractionDigits: 2});

}
//  جعل زر الانتر يعمل كنقر علي الزر
document.addEventListener("keydown", function(event) {
// تحقق إذا كان المفتاح هو Enter (رمزه 13 أو 'Enter')
if (event.key === "Enter") {
  // تنشيط الزر كما لو تم النقر عليه
  document.getElementById("button").click();
}
});




