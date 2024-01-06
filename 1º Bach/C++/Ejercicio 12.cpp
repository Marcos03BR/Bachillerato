#include <iostream>

using namespace std;

int main()
{
    
    int num;
    
    cout<<"Introduce un número.";
    cin>>num;
    
    switch(num){
        case 1:
        cout<<"Lunes";
        break;
        case 2:
        cout<<"Martes";
        break;
        case 3:
        cout<<"Miercoles";
        break;
        case 4:
        cout<<"Jueves";
        break;
        case 5:
        cout<<"Viernes";
        break;
        case 6:
        cout<<"Sábado";
        break;
        case 7:
        cout<<"Domingo";
        break;
        
    }

    return 0;
}