#include <iostream>

using namespace std;

int main()
{
    int num;
    
    for(int i=0; i < 20; i++){
        
        cout<<"Introduzca un número. \n";
        cin>>num;
        
        if(num % 2 == 0){
            
            cout<<"El número que has introducido es par. \n";
            
        }else{
                
            cout<<"El número que has introducido es impar. \n";    
                
            }
        
    }
    
    cout<<"Ya has introducido 20 números.";

    return 0;
}
