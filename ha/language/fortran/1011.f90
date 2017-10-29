!chapter7 函数与子例程



!7-1
call star()
call message()
call star()

read*
end 

subroutine star()
		print *,'***********'
end subroutine star
subroutine message()
	print*,'hello!'
end subroutine  !end 后面的内容可以省略

!7-6 函数子程序
logical checkprime
read*,n
if(checkprime(n)) then
	print*,n,'是素数'
else
	print *,n,'不是素数'
endif
read*
end

logical function checkprime(m)
checkprime = .false.
j = sqrt(1.0*m)
do i=2,j
	if(mod(m,i) == 0) return
enddo
checkprime = .true.
end

!7-17 common           并没有什么变化?
parameter (n=3,m=4)
integer b(n,m)
common b
read*,iseed
do i=1,n
	do j=1,m
		b(i,j) = int(ran(iseed)*100)
	enddo
enddo
do i=1,n
	print '(<m>i4)',(b(i,j),j=1,m)
enddo
call sort()
do i=1,n
	print '(<m>i4)',(b(i,j),j=1,m)
enddo
read*
end

subroutine sort()
parameter(n=12)
integer a(n),t
common a
do i=1,n-1
	do j=1,n-i
		if(a(j)>a(j+1)) then
			t = a(i)
			a(i) = a(j)
			a(i) = t
		endif
	enddo
enddo
end

















!chapter6 Array
!杨辉三角-习题15
parameter(n=8)
integer a(n,n)
do i=1,n
	a(i,1) = 1
	a(i,i) = 1
enddo
do i=3,n
	do j=2,i-1
		a(i,j) = a(i-1,j-1) + a(i-1,j)
	enddo
enddo
do i=1,n
    do m=1,8-i
        print '(a\)',"    "   !four space
    enddo
    do j=1,i
        print '(i2,a\)',a(i,j),'      '!six space
    enddo
    print*
	!print 100,(a(i,j),j=1,i)
enddo



!6-15  
integer a(1,4),b(4,1)
print *,'输入A数组的数据'
read 10,((a(i,j),j=1,4),i=1,1)       !小心翼翼地输入
do i=1,1
    do j=1,4
        b(j,i) = a(i,5-j)            !数组是从一开始的。。
    enddo
enddo
print*,'B:'
print 20,((b(j,i),i=1,1),j=1,4)
10  format(4i2)
20  format(4x,4i4)

parameter(n=10)
integer a(n,n)
do i=1,n
    a(i,1) = 1
    a(i,i) = 1
enddo
do i=3,n
	do j=2,i-1
        a(i,j) = a(i-1,j-1) + a(i-1,j)
	enddo
enddo
do i=1,n
	print 100,(a(i,j),j=1,j)
enddo
100 format(1x,10i5)











!chhaper5 循环结构

!习题1.3
do n=10,99
    na = n/10
    nb = mod(n,10)
    if(na + nb == 10)  then
        print *, 'n=',n
    endif
enddo
!1.5
m = 0
do i=1,4
    j = i
    do k=1,3
        l = k
        m = m+1
    enddo
    enddo
print*,i,j,k,l,m     !5 4 4 3 12



!习题12:中空矩形
integer m,n
print*,'请输入行数：'
read*,m
print*,'请输入列数：'
read*,n
10 format(a\)
do i=1,m+2
    print 10,'*'
    if(i == m+2) print*
    enddo
do j=1,n
    print 10,'*'
    do i=1,m
         print 10,' '
    enddo
    print 10,'*'
    print *
enddo
do i=1,m+2
    print 10,'*'
    if(i == m+2) print*
    enddo



!改写例：5-22
n = 6
do k=n,1,-1
    if(k>1) then
        print*,('  ',i=k,n),char(k+48),' ' ,(char(k-1+48),' ' ,j=1,2*k-3),char(k+48)
    else
        print*,('  ',i=k,n),char(k+48)
    endif
enddo

!每行输出五个斐波那契数
integer :: f1 = 1, f2 =1, f3
print '(2x,i5,2x,i5\)',f1,f2
do i=3,20
    f3 = f2+f1
    print '(2x,i5\)',f3
    f1 = f2
    f2 = f3
    if(mod(i,5)==0) print*
end do


do i=1,10
    if(i==3.or.i==6) cycle
    print 1,i
1 format(i2)            
end do

print*,(i,i = 0,10,2)
print *,(('a','b',i = 1,3),j = 1,2)!abababababab
 
do i = 1, 5
    print 100,(j,j=1,i)
    end do
100 format(<i>i1)

!九九乘法表
integer i,j
do i =1,9
    print 10,(j,'*',i,'=',i*j,j=2,i)   !j=2之前的都是输出项
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




!chapter3 顺序结构与输入输出
print 1,'Hello,World'    !顶格输出
1 format(a)
print *,char(48)     !0



