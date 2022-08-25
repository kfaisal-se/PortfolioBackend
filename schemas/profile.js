export default {
  name: "profile",
  title: "profile",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "string",
    },
    {
      name: "pic",
      title: "Pic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
