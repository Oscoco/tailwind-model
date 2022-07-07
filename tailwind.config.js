module.exports = {
    content:[
      'index.html',
    ],
    darkMode: 'media', // or 'media' or 'class
    theme:{
      extend: {
        backgroundImage: theme  =>({
          'home-background': url(),  //Aqui mandamos a llamar las imagnes opor el nombre que nosotros les damos
        }),
      }
    },
    variants:{
      extend: {},
    },
    plugins: [],
}