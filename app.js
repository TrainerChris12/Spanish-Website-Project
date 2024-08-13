const hamburgerIcon = document.querySelector('.hamburgerIcon');
const navLinksContainer = document.querySelector('.navLinksContainer');

hamburgerIcon.addEventListener('click', () => {
    if (navLinksContainer.style.display == 'none') {
        navLinksContainer.style.display = 'flex';
    }
    else {
        navLinksContainer.style.display = 'none';
    }
});


// //Handling StoryForm Submission
// document.getElementBYId('storyForm').addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const prompt = document.getElementById('storyPrompt').value;
//     const repsonse = await fetch('https://api.openai.com/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({prompt})
//     });
//     const data = await repsonse.json();
//     document.getElementById('currentStory').textContent = data.story;
// });

