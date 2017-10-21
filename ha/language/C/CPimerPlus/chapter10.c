//10.1 const
#include <stdio.h>
#define MONTHS 12
int main(void)
{
	const int days[MONTHS] = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
	int index;
	for (index = 0; index < MONTHS; index++)
		printf("Month %d has %2d days.\n", index + 1,
		days[index]);
	getchar();
	return 0;
}

//10.2 输出任意值
#include <stdio.h>
#define SIZE 4
int main(void)
{
	int no_data[SIZE]; /* uninitialized array */
	int i;
	printf("%2s%14s\n",
		"i", "no_data[i]");
	for (i = 0; i < SIZE; i++)
		printf("%2d%14d\n", i, no_data[i]);
	getchar();
	return 0;
}

//10.3初始化，默认其余为零
#include <stdio.h>
#define SIZE 4
int main(void)
{
	int some_data[SIZE] = { 1492, 1066 };
	int i;
	printf("%2s%14s\n",
		"i", "some_data[i]");
	for (i = 0; i < SIZE; i++)
		printf("%2d%14d\n", i, some_data[i]);
	getchar();
	return 0;
}

//10.5 designate.c  指定某个位置进行赋值
#include <stdio.h>
#define MONTHS 12
int main(void)
{
	int days[MONTHS] = { 31, 28, [4] = 31, 30, 31, [1] = 29 };
	int i;
	int stuff[] = {1, [6] = 23};
	for (i = 0; i < MONTHS; i++)
		printf("%2d %d\n", i + 1, days[i]);
	printf('%2d',stuff)
	getchar();
	return 0;
}
//10.8 poiter addition  格式字符p   指针地址加一，是下一个指针的位置
#include <stdio.h>
#define SIZE 4
int main(void)
{
	short dates[SIZE];
	short * pti;
	short index;
	double bills[SIZE];
	double * ptf;
	pti = dates; // assign address of array to pointer
	ptf = bills;
	printf("%23s %15s\n", "short", "double");
	for (index = 0; index < SIZE; index++)
		printf("pointers + %d: %10p %10p\n",
		index, pti + index, ptf + index);
	printf("%p", &main);
	getchar();
	return 0;
}

//10.10 数组作为参数，本质是一个指向原数组(实参)的指针
#include <stdio.h>
#define SIZE 10
int sum(int ar[], int n);
int main(void)
{
	int marbles[SIZE] = { 20, 10, 5, 39, 4, 16, 19, 26, 31, 20 };
	long answer;
	answer = sum(marbles, SIZE);
	printf("The total number of marbles is %ld.\n", answer);
	printf("The size of marbles is %u bytes.\n",
		sizeof marbles);   //The size of marbles is 40 bytes.
	getchar();
	return 0;
}
int sum(int ar[], int n) // how big an array?
{
	int i;
	int total = 0;
	for (i = 0; i < n; i++)
		total += ar[i];
	printf("The size of ar is %u bytes.\n", sizeof ar);  //The size of ar is 4 bytes.
	return total;
}


//10.11  sum_arr2
#include <stdio.h>
#define SIZE 10
int sump(int * start, int * end);
int main(void)
{
	int marbles[SIZE] = { 20, 10, 5, 39, 4, 16, 19, 26, 31, 20 };
	long answer;
	answer = sump(marbles, marbles + SIZE);
	printf("The total number of marbles is %ld.\n", answer);
	getchar();
	return 0;
}
/* use pointer arithmetic */
int sump(int * start, int * end)
{
	int total = 0;
	while (start < end)
	{
		//total += *start; 
		//start++; 
		total += *start++;    
	}
	return total;
}
