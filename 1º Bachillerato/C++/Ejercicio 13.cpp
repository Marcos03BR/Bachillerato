#include <iostream>

using namespace std;

int main()
{
    int nota;
    cout<<"Introduzca su nota: \n";
    cin>>nota;
    
    if (nota < 5) {
        
        cout<<"Has suspendido.";
        
    } else {
        switch (nota){
        case 5:
        cout<<"Aprobado";
        break;
        case 6:
        cout<<"Bien";
        break;
        case 7:
        cout<<"Notable";
        break;
        case 8:
        cout<<"Notable";
        break;
        case 9:
        cout<<"Sobresaliente";
        break;
        case 10:
        cout<<"Sobresaliente";
        break;
        }
        
    }

    return 0;
}