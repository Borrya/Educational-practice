class UserEvent {



	static userBar(user) {

		if (user.userName === '')
		{
			ViewHeader.isUnactive();
		} else {
			ViewHeader.isActive(user);
		}
	}
}