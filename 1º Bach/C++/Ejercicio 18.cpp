#include <iostream>

using namespace std;

int
main ()
{

  int num;

  cout << "Introduzca un número.";
  cin >> num;

  for (int i = 0; i < num; i++)
    {

      cout << "Serie ascendente: " << i << "\n";

    }

  for (int j = num; j > 0; j--)
    {

      cout << "Serie descendente: " << j << "\n";

    }

  return 0;
}
