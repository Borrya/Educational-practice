
class Post {

    constructor(photoPost){
        
        this.photoPost = photoPost;

    }

    static validatePhotoPost(photoPost){

        if((photoPost.id === "") || typeof(photoPost.id) !== typeof('string')){
            return false;
        }
    
        if(!(photoPost.createdAt instanceof Date)){
            return false;
        }
    
        if((photoPost.author === "") || typeof(photoPost.author) !== typeof('string')){
            return false;
        }
    
        if((photoPost.photoLink === "") || typeof(photoPost.photoLink) !== typeof('string')){
            return false;
        }
    
        if(photoPost.hashTags.length === 0  || !Array.isArray(photoPost.hashTags)){
            return false;
        }
    
        if((photoPost.likes === "") || typeof(photoPost.likes) !== typeof('string')){
            return false;
        }
        return true;
    }
}
