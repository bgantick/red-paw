module.exports = {
  name: 'client',
  label: 'Client',
  pluralLabel: 'Clients',
  addFields: [
    {
      name: 'disasterType',
      label: 'Disaster',
      type: 'select',
      def: 'none',
      choices: [
        {
          value: 'none',
          label: 'Select'
        },
        {
          value: 'fire',
          label: 'Fire'
        },
        {
          value: 'hazmat',
          label: 'Hazmat'
        },
        {
          value: 'flood',
          label: 'Flood'
        },
        {
          value: 'explosion',
          label: 'Explosion'
        },
        {
          value: 'gasLeak',
          label: 'Gas leak'
        },
        {
          value: 'waterMainBreak',
          label: 'Water main break'
        },
        {
          value: 'buildingCollapse',
          label: 'Building collapse'
        },
        {
          value: 'stormDamage',
          label: 'Storm damage'
        }
      ]
    },
    {
      name: 'title',
      label: 'Name',
      type: 'string',
      required: true
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'string',
      help: 'Where can we reach you in the short term?'
    },
    {
      name: 'address',
      label: 'Street address',
      type: 'string'
    },
    {
      name: 'zipcode',
      label: 'Zipcode',
      type: 'string'
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
      name: 'people',
      label: 'Number of people',
      type: 'integer',
      required: true
    },
    {
      name: 'wheelchair',
      label: 'Need wheelchair accessibility?',
      type: 'boolean'
    },
    {
      name: 'dogs',
      label: 'Number of dogs',
      type: 'integer'
    },
    {
      name: 'cats',
      label: 'Number of cats',
      type: 'integer'
    },
    {
      name: 'other',
      label: 'Other pets',
      type: 'boolean',
      choices: [
        {
          value: true,
          showFields: [
            'otherType'
          ]
        }
      ]
    },
    {
      name: 'otherType',
      label: 'Other pet type(s)',
      type: 'string',
      textarea: true
    },
    {
      name: 'termsOfService',
      label: 'Terms of service agreement',
      type: 'boolean',
      mandatory: 'You must accept terms of service.'
    }
  ],
  removeFields: ['slug', 'tags'],
  arrangeFields: [
    {
      name: 'contact',
      label: 'Contact Info',
      fields: ['disasterType', 'title', 'address', 'zipcode', 'lon', 'lat', 'email', 'phone']
    },
    {
      name: 'demographics',
      label: 'Demographics',
      fields: ['people', 'wheelchair', 'dogs', 'cats', 'other', 'otherType']
    },
    {
      name: 'admin',
      label: 'Admin',
      fields: ['termsOfService', 'published']
    }
  ]
};
