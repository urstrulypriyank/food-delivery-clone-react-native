import {defineField, defineType, validation} from 'sanity'

export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Categeory name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image of category",
      
    }
  ],
}