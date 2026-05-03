import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, phone, email, occasion, otherOccasion, pages, description, theme, language, delivery, totalPrice, driveLink } = body;
    
    const finalOccasion = occasion === 'other' ? otherOccasion : occasion;

    // Create a transporter using your email credentials
    console.log('Attempting to send email for:', fullName);

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: 'magzinenepal@gmail.com',
        pass: 'fffhrpnkkfdlxyxh'
      }
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('Transporter is ready to take our messages');
    } catch (err) {
      console.error('Transporter verification failed:', err);
      throw new Error('Transporter configuration is incorrect');
    }

    const mailOptions = {
      from: '"Magzine Memories" <magzinenepal@gmail.com>',
      to: 'magzinenepal@gmail.com, shrestha246810@gmail.com, simantshrestha2002@gmail.com, krishna726175@gmail.com, 2005.khatiwadanelson@gmail.com',
      replyTo: email,
      subject: `New Order from ${fullName} - ${pages} Pages`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <div style="background: #d4a373; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">New Order Received!</h1>
          </div>
          
          <div style="padding: 20px; border: 1px solid #eee; border-radius: 0 0 10px 10px;">
            <p>Hello Admin, you have a new magazine order.</p>
            
            <h2 style="color: #d4a373; border-bottom: 2px solid #f0e2d3; padding-bottom: 10px;">Customer Details</h2>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            
            <h2 style="color: #d4a373; border-bottom: 2px solid #f0e2d3; padding-bottom: 10px;">Order Details</h2>
            <p><strong>Occasion:</strong> ${finalOccasion}</p>
            <p><strong>Number of Pages:</strong> ${pages}</p>
            <p><strong>Theme Style:</strong> ${theme}</p>
            <p><strong>Language:</strong> ${language || 'N/A'}</p>
            <p><strong>Delivery Preference:</strong> ${delivery}</p>
            <p style="font-size: 1.2rem; background: #fffdf0; padding: 10px; border-radius: 5px;"><strong>Total Price:</strong> Rs. ${totalPrice}</p>
            
            <h2 style="color: #d4a373; border-bottom: 2px solid #f0e2d3; padding-bottom: 10px;">Photos Access</h2>
            <p><strong>Link:</strong> ${driveLink ? `<a href="${driveLink}" style="color: #d4a373; font-weight: bold; text-decoration: underline;">${driveLink}</a>` : 'N/A'}</p>
            
            <h2 style="color: #d4a373; border-bottom: 2px solid #f0e2d3; padding-bottom: 10px;">Description</h2>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; font-style: italic;">
              ${description || 'No specific instructions provided.'}
            </p>
          </div>
          
          <p style="margin-top: 30px; font-size: 0.8rem; color: #888; text-align: center;">
            This is an automated notification from your Magzine Memories website.
          </p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return NextResponse.json({ success: true, message: 'Order received and email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('FULL EMAIL ERROR:', error);
    return NextResponse.json({ success: false, message: 'Error sending email', error: error.message }, { status: 500 });
  }
}
