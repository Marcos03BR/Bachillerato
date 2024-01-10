#include <iostream>

using namespace std;

int main()
{
    
    int num1, num2, resta;
    
    cout<<"Introduzca un número. \n";
    cin>>num1;
    cout<<"Introduzca otro número. \n";
    cin>>num2;
    
    resta=num1-num2;
    
    cout<<"El valor absoluto de la resta de ambos números es: " << abs(resta); 
    
    return 0;
}