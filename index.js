let source = "the-times-of-india";
let apikey = "371066e546674653ad601105889252f6";

let newsAccordian = document.getElementById("newsAccordian");
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`,
  true
);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    //console.log(articles);
    let newsHtml = "";
    articles.forEach((element,index) => {
        //console.log(element,index);
      let news = `<div class="card">
                               <div class="card-header" id="heading${index}">
                                   <h2 class="mb-0">
                                     <button
                                       class="btn btn-link collapsed"
                                       type="button"
                                       data-toggle="collapse"
                                       data-target="#collapse${index}"
                                       aria-expanded="false"
                                       aria-controls="#collapse${index}">
                                        <b>Breaking News ${index+1}:</b> ${element["title"]}
                                    </button>
                                   </h2>
                                 </div>
                             <div
                             id="collapse${index}"
                             class="collapse"
                             aria-labelledby="heading${index}"
                             data-parent="#newsAccordion">
                             <div class="card-body">${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a></div>
                             </div>
                        </div>`;
      newsHtml += news;
    });
    newsAccordian.innerHTML = newsHtml;
  } else {
    console.log("some error occured");
  }
}

xhr.send();
