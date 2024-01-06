#include <iostream>

using namespace std;

int main()
{
    int a;
    
    cout<<"Introduzca un número. \n";
    cin>>a;
    
    if (a % 2 == 0) {
        cout<<"El número " << a << " es par.";
    }

    else {
        cout<<"El número " << a << " es impar.";
    }

    return 0;
}