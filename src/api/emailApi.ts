import { ListResponse } from 'models/common';
import axiosEmail from './axiosEmail';

const serviceId = process.env.REACT_APP_EMAIL_SERVICE_KEY;
const publicId = process.env.REACT_APP_EMAIL_PUBLIC_KEY;
const defaultTemplateId = process.env.REACT_APP_EMAIL_TEMPLATE_KEY;

const emailApi = {
  sendEmail(content: any): Promise<ListResponse<any>> {
    const param = {
      service_id: serviceId,
      template_id: defaultTemplateId,
      user_id: publicId,
      template_params: content,
    };
    const url = '/';
    return axiosEmail.post(url, { param });
  },
};

export default emailApi;
