"use strict"

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function getCharacters() {
  const ul = document.getElementById('charactersList');
  const url = 'http://localhost:3000/https://comicvine.gamespot.com/api/characters?api_key=074d9f0afb3869384ace397fed202ec628546150&format=json&limit=4';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) { 
    let characters = data.results;
    return characters.map(function(character) {
        
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = character.image.icon_url;
      span.innerHTML = `${character.deck}`;
      append(ul, li);
      append(li, img);
      append(li, span);
      
      // const characterLink = document.createElement('a');
      // characterLink.setAttribute('href', 'http://localhost:3000/https://comicvine.gamespot.com/api/origin/4030-3/?api_key=074d9f0afb3869384ace397fed202ec628546150&format=json&limit=4')
      // characterLink.textContent = character.api_detail_url;

      // append(li, characterLink);

    });
  })
  .catch(function(error) {
    console.log(error);
  });
}

// function getIssues(issue) {
//   const url = issue.href;
//   console.log("issue is", issue); 
//   console.log('issue href is', issue.href); 
//   console.log("issue parent node is", issue.parentNode); 
//   fetch(url) 
//   .then(response=> response.json())
//   .then(function(data) {
//     console.log(data);
//   })
// }

// document.addEventListener('click', function(e) {
//   if (e.target && e.target.href !== undefined) {
//     e.preventDefault();
//     getIssues(e.target);
//   }
// })
  

