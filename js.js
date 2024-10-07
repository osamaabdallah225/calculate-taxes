// تحويل الأزرار إلى مصفوفة
let arr = Array.from(document.getElementsByClassName('main-button'));     // الكلاس الاساسي main-button
let mainContent = document.querySelectorAll('.main-content1, .main-content2, .main-content3, .main-content4, .main-content5, .main-content6, .main-content7, .main-content8, .main-content9');
// الكاسات الاساسية اللي بداخل كلاس main-button
// إخفاء جميع العناصر عند فتح البرنامج  
function hideAllExceptFeatures() {
    mainContent.forEach((el) => {
        el.style.display = 'none';
    });
    
}

// إعادة تعيين تنسيقات الأزرار إلى حالتها الافتراضية
function resetButtonStyles() {
    arr.forEach((el) => {
        el.style.backgroundColor = '';  // إعادة لون الخلفية للحالة الافتراضية
        el.style.boxShadow = '';  // إزالة الظل
        
    });
}

// إخفاء جميع العناصر النصية
function hideAll() {
    mainContent.forEach((el) => {
        el.style.display = 'none';
    });
}




// إضافة حدث تحميل الصفحة
window.addEventListener('DOMContentLoaded', hideAllExceptFeatures); // إخفاء جميع العناصر features عند تحميل الصفحة

// عند الضغط علي اي كلاس من الكلاسات الاساسية 
arr.forEach((el, index) => {
    
    el.addEventListener('click', () => {
        hideAll();  // إخفاء جميع العناصر
        resetButtonStyles();  // إعادة تنسيق الأزرار
        document.getElementById("menuIcon").style.display = 'block';
       
        // إظهار العنصر المطلوب بناءً على الزر
        document.querySelector(`.main-content${index + 1}`).style.display = 'block';
        el.style.backgroundColor = '#005672';
        el.style.boxShadow = '0 0 10px #008CB9';
        // checkUpdateNumber()
        checkUpdateNumber()   // دالة تشيك علي التحديث

        resetProgressBar()   // تصفير شريط التقدم
        resetCounters() // تصفير شريط التقدم
    });  
});






// *******************************************

//  اعادة العدادات الخاصة بي شريط التقدم



// دالة لإعادة تعيين شريط التقدم
function resetProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const percentageDisplay = document.getElementById("percentage");
    
    document.getElementById("progress-container").style.display = 'none';  // إخفاء الحاوية إذا كانت ظاهرة
    progressBar.style.width = '0%';  // إعادة عرض شريط التقدم إلى 0%
    
    
    // إعادة تعيين العدادات
    zeroCounts = Array.from(buttonDivs).map(() => 0); // إعادة تعيين العدادات لكل div
}

// دالة لإعادة تعيين العدادات وإظهار العناصر المخفية
function resetCounters() {
    button.forEach((el, index) => {
    el.innerText = originalCounts[index]; // إعادة العداد إلى قيمته الأصلية
       
    });
}


// ********************************

// شريط progress bar

const progressBar = document.getElementById('progress-bar');
// const percentageDisplay = document.getElementById('percentage');

// الحصول على جميع الأزرار في كل div
const buttonDivs = document.querySelectorAll('.main-content1, .main-content2, .main-content3 , .main-content4, .main-content5, .main-content6, .main-content7, .main-content8, .main-content9');

// إعداد مصفوفة لحفظ عدد الأزرار التي وصلت إلى صفر في كل div
let zeroCounts = Array.from(buttonDivs).map(() => 0);
let totalButtonsInDiv = Array.from(buttonDivs).map(div => div.querySelectorAll('.button-sub').length);


buttonDivs.forEach((div, divIndex) => {
    const buttons = div.querySelectorAll('.button-sub');

    // إضافة حدث عند النقر على الأزرار في هذا div
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            document.getElementById("progress-container").style.display = 'block';
            // تقليل قيمة العداد عند النقر على الزر
            let value = parseInt(button.innerText);
            if (value > 0) {
                value--;
                button.innerText = value; // تحديث قيمة الزر المعروضة

                // إذا وصلت القيمة للصفر، نزيد العداد
                if (value === 0) {
                    zeroCounts[divIndex]++; // زيادة العد في هذا div
                    calculatePercentage(divIndex); // حساب النسبة المئوية لهذا div
                }
            }
        });
    });
});

