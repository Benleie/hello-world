var oMusic = document.querySelector('audio');
var oPlay = document.querySelector('#play');
var oPoster = document.querySelector('.poster');
var iTime = document.querySelectorAll('time');
var oTotalProgress = document.querySelector('.player-progress-load');
var oCurrentProgress = document.querySelector('.player-progress-play');
var oProgressDot = document.querySelector('.player-progress-dot');
var oVolMove = document.querySelector('.vol-progress-move');
var oTextInp = document.querySelector('input[type="text"]');
var oSubmit = document.querySelector('.icon-search1');
var oLoopBtn = document.querySelector('.icon-loop');
var bMark = true, randomPlay = true;
var musicArr = [];//存放请求的音乐数据
var n = 0;
var musicPlay = {
    // 初始化
    init : function(){
        $('.filter-img')[0].src = oPoster.src = musicData[n].poster;
        $('.music-title')[0].innerHTML = musicData[n].title;
        $('.music-singer')[0].innerHTML = musicData[n].singer;
        oMusic.src = musicData[n].src;
        $('.music-list li').eq(n).css('color','#31c27c').siblings().removeAttr('style');
    },
    init_default : function(){
        document.onselectstart = function(){ return false; }
        // 初始化音量
        oMusic.volume = oVolMove.offsetWidth / oVolMove.parentNode.offsetWidth;
        // 歌曲列表
        musicData.forEach(function(val){
            $('.music-list').append('<li>' + val.title + ' -- ' + '<i>' + val.singer + '</i>' + '</li>');
        });
    },
    // 音量拖动
    volProgress : function(){
        $('.vol-progress-dot')[0].ontouchstart = function(){
            var This = this;
            document.ontouchmove = function(e){
                var x = e.pageX - This.parentNode.offsetLeft - This.parentNode.parentNode.offsetLeft - 10;
                if( x <= This.parentNode.offsetWidth - 5 && x > -6 ){
                    This.style.left = x + 'px';
                    oVolMove.style.width = This.offsetLeft + 'px';
                    oMusic.volume = oVolMove.offsetWidth / This.parentNode.offsetWidth;
                }
                this.ontouchend = function(){
                    this.ontouchmove = null;
                }
            }
        }
    },
    // 歌曲搜索功能
    searchMusic : function(){
        // ajax请求歌曲
        $.ajax({
            url : 'http://music.baidu.com/',
            dataType : 'jsonp',
            data : {
                type : 1,
                s : oTextInp.value,
                limit : 10
            },
            jsonp : 'callback',
            success : function(data){
                musicArr = [];
                $('.search-list').children('li').remove();
                data.result.songs.forEach(function(val, i){
                    musicArr.push({
                        src : val.audio,
                        title : val.name,
                        singer : val.artists[0].name,
                        poster : val.album.picUrl
                    });
                });
                // 请求成功将歌曲展示出来
                musicArr.forEach(function(val){
                    $('.search-list').append('<li><span>' + val.title + ' -- ' + '<i>' + val.singer + '</i>' + '</span><i class="iconfont icon-plus"></i></li>');
                });
                musicPlay.searchListPlay();
            },
            error : function(){
                console.log('请求数据出错！');
            }
        });
    },
    // 播放功能
    player_function : function(){
        var This = this;
        oMusic.play();
        oPlay.className = 'iconfont icon-pause';
        oPoster.style.animationPlayState = 'running';
        // 监听音乐的时间
        oMusic.addEventListener('timeupdate', function(){
            if( this.ended ){
                n++;
                n %= musicData.length;
                oProgressDot.style.left = oCurrentProgress.style.width = '0px';
                This.init();
                This.player_function();
                bMark = false;
            }
            // 当前时间显示
            iTime[0].innerHTML = conversionTime( this.currentTime );
            iTime[1].innerHTML = conversionTime( oMusic.duration );
            // 当前进度条 = 当前时间 / 总时间 * 总宽度
            oCurrentProgress.style.width = this.currentTime / this.duration * oTotalProgress.offsetWidth + 'px';
            // 小圆点位置改变
            oProgressDot.style.left = parseFloat( oCurrentProgress.style.width ) - 5 + 'px';
        });
    },
    // 播放按钮播放
    init_player : function(){
        if( bMark == true ){
            musicPlay.player_function();
        }else{
            // 暂停
            oMusic.pause();
            oPlay.className = 'iconfont icon-play';
            oPoster.style.animationPlayState = 'paused';
        }
        bMark = !bMark;
    },
    // 移动端拖拽改变进度
    moveProgress : function(){
        oProgressDot.ontouchstart = function(e){
            var x = oTotalProgress.offsetLeft, This = this;
            document.ontouchmove = function(e){
                if( e.pageX - x > -5 && e.pageX - x < oTotalProgress.offsetWidth + 5 ){
                    This.style.left = e.pageX - x + 'px';
                    // 小圆点拖拽改变时间
                    oMusic.currentTime = (e.pageX - x) / oTotalProgress.offsetWidth * oMusic.duration;
                    oCurrentProgress.style.width = This.style.left;
                    iTime[0].innerHTML = conversionTime( oMusic.currentTime );
                }
                this.ontouchend = function(){
                    this.ontouchmove = null;
                }
            }
        }
    },
    // 上一首
    backWard : function(){
        var This = this;
        $('.icon-set-backward')[0].onclick = function(){
            n--;
            if( n < 0 )n = musicData.length - 1;
            This.init();
            musicPlay.player_function();
            bMark = false;
        }
    },
    // 下一首
    forWard : function(){
        var This = this;
        $('.icon-set-forward')[0].onclick = function(){
            n++;
            n %= musicData.length;
            This.init();
            musicPlay.player_function();
            bMark = false;
        }
    },
    // 歌曲固定列表播放
    musicListPlay : function(){
        // 歌曲列表点击播放
        var This = this;
        $('.music-list li').each(function(i){
            $(this).click(function(){
                n = i;
                This.init();
                This.player_function();
                bMark = false;
                $(this).parent().css('transform','translateX(-100%)');
            });
        });
    },
    // 列表播放
    searchListPlay : function(){
        var This = this;
        // 搜索框列表点击播放
        $('.search-list li span').each(function(i){
        // 搜索框列表播放
            $(this).click(function(){
                $('.music-list').children('li').remove();
                $('.search-list').children().remove();
                musicData.push(musicArr[i]);
                musicData.forEach(function(val){
                    $('.music-list').append('<li><span>' + val.title + ' -- ' + '<i>' + val.singer + '</i>' + '</span></li>');
                });
                n = $('.music-list li').length - 1;
                This.init();
                This.player_function();
                This.musicListPlay();
                bMark = false;
            })
            // 搜索框点击加号添加到播放列表
            .siblings('.icon-plus').click(function(){
                $('.music-list').children('li').remove();
                musicData.push(musicArr[i]);
                musicData.forEach(function(val){
                    $('.music-list').append('<li><span>' + val.title + ' -- ' + '<i>' + val.singer + '</i>' + '</span></li>');
                });
                This.musicListPlay();
            });
        });
        // 打开歌曲列表
        $('.icon-menu-list1').click(function(){
            $('.music-list').css('transform','translateX(0)');
            $(oTextInp).val('');
            $('.search-list').children().remove();
        });
        // 关闭歌曲列表
        $('.music-list .icon-close1').click(function(){
            $(this).parent().css('transform','translateX(-100%)');
        });
    },
    // 播放功能
    exe : function(){
        this.init_default();
        this.init();
        this.moveProgress();
        this.volProgress();
        this.backWard();
        this.forWard();
        this.musicListPlay();
        this.searchListPlay();
        oSubmit.onclick = function(){
            if(oTextInp.value) musicPlay.searchMusic();
        }
        oTextInp.onkeyup = function(){
            if(oTextInp.value) musicPlay.searchMusic();
        }
        oPlay.onclick = function(){
            musicPlay.init_player();
        }
    }
}
musicPlay.exe();
// 秒换算成时间显示 00:00:00
function conversionTime( t ){
    var h = toTwo( Math.floor( t / 3600 ) );
    var m = toTwo( Math.floor( t % 3600 / 60 ) );
    var s = toTwo( Math.floor( t % 60 ) );
    return h + ':' + m + ':' + s;
    function toTwo( n ){
        return n > 9 ? String(n) : '0' + n;
    }
}
