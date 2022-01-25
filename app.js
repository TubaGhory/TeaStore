// AOS.init({
//     offset: 400, // offset (in px) from the original trigger point
//     delay: 0, // values from 0 to 3000, with step 50ms
//     duration: 1000 // values from 0 to 3000, with step 50ms
//   });


let receipt_sum=0;



function Add_Items() {
    var name=document.getElementById('Item_Name');
    var price=document.getElementById('Item_Price');
    var unit=document.getElementById('Item_Qty');

    var item={
        Item_Name:name.value,
        Item_Price:price.value,
        Item_Measure_Unit:unit.value
    }

    //condition for item already present or not
    firebase.database().ref('Items').push(item);
    alert("Item added successfully. Now insert its ingredients");
    name.value='';
    price.value='';
    unit.value='';
    
    var ing = document.getElementsByClassName("ing");
for (let i = 0; i < ing.length; i++) {
  ing[i].style.display = "block";
}
   
}






