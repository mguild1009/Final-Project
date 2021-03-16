
let firebase = require('./firebase')
    exports.handler = async function(event) {
      let whiskeyData = []
      let db = firebase.firestore()
      let querySnapshot = await db.collection('whiskey')
                                  .orderBy('created')
                                  .get()
      let whiskey = querySnapshot.docs
      for (let i=0; i<whiskey.length; i++) {
        let whiskeyName = whiskey[i].Name
        let whiskey = whiskey[i].data()
        whiskeyData.push({
          name: whiskeyName,
          imageUrl: whiskey.imageUrl,
          username: whiskey.username
        })
      }
      return {
        statusCode: 200,
        body: JSON.stringify(whiskeyData)
      }
    }