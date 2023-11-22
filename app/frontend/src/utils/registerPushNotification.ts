import base64ToUint8Array from './base64ToUint8Array';

async function registerPushNotification(address: string) {
  const register = await navigator.serviceWorker.register('./worker.js', {
    scope: '/',
  });

  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,

    applicationServerKey: await base64ToUint8Array(import.meta.env.VITE_PUB_VAPID_KEY),
  });

  console.log('Push registration successful, subscription:', subscription);

  await fetch(`${import.meta.env.VITE_API_URL}/enable_push`, {
    method: 'POST',
    body: JSON.stringify({ address, subscription }),
    headers: {
      'content-type': 'application/json',
    },
  });
}

export default registerPushNotification;
