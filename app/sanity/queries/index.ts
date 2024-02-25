import groq from "groq";

export const HOME_QUERY = groq`*[_type == "home"][0]`;
