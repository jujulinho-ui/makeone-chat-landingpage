window.addEventListener('load', function () {

  // ***** Confere se a biblioteca do Five9 está disponível *****
  if (typeof F9 === 'undefined' || !F9.Chat || !F9.Chat.Wrapper) {
    console.error('Five9 Wrapper não carregou corretamente.');
    return;
  }

  // ***** Inicializa o chat com a configuração original *****
  F9.Chat.Wrapper.init({
    cdn: 'prod',
    useBusinessHours: false,
    languages: { enabled: false, backgroundColor: '#9c00ff' },

    // Campos que o Five9 mostra antes de abrir o chat
    captureFields: [
      { k: 'name', l: 'Nome', p: 'Entre com seu nome' },
      { k: 'email', l: 'Email', p: 'Seu email' },
      { k: 'Question', l: 'Faça uma pergunta', p: '' }
    ],

    // Campo pre-preenchido de campanha
    prepopulatedFields: [
      { k: 'campaign', v: 'Inbound_makeone' }
    ],

    // Configurações visuais do widget
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

  // ***** Se quiser acionar o botão Five9 manualmente *****
  // O Five9 já cria o seu botão (launcher) automaticamente.
  // Este trecho deixa o botão customizado chamar o launcher caso ele exista.
  let btnMakeOne = document.getElementById('openChat');
  if (btnMakeOne) {
    btnMakeOne.addEventListener('click', function () {
      let launcher = document.querySelector('.f9-launcher-button');
      if (launcher) launcher.click();
    });
  }

});
