export const categories = ["Project", "Study", "PS", "ETC"] as const;

export type Category = (typeof categories)[number];

export const categorySlug = (category: string) => category.toLowerCase();

export const categoryDescriptions: Record<Category, string> = {
  Project: "프로젝트와 개발 경험",
  Study: "기술 학습 기록",
  PS: "알고리즘 문제 풀이",
  ETC: "기타 기록",
};
