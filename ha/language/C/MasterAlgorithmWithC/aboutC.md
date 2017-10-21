`#define list_size(list) ((list)->size)` 带参数的宏  list.h

+ `void *memset(void *s, int ch, size_t n)`;
函数解释：将s中当前位置后面的n个字节 （`typedef unsigned int size_t `）用 ch 替换并返回 s 。用于对大型数组或结构体清零。