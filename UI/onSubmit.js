class OnSubmit {

	static submitSignForm(event, usersBase) {

		const status = document.getElementById('sign-form').dataset.status;
		const loginForm = document.getElementById('login');
		const passwordForm = document.getElementById('password');
		let login = loginForm.value;
		let password = passwordForm.value;
		let user = '';

		if (status === '0') {
			if (!usersBase.checkUser(login)) {
				user = new User(login, password);
				usersBase.addUser(user);
				Storage.updateUsersBase(usersBase.userList);
				Storage.setUser(user);
				location.reload();
			}

		} else if (status === '1') {
			user = usersBase.getUser(login);
			if (user && user.userPassword === password) {
				Storage.setUser(user);
				location.reload();
			}
		}
	}

	static submitAddForm(user, gallery) {

		const photoPath = document.getElementById('emptyPhoto').src;
		const description = document.getElementById('enterD').value;
		const hashtagsNodes = document.getElementById('enterH').value;
		const hashtags = hashtagsNodes.split(/[\s#]+/);

		let new_post = new Post(user.userName, photoPath, description, hashtags, new Date());
		if (gallery.addPhotoPost(new_post)) {
			Storage.updatePostsList(gallery.getPhotoPosts(0, gallery.numOfPosts));
			location.reload();
		}
	}

	static submitEditForm(item, gallery) {

		const photoPath = document.getElementById('emptyPhoto').src;
		const description = document.getElementById('enterD').value;
		const hashtagsNodes = document.getElementById('enterH').value;
		const hashtags = hashtagsNodes.split(/[\s#]+/);

		item.photoLink = photoPath;
		item.description = description;
		item.hashTags = hashtags;

		Storage.updatePostsList(gallery.getPhotoPosts(0, gallery.numOfPosts));
		location.reload();
	}

	static submitDeleteForm(user, gallery) {

		const photoPath = document.getElementById('emptyPhoto').src;
		const description = document.getElementById('enterD').value;
		const hashtagsNodes = document.getElementById('enterH').value;
		const hashtags = hashtagsNodes.split(/[\s#]+/);

		let new_post = new Post(user.userName, photoPath, description, hashtags, new Date());
		if (gallery.removePhotoPost(new_post)) {
			Storage.updatePostsList(gallery.getPhotoPosts(0, gallery.numOfPosts));
			location.reload();
		}
	}

}