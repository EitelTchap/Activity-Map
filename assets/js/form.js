// Get variables from HTML
var questions = document.getElementById('questions'); // Questions
var choices = document.getElementById('choices'); // Choices
var start = document.getElementById('start'); // Start button
var questionsSection = document.getElementById('questions-section'); // Question section
var recommendationSection = document.getElementById('recommendation-section'); // Recommendation section
var finalRecommendation = document.getElementById('final-recommendation'); // Placeholder recommendation
var formCard = document.getElementById('form-card'); // Form card
var finalAnswers = [];

// Recommended plan values
const freePlan = ['Self', 'Yes (GLB, USDZ)', 'None', 'None', 'Limited', '1GB', 'None', 'None', 'Yes', 'Basic'];
const proPlan = ['Self', 'Yes (GLB, USDZ)', 'Annotation', 'Yes', 'Yes', '5GB', 'Yes (first 3 free)', 'Yes', 'Yes', 'Email Support'];
const corporatePlan = ['Self', 'Yes (GLB, USDZ, OBJ, GLTF)', 'Annotation, Discussion, Drawing', 'Yes', 'Yes', '10GB', 'Yes (first 3 free)', 'Yes', 'Yes', 'Priority Email - Slack'];
const enterprisePlan = ['Dedicate', 'Custom', 'Custom', 'Custom', 'Custom', 'Custom', 'Custom', 'Advanced', 'Advanced', 'Custom SLA'];

// Define form questions
function formQuestions() {
    // Initialize the question index and answers
    let currentQuestionIndex = 0;
    let allAnswers = [];

    // Function to display the current question and choices
    function displayQuestion() {
        if (currentQuestionIndex < planQuestions.length) {
            // Get the current question and choices
            const currentQuestion = planQuestions[currentQuestionIndex];
            const questionOutput = currentQuestion.question;
            const answerChoices = currentQuestion.answers;

            // Hide recommendation when button pressed
            finalRecommendation.textContent = ''; // Clear the question text

            // Display the question
            questions.textContent = questionOutput;
            questions.classList.remove('hide');

            // Render a list of buttons for the choices
            choices.innerHTML = "";
            for (let i = 0; i < answerChoices.length; i++) {
                const choiceBtn = document.createElement("button");
                choiceBtn.setAttribute('class', 'btn btn-outline-primary');
                choiceBtn.textContent = answerChoices[i];

                // Add a click event listener to the button to move to next question
                choiceBtn.addEventListener('click', function () {
                    // Register user's choice and push in allAnswers
                    var userChoice = choiceBtn.textContent;
                    allAnswers.push(userChoice);

                    // Move on to the next question
                    currentQuestionIndex++;
                    // Display the next question
                    displayQuestion();
                });

                // Append the button to the choices container
                choices.appendChild(choiceBtn);
            }
        } else {
            // Finish questions and display recommendation
            // Attach answers to global variable
            finalAnswers = allAnswers;

            // Function to display recommendation
            recommendation();
        }
    }

    // Start displaying the first question
    displayQuestion();
    recommendationSection.setAttribute('class', 'hide'); // Hide recommendation section
}

// Event listener to trigger questions
start.addEventListener("click", function () {
    questionsSection.setAttribute('class', 'start'); // Displays the questions section
    formCard.setAttribute('class', 'card form-card-show'); // Display question card
    choices.setAttribute('class', 'd-grid gap-2 col-8 mx-auto'); // Buttons style
    formQuestions();
});

