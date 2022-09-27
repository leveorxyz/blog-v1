import { createClient, predicate } from "@prismicio/client";

const API_URL = `https://leveor.prismic.io/api/v2`;

const Client = createClient(API_URL);

export function getPageByUID(uid: string) {
  return Client.getByUID("page", uid);
}

export function getAllPages() {
  return Client.getAllByType(
    predicate.at("document.type", "page"),
    { orderings: "[my.page.order]" }
  );
}
