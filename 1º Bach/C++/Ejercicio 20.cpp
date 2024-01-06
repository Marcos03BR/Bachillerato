#include <iostream>

using namespace std;

int
main ()
{
  int num, contador;

  contador = 0;

  while (num != 0)
    {

      cout << "Introduzca otro número \n";
      cin >> num;
      contador++;
    }

  cout << "Has introducido " << contador-1 << " números.";

  return 0;
}
