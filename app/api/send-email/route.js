// File: app/api/send-email/route.js
import sgMail from '@sendgrid/mail';

export async function POST(req) {
    sgMail.setApiKey(process.env.EMAIL_PASS);

    try {
        // Parse the request body - include all fields from your form
        const { name, email, phone, description, projectType, isUrgent } = await req.json();

        // Format the email subject - add urgency flag if needed
        const emailSubject = isUrgent 
            ? `🚨 URGENT: Website Lead from - ${name}` 
            : `Website Lead from - ${name}`;

        // Format the email content - include all form fields
        const htmlContent = `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
            ${isUrgent ? `<p style="color: red; font-weight: bold;">URGENT REQUEST - 24/7 Emergency Response</p>` : ''}
            <h3>Message:</h3>
            <p>${description.replace(/\n/g, '<br>')}</p>
        `;

        const textContent = `
Name: ${name}
Email: ${email}
Phone: ${phone}
${projectType ? `Project Type: ${projectType}\n` : ''}
${isUrgent ? 'URGENT REQUEST - 24/7 Emergency Response\n' : ''}

Message: 
${description}
        `;

        // Create the message object
        const msg = {
            from: process.env.EMAIL_USER,
            to: 'leads@flexelectricfl.com', // Primary recipient
            subject: emailSubject,
            text: textContent,
            html: htmlContent,
            replyTo: email // Set reply-to as the submitter's email
        };

        // Send the email
        await sgMail.send(msg);

        // Return success response
        return new Response(
            JSON.stringify({ message: 'Email sent successfully!' }), 
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        
        // Return error response
        return new Response(
            JSON.stringify({ message: 'Failed to send message!', error: error.message }), 
            { status: 500 }
        );
    }
}