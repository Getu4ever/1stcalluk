import { defineType, defineField } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt (used for previews & SEO description)",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),

    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
          },
        },
        // Allow inline images inside the post body
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alternative text",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),

    //
    // -------------------------
    // SEO FIELDS
    // -------------------------
    //
    defineField({
      name: "seoTitle",
      title: "SEO Title (optional)",
      type: "string",
      description: "If empty, the article title will be used.",
    }),

    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      description: "Aim for 120–160 characters (for Google & social media).",
    }),

    defineField({
      name: "seoImage",
      title: "Social / Open Graph Image",
      type: "image",
      options: { hotspot: true },
      description:
        "This image is used for Facebook, LinkedIn, Twitter (OG tags).",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "author.name",
      media: "mainImage",
    },
  },
});
