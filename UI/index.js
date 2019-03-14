var gallery = (function (){
 
    var photoPosts = [
    {
        id: '1',
        description: 'Chillin with the corals..🐢🧜‍♀️😍💞💖',
        createdAt: new Date('2019-02-07T23:04:56'),
        author: 'turtlelovers',
        photoLink: 'https://www.google.com/search?q=%D1%87%D0%B5%D1%80%D0%B5%D0%BF%D0%B0%D1%85%D0%B8&rlz=1C1GKLC_enBY821BY837&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjgvM6_3PLgAhWisaQKHR1eD-8Q_AUIDigB&biw=1366&bih=657#imgdii=3cqrt3_6HpEWFM:&imgrc=vPFsI6xAUPctZM:',
        hashTags: ['#vanya', '#petya'],
        likes: 'vanya',
    },

    {
        id: '2',
        description: '‪From @love2foster: “What are you looking at? Are my ears dirty? Why are you laughing?',
        createdAt: new Date('2019-02-07T22:14:53'),
        author: 'fansofcats',
        photoLink: 'https://www.google.com/search?q=cats&rlz=1C1GKLC_enBY821BY837&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjNsOHd3PLgAhVDqHEKHbxoAycQ_AUIDigB&biw=1366&bih=657#imgrc=UynY573QfTtKJM:',
        hashTags: ['#cats', '#wow'],
        likes: 'sanya',
    },

    {
        id: '3',
        description: '‪Today we are going to have fun!',
        createdAt: new Date('2019-02-08T12:10:56'),
        author: 'imdog',
        photoLink:'https://www.google.com/search?q=dogs&rlz=1C1GKLC_enBY821BY837&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiPjvmT3_LgAhULyqQKHUOTCckQ_AUIDigB&biw=1366&bih=657#imgrc=8ltKmnnH7ncucM:',
        hashTags: ['#dogs', '#wow'],
        likes: 'danya',

    },

    {
        id: '4',
        description: '‪Turtles are the best animals!',
        createdAt: new Date('2019-02-08T16:00:56'),
        author: 'tuurtle',
        photoLink:'https://www.google.com/search?q=%D1%87%D0%B5%D1%80%D0%B5%D0%BF%D0%B0%D1%85%D0%B8&rlz=1C1GKLC_enBY821BY837&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjgvM6_3PLgAhWisaQKHR1eD-8Q_AUIDigB&biw=1366&bih=657#imgrc=Yz8UA4M2dXSAfM:',
        hashTags: ['#turttlee', '#love'],
        likes: 'nikita',
    },

    {
        id: '5',
        description: '‪So sooft!',
        createdAt: new Date('2019-02-08T12:10:56'),
        author: 'kitty',
        photoLink:'https://www.google.com/search?q=cats&rlz=1C1GKLC_enBY821BY837&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjNsOHd3PLgAhVDqHEKHbxoAycQ_AUIDigB&biw=1366&bih=657#imgrc=Vx5sPhwu_EDaTM:',
        hashTags: ['#kitties', '#loo'],
        likes: 'vanya',
    },

    {
        id: '6',
        description: '‪Our Last Night  the best rock band in the world',
        createdAt: new Date('2019-02-02T12:10:56'),
        author: 'musiclover',
        photoLink:'https://www.google.com/search?q=OUR+LAST+NIGHT&rlz=1C1GKLC_enBY821BY837&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjv87Ta3_LgAhUR3KQKHSV5DvsQ_AUIDigB&biw=1366&bih=657#imgrc=moVmQ3W-00tbMM:',
        hashTags: ['#music', '#pop'],
        likes: 'dasha',
    },

    {
        id: '7',
        description: '‪The Game Of Thrones is the TV-show that is very popular now',
        createdAt: new Date('2019-02-04T12:10:56'),
        author: 'filmsandtvshows',
        photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=P32CXIuFHYyFjLsPvb2ziAc&q=the+game+of+thrones+season+8&oq=the+game+of&gs_l=img.1.0.0l2j0i30l8.3410.57430..58958...3.0..0.108.1011.10j2......1....1..gws-wiz-img.......0i67j0i8i30j0i24j0i10i24.KBYZeNDU3RM#imgrc=Nn72N9bWRN5TQM:',
        hashTags: ['#film', '#tvshow'],
        likes: 'himym',
    },

    {
        id: '8',
        description: 'You must to love ur family',
        createdAt: new Date('2019-02-05T12:10:56'),
        author: 'lizzymg',
        photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=e32CXN-tK5-AjLsP5rCp6AQ&q=%D0%B0%D1%84%D1%8C%D1%88%D0%B4%D0%BD&oq=%D0%B0%D1%84%D1%8C%D1%88%D0%B4%D0%BD&gs_l=img.3..0i10i1j0i10i1i24l9.828220.830547..831180...0.0..0.164.570.5j1......1....1..gws-wiz-img.......35i39j0j0i10i67j0i67.x7QTLrzEViQ#imgrc=HOieAH9qvY5BDM:',
        hashTags: ['#lizzy', '#mg'],
        likes: 'girl',
    },

    {
        id: '9',
        description: '‪I like bananas!!',
        createdAt: new Date('2019-02-06T12:10:56'),
        author: 'banananan',
        photoLink: 'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=vICCXJbnDIWUkwX-96zICQ&q=banan&oq=banan&gs_l=img.3..0l10.44822.46588..47022...1.0..0.159.602.4j2......1....1..gws-wiz-img.UPtKk5m772U#imgrc=qBRkA5a4PDRnmM:',
        hashTags: ['#fruit', '#banana'],
        likes: 'sweet',
    },

    {
        id: '10',
        description: 'Chocolate is useful for health',
        createdAt: new Date('2019-02-07T00:10:56'),
        author: 'chocolate',
        photoLink: 'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=7ICCXI_qIKzmsAeBxLLYBg&q=chocolate&oq=chocol&gs_l=img.1.0.0l3j0i67j0l6.70267.73118..74594...0.0..4.212.1295.2j7j1......2....1..gws-wiz-img.....0..35i39.GAP0rorqUGw#imgrc=WKMN0Ca31welwM:',
        hashTags: ['#choco', '#latte'],
        likes: 'kostya',
    },

    {
        id: '11',
        description: '‪I love drawing',
        createdAt: new Date('2019-02-08T12:10:56'),
        author: 'sketches',
        photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=qIWCXOfVOdCxkwX6wqjoBw&q=drawing&oq=drawing&gs_l=img.3..0j0i67j0l3j0i67j0l4.21245.22626..22785...0.0..0.92.571.7......1....1..gws-wiz-img.......35i39.GJV-UIxjR5I#imgrc=XObl9N2uYD4FgM:',
        hashTags: ['#sketch', '#like'],
        likes: 'matt',
    },

    {
        id: '12',
        description: '‪Castle In The Sky and Demons are my lovely songs',
        createdAt: new Date('2019-02-01T12:10:56'),
        author: 'olnbaand',
        photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=OIGCXP-ZDIyUkwWu86eoDQ&q=our+last+night&oq=our+&gs_l=img.1.0.35i39j0l9.1131693.1133702..1135552...0.0..1.104.356.3j1......2....1..gws-wiz-img.....0..0i67.ApNPgG8NUBM#imgrc=AFa2Q6xhuaui3M:',
        hashTags: ['#oln', '#band'],
        likes: 'trevor',
    },

    {
        id: '13',
        description: 'How I Met Ur Mother is very intereting.',
        createdAt: new Date('2019-02-08T12:10:56'),
        author: 'himym',
        photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=wYWCXIinAYH8kwXOgZLoDA&q=himym&oq=himym&gs_l=img.3..0l8j0i30l2.79517.81055..81476...0.0..0.83.415.5......1....1..gws-wiz-img.......0i67j0i10.O04SpGHM3J0#imgrc=LPqX90QNYWSfZM:',
        hashTags: ['#him', '#mym'],
        likes: 'love',
    },

    {
        id: '14',
        description: 'I love pionies, they are very beautiful',
        createdAt: new Date('2019-01-28T12:10:56'),
        author: 'flowers',
        photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=FIaCXPq0AcOWkwW6xYL4Ag&q=pionies&oq=pionies&gs_l=img.3..0i10j0i30j0i10i24l4.77419.78835..79015...0.0..0.150.694.5j2......1....1..gws-wiz-img.......0j0i67.rQlmpUQ1z98#imgrc=i_OC75z7O2-viM:',
        hashTags: ['#pionies', '#oink'],
        likes: 'gora',
    },

    {
        id: '15',
        description: 'I am tireeeed',
        createdAt: new Date('2019-01-05T12:10:56'),
        author: 'imagineme',
        photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=ZIaCXNqmE5C0kwWX8prIBw&q=tired&oq=tired&gs_l=img.3..0l10.81938.82871..83025...0.0..0.79.375.5......1....1..gws-wiz-img.......35i39.uiJCeGiOaNQ#imgrc=8WSQY9ps4T5bVM:',
        hashTags: ['#imagine', '#me'],
        likes: 'tired',
    },

    {
        id: '16',
        description: '‪I love him, but he dont look at me:( ',
        createdAt: new Date('2019-02-08T18:10:56'),
        author: 'ilovesasha',
        photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=uIaCXJvFJcnWkwW62YTgDw&q=love&oq=love&gs_l=img.3..0i67j0j0i67l2j0l6.172858.173430..173659...0.0..0.151.388.3j1......1....1..gws-wiz-img.o6ijf5ENFgk#imgrc=ZqWaJb3GSE4ICM:',
        hashTags: ['#ilove', '#sasha'],
        likes: 'dou',
    },

    {
        id: '17',
        description: '‪Today i wanna die',
        createdAt: new Date('2019-02-08T12:10:56'),
        author: 'higoodbye',
        photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=goeCXNKnL8SGjLsP2pG7OA&q=lol&oq=lol&gs_l=img.3..0i67l2j0l2j0i67l2j0l4.153511.153805..154016...0.0..0.108.300.1j2......1....1..gws-wiz-img.......35i39.guwi1pNjpjE#imgrc=Mz7pOBL3rOJlEM:',
        hashTags: ['#today', '#die'],
        likes: 'wanna',
    },

    {
        id: '18',
        description: '‪I Love screaming',
        createdAt: new Date('2019-02-08T12:10:56'),
        author: 'sshhh',
        photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=VIyCXLuaJI2vgwec0KOQBQ&q=scream&oq=scream&gs_l=img.3..0l2j0i67l2j0l6.27978.29331..29595...0.0..0.142.645.3j3......1....1..gws-wiz-img.DgcU3qDJ4sg#imgrc=332cPdUsbRX6eM:',
        hashTags: ['#shh', '#pop'],
        likes: 'anya',
    },

    {
        id: '19',
        description: '‪It is so cool',
        createdAt: new Date('2019-12-28T12:10:56'),
        author: 'vanya',
        photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=TIyCXJn-JY-sgwfs_bKYBQ&q=mem&oq=mem&gs_l=img.3..0l10.6064.6392..6702...0.0..0.130.338.1j2......1....1..gws-wiz-img.JhXvDDz8mqE#imgrc=UdjsXq3JuoKrzM:',
        hashTags: ['#vanya', '#petya'],
        likes: 'vanya',
    },

    {
        id: '20',
        description: '‪I just want to see him again',
        createdAt: new Date('2019-02-08T22:17:56'),
        author: 'love',
        photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=x3eCXLmMLoLoUZiLjKgN&q=love&oq=love&gs_l=img.3..35i39j0l9.1617.2196..2397...0.0..0.89.337.4......0....1..gws-wiz-img.7mstphXI_68#imgrc=F71BjVkZAs0M5M:',
        hashTags: ['#vanya', '#petya'],
        likes: 'vanya',
    },

    {
        id: '',
        description: '‪I just want to see him again',
        createdAt: new Date('2019-02-08T22:17:56'),
        author: 'love',
        photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=x3eCXLmMLoLoUZiLjKgN&q=love&oq=love&gs_l=img.3..35i39j0l9.1617.2196..2397...0.0..0.89.337.4......0....1..gws-wiz-img.7mstphXI_68#imgrc=F71BjVkZAs0M5M:',
        hashTags: ['#turtle', '#wow'],
        likes: '',
    },

    {
        id: '21',
        description: '‪',
        createdAt: new Date('2019-02-08T22:17:56'),
        author: 'love',
        photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=x3eCXLmMLoLoUZiLjKgN&q=love&oq=love&gs_l=img.3..35i39j0l9.1617.2196..2397...0.0..0.89.337.4......0....1..gws-wiz-img.7mstphXI_68#imgrc=F71BjVkZAs0M5M:',
        hashTags: [],
        likes: 'vanya',
    },

    {
        id: '22',
        description: '‪I just want to see him again',
        createdAt: new Date(''),
        author: 'love',
        photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=x3eCXLmMLoLoUZiLjKgN&q=love&oq=love&gs_l=img.3..35i39j0l9.1617.2196..2397...0.0..0.89.337.4......0....1..gws-wiz-img.7mstphXI_68#imgrc=F71BjVkZAs0M5M:',
        hashTags: ['#lo', '#ve'],
        likes: '',
    },

    {
        id: '23',
        description: '‪I just want to see him again',
        createdAt: new Date('2019-02-08T22:17:56'),
        author: 'love',
        photoLink:'',
        hashTags: ['#rtle', '#ow'],
        likes: 'anya',
    },

    {
        id: '24',
        description: '‪I just want to see him again',
        createdAt: new Date('2019-02-08T22:17:56'),
        author: '',
        photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=x3eCXLmMLoLoUZiLjKgN&q=love&oq=love&gs_l=img.3..35i39j0l9.1617.2196..2397...0.0..0.89.337.4......0....1..gws-wiz-img.7mstphXI_68#imgrc=F71BjVkZAs0M5M:',
        hashTags: ['#tut', '#wo'],
        likes: 'vanya',
    }
];

var filterBy = [
    {
        byLikes : '',
        byDate: false,
        byHashtags: [],
    } 
];



function sortByHashtags(num, hashtags){

    if (!Array.isArray(hashtags)) {

        console.log('Error with the input hashtags author!');
        return undefined;
    }

    var flag = true;
    var allHashtags = [];
    var count = 0;

    for (i = 0; (i < photoPosts.length) && (count < num); i++) {
        
        flag = true;

        for (j = 0; j < hashtags.length; j++) {

            if (photoPosts[i].hashtags !== hashtags[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            allHashtags.push(photoPosts[i]);
            count++;
        }
    }
    return allHashtags;
}

function sortByLikes(num, likeAuthor){

    if (typeof(likeAuthor) !== 'string') {
        console.log('Error with the input like author!');
        return undefined;
    }

    var allLikes = [];
    var count = 0;

    for (i = 0; (i < photoPosts.length) && (count < num); i++) {
        if (photoPosts[i].likes === likeAuthor) {
            allLikes.push(photoPosts[i]);
            count++;
        }
    }
    return allLikes;
}

function validateFilter(filter){
    if(filter.byLikes === ''){
        console.log('There are problems with filter by author!');
        return false;
    }
    if(filter.byHashtags.length === 0){
        console.log('There are problems with filter by hashtags!');
        return false;
    }
}

function validatePhotoPost(photoPost){

    if((photoPost.id === "") || typeof(photoPost.id) !== typeof('string')){
        console.log('There are problems with id!');
        return false;
    }

    if((photoPost.description === "") || typeof(photoPost.description) !== typeof('string')){
        console.log('There are problems with photo description!');
        return false;
    }

    if(!(photoPost.createdAt instanceof Date)){
        console.log('There are problems with photo date!');
        return false;
    }

    if((photoPost.author === "") || typeof(photoPost.author) !== typeof('string')){
        console.log('There are problems with the name of author!');
        return false;
    }

    if((photoPost.photoLink === "") || typeof(photoPost.photoLink) !== typeof('string')){
        console.log('There are problems with photo link!');
        return false;
    }

    if(photoPost.hashTags.length === 0  || !Array.isArray(photoPost.hashTags)){
        console.log('There are problems with hashtags!');
        return false;
    }

    if((photoPost.likes === "") || typeof(photoPost.likes) !== typeof('string')){
        console.log('There are problems with likes!');
        return false;
    }

    console.log('Everything is okay!');
    return true;
}

function getPhotoPosts(skip = 0, top = 10, filter){

    var result = [];

    if ((typeof (skip) !== 'number' || typeof (top) !== 'number')) {
        console.log('There are problems with the input arguments!');
        return undefined;
    }
    
    if(filter !== undefined && !(validateFilter(filter))){

        if(filter.byLikes !== ''){

            result = sortByLikes(skip + top, filter.byLikes);
        }
        
        if(filter.byHashtags.length !== 0){
            result = sortByHashtags(skip + top, filter.byHashtags);
        }
    } 

    else{

        for (i = skip; i < skip + top && i < photoPosts.length; i++) {
            result = addPhotoPost(photoPosts[i]);
        }
    }
      return result;
};

function getPhotoPost(id){

    if (typeof (id) !== 'string') {
        console.log('Error! There are problems with id!');
        return undefined;
    }

    else{

        var photoPost;
        for(i = 0; i < photoPosts.length; i++){
            if(photoPosts[i].id === id){
                photoPost = photoPosts[i];
                return photoPost;
            }
        }
    }
};

function addPhotoPost(photoPost){
    if(validatePhotoPost(photoPost)){
        photoPosts.push(photoPost);
    }
};

function removePhotoPost(id){

    var flag = false;

    if (typeof (id) !== 'string') {
        console.log('Error! There are problems with id!');
        return false;
    }

    for(i = 0; i < photoPosts.length; i++){

        if(photoPosts[i].id === id){

            flag = true;
            console.log('The post with the ${id} was deleted!');
            photoPosts.splice(i, 1);
            return true;
        }
    }

    if(flag === false){
        console.log('Error! The post with the ${id} was not deleted!');
        return false;
    }
};

function editPhotoPost(id, newPhotoPost){

    if (typeof (id) !== 'string') {
        console.log('Error! There are problems with id!');
        return false;
    }

    if(!validatePhotoPost(newPhotoPost)){
        console.log('There are problems with new photo post!');
        return false;
    }
    else{

        var photoPost = getPhotoPost(id);
    
        if(photoPost === undefined){
            return false;
        }

        photoPost.photoLink = newPhotoPost.photoLink;
        photoPost.description = newPhotoPost.description;
        photoPost.hashTags = newPhotoPost.hashtags;

        console.log('Editing passed successfully');
    }
    return true;   
}

return {
    addPhotoPost,
    removePhotoPost,
    editPhotoPost,
    getPhotoPosts,
    getPhotoPost
}

})();

console.log('Check add: \n');

var post = {
    id: '1',
    description: 'Chillin with the corals..',
    createdAt: new Date('2019-02-07T23:04:56'),
    author: 'turtlelovers',
    photoLink: 'https://www.google.com/search?q=%D1%87%D0%B5%D1%80%D0%B5%D0%BF%D0%B0%D1%85%D0%B8&rlz=1C1GKLC_enBY821BY837&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjgvM6_3PLgAhWisaQKHR1eD-8Q_AUIDigB&biw=1366&bih=657#imgdii=3cqrt3_6HpEWFM:&imgrc=vPFsI6xAUPctZM:',
    hashTags: ['#turtle', '#wow'],
    likes: 'vanya',
};

var post3 = {
    id: '3',
    description: '‪Today we are going to have fun!',
    createdAt: new Date('2019-02-08T12:10:56'),
    author: 'imdog',
    photoLink:'https://www.google.com/search?q=dogs&rlz=1C1GKLC_enBY821BY837&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiPjvmT3_LgAhULyqQKHUOTCckQ_AUIDigB&biw=1366&bih=657#imgrc=8ltKmnnH7ncucM:',
    hashTags: ['#dogs', '#wow'],
    likes: 'danya',

};

var validPost = {
    id: '',
    description: '‪I just want to see him again',
    createdAt: new Date('2019-02-08T22:17:56'),
    author: 'love',
    photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=x3eCXLmMLoLoUZiLjKgN&q=love&oq=love&gs_l=img.3..35i39j0l9.1617.2196..2397...0.0..0.89.337.4......0....1..gws-wiz-img.7mstphXI_68#imgrc=F71BjVkZAs0M5M:',
    hashTags: ['#turtle', '#wow'],
    likes: '',
};

var validPost2 = {
    id: '21',
    description: '‪',
    createdAt: new Date('2019-02-08T22:17:56'),
    author: 'love',
    photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=x3eCXLmMLoLoUZiLjKgN&q=love&oq=love&gs_l=img.3..35i39j0l9.1617.2196..2397...0.0..0.89.337.4......0....1..gws-wiz-img.7mstphXI_68#imgrc=F71BjVkZAs0M5M:',
    hashTags: ['#vanya', '#petya'],
    likes: 'petya',
};

var validPost3 = {
    id: '21',
    description: '‪wow',
    createdAt: new Date('2019-02-08T22:17:56'),
    author: 'love',
    photoLink:'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=x3eCXLmMLoLoUZiLjKgN&q=love&oq=love&gs_l=img.3..35i39j0l9.1617.2196..2397...0.0..0.89.337.4......0....1..gws-wiz-img.7mstphXI_68#imgrc=F71BjVkZAs0M5M:',
    hashTags: [],
    likes: 'vanya',
};

var filterLike = {
        byLikes: 'vanya',
        byHashtags: [],
    };


console.log(gallery.addPhotoPost(post));
console.log('\n');

console.log(gallery.addPhotoPost(validPost));
console.log('\n');

console.log(gallery.addPhotoPost(validPost2));
console.log('\n');

console.log(gallery.addPhotoPost(validPost3));
console.log('\n');

post.id = '2';
post.description = 'Wow! Cool! Fixed!';
post.photoLink = 'https://www.google.com/search?rlz=1C1GKLC_enBY821BY837&biw=1366&bih=657&tbm=isch&sa=1&ei=x3eCXLmMLoLoUZiLjKgN&q=love&oq=love&gs_l=img.3..35i39j0l9.1617.2196..2397...0.0..0.89.337.4......0....1..gws-wiz-img.7mstphXI_68#imgrc=F71BjVkZAs0M5M:';

console.log('Getting photos without filters:')
console.log(gallery.getPhotoPosts());
console.log('\n');


console.log('Getting with filter by likes: ')
console.log(gallery.getPhotoPosts(0, 10, filterLike));
console.log('\n');

console.log('Removing with skip 1 and top 2:')
console.log(gallery.getPhotoPosts(1, 2));
console.log('\n');

console.log('Editing the photo with the id 1:');
console.log(gallery.editPhotoPost('1', post));
console.log('\n');

console.log('Removing the photo with the id 3:');
console.log(gallery.removePhotoPost('3'));
console.log('\n');

