#include<stdlib.h>
#include<stdio.h>
#include<math.h>
 
int main(void){
system("color f9");

int num;
float peko;
float total = 0;

puts("���{���Ѻƪ����]�p�C");
puts("Lab1-18 : �Шϥ�C�y���g�X�{���ӭp��U�C�L�a�ǦC�en�����M�G1+ 1/2��2 + 1/3��3 + �K�C");
puts("\n�п�J�@�ӼƦrn�A���{���N�|�p��'1 + 1/2 ��2 + 1/3 ��3 + ......'�o�ӵL�a�ǦC�e n �����M�C");
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

