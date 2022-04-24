
const customer_data={
    Ben10:[22,30,11,17,15,52,27,12],
    Sammer:[5,17,30,33,40,22,26,10,11,45],
    Zeeshan:[22,30,11,5,17,30,6,57]
};


let size =  customer_data.Ben10.length;
console.log('Client orders count: ' + size);

var countPremiumMembership=0;
for(x=0; x<size; x++){
    if(customer_data.Ben10[x]>=20){
        countPremiumMembership = countPremiumMembership+1;
    }
}

console.log('Premium Membership count: ' + countPremiumMembership);
if(countPremiumMembership>=5){
  console.log('Cliente premium');
}else{
  console.log('No es cliente premium');
}

// 1. intentar cambiar a for each
// 2. como recorrer todo el objeto
// 3. ya que puedas recorrer todo el objeto, obtener el arreglo por cliente



// student={
//      name:'David Rayy',
//      sclass:'VI',
//      rollno:12
//  }
//  console.log(student.name,student.sclass,student.rollno);