document.onload = indexFinder();

function indexFinder() {
  let langages = ['Javascript', 'PHP', 'MySQL', 'C-Sharp', 'Html', 'CSS'];
  let indexNb = langages.indexOf('C-Sharp');
  alert('Index de "C-Sharp" dans : ' + '[' + langages + ']' + ' = ' + indexNb);
}
