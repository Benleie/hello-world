### C4047： `const char*`与int间接级别不同。
指针指向变量是一级间接寻址，指向指针就是二级间接寻址。

在程序第一行加入：#define _CRT_SECURE_NO_DEPRECATE，就可以使用一些原生的函数。
