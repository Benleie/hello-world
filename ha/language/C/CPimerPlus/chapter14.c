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

//14.4 
#include <stdio.h>
#define LEN 20
struct names {
	char first[LEN];
	char last[LEN];
};
struct guy {
	struct names handle;
	char favfood[LEN];
	char job[LEN];
	float income;
};
int main(void)
{
	struct guy fellow[2] = {
		{ { "Ewen", "Villard" },
		"grilled salmon",
		"personality coach",
		68112.00
		},
		{ { "Rodney", "Swillbelly" },
		"tripe",
		"tabloid editor",
		232400.00
		}
	};
	struct guy * him;
	printf("address #1: %p #2: %p\n", &fellow[0], &fellow[1]);
	him = &fellow[0]; /* tell the pointer where to point */
	printf("pointer #1: %p #2: %p\n", him, him + 1);
	printf("him->income is $%.2f: (*him).income is $%.2f\n",
		him->income, (*him).income);
	him++; /* point to the next structure */
	printf("him->favfood is %s: him->handle.last is %s\n",
		him->favfood, him->handle.last);
	getchar();
	return 0;
}


//14.5
#include <stdio.h>
#define FUNDLEN 50
struct funds {
	char bank[FUNDLEN];
	double bankfund;
	char save[FUNDLEN];
	double savefund;
};
double sum(double, double);
int main(void)
{
	struct funds stan = {
		"Garlic-Melon Bank",
		4032.27,
		"Lucky's Savings and Loan",
		8543.94
	};
	printf("Stan has a total of $%.2f.\n",
		sum(stan.bankfund, stan.savefund));
	getchar();
	return 0;
}
/* adds two double numbers */
double sum(double x, double y)
{
	return(x + y);
}


//14.6  funds2.c 将指针作为参数
#include <stdio.h>
#define FUNDLEN 50
struct funds {
	char bank[FUNDLEN];
	double bankfund;
	char save[FUNDLEN];
	double savefund;
};
double sum(const struct funds *); /* argument is a pointer */
int main(void)
{
	struct funds stan = {
		"Garlic-Melon Bank",
		4032.27,
		"Lucky's Savings and Loan",
		8543.94
	};
	printf("Stan has a total of $%.2f.\n", sum(&stan));
	getchar();
	return 0;
}
double sum(const struct funds * money)
{
	return(money->bankfund + money->savefund);
}



//14.7 直接传递结构体
#include <stdio.h>
#define FUNDLEN 50
struct funds {
	char bank[FUNDLEN];
	double bankfund;
	char save[FUNDLEN];
	double savefund;
};
double sum(struct funds moolah); /* argument is a structure */
int main(void)
{
	struct funds stan = {
		"Garlic-Melon Bank",
		4032.27,
		"Lucky's Savings and Loan",
		8543.94
	};
	printf("Stan has a total of $%.2f.\n", sum(stan));
	getchar();
	return 0;
}
double sum(struct funds moolah)
{
	return(moolah.bankfund + moolah.savefund);
}


