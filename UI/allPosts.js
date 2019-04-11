/* eslint-disable no-console */

class PhotoPosts {

    constructor(photoposts = []){
        this._photoPosts = photoposts.slice();
        this._authors = [];
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

    _generateID() {
		return Date.now() + Math.round(Math.random() * 1000);
    }
    
    _IsIdExist(id) {
		return this._photoPosts.some(function (item) {
			return (item.id === id);
		});
	}

    _isUnique(post) {
        for (let i = 0; i < this._photoPosts.length; i++) {
          if (this._photoPosts[i].id === post.id) {
            return false;
          }
        }
        return true;
      }

    getPhotoPosts(skip = 0, count = 10, filterConfig = new Filter()){

        let result = [];
        let number = 0;
    
        if ((typeof (skip) !== 'number' || typeof (count) !== 'number')) {
            console.log('There are problems with the input arguments!');
            return undefined;
        }

        result = this._photoPosts.slice();

        if (!(filterConfig.isEmptyFilter()) && filterConfig.validateFilter()) {
            if (filterConfig.authorName !== '') {
				result = this._sortByLikes(count + skip, filterConfig.authorName, result);
			}
			if (filterConfig.hashtags.length !== 0 && filterConfig.hashtags != undefined){
				result = this._sortByHashtags(count + skip, filterConfig.hashtags, result);
			}
            result = result.slice(skip);
        }
        else{
            result = this._photoPosts.slice(skip, skip + count);
        }

        if(filterConfig.f_date === true){
               result.sort(function (x, y) {
                return (y.createdAt.getTime() - x.createdAt.getTime());
            });
        }
          return result;
    }

    getPhotoPost(id){

        let result;

        this._photoPosts.forEach((item) => {
            if (item.id === id) {
              result = item;
            }
          });
      
        return result;
    }

    removePhotoPost(id){

        if (!this._IsIdExist(id)) {
			return false;
		}

        let index = -1;            

		this._photoPosts.forEach((item, i) => {
            if (item.id === id) {
              index = i;
            }
        });

			this._photoPosts.splice(index, 1);
            return true;
		}

    addPhotoPost(photoPost){
        
        if (photoPost.id === -1) {
			photoPost.id = this._generateID();
		}   
        if(Post.validatePhotoPost(photoPost) === true){
            this._photoPosts.push(photoPost);
            if (!this._authors.some((item) => (photoPost.author === item))) {
				this._authors.push(photoPost.author);
			}
            return true;
        }
        return false;
    }

    addAll(allposts) {

        const notValid = [];

        for (let i = 0; i < allposts.length; i++) {

          if (Post.validatePhotoPost(allposts[i]) === false) {
                notValid.push(allposts[i]);
            } 
        }
        return notValid;
    }
   
    editPhotoPost(id, newPhotoPost){

        if (!Post.validatePhotoPost(newPhotoPost)){
            return false;
        }

        if(newPhotoPost instanceof Post){
            console.log('Incorrect argument!');
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

    getListOfAuthors() {
		return this._authors;
	}
}