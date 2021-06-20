document.addEventListener('DOMContentLoaded', function() {

    // 头部
    (function() {
        var li = document.querySelector('.bwc_col');
        var a = li.querySelector('a');
        var ul = document.querySelector('.bwc_scroll');

        var index = 0;

        li.addEventListener('mouseover', function() {
            this.children[0].style.display = 'none'
            a.style.display = 'block'
        });
        li.addEventListener('mouseout', function() {
            this.children[0].style.display = 'block'
            a.style.display = 'none'
        });
        setInterval(function() {
            index++
            ul.style.top = -index * 52 + 'px';
            ul.style.transition = 'all 1s'

        }, 4000);
        ul.addEventListener('transitionend', function() {
            // 无缝滚动
            if (index >= 2) {
                index = 0;
                ul.style.transition = 'none';
                ul.style.top = -index * 52 + 'px'
            }
        });
        var as = document.querySelector('.bwc_hot');
        as.addEventListener('mouseenter', function() {
            this.style.color = '#ca2e69';
            this.children[0].style.display = 'none';
            this.children[1].style.display = 'block'
        });
        as.addEventListener('mouseleave', function() {
            this.style.color = '#626262';
            this.children[0].style.display = 'block';
            this.children[1].style.display = 'none'
        });
        $(function() {
            $('.bwc_first').hover(function() {
                $(this).children('.bwc_nav_lf').stop().slideToggle(300)
            })
            $('.bwc_last').hover(function() {
                $(this).children('.bwc_nav_rg').stop().slideToggle(300)
            })
        });

    })();

    (function() {
        // 轮播图
        certifySwiper = new Swiper('#certify .swiper-container', {
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            loopedSlides: 5,
            autoplay: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                //clickable :true,
            },
            on: {
                progress: function(progress) {
                    for (i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i);
                        var slideProgress = this.slides[i].progress;
                        modify = 1;
                        if (Math.abs(slideProgress) > 1) {
                            modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                        }
                        translate = slideProgress * modify * 260 + 'px';
                        scale = 1 - Math.abs(slideProgress) / 5;
                        zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                        slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                        slide.css('zIndex', zIndex);
                        slide.css('opacity', 1);
                        if (Math.abs(slideProgress) > 3) {
                            slide.css('opacity', 0);
                        }
                    }
                },
                setTransition: function(transition) {
                    for (var i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i);
                        slide.transition(transition);
                    }

                }
            }

        })

        // 轮播图结束

        // 播放视频
        var play = document.querySelector('.play').querySelector('.p-btn');
        var cover = document.querySelector('.cover');
        var videoclose = document.querySelector('.videoclose');
        play.addEventListener('click', function() {
            cover.style.display = 'block';
        });

        videoclose.addEventListener('click', function() {
            cover.style.display = 'none';
        });

        // 注册

        var login = document.querySelector('.button .erweima .login');
        // console.log(login);
        var loginl = document.querySelector('.left p');
        // console.log(loginl);
        var covers = document.querySelector('.covers');
        var zhucclose = document.querySelector('.zhucclose');
        login.addEventListener('click', function() {
            covers.style.display = 'block';
        })
        zhucclose.addEventListener('click', function() {
            covers.style.display = 'none';
        });

        loginl.addEventListener('click', function() {
            covers.style.display = 'block';
        })
        zhucclose.addEventListener('click', function() {
            covers.style.display = 'none';
        });

        // 注册校验
        var regemail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        var regpwd = /^[a-zA-Z0-9_-]{6,16}$/gi;
        var emailval = document.querySelector('.contain').querySelector('#check1');
        var pwdval = document.querySelector('.contain').querySelector('#check2');
        var e_eamil = document.querySelector('.e-eamil');
        var e_pwd = document.querySelector('.e-pwd')

        emailval.onblur = function() {
            if (regemail.test(this.value)) {
                e_eamil.style.display = 'none';

            } else {
                e_eamil.style.display = 'block';
                e_eamil.innerHTML = '<span></span> 帐号须由字母开头'

            }
        };

        pwdval.onblur = function() {
            if (regpwd.test(this.value)) {
                e_eamil.style.display = 'none';

            } else {
                e_eamil.style.display = 'block';
                e_eamil.innerHTML = '<span></span> 密码须由8-16个字符组成，区分大小写'
            }
        };

        // 左右隐藏
        var left = document.querySelector('.left');
        var closed = left.querySelector('.closed');
        var right = document.querySelector('.right');
        var close = document.querySelector('.close');

        document.addEventListener('scroll', function() {
            if (window.pageYOffset >= 800) {
                $(".left").stop().animate({
                    left: 20,
                }, 200);

                $(".right").stop().animate({
                    right: 20,
                }, 200);
            } else {
                $(".left").stop().animate({
                    left: -220,
                }, 200);
                $(".right").stop().animate({
                    right: -220,
                }, 200);

            }
        });
        closed.addEventListener('click', function() {
            $(".left").stop().animate({
                left: -220,
            }, 200);
        });
        close.addEventListener('click', function() {
            $(".right").stop().animate({
                right: -220,
            }, 200);
        });
    })();



})