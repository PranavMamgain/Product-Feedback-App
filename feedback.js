// debugger;
window.onload = function () {
    checkArray();
    getFeedbackId();
    filterCategory();

};

function storeFeedBack() {
    let titleFeedback = document.getElementById("title");
    console.log(titleFeedback);
    let categoryFeedback = document.getElementById("category");
    let detailFeedback = document.getElementById("detail");

    let currentIdCounter = parseInt(localStorage.getItem('currentIdCounter')) || 0;


    const storeData = {
        id: currentIdCounter,
        title: titleFeedback.value,
        category: categoryFeedback.value,
        detail: detailFeedback.value
    };
    let tempArray = JSON.parse(localStorage.getItem("Feedbacks"));

    let finalArray = tempArray ? tempArray : [];
    finalArray.push(storeData);

    currentIdCounter++;
    localStorage.setItem("currentIdCounter", currentIdCounter);
    localStorage.setItem("Feedbacks", JSON.stringify(finalArray));
}

function checkArray() {
    let arrayCheck = JSON.parse(localStorage.getItem("Feedbacks"));

    let updateArrayCheck = arrayCheck ? arrayCheck : [];

    if (updateArrayCheck.length > 0) {
        showFeedback(updateArrayCheck);
    }


}

function showFeedback(arrayToShow) {
    let showList = document.getElementById("feedback-list");
    showList.innerHTML = "";

    arrayToShow.forEach(feedback => {
        // var feedbackId = Math.random();
        // let feedbackID
        let newFeedbackElement = document.createElement("div");
        newFeedbackElement.setAttribute("id", feedback.id);
        newFeedbackElement.setAttribute("data-selector", feedback.category);
        newFeedbackElement.setAttribute("class", "suggestion-card");
        newFeedbackElement.innerHTML = `
        <div class="upvotes-counter">
                                <img class="upvote-img" src="/icons/up-chevron.png" alt="">
                                <span id="upvotes">113</span>
                            </div>
                            <a class="suggestion-link" href="feedback-content.html">
                                <div class="suggestion-content">
                                    <div class="suggestion-main">
                                        <h4 class="title-feedback">${feedback.title}</h4>
                                        <p class="desc-feedback">${feedback.detail}</p>
                                        <span class="status-feedback">${feedback.category}</span>
                                    </div>
                                    <div class="suggestion-comment">
                                        <img src="/icons/comments.png" alt="" class="comment-img">
                                        <span class="no-of-comments">1</span>
                                    </div>
                                </div>

                            </a>
        `;
        showList.appendChild(newFeedbackElement);
    });

}

function getFeedbackId() {
    const feedbackItems = document.querySelectorAll(".suggestion-link");

    feedbackItems.forEach(item => {

        item.addEventListener('click', function (event) {

            event.preventDefault();
            const selectedFeedbackId = parseInt(item.closest('.suggestion-card').getAttribute("id"));
            localStorage.setItem("selectedFeedbackId", selectedFeedbackId);
            window.location.href = "feedback-content.html";
        });
    });
}

function filterCategory(filter) {
    let article = document.querySelectorAll(".suggestion-card");

    article.forEach(e =>{
        
    });
}

function filterBtn () {

}
