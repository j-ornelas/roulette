const fs = require('fs');
// this module will strip a list of movies from imdb:
// ex link: https://www.imdb.com/list/ls063659161/?st_dt=&mode=detail&page=10&sort=list_order,asc
const list = ``;
let jumbledList = list.split('lister-item-index unbold text-primary');
let formattedList = {};
let index = 1830;
// console.log(jumbledList[4]);
const formatCodeBlock = (str) => {
  let formatted = '';
  let title = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '<' || str[i] === '>') {
      title = !title;
    }
    else {
      if (title) formatted += str[i];
    }
  }
  if (formatted.length > 4) return formatted;
};

jumbledList.forEach((listItem) => {
  const tempItem = listItem.split('</a>')[0];
  const tempTitle = formatCodeBlock(tempItem).split('    ')[1];
  if (tempTitle) {
    if (index !== 1830) formattedList[index] = tempTitle;
    index++;
  }
});


console.log(formattedList);

fs.appendFile('ew.json', JSON.stringify(formattedList), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
