

let customer_data={
    'Ben10':[22,30,11,17,15,52,27,12],
    'Sammer':[5,17,30,33,40,22,26,10,11,45],
    'Zeeshan':[22,30,11,5,17,30,6,57]
};


Object.entries(customer_data).forEach(([key,value])=>{
    console.log(key,value);
    parseInt(value);
    var countMembresia=0;
    console.log(typeof value);
    for(i=0;i<value.length; i++);{
      if(value[i]>=20 ){
        countMembresia=countMembresia++;
      }
      console.log('Premium Membership count: ' + countMembresia);
    }
    if(countMembresia>=5){
      console.log('Cliente premium');
    }else{
     console.log('No es cliente premium');
    }
});
 