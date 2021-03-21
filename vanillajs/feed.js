const users = [
  ['images/bojack.png', 'bojackhorseman'], 
  ['images/mrpb.png', 'misterpb'], 
  ['images/diane.png', 'diane'], 
  ['images/todd.png', 'thetodd']
];



function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const returnObj = JSON.parse(this.responseText);
      returnObj.forEach(elem => {
        const randomNum = Math.floor(Math.random() * 4);
        if (!elem.includes('fakeurl')) {
          //creates main DIV container for image post 
          const div = document.createElement('div');
          div.setAttribute('class', 'feed-post');

          //creates secondary div container for profile pic and username
          const profilePicUserName = document.createElement('div');
          profilePicUserName.setAttribute('class', 'feed-poster-info');

          //adds user profilepic 
          const profilepicdiv = document.createElement('div');
          const profilepic = document.createElement('img');
          profilepic.setAttribute('src', users[randomNum][0]);
          profilepic.setAttribute('width', '50px');
          profilepic.setAttribute('class', 'profilepic');
          profilepic.setAttribute('padding', '10px');
          profilepicdiv.appendChild(profilepic);
          profilePicUserName.appendChild(profilepicdiv);

          //adds username 
          const usernamediv = document.createElement('div');
          const username = document.createElement('a');
          username.setAttribute('href', '');
          username.innerHTML = users[randomNum][1] + '<br>';
          username.setAttribute('class', 'feedusername');
          usernamediv.appendChild(username);
          profilePicUserName.appendChild(usernamediv);

          //appends secondary div to main div
          div.appendChild(profilePicUserName);
        
          
          //creates img from server 
          const postImg = document.createElement('img');
          postImg.setAttribute('src', elem);
          postImg.setAttribute('width', '100%');


          //adds img to div
          div.appendChild(postImg);


          //creates bottom div
          const bottomDiv = document.createElement('div');
          bottomDiv.setAttribute('display', 'grid');
          bottomDiv.setAttribute('grid-template-rows', '30px 50px 30px');

          // bottom div 


          //adds post DIV to overall feed div
          document.getElementById('posts').appendChild(div);
        }
      });
    }
  };
  xhttp.open('GET', 'https://us-central1-codesmith-curriculum-server.cloudfunctions.net/app/images', true);
  xhttp.send();
}