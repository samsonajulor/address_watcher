self.addEventListener('push', (e) => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: 'Push notification from address watcher', //the body of the push notification
    image: 'https://pixabay.com/vectors/bell-notification-communication-1096280/',
    icon: 'https://pixabay.com/vectors/bell-notification-communication-1096280/', // icon
  });
});
