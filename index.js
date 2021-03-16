let db = firebase.firestore() 
firebase.auth().onAuthStateChanged(async function(user) {

  if (user) {
    // Signed in
    console.log('signed in')



    
  // NOTE! change the background
      db.collection('user').doc(user.uid).set({
      name: user.displayName, 
      email: user.email
    })
  


    let response = await fetch('/.netlify/functions/get_whiskey') 
    let whiskey = await response.json()
    for (let i=0; i<whiskey.length; i++) {
      let whiskey = whiskey[i]
      renderPost(whiskey.Name, whiskey.Age, whiskey.Region, whiskey.imageUrl)

  // NOTE! change the backgroundLoad the whiskey 

    }

    
  document.querySelector('.sign-in-or-sign-out').innerHTML=` 
  <a href="#" class="sign-out text-pink-500 underLine">Sign out</a>
  `

  document.querySelector('.sign-out').addEventListener('click', function(event) { 
    event.preventDefault()
    console.log('signed out')
    firebase.auth().signOut()
    document.location.href='index_dd_5.html'
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
      signInSuccessUrl: 'index_dd_5.html'
    }

    // Starts FirebaseUI Auth
    ui.start('.sign-in-or-sign-out', authUIConfig)
  }
})
