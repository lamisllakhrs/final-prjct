//choosing level 
const button1=document.querySelector ('#baby_mode')
const button2=document.querySelector ('#normal_mode')
const button3=document.querySelector ('#hard_mode')

//main component 
const selection=document.querySelector ('.selection')
const gamestate =document.querySelector ('.game-state')
const submit =document.querySelector ('#submit')
const answer =document.querySelector ('#answer')

//phase.game
const loading =document.querySelector ('.dice_active')
const stand_by =document.querySelector ('.stand_by')
const result =document.querySelector ('.result')

//stats component
const live =document.querySelector ('#life')
const score =document.querySelector ('#score')

//result component
const resultext =document.querySelector ('#result-X')
const resul_emoji =document.querySelector ('#result_emoji')
const  result_expected =document.querySelector ('#result_expected')
const   result_guess  =document.querySelector ('#result_guess')
 
//main variables
let level 
let lives=0
let scoring=0
let guess

//functions
const checklife=()=>{
    if (lives>0){
live.innerHTML="lives:"
for(let i=0;i<lives;i++){
    live.innerHTML += "❤";
}    }else{
    resultext.innerHTML="you lost!"
    resul_emoji.innerHTML="😓" 
    result_expected.innerHTML="not to die"
    result_guess.innerHTML="you died..!"    
    stand_by.style.display="none"
    result.style.display="flex"
}
}
const checkscore=()=>{
    if (scoring===15){ resultext.innerHTML="you won!"
    resul_emoji.innerHTML="😎" 
    result_expected.innerHTML="to get the highest score"
    result_guess.innerHTML="you won"    
    stand_by.style.display="none"
    result.style.display="flex"
}else{score.innerHTML=`score:${scoring}`
}
}
const load = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
}
const newguess= async() =>{
    submit.setAttribute('disabled','')
    loading.style.display="flex"
    stand_by.style.display="none"
    result.style.display="none"
    guess=Math.floor(Math.random()*10+1)
    await load()
    loading.style.display="none"
    stand_by.style.display="flex"
    submit.removeAttribute('disabled')
}
  const checkguess= async(Eguess)=>{
 submit.setAttribute('disabled','')
 if(parseInt(Eguess) === guess){
    resultext.innerHTML="you got a point!"
    resul_emoji.innerHTML="😎" 
    result_expected.innerHTML=`the result expected is ${guess}`
    result_guess.innerHTML=`the result guess is ${Eguess}`    
    stand_by.style.display="none"
    result.style.display="flex"
    answer.value=""
    scoring=scoring+1
    checklife();
 }
 else{
        resultext.innerHTML="you got it wrong!"
    resul_emoji.innerHTML="😎" 
    result_expected.innerHTML=`the result expected is ${guess}`
    result_guess.innerHTML=`the result guess is ${Eguess}`    
    stand_by.style.display="none"
    result.style.display="flex"
    answer.value=""
    lives=lives-1
    checkscore();
 }
 await load()
 if(lives===0 || score===15)
 {

 }
 else{
    newguess()
 }
  }
  const gamestart=async(lvl)=>{
    level=lvl
    if(level===1){lives=5}
    else if(level===2)
{
    lives=4
}  else{lives=1}
checklife()
selection.classList.add('active')
gamestate.classList.add('active')
newguess()
  }
button1.addEventListener('click',()=>{
    gamestart(1)
})
button2.addEventListener('click',()=>{
    gamestart(2)
})
button3.addEventListener('click',()=>{
    gamestart(3)
})
submit.addEventListener('click',()=>{
    if(answer.value!=""){
        let x=answer.value
        checkguess(x)
    }
    else{
        alert('plase eenter a guess')
    }
})











