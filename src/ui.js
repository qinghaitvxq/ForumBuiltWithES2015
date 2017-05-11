/**
 * Created by caipf on 2017/5/11.
 */
let ui={
    renderPosts(posts){
       let elements=posts.map((post)=>{
           let {title,lastReply}=post;

           return articleTemplate(title,lastReply);
       });
       let target=document.querySelector(".container");
       target.innerHTML=elements.join("");
    }
}
function  articleTemplate(title,lastReply) {

    let template = `
       <article class="post">
          <h2 class="post-title">
             ${title}
          </h2>
          <p class="post-meta">
             ${lastReply}
          </p>
    </article>`;
    return template;
}
export  default ui;