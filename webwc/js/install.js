let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);

// CODELAB: Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
/**
* Event handler for beforeinstallprompt event.
*   Saves the event & shows install button.
* @param {Event} evt
*/

function saveBeforeInstallPromptEvent(evt) {
    // CODELAB: Add code to save event & show the install button.
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

//CODELAB: Add code to save event & show the install button

/**
* Event handler for butInstall - Does the PWA installation.
*
* @param {Event} evt
*/
function installPWA(evt) {
    // CODELAB: Add code show install prompt & hide the install button.
    deferredInstallPrompt.prompt();
    // Log user response to prompt.
    deferredInstallPrompt.userChoice
        .then((choice) => {
            if (choice.outcome === 'accepted') {
                // Hide the install button, it can't be called twice.
                installButton.setAttribute('hidden', true);
                console.log('User accepted the installation', choice);
            } else {
                console.log('User refuse instakkation', choice);
            }
            deferredInstallPrompt = null;
        });
 }
 
    // Add event listener for appinstalled event
window.addEventListener('appinstalled', logAppInstalled);
/**
 * Event handler for appinstalled event.
 *   Log the installation to analytics or save the event somehow.
 *
 * @param {Event} evt
 */
function logAppInstalled(evt) {
    // Add code to log the event
    console.log('Weather App was installed.', evt);
    installButton.setAttribute('hidden', true);
}
