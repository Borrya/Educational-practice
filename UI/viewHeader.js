class ViewHeader{

    static isActive(user){

        if(!(user instanceof ViewUser)){
            console.log('Error!');
			return;
        }

        let header = document.getElementById('panel');

        header.innerHTML = `
        <div id="controlPanel">
        <img id="avatar" src="${user.userPhoto}">
        <button id="toProfile">@${user.userName}</button>
        <button id="sign-out">sign out</button>
        </div>
        `;
    }

    static isUnactive(){
        let header = document.getElementById('panel');

        header.innerHTML = `
        <div id="controlPanel">
        <img id="avatar">
        <button id="sign-in">sign in</button>
        <img id="avatar">
        </div>
        `;
    }
}