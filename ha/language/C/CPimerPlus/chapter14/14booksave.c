//fopen(),a表示打开，读并可以在文件尾部写；b表示允许二进制格式
#define _CRT_SECURE_NO_DEPRECATE
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXTITL 40
#define MAXAUTL 40
#define MAXBKS 10 /* maximum number of books */
char * s_gets(char * st, int n);
struct book { /* set up book template */
	char title[MAXTITL];
	char author[MAXAUTL];
	float value;
};
int main(void)
{
	struct book library[MAXBKS]; /* array of structures */
	int count = 0;
	int index, filecount;
	FILE * pbooks;
	int size = sizeof (struct book);
	if ((pbooks = fopen("book.dat", "a+b")) == NULL)
	{
		fputs("Can't open book.dat file\n", stderr);
		exit(1);
	}
	rewind(pbooks); /* go to start of file */
	while (count < MAXBKS && fread(&library[count], size,
		1, pbooks) == 1)
	{
		if (count == 0)
			puts("Current contents of book.dat:");
		printf("    %s by %s: $%.2f\n", library[count].title,
			library[count].author, library[count].value);
		count++;
	}
	filecount = count;
	if (count == MAXBKS)
	{
		fputs("The book.dat file is full.", stderr);
		exit(2);
	}
	puts("\nPlease add new book titles.");
	puts("Press [enter] at the start of a line to stop.");
	while (count < MAXBKS && s_gets(library[count].title, MAXTITL) != NULL
		&& library[count].title[0] != '\0')
	{
		puts("Now enter the author.");
		s_gets(library[count].author, MAXAUTL);
		puts("Now enter the value.");
		scanf("%f", &library[count++].value);
		while (getchar() != '\n')
			continue; /* clear input line */
		if (count < MAXBKS)
			puts("Enter the next title.");
	}
	if (count > 0)
	{
		puts("Here is the list of your books:");
		for (index = 0; index < count; index++)
			printf("%s by %s: $%.2f\n", library[index].title,
			library[index].author, library[index].value);
		fwrite(&library[filecount], size, count - filecount,
			pbooks);
	}
	else
		puts("No books? Too bad.\n");
	puts("Bye.\n");
	fclose(pbooks);
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