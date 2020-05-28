function get_answer(){
    var ans1,ans2,ans3;
    //for ans 1
    if(document.form.para[0].checked)
    {
        ans1= document.form.para[0].value
    }
    else if(document.form.para[1].checked)
    {
        ans1= document.form.para[1].value
    }
    else if(document.form.para[2].checked)
    {
        ans1= document.form.para[2].value
    }
    else
    {
        ans1= document.form.para[3].value
    }

    //for ans2
    if(document.form.link[0].checked)
    {
        ans2= document.form.link[0].value
    }
    else if(document.form.link[1].checked)
    {
        ans2= document.form.link[1].value
    }
    else if(document.form.link[2].checked)
    {
        ans2= document.form.link[2].value
    }
    else
    {
        ans2= document.form.link[3].value
    }
   
  //for ans3

  if(document.form.title[0].checked)
    {
        ans3= document.form.title[0].value
    }
    else if(document.form.title[1].checked)
    {
        ans3= document.form.title[1].value
    }
    else if(document.form.title[2].checked)
    {
        ans3= document.form.title[2].value
    }
    else
    {
        ans3= document.form.title[3].value
    }
var answers=[ans1,ans2,ans3];
var correct_answer = ['b','c','a'];

var total=0,i;
for(i=0;i<3;i++){
 if(answers[i]==correct_answer[i]){
     total = total+1;
 }   
}
alert("Your marks are: "+total);
}

// function countDown(secs,elem){
//  var element = document.getElementById(elem);
//  element.innerHTML="Your Test will be overed in "+secs+" seconds";
//  if(secs<1){
//  clearTimeout(timer);
//  element.innerHTML = '<h2>Test Over!</h2>';
//  element.innerHTML+= '<a href="lessons.html">Main Menu</a>"';
//  }
//  secs--;
//  var timer= setTimeout(countDown("secs","elem"),1000);
// }

// countDown(60,"status");