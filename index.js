//accessing all the elements from the HTMl file using DOM
const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("results-div");
//made two functions the prints either invalid or valid user number in the display
const inValid=()=> output.innerText = `Invalid US number: ${input.value}`;
const valid=()=> output.innerText = `Valid US number: ${input.value}`;
})
//final test to kick out all other invalid numbers by checking its parenthesis
const test3=(str)=>{
    let pra = 0;
  str = Array.from(str);
  for(let i=0;i<str.length;i++){
    if(/\(|\)/.test(str[i])){
      pra++;
    }
  }
  console.log(pra);
  if(pra == 0){
    valid();
  }else if(pra == 1){
    inValid();
  }else if(pra == 2){
    if(str[str.length-1] == ")"){
      inValid();
    }else{
      valid();
    }
  }else{
      invalid();
    }
}
//conducting a test to verify that the number would match the pattern of US Sysytem 
const test2=(str)=>{
  str=str.join("");
  let newRegex=/(1\(?\d{3}\)?-?\d{3}-?\d{4})|(\d{10})|(\(?\d{3}\)?-?\d{3}-?\d{4})/;

  if(newRegex.test(str)){
    test3(str);
    // valid();
}else{
    inValid();
  }
}
//conducting a test to verify if the input contains 10 or 11 numbers
const test1=(str)=>{
  let numCount = 0;
  for(let i=0;i<str.length;i++){
    if(/\d/.test(str[i])){
      numCount++;
    }
  }
  if(numCount == 11){
    if(str[0] != 1){
       inValid();
    }else{
        test2(str);
    }
  }else if(numCount == 10){
       test2(str);
  }else {
      inValid();
  }
}
/**
 inserted an event listener to the check button that checks wheather 
 the given number is a valid us number by going through multiple tests */
checkBtn.addEventListener("click" , (e)=>{
  e.preventDefault();
  let val = input.value;
  if(val == ""){
    alert("Please provide a phone number");
  }else{
    //converted the string into an array 
    val = Array.from(val);
    val = val.filter((str)=> str!=" ");
    test1(val);
  }
  
})
//inserted an event listener to the clear button that clears all the input and output
clearBtn.addEventListener("click" , ()=>{
  input.value = "";
  output.innerText = "";
/** example for us numbers 
 * Valid:
1 555-555-5555
1 (555) 555-5555
1(555)555-5555
1 555 555 5555
5555555555
555-555-5555
(555)555-5555

*Invalid
11 555-555-5555
55 55-55-555-5
(555)5(55?)-5555
(555-555-5555
*/