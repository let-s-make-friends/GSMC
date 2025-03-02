export interface CertificateCode {
  email: string;
}
export interface SignIn extends CertificateCode {
  password: string;
}

export interface Auth extends CertificateCode {
  password: string;
  code: number;
}
