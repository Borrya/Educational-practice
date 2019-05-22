class OnClick {

	static signIn(titleNode, form) {
		titleNode.textContent = 'SIGN IN';
		form.querySelector('#sign-form').dataset.status = '1';
		form.hidden = false;
	}

	static signOut() {
		ViewHeader.guest();
		Storage.setUser(new User());
		location.reload();
	}

	static signUp(titleNode, form) {
		titleNode.textContent = 'REGISTRATION';
		form.querySelector('#sign-form').dataset.status = '0';
		form.hidden = false;
	}

	static closeSignForm() {
		document.getElementById('authorisation').hidden = true;
		document.getElementById('login').value = '';
		document.getElementById('password').value = '';
	}

	static openSignForm(action) {
		let signForm = document.getElementById('authorisation');
		let title = document.getElementById('sign-title');
		signForm.querySelector('#sign-form').dataset.status = '' + action;
		title.textContent = (!action) ? 'Sign up' : 'Sign in';
		title.textContent += ' to see photos of your friends';
		signForm.hidden = false;
	}

	static signOut() {

		Storage.setUser(new User());
		location.reload();
	}

	static openAddForm() {
		let form = document.getElementById('newPost');
		form.hidden = false;
		form.dataset.status = '0';
	}

	static openDeleteForm(item) {
		let form = document.getElementById('delete');
		form.hidden = false;
		form.dataset.id = '' + item.id;
	}

	static openEditForm(item) {
		let form = document.getElementById('newPost');
		document.getElementById('emptyPhoto').src = item.photoLink;
		document.getElementById('enterD').value = item.description;
		document.getElementById('enterH').value = item.hashTags.join(' ');
		form.hidden = false;
		form.dataset.status = '1';
		form.dataset.id = '' + item.id;
	}

	static closeAddForm() {
		let addForm = document.getElementById('newPost');
		addForm.hidden = true;
		addForm.querySelector('#emptyPhoto').src = 'images/empty.png';
		addForm.querySelector('#enterD').value = '';
		addForm.querySelector('#enterH').value = '';
	}

	static closeDeleteForm() {
		let addForm = document.getElementById('delete');
		addForm.hidden = true;
	}

	static deletePhoto(id, border, gallery) {
		gallery.removePhotoPost(id);
		border.remove();
	}

	static like(border, user, gallery) {
		let id = +border.id;
		let item = gallery.getPhotoPost(id);
		if (!item.likes.includes(user.userName)) {
			item.numberLikes++;
			item.likes.push(user.userName);
			border.querySelector('.like').src = 'images/newLike.png';
			border.querySelector('.likes').firstElementChild.textContent = '' + item.numberLikes + ' likes';

		} else {
			item.numberLikes--;
			item.likes.splice(item.likes.indexOf(user.userName), 1);
			border.querySelector('.like').src = 'images/like.png';
			border.querySelector('.likes').firstElementChild.textContent = '' + item.numberLikes + ' likes';
		}
	}

	static loadMore(gallery, viewer, currentFilter, user) {
		viewer.showAllPosts(gallery.getPhotoPosts(viewer.numberOfShown, 10, currentFilter), user);
		document.getElementById('Load_more').hidden = (viewer.numberOfShown < gallery.numOfPosts) ? false : true;
	}
}