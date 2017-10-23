
    let firebase = null;
    const configs = [{"apiKey":"AIzaSyB1jjieU2s4InmIu8OWg8Twv208gqcTou8","authDomain":"devfest-baguio.firebaseapp.com","databaseURL":"https://devfest-baguio.firebaseio.com","projectId":"devfest-baguio","storageBucket":"devfest-baguio.appspot.com","messagingSenderId":"179728411100"}];
    import(/* webpackChunkName: 'firebase' */ 'firebase').then(sdk => {
      firebase = sdk;
      configs.forEach(config => {
        if (config.name) {
          firebase.initializeApp(config, name);
        } else {
          firebase.initializeApp(config);
        }
      });
      window.firebase = firebase;
      window.dispatchEvent(new window.CustomEvent('firebase-initialized', { detail: firebase }));
    })
    const firebaseConfig = configs;
    export default firebase;
    export { firebaseConfig };
