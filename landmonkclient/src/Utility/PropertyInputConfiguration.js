export const returnPropertyInputConfiguration = () => {
    return {
        propertyName: {
            element: 'input', type: 'text', value: '',
            validation: { reqired: true }, valid: false, touched: false,
            errorMessage:'', label: 'Property Name:'
        },
        address: {
            element: 'input', type: 'text', value: '',
            validation: { reqired: true }, valid: false, touched: false,
            errorMessage:'', label: 'Address:'
        },
        city: {
            element: 'input', type: 'text', value: '',
            validation: { reqired: true }, valid: false, touched: false,
            errorMessage:'', label: 'City:'
        },
        state: {
            element: 'input', type: 'text', value: '',
            validation: { reqired: true }, valid: false, touched: false,
            errorMessage:'', label: 'State:'
        },
        zipCode: {
            element: 'input', type: 'text', value: '',
            validation: { reqired: true }, valid: false, touched: false,
            errorMessage:'', label: 'Zip Code:'
        },
    }
}