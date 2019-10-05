module.exports = {
  name: 'client',
  label: 'Client',
  pluralLabel: 'Clients',
  addFields: [
    {
      name: 'disasterType',
      label: 'Disaster',
      type: 'select',
      options: [
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
      label: 'Address',
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
      label: 'Number of other pets',
      type: 'integer'
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
      fields: ['disasterType', 'title', 'address', 'zip', 'lon', 'lat', 'email', 'phone', 'secondaryContact']
    },
    {
      name: 'demographics',
      label: 'Demographics',
      fields: ['adults', 'children', 'wheelchair', 'dogs', 'cats', 'other', 'otherType']
    },
    {
      name: 'admin',
      label: 'Admin',
      fields: ['published']
    }
  ]
};
