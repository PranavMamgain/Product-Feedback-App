window.onload = function () {
    showFeedbackDetail();
    // showfeedbackdetail();
};



function showFeedbackDetail() {
    let idfeedback = localStorage.getItem("selectedFeedbackId");
    let arrData = JSON.parse(localStorage.getItem("Feedbacks"));
    let index = arrData.find(x => x.id == idfeedback);
    // console.log(index);
    // console.log(index.title +" "+ index.category);

    let dataDiv = document.getElementById("data-feedback");
    dataDiv.innerHTML = `
    <div class="upvotes-counter">
    <img class="upvote-img" src="/icons/up-chevron.png" alt="">
    <span id="upvotes">113</span>
  </div>
  <a class="suggestion-link" href="">
    <div class="suggestion-content">
        <div class="suggestion-main">
            <h4 class="title-feedback">${index.title}</h4>
            <p class="desc-feedback">${index.detail}</p>
            <span class="status-feedback">${index.category}</span>
        </div>
        <div class="suggestion-comment">
            <img src="/icons/comments.png" alt="" class="comment-img">
            <span class="no-of-comments">1</span>
        </div>
    </div>
  
  </a>
  `;

}


// function showfeedbackdetail() {
//     let clickedFeedbackId = localStorage.getItem("selectedFeedbackId");
//     // let arrIndex = clickedFeedbackId - 1;
//     // console.log(arrIndex);
//     // console.log(clickedFeedbackId);
//     let dataArr = JSON.parse(localStorage.getItem("Feedbacks"));


// }


