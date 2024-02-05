export const formData = [
    {
      label: 'Name On Card',
      name: 'nameOnCard',
      type: 'text',
      readOnly: true,
      defaultValue: 'Manik',
    },
    {
      label: 'Card Number',
      name: 'cardNumber',
      type: 'text',
      shouldToggle: true,
      readOnly: true,
      defaultValue: 'awdawd',
    },
    {
      label: 'CVV',
      name: 'cvv',
      type: 'text',
      shouldToggle: true,
      readOnly: true,
      defaultValue: '[cvv]',
    },
    {
      label: 'Expiry Date',
      name: 'expiryDate',
      type: 'text',
      shouldToggle: true,
      readOnly: true,
      defaultValue: '[expiry_date]',
    },
    {
      label: (
        `<>
          <h1>Heading</h1>
          <h2>Subheading</h2>
        </>`
      ),
      name: 'expiryDate',
      type: 'switch',
      textPosition: 'left',
    }
  ]