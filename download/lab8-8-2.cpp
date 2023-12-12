#include <stdio.h>

#define MAX_VERTICES 9

int visited[MAX_VERTICES];        /* 走訪記錄陣列 */
int adjMatrix[MAX_VERTICES][MAX_VERTICES]; /* 鄰接矩陣 */

/* 函數: 圖形的深度優先搜尋法 */ 
void dfs(int vertex) {
   visited[vertex] = 1;           /* 記錄已走訪過 */
   printf("[V%d]->", vertex);     /* 顯示走訪的頂點值 */
   for (int i = 1; i < MAX_VERTICES; i++) {
      if (adjMatrix[vertex][i] == 1 && visited[i] == 0) {
         dfs(i);                  /* 遞迴走訪呼叫 */
      }
   }
}

/* 主程式 */
int main() {
	 printf("本程式由瘋狗泰設計\n");
   int edge[20][2] = { {1, 2}, {2, 1},  /* 邊線陣列 */
                       {1, 3}, {3, 1},
                       {2, 4}, {4, 2},
                       {2, 5}, {5, 2},
                       {3, 6}, {6, 3},
                       {3, 7}, {7, 3},
                       {4, 8}, {8, 4},
                       {5, 8}, {8, 5},
                       {6, 8}, {8, 6},
                       {7, 8}, {8, 7} };
   int i, j;  /* 設定走訪初值 */
   for ( i = 1; i < MAX_VERTICES; i++ ) visited[i] = 0;
   for ( i = 1; i < MAX_VERTICES; i++ ) {
      for ( j = 1; j < MAX_VERTICES; j++ ) {
         adjMatrix[i][j] = 0;
      }
   }
   for ( i = 0; i < 20; i++ ) {
      adjMatrix[edge[i][0]][edge[i][1]] = 1;
   }
   printf("圖形G的鄰接矩陣內容:\n");
   for ( i = 1; i < MAX_VERTICES; i++ ) {
      printf("頂點V%d =>", i);
      for ( j = 1; j < MAX_VERTICES; j++ ) {
         if (adjMatrix[i][j] == 1) {
            printf("V%d ", j);
         }
      }
      printf("\n");
   }
   printf("圖形的深度優先走訪:\n");
   dfs(1);        /* 顯示走訪過程 */
   printf("\n");
   return 0; 
}

