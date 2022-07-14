const app = new Vue({
  name: 'whatsapp',
  el: "#root",
  data: {
    currentIndex: 0,
    user: {
      name: 'Nome Utente',
      avatar: '_io'
    },
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
      },
      {
        name: 'Fabio',
        avatar: '_2',
      },
      {
        name: 'Samuele',
        avatar: '_3',
      },
      {
        name: 'Luisa',
        avatar: '_4',
      },
    ],
  }
})