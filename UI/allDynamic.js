(function () {

	function signButtonsEvents(event) {

		const form = document.getElementById('authorisation');
		const titleNode = form.querySelector('#sign-title');

		if (event.target.id === 'sign-up') {
			OnClick.signUp(titleNode, form);
		}
		if (event.target.id === 'sign-in') {
			OnClick.signIn(titleNode, form);
		}
		if (event.target.id === 'sign-out') {
			OnClick.signOut();
		}
	}

	function showPosts(skip = 0, amount = gallery.numOfPosts) {
		const postList = gallery.getPhotoPosts(skip, amount, currentFilter);
		galleryViewer.showAllPosts(postList, user);
	}

	function userEvents() {
		if (!user.userName) {
			document.getElementById('uploadPhoto').hidden = true;
		}
		UserEvent.userBar(user);
	}

	function closeFormsEvents(event) {

		const targetNode = event.target;

		if (targetNode.id === 'picSignClose') {
			OnClick.closeSignForm();
		}
		if (targetNode.id === 'picAddClose') {
			event.preventDefault();
			OnClick.closeAddForm();
		}
		if (targetNode.id === 'cancel') {
			OnClick.closeDeleteForm();
			event.preventDefault();
		}
	}

	function openFormsEvent(event) {


		if (event.target.id === 'sign-in') {
			OnClick.openSignForm(1);
		}
		if (event.target.id === 'sign-up') {
			OnClick.openSignForm(0);
		}
		if (event.target.id === 'upload') {
			OnClick.openAddForm();
		}
		if (event.target.classList.contains('trash') || event.target.classList.contains('edit')) {

			let id = +event.target.closest('.border').id;
			let item = gallery.getPhotoPost(id);

			if (event.target.classList.contains('trash')) {
				OnClick.openDeleteForm(item);
			} else {
				OnClick.openEditForm(item);
			}
		}
	}

	function submitSignForm(event) {
		if (event.target.id === 'sign-form') {
			OnSubmit.submitSignForm(event, usersBase);
		}
	}

	function signOut(event) {
		if (event.target.id === 'sign-out') {
			user = new User();
			OnClick.signOut();
		}
	}

	function uploadImage(event) {
		if (event.target.id === 'uploadNewPhotoFor') {
			let selectedFile, imgBox;
			if (event.target.id === 'uploadNewPhotoFor') {
				selectedFile = document.getElementById('uploadNewPhotoFor').files[0];
				imgBox = document.getElementById('emptyPhoto');
			}
			else {
				selectedFile = document.getElementById('edit-photo').files[0];
				imgBox = event.target.closest('.popup-box').querySelector('.pic');
			}
			let filePath = URL.createObjectURL(selectedFile);
			imgBox.src = filePath;
		}
	}

	function submitAddForm(event) {
		if (event.target.id === 'newPost') {
			if (event.target.dataset.status === '0') {
				OnSubmit.submitAddForm(user, gallery);
			} else {
				let id = +event.target.dataset.id;
				let item = gallery.getPhotoPost(id);
				if (user.userName === item.author) {
					OnSubmit.submitEditForm(item, gallery);
				}
			}
		}
	}

	function deletePhotoEvent(event) {
		if (event.target.id === 'textY') {
			let id = document.getElementById('delete').dataset.id;
			let border = document.getElementById(id);
			OnClick.deletePhoto(+id, border, gallery);
			Storage.updatePostsList(gallery.getPhotoPosts(0, gallery.numberOfPosts));
		}
	}

	function like(event) {
		if (event.target.classList.contains('like')) {
			let border = event.target.closest('.border');
			OnClick.like(border, user, gallery);
			Storage.updatePostsList(gallery.getPhotoPosts(0, gallery.numberOfPosts, currentFilter));
		}
	}

	function displayLoadMore() {
		if (gallery.numOfPosts > 10) {
			document.getElementById('Load_more').hidden = false;
		}
	}

	function loadMore(event) {
		if (event.target.id === 'loadMore') {
			OnClick.loadMore(gallery, galleryViewer, currentFilter, user);
		}
	}

	function bind() {

		let signForm = document.getElementById('authorisation');
		document.addEventListener('DOMContentLoaded', userEvents);
		document.addEventListener('DOMContentLoaded', displayLoadMore);
		document.addEventListener('click', closeFormsEvents);
		document.addEventListener('click', signOut);
		signForm.addEventListener('click', signButtonsEvents);
		signForm.addEventListener('submit', submitSignForm);
		document.addEventListener('click', deletePhotoEvent);
		document.addEventListener('click', openFormsEvent);
		document.addEventListener('change', uploadImage);
		document.addEventListener('submit', submitAddForm);
		document.addEventListener('click', like);
		document.addEventListener('click', loadMore);
	}

	localStorage.clear();
	const gallery = new PhotoPosts(Storage.getPostsList());
	const currentFilter = new Filter();
	const galleryViewer = new View(currentFilter);
	const usersBase = new Base(Storage.getUsersBase());
	let user = Storage.getUser();

	if (gallery.numOfPosts === 0) {

		gallery.addPhotoPost(new Post('yana', 'images/french.jpg', 'yana', ['cool'], new Date()));
		gallery.addPhotoPost(new Post('yana', 'images/love.jpg', 'yana', ['cool'], new Date()));
		gallery.addPhotoPost(new Post('yana', 'images/glasses.jpg', 'yana', ['cool'], new Date()));
		gallery.addPhotoPost(new Post('yana', 'images/lovecats.jpg', 'yana', ['cool'], new Date()));
		gallery.addPhotoPost(new Post('yana', 'images/mountain.jpg', 'yana', ['cool'], new Date()));
		gallery.addPhotoPost(new Post('yana', 'images/paris.jpg', 'yana', ['cool'], new Date()));
		gallery.addPhotoPost(new Post('moments', 'images/doggy.jpg', 'moments', ['wow'], new Date()));
		gallery.addPhotoPost(new Post('nature', 'images/fire.jpg', 'nature', ['love'], new Date()));
		gallery.addPhotoPost(new Post('lemonee', 'images/lemon.jpg', 'lemonee', ['nice'], new Date()));
		gallery.addPhotoPost(new Post('life', 'images/turtle.jpg', 'life', ['what'], new Date()));
		gallery.addPhotoPost(new Post('life', 'images/mops2.jpg', 'life', ['what'], new Date()));
		gallery.addPhotoPost(new Post('life', 'images/mops.jpg', 'life', ['what'], new Date()));
		Storage.updatePostsList(gallery.getPhotoPosts(0, gallery.numOfPosts));
	}
	bind();
	showPosts(0, 10);
})();
