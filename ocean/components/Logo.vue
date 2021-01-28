<template>
    <a class="Logo" href="https://www.mirrormedia.mg" target="_blank">
        <img src="@/static/images/logo.svg" alt="" />
    </a>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.Logo {
    z-index: 100;
    width: 48px;
    height: 48px;

    position: absolute;
    top: 16px;
    right: 16px;

    cursor: pointer;
    img {
        width: 100%;
        display: block;
    }
}
</style>
