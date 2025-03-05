export type category2 =
  | "교내 수상"
  | "교외 수상"
  | "교내 참가"
  | "교외 참가"
  | "동아리"
  | "인성 교외 수상"
  | "인성 교내 수상"
  | "인문 활동";

export type category = "인문" | "전공";

export interface Activity {
  studyCategory: category; // "인문" | "전공"
  subject: string; // 주제
  activityCategory: category2; // "교내 수상" | "교외 수상" | "교내 참가" | "교외 참가" | "동아리" | "인성 교외 수상" | "인성 교내 수상" | "인문 활동"
  body: string; // 글 본문
  semester: number;
  imageUrl: string; // 이미지 url
  postStatus: string; // "임시 저장" | "게시"
}

export interface Book {
  title: string; // 책 제목
  author: string; // 책 작가
  page: number; // 책 페이지
  body: string; // 글 본문
  semester: number; // 학기 1 | 2
  postStatus: string; // "임시 저장" | "게시"
}
