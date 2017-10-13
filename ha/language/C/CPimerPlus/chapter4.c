//VS2013









//4-2 praise.c
//使用scanf_s，输入一换行，程序就崩。。比如name大小设为30,却输入40，同样也溢出而崩。
#include <stdio.h>
#define PRAISE "You are an extraordinary being"
int main(void)
{
	char name[40];
	printf("What's your name?\n");
	gets_s(name,40);
	printf("Hello, %s. %s\n", name,PRAISE);
	getchar();
	return 0;
}
//4-3
//%zd并不能被识别为specifiers,用%d
#include <stdio.h>
#include <string.h>
#define PRAISE "You are an extraordinary being"
int main(void)
{
	char name[40];
	printf("What's your name?\n");
	gets_s(name, 20);
	printf("Hello, %s. %s\n", name, PRAISE);
	printf("Your name of %d letters occupies %d memory cells.\n", strlen(name), sizeof name);    // xx 40
	printf("The praise has %d letters and occupies %d memory cells.\n", strlen(PRAISE), sizeof PRAISE);    //30  31
	getchar();
	return 0;
}










