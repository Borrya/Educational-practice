class Filter {
    
    static getFilters(){

        let filter = document.getElementById('filter');

        filter.innerHTML = `
        <span class="Filter">
                <p><strong>Filter</strong></p>
            </span>

            <p>By name</p>

            <div class="onoffswitch">
                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>
                <label class="onoffswitch-label" for="myonoffswitch"></label>
            </div>

            <p>By date</p>

            <div class="onoffswitch2">
                <input type="checkbox" name="onoffswitch2" class="onoffswitch2-checkbox" id="myonoffswitch2" checked>
                <label class="onoffswitch2-label" for="myonoffswitch2"></label>
            </div>

            <p>By hashtags</p>

            <div class="onoffswitch3">
                <input type="checkbox" name="onoffswitch3" class="onoffswitch3-checkbox" id="myonoffswitch3" checked>
                <label class="onoffswitch3-label" for="myonoffswitch3">
                <span class="onoffswitch3-inner"></span>
        <span class="onoffswitch3-switch"></span>
        </label>
            </div>
        `;
    }
    
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

		if (typeof (this.f_author) !== 'string' || !isStringArray(this.f_hashtags)) {
			return false;
		}
		return true;
	}
}