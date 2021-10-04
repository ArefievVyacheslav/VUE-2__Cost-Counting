<template>
    <div class="wrapper-table">
        <div class="spreadsheet">
            <div class="br bb"><span>#</span></div>
            <div class="br bb"><span>Date</span></div>
            <div class="br bb"><span>Category</span></div>
            <div class="bb"><span>Value</span></div>
        </div>
        <div class="spreadsheet" v-for="item in getCurrentPayments" :key="item.id">
            <div class="br bb"><h4>{{item.id}}</h4></div>
            <div class="br bb"><h4>{{item.date}}</h4></div>
            <div class="br bb"><h4>{{item.category}}</h4></div>
            <div class="br bb"><h4>{{item.value}}</h4></div>
        </div>
        <Pagination/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "PaymentList",
        computed: mapGetters(['getCurrentPayments'])
    }
</script>

<style scoped lang="sass">
    h4
        margin-top: 5px
        text-align: right
        padding-right: 15px
    span
        font-size: 14px
        font-weight: bold
        margin: 20px
    .wrapper-table
        margin-top: 30px
        width: 100%
    .spreadsheet
        display: grid
        grid-template-columns: 7% 31% 31% 31%
        grid-gap: 10px
    .br
        border-right: 3px groove #959595
    .bb
        border-bottom: 3px groove #959595
    .br,
    .bb
        height: 30px
    @media (max-width: 1621px)
        span:first-child
            margin-left: 10px
    @media (max-width: 777px)
        .spreadsheet
            grid-template-columns: 12% 28% 28% 28%
            grid-gap: 5px
</style>