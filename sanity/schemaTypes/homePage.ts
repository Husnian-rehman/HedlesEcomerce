import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the home page",
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "reference",
      to: [{ type: "header" }],
    }),
    defineField({
      name: "banner",
      title: "Banner",
      type: "reference",
      to: [{ type: "banner" }],
    }),
    defineField({
      name: "tabsSection",
      title: "Tabs Section",
      type: "reference",
      to: [{ type: "tabsSection" }],
    }),
    defineField({
      name: "featuredCollectionSection",
      title: "Featured Collection Section",
      type: "reference",
      to: [{ type: "featuredCollectionSection" }],
    }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "reference",
      to: [{ type: "footer" }],
    }),
  ],
});
