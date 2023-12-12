#include <stdio.h>


GraphMatrix GM;

void createGraph() {
   int i, j;
   GM.n = MAX_VERTICES;
   for (i = 0; i < GM.n; i++)
      for (j = 0; j < GM.n; j++)
         GM.edges[i][j] = (i == j) ? 0 : INF;
}

void insertEdge(int start, int end) {
   GM.edges[start][end] = 1;
   GM.edges[end][start] = 1;
}

void printGraph() {
   int i, j;
   for (i = 1; i < GM.n; i++) {
      printf("³»ÂIV%d =>", i);
      for (j = 1; j < GM.n; j++) {
         if (GM.edges[i][j] == 1)
            printf("V%d ", j);
      }
      printf("\n");
   }
}

void bfs(int start) {
   int queue[MAX_VERTICES];
   int front = -1, rear = -1;
   int visited[MAX_VERTICES] = {0};
   int i;
   queue[++rear] = start;
   visited[start] = 1;
   while (front != rear) {
      start = queue[++front];
      for (i = 1; i < GM.n; i++) {
         if (GM.edges[start][i] == 1 && visited[i] == 0) {
            queue[++rear] = i;
            visited[i] = 1;
            printf("[V%d]->[V%d] ", start, i);
         }
      }
   }
}

