import { createClient, getRepositoryEndpoint } from "@prismicio/client";

const repoName = "leveor";
const endpoint = getRepositoryEndpoint(repoName);
const Client = createClient(endpoint);

export function getPostByUID(uid: string) {
  return Client.getByUID("blog_post", uid);
}

export async function getAllPosts() {
  return Client.getAllByType("blog_post", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    }
  });
}

export function getAllCategories() {
  return Client.getAllByType("category", {
    orderings: {
      field: "document.data.title",
      direction: "desc",
    },
  });
}

export async function getLatestPost() {
  const [post] = await Client.getAllByType("blog_post", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    limit: 1,
  });

  return post;
}
