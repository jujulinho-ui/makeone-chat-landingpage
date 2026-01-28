<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Chat MakeOne</title>
</head>

<body>

<button id="openChat">💬 Falar com a MakeOne</button>

<script src="https://cdn.prod.us.five9.net/static/stable/chat/wrapper/index.js"></script>
<script>
window.addEventListener('load', function () {

  F9.Chat.Wrapper.init({
    cdn: 'prod',
    useBusinessHours: false,
    languages: { enabled: false, backgroundColor: '#9c00ff' },

    prepopulatedFields: [
      { k: 'campaign', v: 'Inbound_makeone' }
    ],

    messenger: {
      integrationId: '915e768c-c863-40e7-9831-b41ea72936cd',
      soundNotificationEnabled: true,
      embedded: false,
      businessName: 'Five9 By MakeOne',
      businessIconUrl: 'https://makeone.com.br/wp-content/uploads/2023/12/Camada_1.png',
      displayStyle: 'button',
      customColors: {
        brandColor: '#9c00ff',
        conversationColor: '#9a00ff',
        actionColor: '#00c3ff'
      }
    }
  });

  document.getElementById('openChat').addEventListener('click', function () {
    var launcher = document.querySelector('.f9-launcher-button');
    if (launcher) launcher.click();
  });

});
</script>

</body>
</html>
