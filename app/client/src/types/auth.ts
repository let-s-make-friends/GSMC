export interface CertificateCode {
  email: string;
}

export interface Auth extends CertificateCode {
  password: string;
  code: number;
}
