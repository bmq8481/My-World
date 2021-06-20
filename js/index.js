document.addEventListener('DOMContentLoaded', function() {
    // 毕汪存 start
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
    (function() {
        $('.bwc_video_bottom_lf').hover(function() {
            $(this).children('.btn').stop().fadeIn()
            $(this).children('.mask').stop().slideDown()
        }, function() {
            $(this).children('.btn').stop().fadeOut()
            $(this).children('.mask').stop().slideUp()
        })

        $('.bwc_video_bottom_rt li').hover(function() {
            $(this).children('.btn').stop().fadeOut()
            $(this).children('.mask').stop().slideUp()

        }, function() {
            $(this).children('.btn').stop().fadeIn()
            $(this).children('.mask').stop().slideDown()
        })


        $('.bwc_video_top_rt li').mouseenter(function() {
            $(this).css({
                transition: 'all 2s',
            })
            $(this).addClass('bwc_orange').siblings().removeClass();
            $(this).children().addClass('bwc_fff').parent().siblings().children().removeClass()
                // console.log($(this).index());
            var index = $(this).index()
            $(this).parents('.bwc_video_top').siblings('.bwc_video_bottom').find('.bwc_video_bottom_rt').eq(index).addClass('bwc_show').siblings('.bwc_video_bottom_rt').removeClass('bwc_show')
        })

    })();
    // 毕汪存 end



    // 周梦媛 start
    (function() {
        var header = document.querySelector('.header');
        var fixe = document.querySelector('.zmy_fixed_con');
        var fixed = document.querySelector('.zmy_fixed');
        var top = document.querySelector('.zmy_top');

        var headerTop = top.offsetTop;
        document.addEventListener('scroll', function() {
            if (window.pageYOffset >= headerTop) {
                fixe.style.position = 'fixed';
                fixe.style.display = 'block';
                fixed.style.display = 'none';
            } else {

                fixed.style.display = 'block';
                fixe.style.display = 'none';
            }
        });

        if (window.pageYOffset >= headerTop) {
            fixe.style.position = 'fixed';
            fixe.style.display = 'block';
            fixed.style.display = 'none';
        } else {

            fixed.style.display = 'block';
            fixe.style.display = 'none';
        };

        var playy = document.querySelector('.playy');
        var zmy_video = document.querySelector('.zmy_video');
        var cover = document.querySelector('.cover');
        var videoclose = document.querySelector('.videoclose');
        zmy_video.addEventListener('click', function() {
            cover.style.display = 'block';
        });
        playy.addEventListener('click', function() {
            cover.style.display = 'block';
        });
        videoclose.addEventListener('click', function() {
            cover.style.display = 'none';
        });

        // var login = document.querySelector('.button .erweima .login');
        var zmy_wen = document.querySelector('.zmy_wen');
        var covers = document.querySelector('.covers');
        var zhucclose = document.querySelector('.zhucclose');
        zmy_wen.addEventListener('click', function() {
            covers.style.display = 'block';
        });
        zhucclose.addEventListener('click', function() {
            covers.style.display = 'none';
        });

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
    })();

    // 周梦媛 end


    // 周汉超 start
    (function() {
        $('.news-head').on('mouseenter', 'li', function(event) {
            $(this).addClass('on').siblings().removeClass('on')
                // console.log($(this).index());
            var index = $(this).index()


            // $('.news-item ul').eq(index).show().siblings().hide()

            var ll = $('.news-item ul').width()
                // console.log(ll);
            $('.news-item').animate({
                left: -index * ll
            }, 400)
        })
    })();
    (function() {
        $('.ewm-tab').on('mouseenter', 'a', function() {
            $(this).addClass('on').siblings().removeClass('on')
            if ($(this).index() === 1) {
                $('.ewm-img').animate({
                    left: -120
                }, 500);
            } else {
                $('.ewm-img').animate({
                    left: 0
                }, 500);
            }

        })

    })();
    // 周汉超 end


    // 毕明强 start
    (function() {
        // 小白起步切换栏
        $('.m-head').on('mouseover', 'a', function() {
            $(this).addClass('m-background').siblings('a').removeClass('m-background');
            $(".m-gs").eq($(this).index()).show().siblings(".m-gs").hide();
        });
        // 游戏图鉴切换栏
        $('.m-tempWrap').on('click', 'a', function() {
            $(this).addClass('m-xiahuaxian').siblings('a').removeClass('m-xiahuaxian');
            $('.m-tujian').eq($(this).index()).show().siblings('.m-tujian').hide();
            // 食物
            if ($(this).index() !== 0) {
                $('.m-sunNav2').children().eq(0).addClass('m-sunNav_border').siblings('a').removeClass('m-sunNav_border');
                $('.m-tujian_left1').eq(0).show().siblings('.m-tujian_left1').hide();
            }
            // 生物
            if ($(this).index() !== 1) {
                $('.m-tujian_left2').eq(0).show().siblings('.m-tujian_left2').hide();
                $('.m-sunNav1').children().eq(0).addClass('m-sunNav_border').siblings('a').removeClass('m-sunNav_border');
                $('.m-sideNav').children().eq(0).addClass('yanse').siblings('a').removeClass('yanse');
                $('.m-sidecang').eq(0).show().siblings('.m-sidecang').hide();
            }
            // 植物
            if ($(this).index() !== 2) {
                $('.m-tujian_left3').eq(0).show().siblings('.m-tujian_left3').hide();
                $('.m-sunNav3').children().eq(0).addClass('m-sunNav_border').siblings('a').removeClass('m-sunNav_border');
            }
            // 道具
            if ($(this).index() !== 3) {
                $('.m-tujian_left4').eq(0).show().siblings('.m-tujian_left4').hide();
                $('.m-sunNav4').children().eq(0).addClass('m-sunNav_border').siblings('a').removeClass('m-sunNav_border');
            }
            // 装备
            if ($(this).index() !== 4) {
                $('.m-tujian_left5').eq(0).show().siblings('.m-tujian_left5').hide();
                $('.m-sunNav5').children().eq(0).addClass('m-sunNav_border').siblings('a').removeClass('m-sunNav_border');
            }
            // 矿物
            if ($(this).index() !== 5) {
                $('.m-tujian_left6').eq(0).show().siblings('.m-tujian_left6').hide();
                $('.m-sunNav6').children().eq(0).addClass('m-sunNav_border').siblings('a').removeClass('m-sunNav_border');
            }
            // 方块
            if ($(this).index() !== 6) {
                $('.m-tujian_left7').eq(0).show().siblings('.m-tujian_left7').hide();
                $('.m-sunNav7').children().eq(0).addClass('m-sunNav_border').siblings('a').removeClass('m-sunNav_border');
            }
        });


        // 图鉴内部小图片详细介绍切换

        $('.m-sunNav').on('click', 'a', function() {
            $(this).addClass('m-sunNav_border').siblings('a').removeClass('m-sunNav_border');
        });
        // 图鉴内部小图片详细介绍切换
        $('.m-sunNav2').on('click', 'a', function() {
            $('.m-tujian_left1').eq($(this).index()).show().siblings('.m-tujian_left1').hide();
        });
        $('.m-sunNav1').on('click', 'a', function() {
            $('.m-tujian_left2').eq($(this).index()).show().siblings('.m-tujian_left2').hide();
        });
        $('.m-sunNav3').on('click', 'a', function() {
            $('.m-tujian_left3').eq($(this).index()).show().siblings('.m-tujian_left3').hide();
        });
        $('.m-sunNav4').on('click', 'a', function() {
            $('.m-tujian_left4').eq($(this).index()).show().siblings('.m-tujian_left4').hide();
        });
        $('.m-sunNav5').on('click', 'a', function() {
            $('.m-tujian_left5').eq($(this).index()).show().siblings('.m-tujian_left5').hide();
        });
        $('.m-sunNav6').on('click', 'a', function() {
            $('.m-tujian_left6').eq($(this).index()).show().siblings('.m-tujian_left6').hide();
        });
        $('.m-sunNav7').on('click', 'a', function() {
            $('.m-tujian_left7').eq($(this).index()).show().siblings('.m-tujian_left7').hide();
        });

        // 生物内部切换栏
        $('.m-sideNav').on('click', 'a', function() {
            $('.m-sidecang').eq($(this).index()).show().siblings('.m-sidecang').hide();
            $(this).addClass('yanse').siblings('a').removeClass('yanse');

            // BOSS
            if ($(this).index() !== 0) {
                $('.m-sunNav21').children().eq(0).addClass('m-sunNav_border').siblings('a').removeClass('m-sunNav_border');
                $('.m-tujian_left21').eq(0).show().siblings('.m-tujian_left21').hide();
            }
            // 被动型
            if ($(this).index() !== 1) {
                $('.m-sunNav22').children().eq(0).addClass('m-sunNav_border').siblings('a').removeClass('m-sunNav_border');
                $('.m-tujian_left22').eq(0).show().siblings('.m-tujian_left22').hide();
            }
            // 攻击型
            if ($(this).index() !== 2) {
                $('.m-sunNav23').children().eq(0).addClass('m-sunNav_border').siblings('a').removeClass('m-sunNav_border');
                $('.m-tujian_left23').eq(0).show().siblings('.m-tujian_left23').hide();
            }
            // 可驯服
            if ($(this).index() !== 3) {
                $('.m-sunNav24').children().eq(0).addClass('m-sunNav_border').siblings('a').removeClass('m-sunNav_border');
                $('.m-tujian_left24').eq(0).show().siblings('.m-tujian_left24').hide();
            }
            // 效用型
            if ($(this).index() !== 4) {
                $('.m-sunNav25').children().eq(0).addClass('m-sunNav_border').siblings('a').removeClass('m-sunNav_border');
                $('.m-tujian_left25').eq(0).show().siblings('.m-tujian_left25').hide();
            }
            // 中立型
            if ($(this).index() !== 5) {
                $('.m-sunNav26').children().eq(0).addClass('m-sunNav_border').siblings('a').removeClass('m-sunNav_border');
                $('.m-tujian_left26').eq(0).show().siblings('.m-tujian_left26').hide();
            }
        });

        // 生物内部小图片详细介绍切换
        $('.m-sunNav1').on('click', 'a', function() {
            $(this).addClass('m-sunNav_border').siblings('a').removeClass('m-sunNav_border');
        });

        $('.m-sunNav21').on('click', 'a', function() {
            $('.m-tujian_left21').eq($(this).index()).show().siblings('.m-tujian_left21').hide();
        });
        $('.m-sunNav22').on('click', 'a', function() {
            $('.m-tujian_left22').eq($(this).index()).show().siblings('.m-tujian_left22').hide();
        });
        $('.m-sunNav23').on('click', 'a', function() {
            $('.m-tujian_left23').eq($(this).index()).show().siblings('.m-tujian_left23').hide();
        });
        $('.m-sunNav24').on('click', 'a', function() {
            $('.m-tujian_left24').eq($(this).index()).show().siblings('.m-tujian_left24').hide();
        });
        $('.m-sunNav25').on('click', 'a', function() {
            $('.m-tujian_left25').eq($(this).index()).show().siblings('.m-tujian_left25').hide();
        });
        $('.m-sunNav26').on('click', 'a', function() {
            $('.m-tujian_left26').eq($(this).index()).show().siblings('.m-tujian_left26').hide();
        });



    })();

    // 毕明强 end


    // 胡必稳 start
    window.addEventListener('DOMContentLoaded', function() {
        var right = document.querySelector('.H-right');
        var ul = document.querySelector('.h-ul');
        var left = document.querySelector('.H-left')
        right.addEventListener('click', function() {
            var offleft = ul.offsetLeft;
            if (Math.abs(offleft) >= 480) {
                offleft = 480
                ul.style.left = -offleft + 'px';
                right.removeEventListener('mouseenter', yd);
            }
            juli = Math.abs(offleft) + 240;


            ul.style.left = -juli + 'px';
            if (offleft <= 0) {
                console.log(1111111);
                left.addEventListener('mouseenter', ly)
            }
        })

        function yd() {
            right.className = 'H-right h-right';
        }
        right.addEventListener('mouseenter', yd);


        right.addEventListener('mouseout', function() {
            right.className = 'H-right';
        });

        function ly() {
            left.className = 'H-left h-left';
        }
        left.addEventListener('mouseout', function() {
            left.className = 'H-left';
        });
        left.addEventListener('mouseenter', ly);

        left.addEventListener('click', function() {
            var offleft = ul.offsetLeft;
            if (offleft >= 0) {
                offleft = 0;
                ul.style.left = offleft + 'px';
                left.removeEventListener('mouseenter', ly);
                return
            }
            var juli = offleft + 240;
            ul.style.left = juli + 'px';
            if (Math.abs(offleft) <= 480) {
                right.addEventListener('mouseenter', yd)
            }
        });
    });
    $(function() {
        $('.left-ul').children().on('click', function() {
            $(this).addClass('H-red').siblings().removeClass('H-red');
            var index = $(this).index();
            console.log($('H-content').find('right').find('ul'));
            $('.H-content').find('.right').find('ul').eq(index).show().siblings().hide()
        })

        $('.H-content .right ul').children().on('mouseover', function() {
            $(this).find('.zezao').stop().slideDown(100);
            $(this).find('.ai').stop().slideDown(50);
        })
        $('.H-content .right ul').children().on('mouseout', function() {
            $(this).find('.zezao').stop().slideUp(100);
            $(this).find('.ai').stop().slideUp(50);
        })

    })

    // 胡必稳 end



















})