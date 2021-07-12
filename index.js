function calc() {
  let num = Number(document.getElementById('num').value);
  let numd = Number(document.getElementById('numd').value);
  var result;

  let sc = document.querySelector('#sc');
  let select = sc.options[sc.selectedIndex].value;

  if (select === 'soma') {
    result = num + numd;
  } else if (select === 'subtracao') {
    result = num - numd;
  } else if (select === 'multiplicacao') {
    result = num * numd;
  } else if (select === 'divisao') {
    result = num / numd;
  };
  if (!result) result = 0;
  if (result === 'infinity') result = 'infinito';
  document.querySelector('#result').innerHTML = `O resultado da operação é: <a style="color: lightgreen;">${result}</a>`;
};