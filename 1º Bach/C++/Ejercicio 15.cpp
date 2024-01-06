#include <iostream>

using namespace std;

int main()
{
    int numero;
    
    cout<<"Seleccione un mes escribiendo el número. \n1.Enero\n2.Febrero\n3.Marzo\n4.Abril\n5.Mayo\n6.Junio\n7.Julio\n8.Agosto\n9.Septiembre\n10.Octubre\n11.Noviembre\n12.Diciembre\n";
    cin>>numero;
    
    switch(numero){
        case 1:
        cout<<"Enero tiene 31 días.";
        break;
        case 2:
        cout<<"Febrero tiene 28 días.";
        break;
        case 3:
        cout<<"Marzo tiene 31 días.";
        break;
        case 4:
        cout<<"Abril tiene 30 días.";
        break;
        case 5:
        cout<<"Mayo tiene 31 días.";
        break;
        case 6:
        cout<<"Junio tiene 30 días.";
        break;
        case 7:
        cout<<"Julio tiene 31 días.";
        break;
        case 8:
        cout<<"Agosto tiene 31 días.";
        break;
        case 9:
        cout<<"Septiembre tiene 30 días.";
        break;
        case 10:
        cout<<"Octubre tiene 31 días.";
        break;
        case 11:
        cout<<"Noviembre tiene 30 días.";
        break;
        case 12:
        cout<<"Diciembre tiene 31 días.";
        break;
        
    }

    return 0;
}