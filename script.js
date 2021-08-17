window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const container = document.getElementById("container");
            
            for (let i = 0; i < json.length; i++){
                let fullName = json[i].firstName + " " + json[i].lastName
                let spaceHrs = json[i].hoursInSpace
                let active = json[i].active
                let skills = json[i].skills
                let avatar = json[i].picture

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