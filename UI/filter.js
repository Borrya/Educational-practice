class Filter {
    
    constructor(f_author = '', f_hashtags = [], f_date = true) {
		this.f_author = f_author;
		this.f_hashtags = f_hashtags;
		this.f_date = f_date;
	}

	isEmptyFilter() {

		if (this.f_author === '' && this.f_hashtags.length === 0) {
			return true;
		}
		return false;
	}

	validateFilter() {

		if (typeof (this.f_author) !== 'string') {
			return false;
		}
		return true;
	}
}