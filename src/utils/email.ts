import emailjs from '@emailjs/browser';

export const SendEmail = (templateId: string, emailContent: any) => {
  const serviceId = process.env.REACT_APP_EMAIL_SERVICE_KEY;
  const publicId = process.env.REACT_APP_EMAIL_PUBLIC_KEY;
  const defaultTemplateId = process.env.REACT_APP_EMAIL_TEMPLATE_KEY;

  if (serviceId && publicId && defaultTemplateId) {
    emailjs.send(serviceId, templateId || defaultTemplateId, emailContent, publicId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }
};
