import groq from "groq";

export const HOME_QUERY = groq`*[_type == "home"][0]`;

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]`;
