//14.1 book.c   fgets()获取字符串
#include <stdio.h>
#include <string.h>
char * s_gets(char * st, int n);
#define MAXTITL 41 /* maximum length of title + 1 */
#define MAXAUTL 31 
struct book { /* structure template: tag is book */
	char title[MAXTITL];
	char author[MAXAUTL];
	float value;
}; 
int main(void)
{
	struct book library; /* declare library as a book variable */
	printf("Please enter the book title.\n");
	s_gets(library.title, MAXTITL); /* access to the title portion */
	printf("Now enter the author.\n");
	s_gets(library.author, MAXAUTL);
	printf("Now enter the value.\n");
	scanf_s("%f", &library.value);
	printf("%s by %s: $%.2f\n", library.title,
		library.author, library.value);
	printf("%s: \"%s\" ($%.2f)\n", library.author,
		library.title, library.value);
	printf("Done.\n");
	getchar();
	getchar();
	return 0;
}
char * s_gets(char * st, int n)
{
	char * ret_val;
	char * find;
	ret_val = fgets(st, n, stdin);
	if (ret_val)
	{
		find = strchr(st, '\n'); // look for newline
		if (find) // if the address is not NULL,
			*find = '\0'; // place a null character there
		else
		while (getchar() != '\n')
			continue; // dispose of rest of line
	}
	return ret_val;
}


//14.2
#include <stdio.h>
#include <string.h>
char * s_gets(char * st, int n);
#define MAXTITL 40 /* maximum length of title + 1 */
#define MAXAUTL 40
#define MAXBKS 100
struct book { /* structure template: tag is book */
	char title[MAXTITL];
	char author[MAXAUTL];
	float value;
}; 
int main(void)
{
	struct book library[MAXBKS]; 
	int count = 0;
	int index;

	printf("Please enter the book title.\n");
	printf("Press [enter] at the start of a line to stop.\n");
	while (count < MAXBKS && s_gets(library[count].title, MAXTITL) != NULL
		&& library[count].title[0] != '\0')
	{
		printf("Now enter the author.\n");
		s_gets(library[count].author, MAXAUTL);
		printf("Now enter the value.\n");
		scanf_s("%f", &library[count++].value);         //count++
		while (getchar() != '\n')
			continue; /* clear input line */
		if (count < MAXBKS)
			printf("Enter the next title.\n");
	}

	if (count > 0)
	{
		printf("Here is the list of your books:\n");
		for (index = 0; index < count; index++)
			printf("%s by %s: $%.2f\n", library[index].title,
			library[index].author, library[index].value);
	}
	else
		printf("No books? Too bad.\n");
	getchar();
	return 0;
}
char * s_gets(char * st, int n)
{
	char * ret_val;
	char * find;
	ret_val = fgets(st, n, stdin);
	if (ret_val)
	{
		find = strchr(st, '\n'); // look for newline
		if (find) // if the address is not NULL,
			*find = '\0'; // place a null character there
		else
		while (getchar() != '\n')
			continue; // dispose of rest of line
	}
	return ret_val;
}







