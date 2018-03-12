export const UISchema = {
  'type': 'VerticalLayout',
  'elements': [
    {
      'type': 'Control',
      'label': false,
      'scope': '#/properties/done'
    },
    {
      'type': 'Control',
      'scope': '#/properties/name'
    },
    {
      'type': 'HorizontalLayout',
      'elements': [
        {
          'type': 'Control',
          'scope': '#/properties/due_date'
        },
        {
          'type': 'Control',
          'scope': '#/properties/rating'
        }
      ]
    },
    {
      'type': 'Control',
      'scope': '#/properties/description',
      'options': {
          'multi': true
      }
    },
    {
      'type': 'HorizontalLayout',
      'elements': [
        {
          'type': 'Control',
          'scope': '#/properties/recurrence'
        },
        {
          'type': 'Control',
          'scope': '#/properties/recurrence_interval',
          'rule': {
              'effect': 'HIDE',
              'condition': {
                  'scope': '#/properties/recurrence',
                  'expectedValue': 'Never'
              }
          }
        }
      ]
    },
    {
      'type': 'Control',
      'scope': '#/properties/comments',
      'options': {
          'simple': true
      }
    }
  ]
};
