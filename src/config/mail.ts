import { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } from './config';

export default {
  host: MAIL_HOST,
  port: Number(MAIL_PORT),
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
};
