export default {
    action: {},
    mutations: {
        createPayment(state, newPayment) {
            state.payments.unshift(newPayment)
            state.currentPayments = state.payments.slice(0, 5);
        },
        updateCurrentPayment(state, pageNumber) {
            if (pageNumber === 1) {
                state.currentPayments = state.payments.slice(0, 5);
            } else {
                const paymentsQuantity = 5;
                let startIndex = (pageNumber - 1) * paymentsQuantity;
                let endIndex = startIndex + 5;
                state.currentPayments = state.payments.slice(startIndex, endIndex);
            }
        },
    },
    state: {
        payments: [],
        currentPayments: []
    },
    getters: {
        getCurrentPayments(state) {
            if (state.currentPayments.length < 1) return state.payments.slice(0,5)
            return state.currentPayments
        },
        getPages(state) {
            let pageQuantity = Math.ceil(state.payments.length/5);
            let arrayPages = [];
            for (let i = 1; i <= pageQuantity; i++) {
                arrayPages.push(i);
            }
            return arrayPages
        }
    }
}