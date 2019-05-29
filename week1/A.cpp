#include <bits/stdc++.h>
using namespace std;

int main()
{
  int n, m;
  cin >> n >> m;
  char g[n + 10][m + 10];
  for (int i = 0; i <= n + 2; i++)
    for (int j = 0; j <= m + 2; j++)
      g[i][j] = '?';
  for (int i = 1; i <= n; i++)
    for (int j = 1; j <= m; j++)
      cin >> g[i][j];
  for (int i = 1; i <= n; i++)
  {
    for (int j = 1; j <= m; j++)
    {
      int cnt = 0;
      //check for dead cell
      if (!vis[i][j])
      {
        if (g[i][j] == '.')
        {
          if (g[i - 1][j] == '*')
            cnt++;
          if (g[i + 1][j] == '*')
            cnt++;
          if (g[i][j - 1] == '*')
            cnt++;
          if (g[i][j + 1] == '*')
            cnt++;
          if (g[i - 1][j - 1] == '*')
            cnt++;
          if (g[i - 1][j + 1] == '*')
            cnt++;
          if (g[i + 1][j - 1] == '*')
            cnt++;
          if (g[i + 1][j + 1] == '*')
            cnt++;
          if (cnt == 3)
          {
            g[i][j] = '*';
            vis[i][j] = true;
          }
        }
        //check for alive cell
        else if (g[i][j] == '*')
        {
          if (g[i - 1][j] == '*')
            cnt++;
          if (g[i + 1][j] == '*')
            cnt++;
          if (g[i][j - 1] == '*')
            cnt++;
          if (g[i][j + 1] == '*')
            cnt++;
          if (g[i - 1][j - 1] == '*')
            cnt++;
          if (g[i - 1][j + 1] == '*')
            cnt++;
          if (g[i + 1][j - 1] == '*')
            cnt++;
          if (g[i + 1][j + 1] == '*')
            cnt++;
          //dies
          if (cnt < 2 || cnt > 3)
          {
            g[i][j] = '.';
            vis[i][j] = true;
          }
          else if (cnt == 2 || cnt == 3)
          {
            vis[i][j] = true;
          }
        }
      }
    }
  }
  for (int i = 1; i <= n; i++)
  {
    for (int j = 1; j <= m; j++)
    {
      cout << g[i][j];
    }
    cout << "\n";
  }
  return 0;
}