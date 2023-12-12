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
   printf("本程式由瘋狗泰設計\n");
   printf("圖形G的鄰接矩陣內容:\n");
   printGraph();
   printf("圖形的寬度優先走訪:\n");
   bfs(1);
   printf("\n");
   return 0;
}

