class Storage {

	static updatePostsList(list) {
		localStorage.setItem('allPosts', JSON.stringify(list));
	}

	static getPostsList() {

		let storagePost = JSON.parse(localStorage.getItem('allPosts'));
		let postList = [];

		if (storagePost) {
			storagePost.forEach((post) => {
				postList.push(Post.parseToPost(post));
			});
		}
		return postList;
	}

	static updateUsersBase(list) {
		localStorage.setItem('Base', JSON.stringify(list));
	}

	static getUsersBase() {

		let storageUsers = JSON.parse(localStorage.getItem('Base'));
		let userList = [];

		if (storageUsers) {
			storageUsers.forEach((user) => {
				userList.push(User.parseToUser(user));
			});
		}
		return userList;
	}

	static setUser(user = new User()) {
		localStorage.setItem('User', JSON.stringify(user));
	}

	static getUser() {
		let user = localStorage.getItem('User');
		if (user) {
			return User.parseToUser(JSON.parse(user));
		}
		return (new User());
	}
}