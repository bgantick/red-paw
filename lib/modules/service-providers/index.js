module.exports = {
  name: 'service-provider',
  label: 'Service Provider',
  addFields: [
    {
      name: 'title',
      label: 'Name',
      type: 'string',
      required: true
    },
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
//      def: 'lodging',
      choices: [
        {
          value: 'lodging',
          label: 'Lodging',
        //   showFields: [
        //     'petTypes',
        //     'restrictions',
        //     'restrictionDetails',
        //     'petFee',
        //     'capacity',
        //     'wheelchair',
        //     'address',
        //     'lon',
        //     'lat',
        //     'bookingLink'
        //   ]
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
      name: 'wheelchair',
      label: 'Wheelchair accessible?',
      type: 'boolean'
    },
    {
      name: 'address',
      label: 'Address',
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
      name: 'email',
      label: 'Email',
      type: 'email'
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
      fields: ['title', 'description', 'type', 'capacity', 'wheelchair']
    },
    {
      name: 'pets',
      label: 'Pet related info',
      fields: ['petTypes', 'restrictions', 'restrictionDetails', 'petFee', 'feeDetails']
    },
    {
      name: 'contact',
      label: 'Contact info',
      fields: ['address', 'zip', 'lon', 'lat', 'email', 'phone', 'bookingLink']
    },
    {
      name: 'admin',
      label: 'Admin',
      fields: ['published']
    }
  ]
};
