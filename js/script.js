Vue.config.devtools = true;
const app = new Vue({
  name: 'whatsapp',
  el: "#root",
  data: {
    currentNameIndex: "Michele",
    currentTextMessage: "",
    textSearch: "",
    user: {
      name: 'Nome Utente',
      avatar: '_io'
    },
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        messages: [{
          date: '10/01/2020 15:30:55',
          text: 'Hai portato a spasso il cane?',
          status: 'sent'
        },
        {
          date: '10/01/2020 15:50:00',
          text: 'Ricordati di dargli da mangiare',
          status: 'sent'
        },
        {
          date: '10/01/2020 16:15:22',
          text: 'Tutto fatto!',
          status: 'received'
        }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        messages: [{
        date: '20/03/2020 16:30:00',
        text: 'Ciao come stai?',
        status: 'sent'
      },
      {
        date: '20/03/2020 16:30:55',
        text: 'Bene grazie! Stasera ci vediamo?',
        status: 'received'
      },
      {
        date: '20/03/2020 16:35:00',
        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
        status: 'received'
      }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        messages: [{
        date: '28/03/2020 10:10:40',
        text: 'La Marianna va in campagna',
        status: 'received'
      },
      {
        date: '28/03/2020 10:20:10',
        text: 'Sicuro di non aver sbagliato chat?',
        status: 'sent'
      },
      {
        date: '28/03/2020 16:15:22',
        text: 'Ah scusa!',
        status: 'received'
      }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        messages: [{
    date: '10/01/2020 15:30:55',
    text: 'Lo sai che ha aperto una nuova pizzeria?',
    status: 'sent'
  },
  {
    date: '10/01/2020 15:50:00',
    text: 'Si, ma preferirei andare al cinema',
    status: 'received'
  }
        ],
      },
    ],
  },
  computed: {
    getContactsSearch() {
      return this.contacts.filter(contact => {
        const firstname = contact.name.toLowerCase();
        const search = this.textSearch.toLowerCase();
        return (firstname.includes(search)) 
      })
    },
  },
  methods: {
    sendAndReceiveMessage() {
      const index = this.contacts.findIndex(contact =>{
        return contact.name === this.currentNameIndex;
      }) 
      const mex = this.contacts[index].messages; 
      mex.push({date: this.getTimeNow(), text: this.currentTextMessage, status: 'sent'});
      this.currentTextMessage = "";
      setTimeout(()=>{
        mex.push({date: this.getTimeNow(), text: 'ok', status: 'received'});
      },1000)
    },
    getTimeNow() {
      const date = new Date()
      return date.toLocaleString();
    },
  }
})