// حساب النسبة المئوية بناءً على عدد الأزرار التي وصلت إلى صفر في هذا div
function calculatePercentage(divIndex) {
    const percentage = (zeroCounts[divIndex] / totalButtonsInDiv[divIndex]) * 100; // حساب النسبة

    // تحديث شريط التقدم
    progressBar.style.width = percentage + '%'; // ضبط عرض شريط التقدم
    // percentageDisplay.textContent = Math.round(percentage) + '%'; // عرض النسبة المئوية
}

// إعادة عرض شريط التقدم إلى 0%

    


// *******************************
// تخزين الأزرار الخاصة بالعدادات
let button = Array.from(document.getElementsByClassName("button-sub"));

// تخزين القيم الأصلية للعدادات
let originalCounts = [];

// حفظ القيمة الأصلية لكل عداد عند تحميل الصفحة
button.forEach((el) => {
    originalCounts.push(parseInt(el.innerText)); // حفظ القيمة الأصلية للعداد

    el.addEventListener('click', () => {
      
        let count = parseInt(el.innerText);  // أخذ القيمة الحالية
        if (count > 0) {
            el.innerText = count;  // تحديث النص

        }

   
        // إخفاء العنصر إذا وصل العداد إلى 0
        if (count <= 0) {
    el.parentNode.style.transition = 'transform 1.3s ease-out', 'opacity 1.3s ease'; // إضافة انتقال سلس
    el.parentNode.style.transform = 'translateX(-400px) '; // تحريك العنصر لأعلى وتكبيره
    el.parentNode.style.opacity = '.4 '; // تحريك العنصر لأعلى وتكبيره


    // إخفاء العنصر بعد انتهاء الانتقال
    setTimeout(() => {
        el.parentNode.style.display = 'none';  // إخفاء العنصر بعد 0.5 ثانية
    }, 800); // نفس مدة الانتقال
           

        }

        el.style.backgroundColor = count > 0 ? "green" : ""; // تغيير اللون بناءً على القيمة
      
    });
    

});

// دالة لإعادة تعيين العدادات وإظهار العناصر المخفية الخاصة بالازرار الداخلية
function resetCounters() {
    button.forEach((el, index) => {
        el.innerText = originalCounts[index]; // إعادة العداد إلى قيمته الأصلية
        el.style.backgroundColor = "";  // إعادة لون الخلفية إلى الحالة الافتراضية
        el.parentNode.style.display = 'block';  // إظهار العنصر المخفي
        el.parentNode.style.transition = "none"; // إضافة انتقال سلس
       el.parentNode.style.transform = "none"; // تحريك العنصر لأعلى وتكبيره
       el.parentNode.style.opacity = "";
    
    });
}

// إضافة زر لإعادة تعيين العدادات وإظهار العناصر المخفية عند الضغط على الأزرار الرئيسية
const restoreButton = document.querySelectorAll(".main-button"); 
restoreButton.forEach((el) => {
    el.addEventListener('click', resetCounters);  // عند الضغط على أي زر رئيسي، يتم إعادة تعيين العدادات وإظهار العناصر المخفية
});






// تعريف الأزرار والعدادات-- الجزء الخاص بالتسابيح

const buttons = document.querySelectorAll('.button-all'); // جميع الأزرار
const spans = document.querySelectorAll('.block-all'); // جميع العناصر التي ستعرض العدادات
let counts = Array(buttons.length).fill(0); // مصفوفة لتخزين العدادات لكل زر
let totalCount = 0; // العد الكلي

// دالة لزيادة العداد عند النقر على زر
function handleButtonClick(index) {
    counts[index]++; // زيادة العداد الخاص بالزر
    totalCount++; // زيادة العد الكلي

    // تحديث النصوص في العناصر المناسبة
    spans[index].innerText = counts[index];
    spans[spans.length - 1].innerText = totalCount; // تحديث مجموع التسبيحات

    // تغيير لون الزر
    buttons[index].style.backgroundColor = "#4CB050";

    // تعطيل الزر إذا وصل إلى 100
    if (counts[index] >= 100) {
        buttons[index].style.backgroundColor = "#958774"; // تغيير اللون
        // buttons[index].disabled = true; // تعطيل الزر
    }
}

