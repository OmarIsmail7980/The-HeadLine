
news();
function news(){
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=6ac72635cc3d4b819d8096e2b6057a5c")
    .then(response=>response.json()).then(data=>{
        const articles = data.articles;
        //get news articles
        articles.forEach((article)=>{
            const container = document.createElement("div");
            const title = document.createElement("h3");
            const content = document.createElement("a");
            const img = document.createElement("img");
            const imgUrl = document.createElement("a");
            const body = document.querySelector(".col")
            const published = document.createElement("small");
            const options ={weekday:"long",month:"long",day:"numeric",year:"numeric"}
            let localDate;
            const source = document.createElement("small");

            title.textContent = article.title;
            title.classList.add("link")
            content.textContent = article.description;
            content.href = article.url;
            content.classList.add("link");
            localDate = new Date(article.publishedAt);
            //format to localDate
            published.textContent = localDate.toLocaleDateString("en-US",options)
            published.classList.add("link");
            source.textContent = article.source.name;
            source.classList.add("link")
            if(article.urlToImage!=null){
                img.src = article.urlToImage;
                imgUrl.href = article.url;
                img.classList.add("pic");
                imgUrl.appendChild(img);
            }
            //append to DOM
            container.classList.add("article");
            container.append(source,imgUrl,title,content,published);
            body.appendChild(container);

        })
        
    })
}

