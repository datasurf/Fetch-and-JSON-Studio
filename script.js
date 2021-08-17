window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const container = document.getElementById("container");
            
            for (let i = 0; i < json.length; i++){
                let arrayPos = json[i]
                let fullName = arrayPos.firstName + " " + arrayPos.lastName
                let spaceHrs = arrayPos.hoursInSpace
                let active = arrayPos.active
                let skills = arrayPos.skills
                let avatar = arrayPos.picture

                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${fullName}</h3>
                        <ul>
                            <li>Hours in space: ${spaceHrs}</li>
                            <li>Active: ${active}</li>
                            <li>Skills: ${skills}</li>
                        </ul>
                </div>
                <img class="avatar" src="${avatar}">
                </div>`

            };
        });
    });
});