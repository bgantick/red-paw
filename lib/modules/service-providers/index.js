module.exports = {
  name: 'service-provider',
  label: 'Service Provider',
  addFields: [
    {
      name: 'description',
      label: 'Description',
      type: 'string',
      textarea: true
    },
    {
      name: 'type',
      label: 'Service type',
      type: 'select',
      choices: [
        {
          value: 'lodging',
          label: 'Lodging',
          showFields: [
            'petTypes',
            'restrictions',
            'restrictionDetails',
            'petFee',
            'capacity',
            'accessibility',
            'address',
            'zip',
            'lon',
            'lat',
            'phone',
            'bookingLink'
          ]
        },
        {
          value: 'other',
          label: 'Other'
        }
      ]
    },
    {
      name: 'petTypes',
      label: 'Pet types allowed',
      type: 'select',
      choices: [
        {
          value: 'all',
          label: 'All'
        },
        {
          value: 'dogs',
          label: 'Dogs only'
        },
        {
          value: 'cats',
          label: 'Cats only'
        }
      ]
    },
    {
      name: 'restrictions',
      label: 'Breed/weight/other restrictions?',
      type: 'boolean',
      choices: [
        {
          value: true,
          showFields: ['restrictionDetails']
        }
      ]
    },
    {
      name: 'restrictionDetails',
      label: 'Restriction details',
      type: 'string',
      textarea: true
    },
    {
      name: 'petFee',
      label: 'Pet fee?',
      type: 'boolean',
      choices: [
        {
          value: true,
          showFields: ['feeDetails']
        }
      ]
    },
    {
      name: 'feeDetails',
      label: 'Pet fee info',
      type: 'string'
    },
    {
      name: 'capacity',
      label: 'Maximum room capacity',
      type: 'integer'
    },
    {
      name: 'accessibility',
      label: 'Accessibility info',
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
      name: 'phone',
      label: 'Phone',
      type: 'string'
    },
    {
      name: 'bookingLink',
      label: 'Booking Link',
      type: 'url'
    }
  ],
  removeFields: ['slug', 'tags'],
  arrangeFields: [
    {
      name: 'other',
      label: 'Basic info',
      fields: ['title', 'description', 'type', 'capacity', 'accessibility']
    },
    {
      name: 'pets',
      label: 'Pet related info',
      fields: ['petTypes', 'restrictions', 'restrictionDetails', 'petFee', 'feeDetails']
    },
    {
      name: 'contact',
      label: 'Contact info',
      fields: ['address', 'zip', 'lon', 'lat', 'phone', 'bookingLink']
    },
    {
      name: 'admin',
      label: 'Admin',
      fields: ['published']
    }
  ]
};
