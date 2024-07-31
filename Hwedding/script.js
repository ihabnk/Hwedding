document.getElementById('rsvp-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const response = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email')
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    alert(result.message);
});
