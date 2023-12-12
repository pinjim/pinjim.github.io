#define MAX_VERTICES 9
#define INF 1000L

typedef struct {
   int edges[MAX_VERTICES][MAX_VERTICES];
   int n;
} GraphMatrix;

extern GraphMatrix GM;

void createGraph();
void insertEdge(int start, int end);
void printGraph();
void bfs(int start);

