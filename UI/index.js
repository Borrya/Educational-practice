/* eslint-disable no-console */

class PhotoPostModel {

    constructor(photoPost){
        
        this._photoPost = photoPost;

        this._defaultFilterOptions = {

            dateFrom: new Date(-8640000000000000),
            dateTo: new Date(8640000000000000),
            authorName: '',
            hashtags: [],
        };
    }

    _validateFilter(filter){
        if(filter.byLikes === ''){
            console.log('There are problems with filter by author!');
            return false;
        }
        if(filter.byHashtags.length === 0){
            console.log('There are problems with filter by hashtags!');
            return false;
        }
    }

    _validatePhotoPost(photoPost){

        if((photoPost.id === "") || typeof(photoPost.id) !== typeof('string')){
            console.log('There are problems with id!');
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
        return true;
    }
}

class PhotoPostsModel {

    constructor(photoposts = [], post = new PhotoPostModel()){
        this.post = post;
        this._photoPosts = photoposts.slice();
    }

    _isIntersect(postTags, configTags) {
        for (let i = 0; i < postTags.length; i++) {
          for (let j = 0; j < configTags.length; j++) {
            if (postTags[i] === configTags[j]) {
              return true;
            }
          }
        }
        return false;
    }

    _isUnique(post) {
        for (let i = 0; i < this._photoPosts.length; i++) {
          if (this._photoPosts[i].id === post.id) {
            return false;
          }
        }
        return true;
      }

