<template>
    <div>
        <div class="pages">
            <div v-for="page in getPages" :key="page" @click="getCurrentPayments(page)" v-show="getPages.length > 1">
                <div class="page">
                    <span>{{page}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
    export default {
        name: "Pagination",
        computed: mapGetters(['getPages']),
        methods: {
            ...mapMutations(['updateCurrentPayment']),
            getCurrentPayments(page) {
                this.updateCurrentPayment(page)
            }
        }
    }
</script>

<style scoped lang="sass">
    span
        font-size: 14px
        font-weight: bold
        padding-left: 20px
        padding-right: 20px
    .pages
        display: flex
        justify-content: right
        margin-top: 30px
    .page
        border: 2px solid #2f2f2f
        border-radius: 5px
        &:hover
             background-color: #7dfdb5
</style>