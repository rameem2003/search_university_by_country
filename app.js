const searchCountry = document.getElementById("searchCountry");
const searchBtn = document.getElementById("searchBtn");


const searchBox = document.getElementById("searchBox");
const searchResult = document.getElementById("searchResult");


searchBtn.addEventListener("click", () => {
    let countryName = searchCountry.value;

    fetchUnivarsitydata(countryName);
})


const fetchUnivarsitydata = (inputCountry) => {
    fetch(`http://universities.hipolabs.com/search?country=${inputCountry}`).then(response => response.json()).then(data => {
        if(data.length != 0){
            searchBox.classList.add("hideSearchBox");
            searchResult.classList.add("showResult");
            console.log(data.length);

            searchResult.innerHTML = `${data.map(university => {
                return `<div class="card">
                            <h1>${university.name}</h1>
                            <div class="des">
                                <span>${university.country}</span>
                                <a href="${university.web_pages[0]}">${university.web_pages[0]}</a>
                            </div>
                        </div>`
            }).join("")}`

        }else{
            searchBox.classList.add("hideSearchBox");
            searchResult.classList.add("showResult");
            console.log(data.length);
            searchResult.innerHTML = `<h1 class="error" style="text-align: center;">'${inputCountry}' Not Found</h1>`
        }
        
    })
}

searchCountry.addEventListener("keyup", (e) => {
    // console.log(e);
    if(e.key === "Enter"){
        let countryName = searchCountry.value;

        fetchUnivarsitydata(countryName);
    }
})