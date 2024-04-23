function fetchQuestion() {
    const studentLevel = document.getElementById('studentLevel').value;
    const topic = document.getElementById('topic').value;

    fetch(`/api/question?studentLevel=${studentLevel}&topic=${topic}`)
        .then(response => response.text()) // Fetch response as plain text
        .then(questionText => {
            document.getElementById('question-box').textContent = questionText; 
        })
        .catch(error => console.error('Error fetching question:', error));
}

function submitCode() {
    const code = document.getElementById('codeInput').value;

    fetch('/api/grade', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: code })
    })
        .then(response => response.json())
        .then(result => {
            document.getElementById('result').textContent = `Grade: ${result.grade}`;
        })
        .catch(error => console.error('Error submitting code:', error));
}
