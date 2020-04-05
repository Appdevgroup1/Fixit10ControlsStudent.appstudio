let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

favFoods.onshow=function(){
  lstFoods.clear()
  for (i = 0; i <= goodFoods.length - 1; i++) 
        lstFoods.addItem(goodFoods[i])
}
lstFoods.onclick=function(choice){
  if (typeof(choice) == "object") {
  return
} else {
  let textChoice = NSB.$("lstFoods_" + choice).textContent
  NSB.MsgBox(`You chose ${textChoice}, that is a great choice`)
  }
}

btnGoDessert.onclick=function(){
  ChangeForm(dessertVoting)
}
