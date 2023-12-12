#include <stdio.h>

#define MAX_VERTICES 9

int visited[MAX_VERTICES];        /* ���X�O���}�C */
int adjMatrix[MAX_VERTICES][MAX_VERTICES]; /* �F���x�} */

/* ���: �ϧΪ��`���u���j�M�k */ 
void dfs(int vertex) {
   visited[vertex] = 1;           /* �O���w���X�L */
   printf("[V%d]->", vertex);     /* ��ܨ��X�����I�� */
   for (int i = 1; i < MAX_VERTICES; i++) {
      if (adjMatrix[vertex][i] == 1 && visited[i] == 0) {
         dfs(i);                  /* ���j���X�I�s */
      }
   }
}

/* �D�{�� */
int main() {
	 printf("���{���Ѻƪ����]�p\n");
   int edge[20][2] = { {1, 2}, {2, 1},  /* ��u�}�C */
                       {1, 3}, {3, 1},
                       {2, 4}, {4, 2},
                       {2, 5}, {5, 2},
                       {3, 6}, {6, 3},
                       {3, 7}, {7, 3},
                       {4, 8}, {8, 4},
                       {5, 8}, {8, 5},
                       {6, 8}, {8, 6},
                       {7, 8}, {8, 7} };
   int i, j;  /* �]�w���X��� */
   for ( i = 1; i < MAX_VERTICES; i++ ) visited[i] = 0;
   for ( i = 1; i < MAX_VERTICES; i++ ) {
      for ( j = 1; j < MAX_VERTICES; j++ ) {
         adjMatrix[i][j] = 0;
      }
   }
   for ( i = 0; i < 20; i++ ) {
      adjMatrix[edge[i][0]][edge[i][1]] = 1;
   }
   printf("�ϧ�G���F���x�}���e:\n");
   for ( i = 1; i < MAX_VERTICES; i++ ) {
      printf("���IV%d =>", i);
      for ( j = 1; j < MAX_VERTICES; j++ ) {
         if (adjMatrix[i][j] == 1) {
            printf("V%d ", j);
         }
      }
      printf("\n");
   }
   printf("�ϧΪ��`���u�����X:\n");
   dfs(1);        /* ��ܨ��X�L�{ */
   printf("\n");
   return 0; 
}

