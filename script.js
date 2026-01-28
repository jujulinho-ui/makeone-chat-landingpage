window.addEventListener("load", function () {
  // Verifica se o wrapper está carregado
  if (typeof F9 === "undefined" || !F9.Chat || !F9.Chat.Wrapper) {
    console.error("Five9 Wrapper não carregado.");
    return;
  }

  // Inicializa o chat
  F9.Chat.Wrapper.init({
    cdn: "prod",
    useBusinessHours: false,
    languages: { enabled: false, backgroundColor: "#9c00ff" },
    prepopulatedFields: [{ k: "campaign", v: "Inbound_makeone" }],
    messenger: {
      integrationId: "915e768c-c863-40e7-9831-b41ea72936cd",
      soundNotificationEnabled: true,
      embedded: false,
      displayStyle: "button",
      customColors: {
        brandColor: "#9c00ff",
        conversationColor: "#9a00ff",
        actionColor: "#00c3ff",
      },
      businessName: "Five9 By MakeOne",
      businessIconUrl:
        "https://makeone.com.br/wp-content/uploads/2023/12/Camada_1.png",
    },
    clearMessagesTimeout: 3,
  });

  // Função para abrir o chat diretamente
  function openFive9Chat() {
    try {
      F9.Chat.Wrapper.open(); // Tenta abrir diretamente
    } catch (err) {
      console.warn("Erro ao abrir chat diretamente:", err);
    }
  }

  // Associa ao botão customizado
  document
    .getElementById("openChatButton")
    .addEventListener("click", function () {
      openFive9Chat();
    });
});
