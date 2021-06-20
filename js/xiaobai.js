(function() {
    var li = document.querySelector('.bwc_col');
    var a = li.querySelector('a');
    var ul = document.querySelector('.bwc_scroll');
    // var lis = ul.querySelector('li')
    var index = 0;
    // var first = ul.children[0].cloneNode(true);
    // ul.appendChild(first);

    li.addEventListener('mouseover', function() {
        this.children[0].style.display = 'none'
        a.style.display = 'block'
    })
    li.addEventListener('mouseout', function() {
        this.children[0].style.display = 'block'
        a.style.display = 'none'
    })
    setInterval(function() {
        index++
        ul.style.top = -index * 52 + 'px';
        ul.style.transition = 'all 1s'

    }, 4000)
    ul.addEventListener('transitionend', function() {
        // 无缝滚动
        if (index >= 2) {
            index = 0;
            ul.style.transition = 'none';
            ul.style.top = -index * 52 + 'px'
        }
    })
    var as = document.querySelector('.bwc_hot');
    as.addEventListener('mouseenter', function() {
        this.style.color = '#ca2e69';
        this.children[0].style.display = 'none';
        this.children[1].style.display = 'block'
    })
    as.addEventListener('mouseleave', function() {
        this.style.color = '#626262';
        this.children[0].style.display = 'block';
        this.children[1].style.display = 'none'
    })

    $('.bwc_first').hover(function() {
        $(this).children('.bwc_nav_lf').stop().slideToggle(300)
    })
    $('.bwc_last').hover(function() {
        $(this).children('.bwc_nav_rg').stop().slideToggle(300)
    })
})();

window.onload = function() {
    var header = document.querySelector('.header');
    var fixe = document.querySelector('.zmy_fixed_con')
    var fixed = document.querySelector('.zmy_fixed')
    var top = document.querySelector('.zmy_top')

    var headerTop = top.offsetTop;
    document.addEventListener('scroll', function() {
        if (window.pageYOffset >= headerTop) {
            fixe.style.position = 'fixed'
            fixe.style.display = 'block'
            fixed.style.display = 'none'
        } else {

            fixed.style.display = 'block'
            fixe.style.display = 'none'
        }
    })
    if (window.pageYOffset >= headerTop) {
        fixe.style.position = 'fixed'
        fixe.style.display = 'block'
        fixed.style.display = 'none'
    } else {

        fixed.style.display = 'block'
        fixe.style.display = 'none'
    }
};

(function() {
    $('.m-tab').on('mouseover', 'a', function() {
        $(this).addClass('on').siblings('a').removeClass('on');
    });


    $('.m-show').animate({ right: -54 }, 500, function() {
        $('.side').show().animate({ right: 0 }, 500);
    });
    $('.close').on('click', function() {
        $('.side').animate({ right: -350 }, 500, function() {
            $('.m-show').animate({ right: 0 }, 500, )
        });
    });
    $('.m-show').on('click', function() {
        $(this).animate({ right: -54 }, 500, function() {
            $('.side').animate({ right: 0 }, 500);
        })
    });




    // $('.m-show').animate({ right: -54 }, 500, function() {
    //     // $(this).hide();
    //     $('.side').show().animate({ right: 0 }, 500);
    //     $(this).hide();
    // })
    // $('.close').on('click', function() {
    //     $('.side').animate({ right: -270 }, 500, function() {
    //         $(this).hide();
    //         $('.m-show').show()
    //         $('.m-show').animate({ right: 0 }, 500, )
    //     });
    // });
    // $('.m-show').on('click', function() {
    //     $(this).animate({ right: -54 }, 500, function() {
    //         $(this).hide();
    //         $('.side').show().animate({ right: 0 }, 500);
    //     })
    // })

})()