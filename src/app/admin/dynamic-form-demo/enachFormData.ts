export const enachFormData = [
    {
        label: 'Start date',
        name: 'startDate',
        type: 'date',
        validations: {
            required: {
                value: true,
                message: 'Please enter start date.',
            },
        },
        readOnly: false,
        defaultValue: '2023-12-27',
    },
    {
        label: 'End date',
        name: 'endDate',
        type: 'date',
        validations: {
            required: {
                value: true,
                message: 'Please enter End date.',
            },
        },
        readOnly: true,
        defaultValue: '2024-12-27',
    },
    {
        label: 'EMI amount',
        name: 'emiAmount',
        type: 'text',
        validations: {
            required: {
                value: false,
                message: 'Please enter EMI Amount.',
            },
        },
        readOnly: true,
        defaultValue: '10000',
    },
    {
        label: 'Loan amount',
        name: 'loanAmount',
        type: 'text',
        validations: {
            required: {
                value: true,
                message: 'Please enter loan amount.',
            },
        },
        readOnly: true,
        defaultValue: '100000',
    },
    {
        label: 'Frequency of Payment',
        name: 'frequencyOfPayment',
        type: 'dropdown',
        options: [
            { value: 'monthly', label: 'Monthly' },
            { value: 'quarterly', label: 'Quarterly' },
            { value: 'halfYear', label: 'Half Year' },
            { value: 'Yearly', label: 'Yearly' },
        ],
        validations: {
            required: {
                value: true,
                message: 'Please enter Frequency of Payment.',
            },
        },
        readOnly: true,
        defaultValue: 'monthly',
    },
    {
        label: 'Maximum amount to be debited',
        name: 'maxAmountDebited',
        type: 'text',
        readOnly: false,
        defaultValue: '20000',
    },
    {
        label: 'Application Number',
        name: 'applicationNumber',
        type: 'text',
        readOnly: true,
        defaultValue: 'A10001',
    },
    {
        label: 'Bank Account Number',
        name: 'bankAccountNumber',
        type: 'text',
        readOnly: true,
        defaultValue: '12345678901234',
    },
    {
        label: 'Bank Name',
        name: 'bankName',
        type: 'text',
        readOnly: true,
        defaultValue: 'Digital Bank',
    },
];
