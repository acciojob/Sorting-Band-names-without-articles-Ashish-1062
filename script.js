// Array of band names
let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to remove articles from band names
function removeArticles(name) {
  const articles = ['a', 'an', 'the'];
  const words = name.split(' ');
  if (articles.includes(words[0].toLowerCase())) {
    words.shift();
  }
  return words.join(' ');
}

// Sort band names in lexicographic order excluding articles
bandNames.sort((a, b) => {
  const nameA = removeArticles(a);
  const nameB = removeArticles(b);
  return nameA.localeCompare(nameB);
});

// Display sorted band names in the ul element
const ul = document.getElementById('band');
bandNames.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});
