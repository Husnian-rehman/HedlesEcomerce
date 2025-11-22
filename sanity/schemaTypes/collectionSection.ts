import { defineType, defineField } from "sanity";

export default defineType({
  name: "collectionSection",
  title: "Collection Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "collectionTitles",
      title: "Shopify Collection Titles",
      type: "array",
      of: [{ type: "string" }],
      description: "Enter EXACT titles from Shopify collections",
    }),
  ],
});
