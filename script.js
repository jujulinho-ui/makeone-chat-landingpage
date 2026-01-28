window.addEventListener('load', function () {

  // Verifica se a biblioteca Five9 foi carregada
  if (typeof F9 === 'undefined' || !F9.Chat || !F9.Chat.Wrapper) {
    console.error('Five9 Wrapper não carregou.');
    return;
  }

  // Inicializa o widget de chat da Five9
  F9.Chat.Wrapper.init({
    cdn: 'prod',
    useBusinessHours: false,
    languages: { enabled: false, backgroundColor: '#9c00ff' },

    l10n: {
      en: {
        messenger: { customText: {} },
        systemMessages: {
          transferredToParticipant: 'The chat has been transferred to {name}.',
          transferredToGroup: 'That chat has been transferred to group {group}.'
        },
        captureFields: [
          { k: 'name', l: 'Nome', p: 'Entre com seu nome' },
          { k: 'email', l: 'Email', p: 'Seu email' },
          { k: 'Question', l: 'Faça uma pergunta', p: '' }
        ]
      }
    },

    prepopulatedFields: [ { k: 'campaign', v: 'Inbound_makeone' } ],

    messenger: {
      integrationId: '915e768c-c863-40e7-9831-b41ea72936cd',
      soundNotificationEnabled: true,
      transcriptPrintingEnabled: false,
      menuItems: { imageUpload: true, fileUpload: true, shareLocation: true },
      embedded: false,
      setViewportScale: false,
      businessName: 'Five9 By MakeOne',
      businessIconUrl: 'https://makeone.com.br/wp-content/uploads/2023/12/Camada_1.png',
      browserStorage: 'localStorage',
      browserLogLevel: { info: true, debug: true, error: true },
      hideWidgetAfterBusinessHours: false,
      openLinkInSameTab: false,
      fixedHeader: false,
      displayStyle: 'button',
      customColors: { brandColor: '#9c00ff', conversationColor: '#9a00ff', actionColor: '#00c3ff' },
      carouselType: 'default'
    },

    clearMessagesTimeout: 3
  });

});
