#include <iostream>

using namespace std;

int main()
{
    int a,b;
    
    cout<<"Introduzca un número. \n";
    cin>>a;
    cout<<"Introduzca otro número. \n";
    cin>>b;
    
    
    if (a % b == 0) {
        
        cout<<"El número " << a << " es múltiplo de " << b;
        
    }
    
    else {
        
        cout<<"Los números son impares.";
        
    }

    return 0;
}