// إضافة الأحداث لكل زر
buttons.forEach((button, index) => {
    button.addEventListener("click", () => handleButtonClick(index));
});

// دالة لإعادة القيم إلى حالتها الافتراضية
document.getElementById("icon").addEventListener("click", function() {
    counts.fill(0); // إعادة جميع العدادات إلى 0
    totalCount = 0; // إعادة العد الكلي إلى 0

    // إعادة تعيين النصوص والألوان
    spans.forEach((span, index) => {
        span.innerText = ""; // إعادة النص إلى فارغ
        buttons[index].style.backgroundColor = "#FF9700"; // إعادة لون الزر إلى الافتراضي
        buttons[index].disabled = false; // إعادة تفعيل الزر
    });

    // تحديث مجموع التسبيحات
    spans[spans.length - 1].innerText = ""; // إعادة مجموع التسبيحات إلى فارغ
    buttons[buttons.length - 1].style.backgroundColor = "#018BBA"; // إعادة لون الزر الافتراضي
});


//  الاعدادت


let fontSize = localStorage.getItem("fontSize") ? parseInt(localStorage.getItem("fontSize")) : 25; // استعادة الحجم المحفوظ أو تعيين الحجم الافتراضي

// استعادة حجم الخط عند تحميل الصفحة
window.addEventListener("load", function() {
    let elements = Array.from(document.getElementsByTagName("p")); // الحصول على جميع عناصر <p>
    elements.forEach(el => {
        el.style.fontSize = fontSize + "px"; // تعيين حجم الخط المحفوظ
    });

        // التحقق من تعطيل الأزرار بعد التغيير
    checkButtonState();
});



// زر التكبير
document.getElementById("plus").addEventListener("click", function() {
    if (fontSize < 60) { // تحقق من عدم تجاوز الحد الأقصى
        fontSize += 2; // زيادة حجم الخط بمقدار 2
        let elements = Array.from(document.getElementsByTagName("p")); // الحصول على جميع عناصر <p>

        // تعديل حجم الخط لكل عنصر <p>
        elements.forEach(el => {
            el.style.fontSize = fontSize + "px";
        });

        // حفظ حجم الخط في Local Storage
        localStorage.setItem("fontSize", fontSize);
        document.getElementById("seeFont").innerHTML = fontSize + "px";

        // التحقق من تعطيل الأزرار بعد التغيير
        checkButtonState();
    }
});

// زر التصغير
document.getElementById("minus").addEventListener("click", function() {
    if (fontSize > 16) { // تحقق من عدم تجاوز الحد الأدنى
        fontSize -= 2; // تقليل حجم الخط بمقدار 2
        let elements = Array.from(document.getElementsByTagName("p")); // الحصول على جميع عناصر <p>

        // تعديل حجم الخط لكل عنصر <p> مع التأكد من أن الحجم لا يقل عن 10px
        elements.forEach(el => {
            el.style.fontSize =  fontSize + "px";
        });

        // حفظ حجم الخط في Local Storage
        localStorage.setItem("fontSize", fontSize);
        document.getElementById("seeFont").innerHTML = fontSize + "px";

        // التحقق من تعطيل الأزرار بعد التغيير
        checkButtonState();

    }
});

 document.getElementById("seeFont").innerHTML =   fontSize + "px";
// دالة للتحقق من حالة الأزرار

function checkButtonState() {
    if (fontSize >= 60) {
        document.getElementById("plus").disabled = true; // تعطيل زر التكبير
    } else {
        document.getElementById("plus").disabled = false; // تفعيل زر التكبير
    }

    if (fontSize <= 15) {
        document.getElementById("minus").disabled = true; // تعطيل زر التصغير
    } else {
        document.getElementById("minus").disabled = false; // تفعيل زر التصغير
    }
}



document.getElementById("theme").addEventListener("click", function() {
    document.body.classList.toggle("dark");
})



// استعادة الوضع المحفوظ من LocalStorage أو تعيين الوضع الافتراضي "light"
let themeMode = localStorage.getItem("theme") || "light";

// تطبيق الوضع المحفوظ عند تحميل الصفحة
document.body.className = themeMode;

