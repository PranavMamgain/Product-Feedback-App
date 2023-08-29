


window.onload = function () {
    checkArray();
};

function storeFeedBack() {
    let titleFeedback = document.getElementById("title");
    console.log(titleFeedback);
    let categoryFeedback = document.getElementById("category");
    let detailFeedback = document.getElementById("detail");

    const storeData = {
        title: titleFeedback.value,
        category: categoryFeedback.value,
        detail: detailFeedback.value
    };
    let tempArray = JSON.parse(localStorage.getItem("Feedbacks"));

    let finalArray = tempArray ? tempArray : [];
    finalArray.push(storeData);

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
        var feedbackId = Math.random();
        let newFeedbackElement = document.createElement("div");
        newFeedbackElement.setAttribute("id", feedbackId);
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

document.addEventListener('DOMContentLoaded', function () {
    const feedbackItems = document.querySelectorAll('.feedback-item');

    feedbackItems.forEach(item => {
        item.addEventListener('click', function () {
            const feedbackId = item.getAttribute('data-feedback-id');
            localStorage.setItem('selectedFeedbackId', feedbackId);
            window.location.href = 'detail.html'; // Navigate to the detail page
        });
    });
});

function getID(){
    
}