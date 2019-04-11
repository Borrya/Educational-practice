/* eslint-disable no-console */
 
    const photoPosts = [
    {
        id: '1',
        description: 'the best weekends with my besties.',
        createdAt: new Date('2019-02-07T23:04:56'),
        author: 'moment',
        authorPhoto: 'images/ok.jpg',
        photoLink: 'images/fire.jpg',
        hashTags: ['so', 'calm', 'saturday'],
        likeButton: 'images/like.png',
        editButton: 'images/edit.png',
        deleteButton: 'images/trash.png',
        likes: 'vanya',
        numberLikes: '1',
    },

    {
        id: '2',
        description: '‪Look at us! We look so cute together!',
        createdAt: new Date('2019-02-07T22:14:53'),
        author: 'fansofcats',
        authorPhoto: 'images/cat.jpg',
        photoLink: 'images/lovecats.jpg',
        hashTags: ['cats', 'are', 'the', 'best', 'lovers'],
        likeButton: 'images/like.png',
        editButton: 'images/edit.png',
        deleteButton: 'images/trash.png',
        likes: 'sanya',
        numberLikes: '1',
    },

    {
        id: '3',
        description: '‪Look at me! I am so cuuute:3',
        createdAt: new Date('2019-02-08T12:10:56'),
        author: 'pinkie',
        authorPhoto: 'images/mops.jpg',
        photoLink:'images/mops2.jpg',
        hashTags: ['dogs', 'are', 'cool', 'because', 'its', 'me'],
        likeButton: 'images/like.png',
        editButton: 'images/edit.png',
        deleteButton: 'images/trash.png',
        likes: 'danya',
        numberLikes: '1',
    },

    {
        id: '4',
        description: 'I am the most fashionable dog in the whole world!',
        createdAt: new Date('2019-02-08T16:00:56'),
        author: 'pinkie',
        authorPhoto: 'images/mops.jpg',
        photoLink:'images/glasses.jpg',
        hashTags: ['fashion', 'is', 'my', 'profession'],
        likeButton: 'images/like.png',
        editButton: 'images/edit.png',
        deleteButton: 'images/trash.png',
        likes: 'nikita',
        numberLikes: '1',
    },

    {
        id: '5',
        description: '‪What is ur favourite film?',
        createdAt: new Date('2019-02-08T12:10:56'),
        author: 'tellmemore',
        authorPhoto: 'images/smile.jpg',
        photoLink:'images/paris.jpg',
        hashTags: ['deathnote', 'seylormoon', 'starwars'],
        likeButton: 'images/like.png',
        editButton: 'images/edit.png',
        deleteButton: 'images/trash.png',
        likes: 'vanya',
        numberLikes: '1',
    },

    {
        id: '6',
        description: '‪Our Last Night  the best rock band in the world!',
        createdAt: new Date('2019-02-02T12:10:56'),
        author: 'musiclover',
        authorPhoto: 'images/smile.jpg',
        photoLink:'images/trevor.jpg',
        hashTags: ['castle', 'in', 'the', 'sky'],
        likeButton: 'images/like.png',
        editButton: 'images/edit.png',
        deleteButton: 'images/trash.png',
        likes: 'dasha',
        numberLikes: '1',
    },

    {
        id: '7',
        description: '‪Just feel every moment in ur life, try to live and not to exist.',
        createdAt: new Date('2019-02-04T12:10:56'),
        author: 'moment',
        authorPhoto: 'images/ok.jpg',
        photoLink:'images/leaf.jpg',
        hashTags: ['appreciate', 'the', 'moments'],
        likeButton: 'images/like.png',
        editButton: 'images/edit.png',
        deleteButton: 'images/trash.png',
        likes: 'himym',
        numberLikes: '1',
    },

    {
        id: '8',
        description: 'How to say these three words?',
        createdAt: new Date('2019-02-05T12:10:56'),
        author: 'tellmemore',
        authorPhoto: 'images/smile.jpg',
        photoLink:'images/love.jpg',
        hashTags: ['love', 'is', 'war'],
        likeButton: 'images/like.png',
        editButton: 'images/edit.png',
        deleteButton: 'images/trash.png',
        likes: 'girl',
        numberLikes: '1',
    },

    {
        id: '9',
        description: 'U should remember that kindness always wins.',
        createdAt: new Date('2019-02-06T12:10:56'),
        author: 'stuckedinlove',
        authorPhoto: 'images/lemon.jpg',
        photoLink: 'images/good.jpg',
        hashTags: ['be', 'kind', 'always'],
        likeButton: 'images/like.png',
        editButton: 'images/edit.png',
        deleteButton: 'images/trash.png',
        likes: 'sweet',
        numberLikes: '2',
    },

    {
        id: '10',
        description: 'What will u say, if the answer is yes? ',
        createdAt: new Date('2019-02-07T00:10:56'),
        author: 'moment',
        authorPhoto: 'images/ok.jpg',
        photoLink: 'images/mountain.jpg',
        hashTags: ['nature', 'beautiful', 'love'],
        likeButton: 'images/like.png',
        editButton: 'images/edit.png',
        deleteButton: 'images/trash.png',
        likes: 'kostya',
        numberLikes: '3',
    }
];

const forTest = {
        id: '1',
        description: 'COOOL EDIT',
        createdAt: new Date('2019-02-07T23:04:56'),
        author: 'turtlelovers',
        photoLink: 'images/turtle.jpg',
        hashTags: ['and', 'very', 'fun'],
        likes: 'vanya',
        numberLikes: '1',
}

let view = new View();

let user = new ViewUser('moment');
user.userPhoto = 'images/ok.jpg'

let viewHeader = new ViewHeader();
let viewFor = new ViewHeader();

const posts = new PhotoPosts();


function filter(){
    Filter.getFilters();
}

filter();

posts.addPhotoPost(photoPosts[0]);
posts.addPhotoPost(photoPosts[1]);
posts.addPhotoPost(photoPosts[2]);
posts.addPhotoPost(photoPosts[3]);
posts.addPhotoPost(photoPosts[4]);
posts.addPhotoPost(photoPosts[5]);
posts.addPhotoPost(photoPosts[6]);
posts.addPhotoPost(photoPosts[7]);
posts.addPhotoPost(photoPosts[8]);
posts.addPhotoPost(photoPosts[9]);

function addPost(post, view) {

	if (!posts.addPhotoPost(post)) {
		return false;   
	}
	view.showPost(post);
	return true;
}

function showAdd(posts, view, skip, amount){
    view.showAllPosts(posts, skip, amount);
}

showAdd(posts, view, 0, 10);

function deletePost(posts, viewer, id) {
	if (!posts.removePhotoPost(id)) {
		return false;
	}
	viewer.removePost(id);
	return true;
}

function edit(posts, viewer, id, newPost) {
	if (!posts.editPhotoPost(id, newPost)) {
		return false;
	}
	viewer.editPost(id, newPost);
	return true;
}

function activeUser(user) {
	ViewHeader.isActive(user);
}

function unactiveUser() {
	ViewHeader.isUnactive();
}

/*functions for authorised and not authorised user. testable*/

//activeUser(user);
unactiveUser();

/* working functions. u can test them. */

// deletePost(posts, view, '2');
// edit(posts, view, '1', forTest);