#include <stdio.h>
#include "Ch8-2-2.h"
#include "Graph.c" 
int main() {
   createGraph();
   insertEdge(1, 2);
   insertEdge(1, 3);
   insertEdge(2, 4);
   insertEdge(2, 5);
   insertEdge(3, 6);
   insertEdge(3, 7);
   insertEdge(4, 8);
   insertEdge(5, 8);
   insertEdge(6, 8);
   insertEdge(7, 8);
   printf("���{���Ѻƪ����]�p\n");
   printf("�ϧ�G���F���x�}���e:\n");
   printGraph();
   printf("�ϧΪ��e���u�����X:\n");
   bfs(1);
   printf("\n");
   return 0;
}

