export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email } = req.body;
        // For simplicity, we'll just log the data. In a real app, you'd save this to a database.
        console.log(`RSVP received: ${name}, ${email}`);
        res.status(200).json({ message: 'RSVP received!' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
