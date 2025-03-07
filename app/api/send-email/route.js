import sgMail from '@sendgrid/mail';

export async function POST(req) {
    sgMail.setApiKey(process.env.EMAIL_PASS);

    try {
        const { name, email, phone, contactTime, description } = await req.json();

        const msg = {
            from: process.env.EMAIL_USER,
            to: 'crossstitchcurator@gmail.com', // Change to client email for production
            subject: `Website Lead from - ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Best Time: ${contactTime || 'Not specified'}
        
        Message: 
        ${description}
            `,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Best Time to Contact:</strong> ${contactTime || 'Not specified'}</p>
              <h3>Message:</h3>
              <p>${description.replace(/\n/g, '<br>')}</p>
            `
        };

        await sgMail.send(msg);

        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Failed to send message!', error: error.message }), { status: 500 });
    }
}
