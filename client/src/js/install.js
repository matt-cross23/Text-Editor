const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  divInstall.classList.toggle('hidden', false);  
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('installed-clicked');
    const promptEvent = window.deferredPrompt
if(!promptEvent){
    return;
}
promptEvent.prompt();
const result = await promptEvent.userChoice;
console.log('ya!', result)
window.deferredPrompt = null;
dicInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log("app is installed!");
    window.deferredPrompt = null
});
