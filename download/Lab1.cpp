#include<stdlib.h>
#include<stdio.h>
#include<math.h>
 
int main(void){
system("color f9");

int num;
float peko;
float total = 0;

puts("本程式由瘋狗泰設計。");
puts("Lab1-18 : 請使用C語言寫出程式來計算下列無窮序列前n項的和：1+ 1/2√2 + 1/3√3 + …。");
puts("\n請輸入一個數字n，此程式將會計算'1 + 1/2 √2 + 1/3 √3 + ......'這個無窮序列前 n 項的和。");
printf("n => ");
scanf("%d",&num);

for(int i = 2; i <= num; i++){
peko = sqrt(i);
total += 1/(i*peko);
}

printf("\nsum = %f\n\n",total+1);

system("pause");
return 0;
}

