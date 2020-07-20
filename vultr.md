45.76.164.111 	a8W,!DLy(ASotz_h
ss://YWVzLTI1Ni1nY206NzI3MkA0NS43Ni4xNjQuMTExOjcyNzI=
## 参考文章
+ https://lccurious.github.io/2018/03/03/vlutr-ssr/

wget --no-check-certificate -O shadowsocks-libev.sh https://raw.githubusercontent.com/uxh/shadowsocks_bash/master/shadowsocks-libev.sh && bash shadowsocks-libev.sh



wget --no-check-certificate https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks.sh && bash shadowsocks.sh

firewall-cmd --zone=public --add-port=7272/tcp --add-port=7272/udp --permanent
## 加速
+ BBR https://teddysun.com/489.html
wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh
+ bbr https://www.codercto.com/a/25431.html

### serverspeeder
+ https://github.com/hombo125 
+ [安装教程](https://www.baishitou.cn/1524.html)
+ bbr https://www.codercto.com/a/25431.html


https://github.com/shadowsocks/shadowsocks

启动：/etc/init.d/shadowsocks start
停止：/etc/init.d/shadowsocks stop
重启：/etc/init.d/shadowsocks restart
状态：/etc/init.d/shadowsocks status
配置文件路径：/etc/shadowsocks.json
日志文件路径：/var/log/shadowsocks.log
安装路径：/usr/local/shadowsocks/shadowsoks


## centos
+ free -h 查看内存使用情况
+ top 
+ systemctl status firewalld 查看防火墙状态
+ uname -r 查看内核版本
+ cat /etc/redhat-release 查看centos发行版

### 修改系统时间
+ tzselect 调整系统时间，选择时区
+ cp /usr/share/zoneinfo/Asia/Shanghai   /etc/localtime
+ hwclock -w  将当前时间和日期写入BIOS，避免重启后失效

### 安装zsh
+ cat /etc/shells   查看shell
+ yum install -y zsh
+ chsh -s /bin/zsh  设置默认shell
+ echo $SHELL
+ sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
+ `cat  ~/.oh-my-zsh/templates/zshrc.zsh-template`



## 其他
+ 原版 ss，不用酸酸乳，不混淆。防火墙只指定自家 IP 访问，阻断 ICMP 请求。
+ yum -y install gcc gcc-c++ autoconf pcre pcre-devel make automake
+  `tcping -d -h -u -n 10 -i 0.1 -w 0.1 <ip> <port>`
	使用http模式（-h），并且在返回数据中显示目标源url地址（-u），向主机ip为192.168.1.30的6001端口发送10次数据包（-n 10），在返回数据行中显示发送数据包的日期（-d），指定每次发送数据包的时间间隔为0.1秒（-i 0.1），等待数据包相应的时间间隔为0.1秒（-w 0.1）
+ There were 236 failed login attempts since the last successful login.
+ nothing provides /usr/sbin/new-kernel-pkg needed by kernel-3.10.0-327.el7.x86_64
+ 使用elRepo更换内核(Centos8使用BBR无需升级内核)
