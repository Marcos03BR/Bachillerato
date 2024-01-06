#include <iostream>

using namespace std;

int main()
{
    
    int num, total;
    
    total=0;
    
    cout<<"Introduzca un número.";
    cin>>num;
    
    for (int i = 0; i < num; i++) {

        cout << "Serie ascendente: " << i << "\n";
        total=total+i;

        }
        
    cout<<"La suma total de la serie ascente es: " << total;    

    return 0;
}