class View {

    constructor() {
        this._countViewPhoto = 0;
        this._curFilter = new Filter();
    }

    incrementShown() {
		this._countViewPhoto++;
	}

	decrementShown() {
		this._countViewPhoto--;
    }
    
    refreshShown() {
		this._countViewPhoto = 0;
    }
    
    get numberOfShown() {
		return this._countViewPhoto;
	}
      
	_reformDate(date) {
		let dateOptions = {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
		};
		let timeOptions = {
			hour: 'numeric',
			minute: '2-digit',
			hour12: false,
		};
		return (date.toLocaleDateString('en-US', dateOptions) + ' ' + date.toLocaleTimeString('en-US', timeOptions));
	}

    _fillHashtags(item, box) {

		let hashtags = box.querySelector('.hashtags');
		let span;
		item.hashTags.forEach(function (tag) {
			span = document.createElement('span');
			span.classList.add('tag');
			span.textContent = '#' + tag;
			hashtags.appendChild(span);
		});
    }

    makePost(post, postsContainer, user) {
    
        let photoPost = document.createElement('div');
        photoPost.classList.add('border');
        photoPost.id = post.id;

        photoPost.innerHTML = `
                <div class="leftPart">

                    <div class=photoBase>
                        <img class="photo" src=${post.photoLink}>
                    </div>

                    <div class="emptypanel">
                        <div class="photoPanel">
                            <button class="likeButton" hidden><img class="like" src="images/like.png"></button>
                            <button class="editButton" hidden><img class="edit" src="images/edit.png"></button>
                            <button class="trashButton" hidden><img class="trash" src="images/trash.png"></button>
                        </div>
                    </div>
                </div>

                <div class="rightPart">
                        <div class="user">

                            <div class="avatar">
                                
                            </div>

                            <div class="userName">
                                <button class="toProfile2"><strong>@${post.author}</strong></button>
                            </div>

                        </div>

                        <div class="scroll">
                            <div class="persons name">
                                <div class="description">
                                <span class="authorId"><strong>@${post.author}</strong></span> <span> ${post.description}</span>
                                </div>

                                <div class="hashtags"></div>

                                <div class="comments">
                                </div>
                            </div>
                        </div>

                    <div class="likes" data-status='0'>
                    <strong>${post.numberLikes}  likes</strong>
                    </div>

                    <div class="time">
                        <span class="Time">${this._reformDate(post.createdAt)}</span>
                    </div>

                    <div class="userPanel">
                        <textarea id="addComment" placeHolder="Add comment..."></textarea>
                    </div>
                </div>
            </div>
        `;
        this._fillHashtags(post, photoPost);
        if (user.userName === post.author) {
            photoPost.querySelector('.editButton').hidden = false;
            photoPost.querySelector('.trashButton').hidden = false;
        }
        if (user.userName !== '') {
            photoPost.querySelector('.likeButton').hidden = false;
        }
        if (post.likes.includes(user.userName)) {
            photoPost.querySelector('.like').src = 'images/newLike.png';
        }
        postsContainer.appendChild(photoPost);
    }

    
    setFilter(filter = new Filter()) {

		if (!(filter instanceof Filter) || !(filter.validateFilter())) {
			console.log('Incorrect argument!');
			return;
		}
		this._curFilter = filter;
	}

    showPost(post, user) {

        let allPhotos = document.getElementById('posts');
        this.makePost(post, allPhotos, user);
    }  

    showAllPosts(postList, user) {
		postList.forEach((post) => {
			this.showPost(post, user);
			this.incrementShown();
		});
	}

    removePost(id = 0) {

		let post = document.getElementById(id);
		post && post.remove();
    }
    
    
	editPost(id, new_post) {

        let post = document.getElementById(id);
        let desc = post.querySelector(".description");

        desc.lastElementChild.textContent = new_post.description;

        let pic = post.querySelector(".photo");
        pic.src = new_post.photoLink;

        let hashtags = post.querySelector(".hashtags");
        this._fillHashtags(new_post, post);
    }
}