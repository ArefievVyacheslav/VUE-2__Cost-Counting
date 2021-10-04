<template>
    <div>
        <h1>My personal cost</h1>
        <button @click="showHandler" v-show="!show"><span>ADD NEW COST</span></button>
        <div v-show="show" class="block-form">
            <div class="inputs">
                <input type="text" placeholder="Category" v-model="category">
                <input type="number" placeholder="Amount" v-model="value">
                <input type="date" v-model="date" class="date">
            </div>
            <button @click="showHandler(); dateConversion(); addPayment()"><span>ADD</span></button>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: "PaymentForm",
        data () {
            return {
                category: '',
                value: null,
                date: '',
                dateConvert: '',
                quantity: 1,
                show: false
            }
        },
        methods: {
            ...mapMutations(['createPayment']),
            showHandler() {
                return this.show = !this.show
            },
            dateConversion() {
                this.dateConvert = this.date.split('-').reverse().toString().replace(/,/g, '.');
            },
            addPayment() {
                this.createPayment({
                    id: this.quantity,
                    date: this.dateConvert,
                    category: this.category,
                    value: this.value
                });
                this.quantity++;
            }
        }
    }
</script>

<style scoped lang="sass">
    h1
        font-size: 68px
        color: #343434
    span
        font-size: 14px
        font-weight: bold
        padding-left: 20px
        padding-right: 20px
    button
        display: block
        min-height: 35px
        margin-left: auto
        background-color: #7dfdb5
        outline: none
        border-top: 1px solid #131313
        border-right: 2px solid #000
        border-left: 1px solid #131313
        border-bottom: 2px solid #000
    input
        max-width: 30%
        outline: none
        min-height: 33px
        margin-right: 1%
        border: none
        padding-left: 10px
    .block-form
        display: flex
        justify-content: space-between
    .inputs
        width: 100%
    @media (max-width: 1621px)
        h1
            font-size: 50px
    @media (max-width: 1621px)
        h1
            font-size: 40px
        span
            padding-left: 10px
            padding-right: 10px
    @media (max-width: 871px)
        .block-form
            display: flex
            flex-direction: column
        button
            margin-top: 10px
            width: 100%
    @media (max-width: 777px)
        input
            max-width: 25%
        .date
            max-width: 40%
        .block-form
            display: flex
            flex-direction: column
    @media (max-width: 601px)
        h1
            font-size: 30px
        input
            max-width: 20%
            padding-left: 4px
        .date
            max-width: 45%
</style>