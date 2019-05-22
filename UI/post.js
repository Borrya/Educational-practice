
class Post {

    constructor(author = '', photoLink = '', description = '', 
    hashTags = [], createdAt = new Date(), likes = [], id = -1, numberLikes = likes.length, comments = []) {

    this.author = author;
    this.photoLink = photoLink;
    this.description = description;
    this.id = id;
    this.createdAt = createdAt;
    this.likes = likes;
    this.hashTags = hashTags;
    this.numberLikes = numberLikes ? numberLikes : 0;
    this.comments = comments;
}

    static parseToPost(object) {

		return new Post(
            object.author,
            object.photoLink,
			object.description,
			object.hashTags,
			new Date(Date.parse(object.createdAt)),
			object.likes,
			object.id,
			object.numberLikes,
			object.comments
		);
	}

    static validatePhotoPost(photoPost){
    
        if(!(photoPost.createdAt instanceof Date)){
            return false;
        }
    
        if((photoPost.author === "") || typeof(photoPost.author) !== typeof('string')){
            return false;
        }
    
        if((photoPost.photoLink === "") || typeof(photoPost.photoLink) !== typeof('string')){
            return false;
        }
        
        return true;
    }

    likedPost(userName) {

		let index = this.liked.indexOf(userName);

		if (index === -1) {
			this.liked.push(userName);
		} else {
			this.liked.splice(index, 1);
		}
	}

	ifLiked(userName) {
		return (this.liked.some(function(item) {
			return (item === userName);
		}));
	}
}
