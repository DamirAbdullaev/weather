<template>
    <div class="main">
        <main-content />
        <main-week />
    </div>
</template>

<script>
import MainContent from './MainContent.vue'
import MainWeek from './MainWeek.vue'
    export default {
  components: { MainContent, MainWeek },
        
    }
</script>
