#include <iostream>

using namespace std;

int main()
{
    
    int num;
    
    cout<<"Introduzca un número. \n";
    cin>>num;
    
    for (int i=1; i<11; i++ ){
        
        cout<< num << " x " << i << " = " << num*i << "\n";
        
    }
    
    return 0;
}