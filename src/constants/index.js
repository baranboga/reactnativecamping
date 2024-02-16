export const sortCategoryData = ['Hepsi', 'Popüler', 'Tavsiye', 'Daha fazla'];

export const categoriesData = [
    {
        title: 'Kış',
        image: require('../../assets/images/kıs.jpg')
    },
    {
        title: 'Dağ',
        image: require('../../assets/images/dag.jpeg')
    },
    {
        title: 'Deniz',
        image: require('../../assets/images/deniz.jpg')
    },
    {
        title: 'Orman',
        image: require('../../assets/images/orman.jpeg')
    },
    
]
export const destinationData = [
    {
        title: 'Tekirdağ/Uçmakdere',
        duration: '12 Days',
        distance: '400 KM',
        weather: '20 C',
        price: 1200,
        shortDescription: "Uçmakdere Şarköy ilçesine bağlı bir mahallesi. Tekirdağ il sınırları içerisinde yer almaktadır.",
        longDescription: "Uçmakdere Şarköy ilçesine bağlı bir mahallesi. Tekirdağ il sınırları içerisinde yer almaktadır ve Marmara Denizi'ne kıyısı bulunmaktadır.",
        image: require('../../assets/images/ucmak.jpg')
    },
    {
        title: 'Bolu/Pürenli Yaylası',
        duration: '7 Days',
        distance: '450 KM',
        weather: '30 C',
        price: 3000,
        shortDescription: "Pürenli yaylası, doğal güzelliklerle dolu Düzce'nin en güzel yaylalarından biri.",
        longDescription: "Pürenli yaylası, doğal güzelliklerle dolu Düzce'nin en güzel yaylalarından biri. Gölyaka İlçesine bağlı olan Pürenli yaylası doğa ile başbaşa kamp alanı.",
        image: require('../../assets/images/purenli.jpg')
    },
    
    {
        title: 'Datça/Akvaryum koyu',
        duration: '5 Days',
        distance: '299 KM',
        weather: '14 C',
        price: 1000,
        shortDescription: "Datça Akvaryum Koyu, Datça Merkez'e 25 km mesafede bulunan Palamutbükü Mevkii'nde yer almaktadır.",
        longDescription: "Datça Akvaryum Koyu, Datça Merkez'e 25 km mesafede bulunan Palamutbükü Mevkii'nde yer almaktadır.",
        image: require('../../assets/images/akvaryum.jpg')
    },
    {
        title: 'Karabük/Yenice Ormanları',
        duration: '20 Days',
        distance: '604 KM',
        weather: '34 C',
        price: 400,
        shortDescription: "Her mevsim gidilebilecek bir yer olan Yenice Ormanları için belediye tarafından çalışmalar yapılmıştır.",
        longDescription: "Her mevsim gidilebilecek bir yer olan Yenice Ormanları için belediye tarafından çalışmalar yapılmıştır. 5 kamplı, 15 yürüyüş ve 7 bisiklet rotası mevcuttur.",
        image: require('../../assets/images/kıs.jpg')
    },
    {
        title: 'Balıkesir/Kazdağları',
        duration: '20 Days',
        distance: '604 KM',
        weather: '34 C',
        price: 400,
        shortDescription: "Kazdağları, eski adıyla İda Dağı, Türkiye'nin kuzeybatısında yer alan bir bölge.",
        longDescription: "Kazdağları, eski adıyla İda Dağı, Türkiye'nin kuzeybatısında yer alan bir bölge. Çanakkale ve Balıkesir şehirlerinin sınırında diyebiliriz.",
        image: require('../../assets/images/kaz.jpg')
    },
    {
        title: 'Bolu/Yedigöller',
        duration: '20 Days',
        distance: '604 KM',
        weather: '34 C',
        price: 400,
        shortDescription: "Özellikleri: 1636 Ha. büyüklüğündeki Yedigöller havzasıdır. ",
        longDescription: "Özellikleri: 1636 Ha. büyüklüğündeki Yedigöller havzası, 1965 yılında MİLLİ PARK olarak korunmaya alınmıştır. ",
        image: require('../../assets/images/yedi.jpg')
    },
    {
        title: 'Muğla/Kabakkoyu',
        duration: '20 Days',
        distance: '604 KM',
        weather: '34 C',
        price: 400,
        shortDescription: "Türkiye'nin nadide illerinden olan Muğla'nın Fethiye ilçesinde yer alıyor. ",
        longDescription: "Türkiye'nin nadide illerinden olan Muğla'nın Fethiye ilçesinde yer alıyor. Kabak Koyu, Babadağ eteklerinde bulunan muhteşem bir koy.",
        image: require('../../assets/images/kabak.webp')
    },
    {
        title: 'Antalya/Olympos',
        duration: '20 Days',
        distance: '604 KM',
        weather: '34 C',
        price: 400,
        shortDescription: "Beydağları-Olympos Milli Parkı sınırları içindedır.",
        longDescription: "Beydağları-Olympos Milli Parkı sınırları içindedır. Kesin kuruluş tarihi bilinmemekle birlikte İÖ 167–168 yılarında basılan Likya Birlik sikkelerinde adı geçen yer",
        image: require('../../assets/images/olym.jpg')
    },
]

export const cartItems = [
    {
      name: 'Australian Orange',
      price: "12.30",
      qty: 4,
      desc: 'Sweet and juicy',
      shadow: 'orange',
      image: require('../../assets/images/beach.png'),
      color: opacity => `rgba(251, 216, 146, ${opacity})`
    },
    {
      name: 'Flesh Nectari',
      shadow: 'red',
      price: "12",
      qty: 3,
      desc: 'Sweet and juicy',
      image: require('../../assets/images/beach.png'),
      color: opacity => `rgba(255, 170, 157, ${opacity})`
    },
    
    {
      name: 'Black Grapes',
      price: "40",
      qty: 2,
      desc: 'Sweet and juicy',
      shadow: 'purple',
      image: require('../../assets/images/beach.png'),
      color: opacity => `rgba(214, 195, 246, ${opacity})`
    },
    {
      name: 'Green Apple',
      price: "10.5",
      qty: 2,
      desc: 'Sweet and juicy',
      shadow: 'green',
      image: require('../../assets/images/beach.png'),
      color: opacity => `rgba(139, 243, 139, ${opacity})`
    },
    {
        name: 'Green Apple',
        price: "10.5",
        qty: 2,
        desc: 'Sweet and juicy',
        shadow: 'green',
        image: require('../../assets/images/beach.png'),
        color: opacity => `rgba(139, 243, 139, ${opacity})`
      },
      {
        name: 'Green Apple',
        price: "10.5",
        qty: 2,
        desc: 'Sweet and juicy',
        shadow: 'green',
        image: require('../../assets/images/beach.png'),
        color: opacity => `rgba(139, 243, 139, ${opacity})`
      },
      {
        name: 'Green Apple',
        price: "10.5",
        qty: 2,
        desc: 'Sweet and juicy',
        shadow: 'green',
        image: require('../../assets/images/beach.png'),
        color: opacity => `rgba(139, 243, 139, ${opacity})`
      },
    
    
  ]