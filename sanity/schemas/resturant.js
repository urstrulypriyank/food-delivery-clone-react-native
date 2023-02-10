import {defineField, defineType} from 'sanity'

export default {
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Resturant name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short_description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'Image',
      type: 'image',
      title: 'Image of Resturnat',
    },
    {
      name: 'longitude',
      type: 'number',
      title: 'longitude of the resturant',
    },
    {
      name: 'latitude',
      type: 'number',
      title: 'latitude of the resturant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Resturant address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating from (1-5 stars)',
      validation: (Rule) => 
      Rule.required()
        .min(1)
        .max(5)
        .error("Please enter a value between 1 - 5")
      },
      {
        name: 'type',
        type: 'reference',
        validation: (Rule) => Rule.required(),
        title: 'Category',
        to: [{type: "category"}]

      },
      {
        name: 'dishes',
        type: 'array',
        title: 'Dishes',
        of: [{type: "reference", to:[{type: "dish"}]}]
      },
  ],
}
