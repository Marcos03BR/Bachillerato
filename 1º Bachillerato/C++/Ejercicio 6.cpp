#include <iostream>

using namespace std;

int main ()
{
  int num1, num2;

  cout << "Introduzca un número: \n";
  cin >> num1;
  cout << "Introduzca el siguiente número: \n";
  cin >> num2;

  cout << "El resultado de la suma es: " << num1 + num2 << endl;
  cout << "El resultado de la resta es: " << num1 - num2 << endl;
  cout << "El resultado de la multiplicación es: " << num1 * num2 << endl;
  cout << "El resultado de la división es: " << num1 / num2 << endl;

  return 0;
}
