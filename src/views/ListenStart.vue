<template>
    <div id="listen">
        <h1>LISTEN</h1>
        <audio src="/intro.mp3" autoplay controls v-on:ended="moveon();"></audio>
    </div>
</template>

<script>
export default {
    methods: {
        moveon: () => {
            window.location.href = '/#/listen/question/1/';
        }
    }
}
</script>