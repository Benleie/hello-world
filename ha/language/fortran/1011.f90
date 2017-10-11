!chhaper 5 循环结构


print*,(i,i = 0,10,2)
print *,(('a','b',i = 1,3),j = 1,2)!abababababab
 
do i = 1, 5
    print 100,(j,j=1,i)
    end do
100 format(<i>i1)

!九九乘法表
integer i,j
do i =1,9
    print 10,(j,'*',i,'=',i*j,j=2,i)
end do
10 format(<i>(i1,a,i1,a,i2,2x))
read*
end   

! chapter 4 

!判断闰年程序
integer year
read*, year
if(mod(year,4) == 0) then
	if(mod(year,400) == 0) then
		print*,366,'大闰年'
	else if(mod(year,100)==0) then
	    print*,365,'不是闰年的百年'
	else 
	    print*,366,'小闰年'
	endif
else
	print*,365,'平年'
endif
read*
end 

!逻辑运算符
integer b
integer :: a = 10
if(a == 10) print*,'Hello,World',a
read*, b
if(a == 10.and.b>0) print*,'666'
read*
end


integer :: a = 10
print*,'Hello,World',a      ! Hello,World    10
read*
end

print*, 4+.false.  !4
print*, 4+.true.   !3


!习题1.1
read*, n       !15
x = 1.0
if(n>=0) x=2*x
if(n>=5) x = 2 * x + 1.0
if(n>15) x = 3*x -1.0
print*, x     !5.000000
read*
end

!好无聊的1.3,输入3.5,4.5
logical  p,q
read*,x,y
p=(x.ge.0.0).and.(y.ge.0.0)
q=x+y>7.5.and.(y>=0.0)
p=.false.
if(.not.p.and.q) then
    z = 100
    else if(.not.q)then
        z = 0.00
    else if(p) then
        z = 2.0
    else
        z = 3.0
endif
print*,p,q,z
read*
end

character a
a = 'hhh'
print*,a,'=',ichar(a) !h = 104
read*
end








