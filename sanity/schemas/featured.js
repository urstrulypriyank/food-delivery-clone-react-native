export default {
   name: "featured",
   type: "document",
   title: "Feature Menu Categories",
   fields: [
    {
        name: "name",
        type: "string",
        title: "Featured_category_name",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "short_description",
        type: "string",
        title: "Short description",
        validation: (Rule) => Rule.max(200),
      },
      {
        name: "resturant",
        type: "array",
        title: "Resturants",
        of:[{type: "reference", to: [{type: "resturant"}]}]

     
      },
   ]

};  