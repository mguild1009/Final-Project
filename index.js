firebase.auth().onAuthStateChanged(async function(user) {



  if (user) {
    // Signed in
    console.log('signed in')

    let db = firebase.firestore() 

    db.collection('user').doc(user.uid).set({ // DD: Create a new collection named 'user' and take the below variables from the website as documents in the collection
      name: user.displayName, 
      email: user.email
    })

  document.querySelector('.sign-in-or-sign-out').innerHTML=` 
  <a href="#" class="sign-out text-pink-500 underLine">Sign out</a>
  `

  document.querySelector('.sign-out').addEventListener('click', function(event) { 
    event.preventDefault()
    console.log('signed out')
    firebase.auth().signOut()
    document.location.href='index_dd_4.html'
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
      signInSuccessUrl: 'index_dd_4.html'
    }

    // Starts FirebaseUI Auth
    ui.start('.sign-in-or-sign-out', authUIConfig)
  }
})
