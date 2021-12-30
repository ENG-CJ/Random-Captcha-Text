// authentications
let user='abdul';
let passcode=123;

// values from HTML
let username=document.getElementById('user');
let password=document.getElementById('pass')
let captcha_input=document.getElementById('captcha-input');
let captcha_random=document.getElementById('captcha-random');

// button
let login=document.getElementById('btn')
// result value from HTML
let result=document.getElementById('result')

// event to the button
login.addEventListener('click',signIn)

// captcha lists
let captcha=[
    "$QgHLK0",
    "/QOLka&",
    "@KUKP9",
    "UPjut",
    "XUNIL@",
    "capXoUl",
    "%GujaKG",
    "PiLokY",
    "^$Klnzs",
    "xCv8ka",
    "loUinza"
]


// error text
let error='Incorrect username Or password'
// random from captcha list
let random=Math.floor(Math.random()*captcha.length);


// function login
function signIn(){
    if (username.value=='' || password.value=='' || captcha_input.value==''){
        
        // adding style to the body using bootstrap class
        document.body.classList.add('bg-warning')
        result.classList.add('text-warning')
       result.innerHTML='Inputs Required';
    
    }
    else if (username.value !=user || password.value !=passcode){
         document.body.classList.add('bg-danger')
         result.classList.add('text-danger')
        result.innerHTML=error
        username.value='';
        password.value=''
       
      
       
    }else if (captcha_input.value != captcha[random]){
        result.classList.add('text-danger')
        document.body.classList.add('bg-danger')
        result.innerHTML='Invalid Captcha'
    }else{
        // removing current classes
        result.classList.remove('text-danger')
        document.body.classList.remove('bg-danger')
        
        // adding class from bootstrap class if form validated
         result.classList.add('text-success')
        document.body.classList.add('bg-success')
        result.innerHTML='Passed Validation'
       
    }
}


// function that ramdomly captcha
function randomNumber(){
    captcha_random.innerHTML=captcha[random]
}
randomNumber()