//14.8
#include <stdio.h>
#include <string.h>
#define NLEN 30
struct namect {
	char fname[NLEN];
	char lname[NLEN];
	int letters;
};
void getinfo(struct namect *);
void makeinfo(struct namect *);
void showinfo(const struct namect *);
char * s_gets(char * st, int n);
int main(void)
{
	struct namect person;
	getinfo(&person);
	makeinfo(&person);
	showinfo(&person);
	getchar();
	return 0;
}
void getinfo(struct namect * pst)
{
	printf("Please enter your first name.\n");
	s_gets(pst->fname, NLEN);
	printf("Please enter your last name.\n");
	s_gets(pst->lname, NLEN);
}
void makeinfo(struct namect * pst)
{
	pst->letters = strlen(pst->fname) +
		strlen(pst->lname);
}
void showinfo(const struct namect * pst)
{
	printf("%s %s, your name contains %d letters.\n",
		pst->fname, pst->lname, pst->letters);
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




//14.9
#include <stdio.h>
#include <string.h>
#define NLEN 30
struct namect {
	char fname[NLEN];
	char lname[NLEN];
	int letters;
};
struct namect getinfo(void);
struct namect makeinfo(struct namect);
void showinfo(struct namect);
char * s_gets(char * st, int n);
int main(void)
{
	struct namect person;
	person = getinfo();
	person = makeinfo(person);
	showinfo(person);
	getchar();
	return 0;
}
struct namect getinfo(void)
{
	struct namect temp;
	printf("Please enter your first name.\n");
	s_gets(temp.fname, NLEN);
	printf("Please enter your last name.\n");
	s_gets(temp.lname, NLEN);
	return temp;
}
struct namect makeinfo(struct namect info)
{
	info.letters = strlen(info.fname) + strlen(info.lname);
	return info;
}
void showinfo(struct namect info)
{
	printf("%s %s, your name contains %d letters.\n",
		info.fname, info.lname, info.letters);
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


//14.10 name3.c
#define _CRT_SECURE_NO_DEPRECATE
#include <stdio.h>
#include <string.h> // for strcpy(), strlen()
#include <stdlib.h> // for malloc(), free()
#define SLEN 81
struct namect {
	char * fname; // using pointers
	char * lname;
	int letters;
};
void getinfo(struct namect *); // allocates memory
void makeinfo(struct namect *);
void showinfo(const struct namect *);
void cleanup(struct namect *); // free memory when done
char * s_gets(char * st, int n);
int main(void)
{
	struct namect person;
	getinfo(&person);
	makeinfo(&person);
	showinfo(&person);
	cleanup(&person);
	getchar();
	return 0;
}
void getinfo(struct namect * pst)
{
	char temp[SLEN];
	printf("Please enter your first name.\n");
	s_gets(temp, SLEN);
	// allocate memory to hold name
	pst->fname = (char *)malloc(strlen(temp) + 1);
	// copy name to allocated memory
	strcpy(pst->fname, temp);

	printf("Please enter your last name.\n");
	s_gets(temp, SLEN);
	pst->lname = (char *)malloc(strlen(temp) + 1);
	strcpy(pst->lname, temp);
}
void makeinfo(struct namect * pst)
{
	pst->letters = strlen(pst->fname) +
		strlen(pst->lname);
}
void showinfo(const struct namect * pst)
{
	printf("%s %s, your name contains %d letters.\n",
		pst->fname, pst->lname, pst->letters);
}
void cleanup(struct namect * pst)
{
	free(pst->fname);
	free(pst->lname);
}
char * s_gets(char * st, int n)
{
	char * ret_val;
	char * find;
	ret_val = fgets(st, n, stdin);
	if (ret_val)
	{
		find = strchr(st, '\n');
		if (find) // if the address is not NULL,
			*find = '\0'; // place a null character there
		else
		while (getchar() != '\n')
			continue; // dispose of rest of line
	}
	return ret_val;
}



//14.13
#include <stdio.h>
#define FUNDLEN 50
#define N 2
struct funds {
	char bank[FUNDLEN];
	double bankfund;
	char save[FUNDLEN];
	double savefund;
};

double sum(const struct funds money[], int n);
int main(void)
{
	struct funds jones[N] = {
		{
			"Garlic-Melon Bank",
			4032.27,
			"Lucky's Savings and Loan",
			8543.94
		},
		{
			"Honest Jack's Bank",
			3620.88,
			"Party Time Savings",
			3802.91
		}
	};
	printf("The Joneses have a total of $%.2f.\n",
		sum(jones, N));
	getchar();
	return 0;
}
double sum(const struct funds money[], int n)
{
	double total;
	int i;
	for (i = 0, total = 0; i < n; i++)
		total += money[i].bankfund + money[i].savefund;
	return(total);
}
