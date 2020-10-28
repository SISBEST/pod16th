<template>
    <div id="cutscene">
        <h1>Opponent's Turn</h1>
        <audio :src="`/audio/cutscene-${ this.$router.currentRoute._value.params.qn }.mp3`" autoplay controls v-on:ended="moveon()"></audio>
    </div>
</template>

<script>
export default {
    methods: {
        moveon: function () {
            if (parseInt(this.$router.currentRoute._value.params.qn, 10) == 4) {
                window.location.href = '/#/';
            } else {
                window.location.href = `/#/listen/question/${parseInt(this.$router.currentRoute._value.params.qn, 10) + 1}`;
            }
        }
    }
}
</script>