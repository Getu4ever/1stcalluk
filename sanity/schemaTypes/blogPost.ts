import { defineType, defineField } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",

  groups: [
    { name: "content", title: "Content" },
    { name: "media", title: "Media" },
    { name: "seo", title: "SEO" },
    { name: "settings", title: "Settings" },
  ],

  fields: [
    // -------------- MAIN CONTENT --------------
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: Rule => Rule.required(),
      description: "Enter the headline of the article.",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      group: "content",
      type: "text",
      rows: 3,
      description: "Short summary used on previews and search results.",
      validation: Rule => Rule.max(200),
    }),

    defineField({
      name: "body",
      title: "Article Content",
      type: "array",
      group: "content",
      validation: Rule => Rule.required(),
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [{ title: "Bullet list", value: "bullet" }],
        },
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alternative text",
              type: "string",
              description: "Required for SEO & accessibility.",
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    }),

    // -------------- MEDIA --------------
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      description: "Primary image shown on blog listing and article header.",
    }),

    defineField({
      name: "seoImage",
      title: "Social Preview Image (Open Graph)",
      type: "image",
      group: "seo",
      options: { hotspot: true },
      description: "Used for Facebook, LinkedIn & Twitter previews.",
    }),

    // -------------- SEO --------------
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      group: "seo",
      description: "Optional. If empty, the main title will be used.",
    }),

    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      group: "seo",
      rows: 3,
      description: "Aim for 120–160 characters.",
    }),

    // -------------- SETTINGS --------------
    defineField({
      name: "author",
      title: "Author",
      group: "settings",
      type: "reference",
      to: [{ type: "author" }],
      description: "Default author is the company.",
      weak: true,
    }),

    defineField({
      name: "categories",
      title: "Categories",
      group: "settings",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      group: "settings",
      type: "datetime",
      readOnly: true,
      description:
        "Automatically set when published. No need for the client to edit.",
    }),
  ],

  initialValue: {
    publishedAt: new Date().toISOString(),
  },

  preview: {
    select: {
      title: "title",
      subtitle: "author.name",
      media: "mainImage",
    },
  },
});
