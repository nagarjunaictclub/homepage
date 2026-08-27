import nodemailer from "nodemailer";

/**
 * @params Email sending using nodemailer
 */

export default async function sendmail(to: any, from: any, mode: any) {
  let transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    secure: true,
  });
  let mainOptions = {
    from: process.env.GMAIL_EMAIL_ADDRESS,
    to: to,
    subject: `${
      mode === "newsletter"
        ? "Thank you for subscribing to our newsletter"
        : "Thank you for Submitting your message"
    } `,
    text: "Hello World",
    // html: render(<WelcomeEmail userFirstname={from} />),
  };
  transporter.sendMail(mainOptions, (error: any, info: any) => {
    if (error) {
      throw new Error(error);
    } else {
      console.log(info.messageId);
    }
  });

  /**
   * @params Email sending using resend
   */

  // await resend.emails.send({
  //   from: "eriag321@gmail.com",
  //   to: to,
  //   subject: `${
  //     mode === "newsletter"
  //       ? "Thank you for subscribing to our newsletter"
  //       : "Thank you for Submitting your message"
  //   } `,
  //   html: "<strong>It works!</strong>",
  //   react: EmailTemplate(),
  // });
}
