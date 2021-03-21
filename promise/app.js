// saves URL with image links
const URL =
  "https://us-central1-codesmith-curriculum-server.cloudfunctions.net/app/images";

// creates promise requesting the information from URL
const promise = fetch(URL);

const mainDIV = document.getElementById("div");

promise
  // first then turns the information received into an array
  .then((elem) => {
    const returnedPromise = elem.json();
    return returnedPromise;
  })
  // saves array under created variable
  .then((elem) => {
    elem.forEach((URL) => {
      if (!URL.includes("fake")) {
        let img = document.createElement("img");
        img.src = URL;
        mainDIV.appendChild(img);
      }
    });
  });
