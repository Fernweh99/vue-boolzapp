Vue.config.devtools = true;
const app = new Vue({
  name: 'whatsapp',
  el: "#root",
  data: {
    currentNameIndex: "",
    currentTextMessage: "",
    searchContact: "",
    searchMessage: "",
    searchBarActive: false,
    windowScreen: window.innerWidth,
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
          status: 'sent',
          isActive: false,
        },
        {
          date: '10/01/2020 15:50:00',
          text: 'Ricordati di dargli da mangiare',
          status: 'sent',
          isActive: false,
        },
        {
          date: '10/01/2020 16:15:22',
          text: 'Tutto fatto!',
          status: 'received',
          isActive: false,
        }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        messages: [{
        date: '20/03/2020 16:30:00',
        text: 'Ciao come stai?',
        status: 'sent',
        isActive: false,
      },
      {
        date: '20/03/2020 16:30:55',
        text: 'Bene grazie! Stasera ci vediamo?',
        status: 'received',
        isActive: false,
      },
      {
        date: '20/03/2020 16:35:00',
        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
        status: 'received',
        isActive: false,
      }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        messages: [{
        date: '28/03/2020 10:10:40',
        text: 'La Marianna va in campagna',
        status: 'received',
        isActive: false,
      },
      {
        date: '28/03/2020 10:20:10',
        text: 'Sicuro di non aver sbagliato chat?',
        status: 'sent',
        isActive: false,
      },
      {
        date: '28/03/2020 16:15:22',
        text: 'Ah scusa!',
        status: 'received',
        isActive: false,
      }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        messages: [{
          date: '10/01/2020 15:30:55',
          text: 'Lo sai che ha aperto una nuova pizzeria?',
          status: 'sent',
          isActive: false,
        },
        {
          date: '10/01/2020 15:50:00',
          text: 'Si, ma preferirei andare al cinema',
          status: 'received',
          isActive: false,
        }
        ],
      },
    ],
  },
  computed: {
    getContactsSearch() {
      return this.contacts.filter(contact => {
        const firstname = contact.name.toLowerCase();
        const search = this.searchContact.toLowerCase();
        return (firstname.includes(search)) 
      })
    },
    // getMessageSearch(contact) {
    //   return contact.messages.filter(mex => {
    //     const message = mex.text.toLowerCase();
    //     const search = this.searchMessage.toLowerCase();
    //     return (message.includes(search)) 
    //   })
    // }
  },
  methods: {
    sendAndReceiveMessage() {
      const index = this.contacts.findIndex(contact =>{
        return contact.name === this.currentNameIndex;
      }) 
      const mex = this.contacts[index].messages; 
      mex.push({date: this.getTimeNow(), text: this.currentTextMessage, status: 'sent', isActive: false});

      this.currentTextMessage = "";

      setTimeout(()=>mex.push({date: this.getTimeNow(), text: 'ok', status: 'received', isActive: false}),1000)
    },
    getTimeNow() {
      const date = new Date()
      return date.toLocaleString();
    },
    toggleIsActive(mex) {
      mex.isActive = !mex.isActive;
    },
    toggleSearchBar() {
      this.searchBarActive = !this.searchBarActive;
    },
    deleteMex(contact, index) {
      contact.messages.splice(index, 1);
    },
    getLastAccess(contact) {
      messages = contact.messages;
      for (let i = messages.length - 1; i >= 0; i--) {
        if (messages[i].status === "received" ) {
          return messages[i].date;
        }
      }
    },
    getLastMessage(contact) {
      messages = contact.messages;
      if (messages.length) {
        return messages[messages.length - 1].text;
      }return
    }
  },
  mounted() {
    setInterval(() => {
      this.windowScreen = window.innerWidth;
    }, 300);
  }
})
