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

