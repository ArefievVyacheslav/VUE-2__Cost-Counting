<template>
    <div>
        <PaymentForm/>
            <div class="wrapper">
                <PaymentList/>
            </div>
    </div>
</template>

<script>
    export default {
        name: "List",
    }
</script>

<style scoped lang="sass">
    .wrapper
        display: flex
</style>