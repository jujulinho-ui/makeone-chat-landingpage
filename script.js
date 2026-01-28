window.addEventListener('load', function () {

  function initFive9Chat() {
    if (typeof F9 === 'undefined' || !F9.Chat || !F9.Chat.Wrapper) {
      console.error('Five9 não carregado ainda.');
      return false;
    }

    F9.Chat.Wrapper.init({
      cdn: 'prod',
      useBusinessHours: false,
      languages: { enabled: false, backgroundColor: '#9c00ff' },
      prepopulatedFields: [{ k: 'campaign', v: 'Inbound_makeone' }],
      messenger: {
        integrationId: '915e768c-c863-40e7-9831-b41ea72936cd',
        soundNotificationEnabled: true,
        embedded: false,
        displayStyle: 'button',
        customColors: {
          brandColor: '#9c00ff',
          conversationColor: '#9a00ff',
          actionColor: '#00c3ff'
        },
        businessName: 'Five9 By MakeOne',
        businessIconUrl: 'https://makeone.com.br/wp-content/uploads/2023/12/Camada_1.png'
      },
      clearMessagesTimeout: 3
    });

    return true;
  }

  function waitForFive9Ready(callback) {
    var attempts = 0;
    var interval = setInterval(function () {
      if (initFive9Chat()) {
        clearInterval(interval);
        callback();
      }
      attempts++;
      if (attempts > 30) {
        clearInterval(interval);
        console.error('Five9 nunca ficou pronto depois de esperar.');
      }
    }, 500);
  }

  waitForFive9Ready(function () {
    var btn = document.getElementById('openChatButton');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var launcher = document.querySelector('.f9-launcher-button');
      if (launcher) launcher.click();
      else console.warn('Launcher Five9 não encontrado para abrir chat.');
    });
  });

});