    getPhotoPosts(skip = 0, count = 10, filterConfig = this.post._defaultFilterOptions){

        let result = [];
        let number = 0;
    
        if ((typeof (skip) !== 'number' || typeof (count) !== 'number')) {
            console.log('There are problems with the input arguments!');
            return undefined;
        }

        result = this._photoPosts.slice();

            if (filterConfig.authorName !== '') {
				result = this._sortByLikes(count + skip, filterConfig.authorName, result);
			}
			if (filterConfig.hashtags.length !== 0) {
				result = this._sortByHashtags(count + skip, filterConfig.hashtags, result);
			}
            result = result.slice(skip);

        if(filterConfig === undefined){

            const filtratedPosts = this._photoPosts.filter(
                phpost => phpost.createdAt.getTime() >= filterConfig.dateFrom.getTime()
               && phpost.createdAt.getTime() <= filterConfig.dateTo.getTime()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
            
            for (let i = skip; number < count && i < filtratedPosts.length; i++) {
                result.push(filtratedPosts[i]);
                number ++;
            }
        }

          return result;
    }

    getPhotoPost(id){

        let result;

        if (typeof (id) !== 'string') {
            console.log('Error! There are problems with id!');
            return undefined;
        }
    
        this._photoPosts.forEach((item) => {
            if (item.id === id) {
              result = item;
            }
          });
          if (result !== undefined) {
            console.log(`Post with id ${id} was found:`);
            console.log(result);
            return result;
        }

        console.log(`Post with this id was not found.`);
        return result;
    }
    

    removePhotoPost(id){

        let index = -1;

		this._photoPosts.forEach((item, i) => {
            if (item.id === id) {
              index = i;
            }
        });

		if (index !== -1) {
			this._photoPosts.splice(index, 1);
            console.log(`Post with id ${id} deleted.`);
            return true;
		}

		console.log(`Post with id ${id} not found.`);
        return false;
	}

    addPhotoPost(photoPost){

        if(this.post._validatePhotoPost(photoPost) === true){
            this._photoPosts.push(photoPost);
            console.log(`Post with id ${photoPost.id} added.`);
            return true;
        }
        console.log(`Post with id ${photoPost.id} was not added.`);
        return false;
    }

    addAll(allposts) {

        const notValid = [];

        for (let i = 0; i < allposts.length; i++) {

          if (this.post._validatePhotoPost(allposts[i]) === true) {
            this._photoPosts.push(allposts[i]);
            console.log(`Post with id ${allposts[i].id} added.`);
          } 
          else {
            notValid.push(allposts[i]);
          }
        }
        console.log('Not valid posts:');
        console.log(notValid);
        return notValid;
    }
   
    editPhotoPost(id, newPhotoPost){

        if (typeof (id) !== 'string') {
            console.log('Error! There are problems with id!');
            return false;
        }
    
        else{
    
            const photoPost = this.getPhotoPost(id);
        
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
    
    _sortByLikes(num, likeAuthor, photoPosts){

        if (typeof(likeAuthor) !== 'string') {
            console.log('Error with the input like author!');
            return undefined;
        }
    
        let allLikes = [];
        let count = 0;
    
        for (let i = 0; (i < photoPosts.length) && (count < num); i++) {

            if (photoPosts[i].likes === likeAuthor) {
                allLikes.push(photoPosts[i]);
                count++;
            }
        }
        return allLikes;
    }
  
    _sortByHashtags(num, hashtags, photoPosts){

        let flag = true;
        let allHashtags = [];
        let count = 0;
    
        for (let i = 0; (i < photoPosts.length) && (count < num); i++) {
            
            flag = true;
    
            for (let j = 0; j < hashtags.length; j++) {
    
                if (!photoPosts[i].hashTags.includes(hashtags[j])) {
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
}
 
    const photoPosts = [
    {
        id: '1',
        description: 'Chillin with the corals..',
        createdAt: new Date('2019-02-07T23:04:56'),
        author: 'turtlelovers',
        photoLink: 'images/черепаха.jpg',
        hashTags: ['#vanya'],
        likes: 'vanya',
    },

    {
        id: '2',
        description: '‪From @love2foster: “What are you looking at? Are my ears dirty? Why are you laughing?',
        createdAt: new Date('2019-02-07T22:14:53'),
        author: 'fansofcats',
        photoLink: 'images/cat.jpg',
        hashTags: ['#wow'],
        likes: 'sanya',
    },

    {
        id: '3',
        description: '‪Today we are going to have fun!',
        createdAt: new Date('2019-02-08T12:10:56'),
        author: 'imdog',
        photoLink:'images/turtle.jpg',
        hashTags: ['#dogs'],
        likes: 'danya',

    },

    {
        id: '4',
        description: '‪Turtles are the best animals!',
        createdAt: new Date('2019-02-08T16:00:56'),
        author: 'tuurtle',
        photoLink:'images/doggy.jpg',
        hashTags: ['#vanya'],
        likes: 'nikita',
    },

    {
        id: '5',
        description: '‪So sooft!',
        createdAt: new Date('2019-02-08T12:10:56'),
        author: 'kitty',
        photoLink:'images/anime.jpg',
        hashTags: ['#kitties'],
        likes: 'vanya',
    },

    {
        id: '6',
        description: '‪Our Last Night  the best rock band in the world',
        createdAt: new Date('2019-02-02T12:10:56'),
        author: 'musiclover',
        photoLink:'images/цветы.jpg',
        hashTags: ['#music'],
        likes: 'dasha',
    },

    {
        id: '7',
        description: '‪The Game Of Thrones is the TV-show that is very popular now',
        createdAt: new Date('2019-02-04T12:10:56'),
        author: 'filmsandtvshows',
        photoLink:'images/скрипка.jpg',
        hashTags: ['#film'],
        likes: 'himym',
    },

    {
        id: '8',
        description: 'You must to love ur family',
        createdAt: new Date('2019-02-05T12:10:56'),
        author: 'lizzymg',
        photoLink:'images/end.jpg',
        hashTags: ['#lizzy'],
        likes: 'girl',
    },

    {
        id: '9',
        description: '‪I like bananas!!',
        createdAt: new Date('2019-02-06T12:10:56'),
        author: 'banananan',
        photoLink: 'images/flowers.jpg',
        hashTags: ['#fruit'],
        likes: 'sweet',
    },

    {
        id: '10',
        description: 'Chocolate is useful for health',
        createdAt: new Date('2019-02-07T00:10:56'),
        author: 'chocolate',
        photoLink: 'images/mops.jpg',
        hashTags: ['#choco'],
        likes: 'kostya',
    },

    {
        id: '11',
        description: '‪I love drawing',
        createdAt: new Date('2019-02-08T12:10:56'),
        author: 'sketches',
        photoLink:'images/скрипка.jpg',
        hashTags: ['#sketch'],
        likes: 'matt',
    },

    {
        id: '12',
        description: '‪Castle In The Sky and Demons are my lovely songs',
        createdAt: new Date('2019-02-01T12:10:56'),
        author: 'olnbaand',
        photoLink:'images/doggy.jpg',
        hashTags: ['#oln'],
        likes: 'trevor',
    },

    {
        id: '13',
        description: 'How I Met Ur Mother is very intereting.',
        createdAt: new Date('2019-02-08T12:10:56'),
        author: 'himym',
        photoLink:'images/черепаха.jpg',
        hashTags: ['#him'],
        likes: 'love',
    },

    {
        id: '14',
        description: 'I love pionies, they are very beautiful',
        createdAt: new Date('2019-01-28T12:10:56'),
        author: 'flowers',
        photoLink:'images/flowers.jpg',
        hashTags: ['#pionies'],
        likes: 'gora',
    },

    {
        id: '15',
        description: 'I am tireeeed',
        createdAt: new Date('2019-01-05T12:10:56'),
        author: 'imagineme',
        photoLink:'images/цветы.jpg',
        hashTags: ['#imagine'],
        likes: 'tired',
    },

    {
        id: '16',
        description: '‪I love him, but he dont look at me:( ',
        createdAt: new Date('2019-02-08T18:10:56'),
        author: 'ilovesasha',
        photoLink:'images/цветы.jpg',
        hashTags: ['#ilove'],
        likes: 'dou',
    },

    {
        id: '17',
        description: '‪Today i wanna die',
        createdAt: new Date('2019-02-08T12:10:56'),
        author: 'higoodbye',
        photoLink:'images/mops.jpg',
        hashTags: ['#today'],
        likes: 'wanna',
    },

    {
        id: '18',
        description: '‪I Love screaming',
        createdAt: new Date('2019-02-08T12:10:56'),
        author: 'sshhh',
        photoLink:'images/mops.jpg',
        hashTags: ['#pop'],
        likes: 'anya',
    },

    {
        id: '19',
        description: '‪It is so cool',
        createdAt: new Date('2019-12-28T12:10:56'),
        author: 'vanya',
        photoLink:'images/mops.jpg',
        hashTags: ['#vanya'],
        likes: 'vanya',
    },

    {
        id: '20',
        description: '‪I just want to see him again',
        createdAt: new Date('2019-02-08T22:17:56'),
        author: 'love',
        photoLink:'images/cat.jpg',
        hashTags: ['#petya'],
        likes: 'vanya',
    },

    {
        id: '',
        description: '‪I just want to see him again',
        createdAt: new Date('2019-02-08T22:17:56'),
        author: 'love',
        photoLink:'images/cat.jpg',
        hashTags: ['#turtle'],
        likes: 'vanya',
    },

    {
        id: '21',
        description: '‪',
        createdAt: new Date('2019-02-08T22:17:56'),
        author: 'love',
        photoLink:'images/cat.jpg',
        hashTags: [],
        likes: 'vanya',
    },

    {
        id: '22',
        description: '‪I just want to see him again',
        createdAt: new Date(''),
        author: 'love',
        photoLink:'images/cat.jpg',
        hashTags: ['#lo'],
        likes: '',
    },

    {
        id: '23',
        description: '‪I just want to see him again',
        createdAt: new Date('2019-02-08T22:17:56'),
        author: 'love',
        photoLink:'',
        hashTags: ['#rtle'],
        likes: 'anya',
    },

    {
        id: '24',
        description: '‪I just want to see him again',
        createdAt: new Date('2019-02-08T22:17:56'),
        author: '',
        photoLink:'images/cat.jpg',
        hashTags: ['#tut'],
        likes: 'vanya',
    }
];

const allAdd = [
    {
        id: '25',
        description: '‪Oh my',
        createdAt: new Date('2019-02-08T22:17:56'),
        author: 'love',
        photoLink:'images/cat.jpg',
        hashTags: ['#vanya'],
        likes: 'sanya',
    },

    {
        id: '26',
        description: '‪God!',
        createdAt: new Date('2019-02-08T21:17:56'),
        author: 'love',
        photoLink:'images/cat.jpg',
        hashTags: ['#vanya'],
        likes: 'sasha',
    },

    {
        id: '',
        description: '‪Oh my',
        createdAt: new Date('2019-02-08T22:17:56'),
        author: 'love',
        photoLink:'images/cat.jpg',
        hashTags: ['#tut'],
        likes: 'sanya',
    },

    {
        id: '27',
        description: '‪Oh my',
        createdAt: new Date('2019-02-08T22:17:56'),
        author: '',
        photoLink:'images/cat.jpg',
        hashTags: ['#tut'],
        likes: 'sanya',
    },

];

const validPost = {
    id: '28',
    description: 'Chillin with the corals..',
    createdAt: new Date('2019-02-07T23:04:56'),
    author: 'turtlelovers',
    photoLink: 'images/mops.jpg',
    hashTags: ['#turtle'],
    likes: 'sashenka',
};

const validPost2 = {
    id: '29',
    description: 'Hi!',
    createdAt: new Date('2019-02-07T13:04:56'),
    author: 'turtlelovers',
    photoLink: 'images/mops.jpg',
    hashTags: ['#turtle'],
    likes: 'vanya',
}

const validPost3 = {
    id: '30',
    description: 'Hi! This is 3 post.',
    createdAt: new Date('2019-02-07T13:04:56'),
    author: 'turtlelovers',
    photoLink: 'images/mops.jpg',
    hashTags: ['#turtle'],
    likes: 'vanya',
}

const validPostEdit = {
    description: "Edited description." ,
    hastags: ['#edited'],
};

const notValidPost = {
    id: '',
    description: '‪I just want to see him again',
    createdAt: new Date('2019-02-08T22:17:56'),
    author: 'love',
    photoLink:'images/mops.jpg',
    hashTags: ['#turtle'],
    likes: '',
};

const notValidPost2 = {
    id: '31',
    description: '‪',
    createdAt: new Date('2019-02-08T22:17:56'),
    author: 'love',
    photoLink:'images/mops.jpg',
    hashTags: ['#vanya'],
    likes: 'petya',
};

const notValidPost3 = {
    id: '32',
    description: '‪wow',
    createdAt: new Date('2019-02-08T22:17:56'),
    author: 'love',
    photoLink:'',
    hashTags: [],
    likes: 'vanya',
};

const filterHashtag = {
    dateFrom: new Date(-8640000000000000), 
    dateTo: new Date(8640000000000000),
    authorName: '',
    hashtags: ['#vanya'],
};

const filterLikes = {
    dateFrom: new Date(-8640000000000000), 
    dateTo: new Date(8640000000000000),
    authorName: 'vanya',
    hashtags: [],
};

function testFunctions(){

    const model = new PhotoPostsModel(); 

    console.log('\\\\\\Adding photos:\\\\\\');
    console.log(model.addPhotoPost(validPost));
    console.log(model.addPhotoPost(photoPosts[1]));
    console.log(model.addPhotoPost(validPost2));
    console.log(model.addPhotoPost(validPost3));
    console.log(model.addPhotoPost(notValidPost));
    console.log(model.addPhotoPost(notValidPost2));
    console.log(model.addPhotoPost(notValidPost3));
    console.log('\n');

    console.log('\\\\\\Adding all photos:\\\\\\');
    console.log(model.addAll(allAdd));
    console.log('\n');

    console.log('\\\\\\Getting photo by its id:\\\\\\');
    console.log(model.getPhotoPost('25'));
    console.log('\n');

    console.log('\\\\\\Getting photos without filters:\\\\\\');
    console.log(model.getPhotoPosts());
    console.log('\n');

    console.log('\\\\\\Getting with filter by likes:\\\\\\');
    console.log(model.getPhotoPosts(0, 10, filterLikes));
    console.log('\n');

    console.log('\\\\\\Getting with filter by hashtags:\\\\\\');
    console.log(model.getPhotoPosts(0, 10, filterHashtag));
    console.log('\n');

    console.log('\\\\\\Removing with skip 3:\\\\\\');
    console.log(model.getPhotoPosts(3));
    console.log('\n');

    console.log('\\\\\\Editing the photo with the id 1:\\\\\\');
    console.log(model.editPhotoPost('26', validPostEdit));
    console.log('\n');

    console.log('\\\\\\Removing the photo with the id 3:\\\\\\');
    console.log(model.removePhotoPost('28'));
    console.log('\n');
}

testFunctions();
