#include <stdio.h>
int main(int argc, char const *argv[])
{
	int a = 666;
	printf("hello,world\n");
	printf(a);
	getchar();
	return 0;
}
//访问变量地址
int a = 666;
printf("address of a is: %p.",&a);    //004FFBA8  00FAFE70
printf("main is here: %p.\n", &main)  // 00AFF7C4.     0004113B.

//scanf_s的结束很奇怪
int main(void)
{
	int a;
	scanf_s("%d", &a);
	printf("a is %d.\n", a);
	getchar();
	getchar();
	return 0;
}
//数组名本身就是地址，对它取址还是它本身









