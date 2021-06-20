(function() {
    var as = document.querySelector('.bwc_subnav').querySelectorAll('a');
    var divs = document.querySelectorAll('.bwc_box');
    for (var i = 0; i < as.length; i++) {
        var index = i * 250;
        as[i].style.backgroundPosition = '-' + index + 'px 0';
        (function(i) {
            as[i].setAttribute('data', i);
            as[i].addEventListener("mouseenter", function() {
                var data = this.getAttribute('data');
                // console.log(data);
                var a = data * 250
                    // console.log(a);
                this.style.backgroundPosition = `-${a}px -54px`;

            });

            var index = i * 250;
            as[i].addEventListener("mouseleave", function() {
                this.style.backgroundPosition = '-' + index + 'px 0';
            })
            as[i].addEventListener("click", function() {
                for (var i = 0; i < as.length; i++) {
                    as[i].className = ''
                    divs[i].style.display = "none"

                }
                for (var j = 0; j < as.length; j++) {

                }
                var data = this.getAttribute('data');
                divs[data].style.display = "block";

                if (data == 0) {
                    this.className = 'bwc_red';
                } else if (data == 1) {
                    this.className = 'bwc_red1';
                } else if (data == 2) {
                    this.className = 'bwc_red2';
                } else if (data == 3) {
                    this.className = 'bwc_red3';
                }
            })
        })(i);
    };


})();
// (function() {
//     console.log();
//     $('.btns #btns').on('click', function() {

//         location.href = './h-start.html';

//     })
// })()

// 注册

// var btns = document.querySelector('#btns');
// var covers = document.querySelector('.covers');
// var zhucclose = document.querySelector('.zhucclose');
// btns.addEventListener('click', function() {
//     covers.style.display = 'block';
// })
// zhucclose.addEventListener('click', function() {
//     covers.style.display = 'none';
// });

// // 注册校验
// var regemail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
// var regpwd = /^[a-zA-Z0-9_-]{6,16}$/gi;
// var emailval = document.querySelector('.contain').querySelector('#check1');
// var pwdval = document.querySelector('.contain').querySelector('#check2');
// var e_eamil = document.querySelector('.e-eamil');
// var e_pwd = document.querySelector('.e-pwd')

// emailval.onblur = function() {
//     if (regemail.test(this.value)) {
//         e_eamil.style.display = 'none';

//     } else {
//         e_eamil.style.display = 'block';
//         e_eamil.innerHTML = '<span></span> 帐号须由字母开头'

//     }
// };

// pwdval.onblur = function() {
//     if (regpwd.test(this.value)) {
//         e_eamil.style.display = 'none';

//     } else {
//         e_eamil.style.display = 'block';
//         e_eamil.innerHTML = '<span></span> 密码须由8-16个字符组成，区分大小写'
//     }
// };