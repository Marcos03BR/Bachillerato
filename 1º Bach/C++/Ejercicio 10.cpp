#include <iostream>

using namespace std;

int main()
{
    int a,b;
    
    cout<<"Introduzca un número. \n";
    cin>>a;
    cout<<"Introduzca otro número. \n";
    cin>>b;
    
    if (a > b) {
        
        cout<<"El número " << a << " es mayor que " << b;
        
    }
    
    else {
        
        cout<<"El número " << b << " es mayor que " << a;
        
    }

    return 0;
}