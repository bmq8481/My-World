window.onload = function() {
    var reguser = /^[\w|u4e00-\u9fa5|\w]{2,8}$/;
    var regmima = /^\w{8,12}$/
    var regqunmima = /^\w{8,12}$/
    var regyou = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
    var regkao = /^1[3|4|5|7|8]\d{9}$/;
    var user = document.querySelector('#user');
    var mima = document.querySelector('#mima');
    var qunmima = document.querySelector('#qunmina');
    var you = document.querySelector('#you');
    var kao = document.querySelector('#kao');
    regexp(user, reguser)
    regexp(mima, regmima)
    regexp(qunmima, regqunmima)
    regexp(you, regyou)
    regexp(kao, regkao)

    function regexp(ele, reg) {
        ele.onblur = function() {

            if (reg.test(this.value)) {
                // console.log('正确的');
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
            } else {
                // console.log('不正确');
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入 ';
            }
        }
    };

    // qunmima.onblur = function() {
    //     if (mima.value == this.value) {
    //         this.nextElementSibling.className = 'success';
    //         this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
    //     } else {
    //         this.nextElementSibling.className = 'error';
    //         this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不一致';

    //     }
    // }
    qunmima.onblur = function() {
            if (qunmima.value === mima.value) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确'
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>你输入的格式不对'
            }
        }
        // regxp(pwd, regpwd);
    mima.onblur = function() {
        if (regmima.test(this.value)) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确'
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>你输入的格式不对'
        }
        if (mima.value != '' && qunmima.value != '') {
            if (qunmima.value === mima.value) {
                qunmima.nextElementSibling.className = 'success';
                qunmima.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确'
            } else {
                qunmima.nextElementSibling.className = 'error';
                qunmima.nextElementSibling.innerHTML = '<i class="error_icon"></i>你输入的格式不对'
            }
        }
    }

};
$(function() {
    var flag = 0;

    $('.h-ico ').on('click', 'span', function() {
        if (flag == 0) {
            $('.h-ico span').html('').html(`<i class="h-kai iconfont icon-yanjing"></i>`);
            $('.hh-mima').find('input').prop('type', 'text');
            $('.hh-qunmina').find('input').prop('type', 'text');
            flag = 1
        } else {
            $('.h-ico span').html('').html(`<i class="h-kai iconfont icon-yanjing-bi"></i>`)
            $('.hh-mima').find('input').prop('type', 'password');
            $('.hh-qunmina').find('input').prop('type', 'password');
            flag = 0
        }

    })
    $('.hh-register button').on('click', function() {
        if ($('.hh-fuw').find('input:checked').prop('checked') && $('.hh-user').find('input').val() != '' && $('.hh-mima').find('input').val() != '' && $('.hh-qunmina').find('input').val() != '' && $('.hh-you').find('input').val() != '' && $('.hh-kao').find('input').val() != '') {
            location.href = './h-start.html';
        } else {
            alert('请把内容输入完全')
        }
        var data = { you: $("#you").val(), mima: $('#mima').val() }
            // val local =localStorage.setItem.JSon.stringify();
        setlocal(data);

        function setlocal(data) {
            localStorage.setItem('name', JSON.stringify(data))
        }


    })


})