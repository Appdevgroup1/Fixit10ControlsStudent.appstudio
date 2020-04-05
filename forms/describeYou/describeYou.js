


rdoDescribe.onclick=function(){

   if (rdoDescribe.value == 0) {  
      lblDescribe.textContent = ("I would agree that you are an optimistic person too!")
  } else if (rdoDescribe.value == 1) {
      lblDescribe.textContent = ("I would agree that you are a pessimistic person too!")
  } else if (rdoDescribe.value == 2) {
     lblDescribe.textContent = ("I would agree that you are a trusting person too!")
  } else (rdoDescribe.value == 3) 
     lblDescribe.textContent = ("I would agree that you are an envious person too!")
  
}

btnExercises.onclick=function(){
  ChangeForm(favExercises)
}
