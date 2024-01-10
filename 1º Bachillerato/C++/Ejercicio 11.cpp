#include <iostream>

using namespace std;

int main()
{
    
    int a, b, c;
    
    cout<<"Introduzca tres números. \n";
    cin>>a;
    cin>>b;
    cin>>c;
    
    if (a > b) {
            if (a > c) {
                cout<<"El mayor es: " << a;                                             
            } else {
                cout<<"El mayor es: " << c;     
            }
        } else if (b > c) {
            cout<<"El mayor es: " << b;
        } else {
            cout<<"El mayor es: " << c;
        }

    return 0;
}
