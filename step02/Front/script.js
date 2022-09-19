console.log("on va chercher les data de l'api");
fetch("http://localhost:3000/Advertisements").then((data)=> {
    console.log(data);
    return data.json();
}).then((ObjectData)=> {
    console.log(ObjectData[0].title);
    let DataTable="";
    ObjectData.map((values)=> {
        DataTable+= `<figure>
        <h2>${values.Job}</h2>
        <p>${values.ShortDescription}</p>
        <a href="" id="more">Learn more</a>
        <a href="" id="apply">Learn more</a>
    </figure>`;
    });
    document.getElementById("Job-figures").innerHTML=DataTable;
}).catch((err)=> {
    console.log(err);
})

// listen on button to display more infos

/*document.getElementById("more").addEventListener( displaymore() );

function displaymore() {
    DataTable+= `<figure>
        <h2>${values.Job}</h2>
        <p>${values.LongDescription}</p>
        p 
        <a href="" id="more">Learn more</a>
        <a href="" id="apply">Learn more</a>
    </figure>`;
    });*/
    

