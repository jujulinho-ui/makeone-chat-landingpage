window.addEventListener('load', function () {

  if (typeof F9 === 'undefined' || !F9.Chat || !F9.Chat.Wrapper) {
    console.error('Five9 Wrapper não carregou.');
    return;
  }

  F9.Chat.Wrapper.init({
    cdn: 'prod',
    useBusinessHours: false,
    languages: { enabled: false, backgroundColor: '#9c00ff' },

    // === Campos que exigem captura de dados antes do chat ===
    captureFields: [
      { k: 'name', l: 'Nome', p: 'Entre com seu nome' },
      { k: 'email', l: 'Email', p: 'Seu email' },
      { k: 'Question', l: 'Faça uma pergunta', p: '' }
    ],

    prepopulatedFields: [
      { k: 'campaign', v: 'Inbound_makeone' }
    ],

    messenger: {
      integrationId: '915e768c-c863-40e7-9831-b41ea72936cd',
      soundNotificationEnabled: true,
      transcriptPrintingEnabled: false,
      menuItems: {
        imageUpload: true,
        fileUpload: true,
        shareLocation: true
      },
      embedded: false,
      businessName: 'Five9 By MakeOne',
      businessIconUrl: 'assets/logo-makeone.png',
      displayStyle: 'button',
      customColors: {
        brandColor: '#9c00ff',
        conversationColor: '#9a00ff',
        actionColor: '#00c3ff'
      }
    },

    clearMessagesTimeout: 3
  });

  document.getElementById('openChat').addEventListener('click', function () {
    var launcher = document.querySelector('.f9-launcher-button');
    if (launcher) launcher.click();
  });

});
