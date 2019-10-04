module.exports = {
  name: 'client',
  label: 'Client',
  pluralLabel: 'Clients',
  addFields: [
    {
      name: 'title',
      label: 'Name',
      type: 'string',
      required: true
    },
    {
      name: 'email',
      label: 'Email',
      type: 'string',
      required: true
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'string'
    },
    {
      name: 'secondaryContact',
      label: 'Secondary contact',
      type: 'string',
      textarea: true
    },
    {
      name: 'address',
      label: 'Street address',
      type: 'string',
      required: true
    },
    {
      name: 'zip',
      label: 'Zip code',
      type: 'string',
      required: true
    },
    {
      name: 'lon',
      label: 'Longitude',
      type: 'float'
    },
    {
      name: 'lat',
      label: 'Latitude',
      type: 'float'
    },
    {
      name: 'adults',
      label: 'Number of adults',
      type: 'integer',
      required: true
    },
    {
      name: 'children',
      label: 'Number of children',
      type: 'integer',
      required: true
    },
    {
      name: 'pets',
      label: 'Number of pets',
      type: 'integer',
      required: true
    },
    {
      name: 'petTypes',
      label: 'Pet type(s)',
      type: 'checkboxes',
      choices: [
        {
          value: 'dog',
          label: 'Dog'
        },
        {
          value: 'cat',
          label: 'Cat'
        },
        {
          value: 'other',
          label: 'Other',
          showFields: ['otherType']
        }
      ]
    },
    {
      name: 'otherType',
      label: 'Other pet type(s)',
      type: 'string',
      required: true
    }
  ],
  removeFields: ['slug', 'tags'],
  arrangeFields: [
    {
      name: 'contact',
      label: 'Contact Info',
      fields: ['title', 'address', 'zip', 'lon', 'lat', 'email', 'phone', 'secondaryContact']
    },
    {
      name: 'demographics',
      label: 'Demographics',
      fields: ['adults', 'children', 'pets', 'petTypes', 'otherType']
    },
    {
      name: 'admin',
      label: 'Admin',
      fields: ['published']
    }
  ]
};
