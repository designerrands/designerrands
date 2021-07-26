$(function () {
  $("#nav").load("nav.html");
});

//add jquery code for when things have loaded
var firebaseConfig = {
  apiKey: "AIzaSyBmfzyYzZ2u360-GkvaG4g1xhaC1_jNR08",
  authDomain: "design-errands.firebaseapp.com",
  projectId: "design-errands",
  storageBucket: "design-errands.appspot.com",
  messagingSenderId: "608537664213",
  appId: "1:608537664213:web:e347ed0f0d58481d90605c",
  measurementId: "G-B8SZP2FNZD",
};
// Initialize Firebase
var db;
var app = firebase.initializeApp(firebaseConfig);
firebase.analytics();
db = firebase.firestore(app);

var storage = firebase.storage();
var storageRef = storage.ref();
var homeimagesRef = storageRef.child("homepage");

homeimagesRef
  .listAll()
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
    });
    res.items.forEach((itemRef) => {
      itemRef
        .getDownloadURL()
        .then((url) => {
          var photoContainer = document.getElementById("photo-container");
          var photoDiv = document.createElement("div");

          var img = document.createElement("img");
          img.src = url;

          var essayTitle = document.createElement("p");
          essayTitle.innerHTML = itemRef.name;

          photoContainer.appendChild(photoDiv);
          photoContainer.appendChild(essayTitle);
          photoDiv.appendChild(img);

          db.collection('essays').docs.forEach(
            doc=> {
              update({
                
              })
            }
          )
          
          
          get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
              console.log(doc.data().image.path);
              showImage(doc);
            })
          })
        })
        .catch((error) => {
          // Handle any errors
        });
    });
  })
  .catch((error) => {
    // Uh-oh, an error occurred!
  });

// function showImage(doc) {
//   let photo = document.getElementById('photo');
//   // photo.setAttribute('src', doc.data().link );
//   photo.setAttribute('src',doc.data().image.path );

// }

// db.collection('essays').get().then((snapshot) => {
//   snapshot.docs.forEach(doc => {
//     console.log(doc.data().image.path);
//     showImage(doc);
//   })
// })

let track;
let report;
let reportText;

report = document.getElementById("report");
track = document.getElementById("track");
reportText = document.getElementById("report-text");

report.onmouseover = function () {
  reportText.innerHTML =
    "REPORT YOUR ERRANDS * REPORT YOUR ERRANDS * REPORT YOUR ERRANDS * REPORT YOUR ERRANDS * REPORT YOUR ERRANDS *";
};

report.onmouseleave = function () {
  reportText.innerHTML = "REPORT YOUR ERRANDS";
};
