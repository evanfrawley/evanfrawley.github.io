  /**
   * Created by Evan on 12/20/2016.
   */
  import firebase from 'firebase';

  var getSiteContent = function () {
    let contentRef = firebase.database().ref("sections");
    return (contentRef.once("value").then((snapshot) => {
      return snapshot.val();
    }));
  }

  export {getSiteContent};