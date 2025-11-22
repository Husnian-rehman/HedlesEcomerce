import { defineType, defineField } from "sanity";

export default defineType({
  name: "collectionBanner",
  title: "Collection Banner",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Banner Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Banner Description",
      type: "text",
    }),
    defineField({
      name: "bgImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
