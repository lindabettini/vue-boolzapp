console.log('Vue ok', Vue);

Vue.config.devtools = true;

const root = new Vue({
  el: '#root',
  data: {
    user: {
      name: 'Linda',
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
        name: 'Pietro',
        avatar: '_4',
      },
    ],
  },
  methods:{    
    
  }

});

