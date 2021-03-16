let db = firebase.firestore() 
firebase.auth().onAuthStateChanged(async function(user) {

  if (user) {
    // Signed in
    console.log('signed in')


  // NOTE! change the background
    document.body.style.backgroundColor = "purple";

      db.collection('user').doc(user.uid).set({
      name: user.displayName, 
      email: user.email
    })
    
      let response = await fetch('/.netlify/functions/get_whiskey') // < change this to get_whiskey
      let posts = await response.json()
      for (let i=0; i<posts.length; i++) {
        let post = posts[i]
        renderPost(post.id, post.username, post.imageUrl, post.likes)
      


      renderPost(whiskey.Name, whiskey.Age, whiskey.Region, whiskey.imageUrl)



      document.querySelector('.whiskey').insertAdjacentHTML('beforeend', `
            <div class="todo-${whiskeyName} py-4 text-xl border-b-2 border-purple-500 w-full">
              <a href="#" class="done p-2 text-sm bg-green-500 text-white">✓</a>
              ${whiskey.Name}
              </div>
          `)

  // NOTE! change the backgroundLoad the whiskey 

    }

    
  document.querySelector('.sign-in-or-sign-out').innerHTML=` 
  <a href="#" class="sign-out text-pink-500 underLine">Sign out</a>
  `

  document.querySelector('.sign-out').addEventListener('click', function(event) { 
    event.preventDefault()
    console.log('signed out')
    firebase.auth().signOut()
    document.location.href='index.html'
  })
  
}
  else {
    // Signed out
      
    // Initializes FirebaseUI Auth
    let ui = new firebaseui.auth.AuthUI(firebase.auth())

    // FirebaseUI configuration
    let authUIConfig = {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: 'index.html'
    }

    // Starts FirebaseUI Auth
    ui.start('.sign-in-or-sign-out', authUIConfig)
  }
})
