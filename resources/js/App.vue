<template>
    <HeaderNav />
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";
export default {
    components: { HeaderNav },
};
</script>