// تفعيل زر التبديل
document.getElementById("theme").addEventListener("click", function() {
    // تبديل السمة بين "light" و "dark"
    themeMode = themeMode === "light" ? "dark" : "light";
    
    // تطبيق السمة الجديدة
    document.body.className = themeMode;
    
    // حفظ السمة الجديدة في LocalStorage
    localStorage.setItem("theme", themeMode);
});


//  نهاية الاعدادات




if (window.innerWidth  < 600) {

// متغير لتخزين حالة ظهور الأزرار
let areButtonsVisible = false;

// دالة لإخفاء جميع العناصر ما عدا العنصر الذي تم النقر عليه وتثبيته في أعلى الصفحة
function hideOthersAndFix(event) {
    // التكرار عبر جميع العناصر ذات الكلاس 'main-content9'
    const allButtons = document.querySelectorAll('.main-button');
    
    allButtons.forEach((el) => {
        // إخفاء العنصر إذا لم يكن هو العنصر الذي تم النقر عليه
        if (el !== event.target) {
            el.style.display = 'none';

        } else {
            checkUpdateNumber()   // دالة تشيك علي التحديث
            // تثبيت العنصر في أعلى الصفحة
            el.style.position = 'fixed';
            el.style.top = '0'; // لضمان أنه سيكون في أعلى الصفحة
            el.style.left = '50%'; // لضمان أنه سيكون في منتصف العرض
            el.style.transform = 'translateX(-50%)'; // لضمان تموضع العنصر في المنتصف
            el.style.zIndex = '10'; // لجعل العنصر يظهر فوق باقي العناصر
            el.style.margin = '0px 0px 50px 0px';
            el.style.backgroundColor = '';
            el.style.boxShadow = '';
            document.body.style.paddingTop = '60px';
            // el.style.pointerEvents = 'none'; // تعطيل الضغط على الزر المختار في الموبايل فقط

        }
    });
}

// إضافة مستمع للأحداث لجميع العناصر التي تحتوي على الكلاس 'main-button'
document.querySelectorAll('.main-button').forEach((el) => {
    el.addEventListener('click', hideOthersAndFix);
});

// إضافة مستمع لحدث الضغط على زر "menuIcon"
document.getElementById("menuIcon").addEventListener("click", function() {
    // التكرار عبر جميع العناصر التي تحتوي على الكلاس 'main-button'
    const allButtons = document.querySelectorAll('.main-button');
  
    document.body.style.paddingTop = '0px';

        // إذا كانت الأزرار مخفية، نقوم بإظهارها
        allButtons.forEach(function(element) {
            element.style.display = "block"; // إظهار الأزرار
            // إعادة وضع الزر الذي تم تثبيته إلى الوضع العادي (لا يعود إلى الأعلى)
            element.style.position = '';
            element.style.top = '';
            element.style.left = '';
            element.style.transform = '';
            element.style.zIndex = '';
            element.style.margin = '';
            element.style.backgroundColor = '';
            element.style.boxShadow = '';
        });
      

    // تغيير الحالة
    areButtonsVisible = !areButtonsVisible;
});


document.getElementById("menuIcon").addEventListener("click", function() {
    document.getElementById("menuIcon").style.display = 'none';
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // للتأكد من أن التمرير سلس (اختياري)
    });
})
}



// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

 // دالة تشيك علي التحديث
 // كود قديم اللي تحت افضل منه هي نفش الفكرة
// function checkUpdateNumber() {
//     if (localStorage.getItem("update") === null) { 
//         localStorage.setItem("update", 2);
//     } else if (localStorage.getItem("update") !== '2') {
//         alert("تم عمل تحديث للأصدار"); 

//         window.location.reload();
//         localStorage.removeItem('temporaryData');
//         localStorage.setItem("update", 2);
    
//     } 
    

// }

// دالة تشيك علي التحديث

function checkUpdateNumber() {


// تعيين نسخة جديدة للتطبيق في localStorage
const appVersion = '1.0.2';
const savedVersion = localStorage.getItem('appVersion');

if (savedVersion !== appVersion) {
 // مسح البيانات المؤقتة أو الكاش الخاص بالتطبيق فقط (وليس كل localStorage)
    alert("تم عمل تحديث للأصدار");
    window.location.reload();
    localStorage.removeItem('temporaryData');
    localStorage.setItem('appVersion', appVersion);  // تحديث بالقيمة الجديدة للأصدار

}


}


