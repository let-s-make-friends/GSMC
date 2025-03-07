export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface TokenDto {
  data: {
    tokenDto: {
      accessToken: string;
      accessTokenExp: string;
      refreshToken: string;
      refreshTokenExp: string;
    };
  };
}
