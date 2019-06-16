var array = [1,2,3];
var NumMoney = 10;

function onRoll() {
  addMoney();
  PrintValues(3);
  document.getElementById('MoneyText').innerHTML = NumMoney;
}

function PrintValues(Times) {
  var bool = true;
  if (NumMoney > 0) {
    for (var i = 1; i < Times + 1; i++) {
        var Number = Math.round(randomRange( 1, 6 ));
        array[i] = Number;
    }
    if(array[0] == array[1] && array[1] == array[2]){
      NumMoney += 10;
      bool = false;
    }else if (array[0] == array[1] || array[1] == array[2] || array[0] == array[2] && bool) {
      NumMoney += 5;
    }
    NumMoney--;
    for (var i = 1; i < Times + 1; i++) {
      document.getElementById(i).innerHTML = array[i];
    }
  }

}

function randomRange(min, max) {
  return (Math.random() * (max - min)) + min;
}

function addMoney() {
  var val = Math.round(document.getElementById('Money').value) ;
  NumMoney += val;
  document.getElementById('Money').value = 0;
}
