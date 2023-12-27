export const personalFormData = [
    {
        label: 'First Name',
        name: 'first_name',
        type: 'text',
        validations: {
            required: {
                value: true,
                message: "Please enter your First Name.",
            },
        },
        maxLength: 50,
    },
    {
        label: 'Mobile Number',
        name: 'mobile_number',
        type: 'tel',
        validations: {
            pattern: {
                value: '^[6-9][0-9]{9}$',
                message: 'Please enter valid mobile number.',
            },
        },
        info: 'We will send you an OTP on this number',
        maxLength: 10,
    },
    {
        label: 'Marital Status',
        name: 'maritalStatus',
        type: 'select',
        validations: {
            required: {
                value: true,
                message: 'Please select your Marital Status.',
            },
        },
        options: [
            { value: 'Married', label: 'Married' },
            { value: 'Single', label: 'Single' },
            { value: 'Widowed', label: 'Widowed' },
            { value: 'Divorced', label: 'Divorced' },
        ],
    },
    {
        label: "Mother's Maiden Name",
        name: 'mothersMaidenName',
        type: 'text',
        validations: {
            required: {
                value: true,
                message: "Please enter your Mother's Maiden Name.",
            },
        },
    },
    {
        label: 'Educational Qualification',
        name: 'qualification',
        type: 'select',
        validations: {
            required: {
                value: true,
                message: 'Please enter your Qualification.',
            },
        },
        options: [
            { value: '10th', label: '10th' },
            { value: '12th', label: '12th' },
            { value: 'Diploma', label: 'Diploma' },
            { value: 'Degree', label: 'Degree' },
            { value: 'Masters', label: 'Masters' },
            { value: 'PhD', label: 'PhD' },
        ],
    },
    {
        label: 'Corporate Email ID',
        name: 'officeEmailId',
        type: 'text',
        validations: {
            required: {
                value: true,
                message: 'Please enter your Corporate Email ID.',
            },
            pattern: {
                value: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
                message: 'Please enter valid email address.',
            },
        },
        afterSuccessMessage: 'Please click on the verification link sent to your email.',
    },
];
