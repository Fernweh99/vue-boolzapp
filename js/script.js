const app = new Vue({
  name: 'whatsapp',
  el: "#root",
  data: {
    currentIndex: 0,
    currentTextMessage: "",
    user: {
      name: 'Nome Utente',
      avatar: '_io'
    },
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        messages: [
          {
            name: 'User',
            text: 'Hai portato a spasso il cane?',
          },
          {
            name: 'User',
            text: 'Ricordati di dargli da mangiare',
          },
          {
            name: 'Michele',
            text: 'Tutto Fatto!',
          },
        ]
      },
      {
        name: 'Fabio',
        avatar: '_2',
        messages: [
          {
            name: 'User',
            text: 'Hai portato a spasso il cane?',
          },
          {
            name: 'Fabio',
            text: 'Ricordati di dargli da mangiare',
          },
          {
            name: 'Fabio',
            text: 'Ricordati di dargli da mangiare',
          },
          {
            name: 'User',
            text: 'Tutto Fatto!',
          },
        ]
      },
      {
        name: 'Samuele',
        avatar: '_3',
        messages: [
          {
            name: 'Samuele',
            text: 'Hai portato a spasso il cane?',
          },
          {
            name: 'User',
            text: 'Ricordati di dargli da mangiare',
          },
          {
            name: 'Samuele',
            text: 'Tutto Fatto!',
          },
        ]
      },
      {
        name: 'Luisa',
        avatar: '_4',
        messages: [
          {
            name: 'User',
            text: 'Hai portato a spasso il cane?',
          },
          {
            name: 'Luisa',
            text: 'Ricordati di dargli da mangiare',
          },
        ]
      },
    ],
  },
  methods: {
    sendAndReceiveMessage() {
      const mex = this.contacts[this.currentIndex].messages; 
      mex.push({name: 'User', text: this.currentTextMessage});
      this.currentTextMessage = "";
      setTimeout(()=>{
        mex.push({name: this.contacts[this.currentIndex].name, text: 'ok'})
      },1000)
    },
  }
})