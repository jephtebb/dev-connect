async function commentFormHandler(event) {
    event.preventDefault();

    const answer_text = document.querySelector('textarea[name="answer-body"]').value.trim();

    const answer_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (answer_text) {
        const response = await fetch('/api/answers', {
            method: 'POST',
            body: JSON.stringify({
                answer_id,
                answer_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.answer-form').addEventListener('submit', answerFormHandler);