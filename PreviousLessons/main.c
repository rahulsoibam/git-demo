#include<stdio.h>

void doSomethingClever() {
    printf("I am doing something clever!\n");
}

int main() {
    int x, y, z;
    x = 5;
    y = 8;
    z = ++x + y++;

    if(z == 14) {
        doSomethingClever();
    }

    printf("x = %d, y = %d, z = %d\n", x, y, z);

    return 0;
}