// Show recommendation
function recommendation() {
    // Hide Question card and questions
    questionsSection.setAttribute('class', 'hide');
    formCard.setAttribute('class', 'hide');
    choices.setAttribute('class', 'hide');
    questions.setAttribute('class', 'hide');

    // Clear question and choices
    questions.textContent = ''; // Clear the question text
    choices.innerHTML = ''; // Clear the choices

    console.log(finalAnswers);

    // Determine the recommended plan based on the user's choices
    let recommendedPlan = 'Free Plan';
    let recommendedPlanCardId = 'free-plan-card';
    let recommendedPlanColumnId = 'free-plan-column';

    // Check from the cheapest to the most expensive plan
    for (let i = 0; i < planQuestions.length; i++) {
        if (finalAnswers[i] !== freePlan[i]) {
            if (finalAnswers[i] === proPlan[i]) {
                recommendedPlan = 'Pro Plan';
                recommendedPlanCardId = 'pro-plan-card';
                recommendedPlanColumnId = 'pro-plan-column';
            }
            if (finalAnswers[i] === corporatePlan[i]) {
                recommendedPlan = 'Corporate Plan';
                recommendedPlanCardId = 'corporate-plan-card';
                recommendedPlanColumnId = 'corporate-plan-column';
            }
            if (finalAnswers[i] === enterprisePlan[i]) {
                recommendedPlan = 'Enterprise Plan';
                recommendedPlanCardId = 'enterprise-plan-card';
                recommendedPlanColumnId = 'enterprise-plan-column';
                break;
            }
        }
    }

    // Display the recommendation
    finalRecommendation.textContent = 'Recommended Plan: ' + recommendedPlan;
    recommendationSection.classList.remove('hide'); // Show the recommendation section

    // Highlight the recommended plan card and column
    document.getElementById(recommendedPlanCardId).classList.add('highlight');
    document.getElementById(recommendedPlanColumnId).classList.add('highlight');
}


//Toggles between devices' image and description when clicking a button
document.addEventListener('DOMContentLoaded', function () {
    function hideAllContent() {
        document.getElementById('img-ios').style.display = 'none';
        document.getElementById('img-macos').style.display = 'none';
        document.getElementById('img-webview').style.display = 'none';
        document.getElementById('img-visionos').style.display = 'none';
        
        document.getElementById('header-ios').style.display = 'none';
        document.getElementById('header-macos').style.display = 'none';
        document.getElementById('header-webview').style.display = 'none';
        document.getElementById('header-visionos').style.display = 'none';

        document.getElementById('para-ios').style.display = 'none';
        document.getElementById('para-macos').style.display = 'none';
        document.getElementById('para-webview').style.display = 'none';
        document.getElementById('para-visionos').style.display = 'none';
    }

    document.getElementById('btn-ios').addEventListener('click', function () {
        hideAllContent();
        document.getElementById('img-ios').style.display = 'block';
        document.getElementById('header-ios').style.display = 'block';
        document.getElementById('para-ios').style.display = 'block';
        document.getElementById('discover-more').setAttribute('href','https://3dto.me/ios/')
    });

    document.getElementById('btn-macos').addEventListener('click', function () {
        hideAllContent();
        document.getElementById('img-macos').style.display = 'block';
        document.getElementById('header-macos').style.display = 'block';
        document.getElementById('para-macos').style.display = 'block';
        document.getElementById('discover-more').setAttribute('href','https://3dto.me/macos/')
    });

    document.getElementById('btn-webview').addEventListener('click', function () {
        hideAllContent();
        document.getElementById('img-webview').style.display = 'block';
        document.getElementById('header-webview').style.display = 'block';
        document.getElementById('para-webview').style.display = 'block';
        document.getElementById('discover-more').setAttribute('href','https://3dto.me/web/')
    });

    document.getElementById('btn-visionos').addEventListener('click', function () {
        hideAllContent();
        document.getElementById('img-visionos').style.display = 'block';
        document.getElementById('header-visionos').style.display = 'block';
        document.getElementById('para-visionos').style.display = 'block';
        document.getElementById('discover-more').setAttribute('href','https://3dto.me/visionos/')
    });

    // Initial state
    hideAllContent();
    document.getElementById('img-ios').style.display = 'block';
    document.getElementById('header-ios').style.display = 'block';
    document.getElementById('para-ios').style.display = 'block';
});