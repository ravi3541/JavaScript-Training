const link = 
      "https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5";

let global_data={};

const getdata = async() =>{
  await fetch("https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5")
.then((res) =>{
  console.log("API : ",res);
  return res.json();
})
.then((data) =>{
  global_data=data;
  console.log("Data in json format :",global_data);
  
  displayData();
})
.catch((error)=>{
  console.log(error);
});
}





const displayData = () =>{
  console.log("Inside Display Data : ",global_data);
  let rt_table=document.getElementById("rt-left-body");
    rt_table.innerHTML="";

  for(let x in global_data){

    
    let fname = global_data[x].first_name;
    let lname = global_data[x].last_name;
    let uname = global_data[x].username;
    let emptitle = global_data[x].employment.title;
    let country = global_data[x].address.country;
 
    //row="<tr><td>"+ global_data[x].first_name+" "+ global_data[x].last_name +"</td></tr>"
    console.log("Record no.",x);
    row=`<tr><td><div class='userdetails' onclick=loadData(${x})><h4>Name: <span>${fname} ${lname}</span> <br> Username:<span>${uname}</span>    <br>Employee Title: <span>${emptitle}</span> <br>Country: <span>${country}</span> </h4></div></td><td><h4><i style="font-size:1.7rem" class="fa fa-trash-o deletebtn" onclick=deleteUser(${x})></i></h4></td></tr>`;
    
    rt_table.innerHTML+=row;
  }

for (let y in global_data){
  loadData(y);
  break;
}



}






const loadData = (index) =>{
  let user=global_data[index];

  document.getElementById("avatar").src=user.avatar;
  document.getElementById("id").innerHTML=user.id;
  document.getElementById("uid").innerHTML=user.uid;
  document.getElementById("password").innerHTML=user.password;
  document.getElementById("name").innerHTML=user.first_name + " " + global_data[index].last_name;
  document.getElementById("username").innerHTML=user.username;
  document.getElementById("email").innerHTML=user.email;
  document.getElementById("gender").innerHTML=user.gender;
  document.getElementById("mobile").innerHTML=user.phone_number;
  document.getElementById("sin").innerHTML=global_data[index].social_insurance_number;
  document.getElementById("dob").innerHTML=user.date_of_birth;
  document.getElementById("emptitle").innerHTML=user.employment.title;
  document.getElementById("addr").innerHTML="City: " + user.address.city + "<br>State:" + user.address.state + "<br>Country: " + user.address.country;
  document.getElementById("ccno").innerHTML=user.credit_card.cc_number;
  document.getElementById("subscription").innerHTML="Plan: " + user.subscription.plan + "<br>Status: " + user.subscription.status;

  //console.log("E title",global_data[index][employment].title)
  //alert("Display user "+ index +" id  "+ global_data[index].id);
  greet(user.first_name);

    
  
}






const greet = (uname) =>{
  let date = new Date()
  let hr = date.getHours()

if (hr < 12) {
  document.getElementById("greeting").innerHTML="Good Morning " + uname ;
} else if (hr < 16) {
  document.getElementById("greeting").innerHTML="Good Afternoon " + uname ;
} else {
  document.getElementById("greeting").innerHTML="Good Evening " + uname ;
}
}





const deleteUser = (index) =>{
  
  let warning="Are You Sure you want to delete this record";

  if(confirm(warning)==true){
    delete global_data[index];
  }
  
  console.log("After Delete : ",global_data)
  displayData();
  
}



