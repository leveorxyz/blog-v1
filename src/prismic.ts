import { createClient, getRepositoryEndpoint } from "@prismicio/client";

const repoName = "leveor";
const endpoint = getRepositoryEndpoint(repoName);
const Client = createClient(endpoint);

export function getPostByUID(uid: string) {
  return Client.getByUID("blog_post", uid);
}

export function getAllPosts(limit: number = 10) {
  return Client.getAllByType("blog_post", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    limit: limit,
  });
}

export function getAllCategories() {
  return Client.getAllByType("category", {
    orderings: {
      field: "document.title",
      direction: "desc",
    },
  });
}

