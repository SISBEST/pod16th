<template>
  <h1>
    Question {{ this.$router.currentRoute._value.params.qn }}: {{ question }}
  </h1>
  <p style="color:white;">{{ answer }}</p>
  <button id="a"><b>A:</b> {{ answeropts.a }}</button>
  <button id="b"><b>B:</b> {{ answeropts.b }}</button>
  <button id="c"><b>C:</b> {{ answeropts.c }}</button>
  <button id="d"><b>D:</b> {{ answeropts.d }}</button>
</template>

<script>
import * as Mousetrap from "mousetrap";
import * as randomItem from "random-item";

export default {
  methods: {},
  data: () => {
    return {
      question: "",
      answeropts: {
        a: "",
        b: "",
        c: "",
        d: "",
      },
      answer: "",
      righturls: ["/audio/right1.mp3", "/audio/right2.mp3", "/audio/right3.mp3", "/audio/right4.mp3", "/audio/right5.mp3"],
      wrongurls: [
        "/audio/wrong1.mp3",
        "/audio/wrong2.mp3",
        "/audio/wrong3.mp3",
        "/audio/wrong4.mp3",
        "/audio/wrong5.mp3",
        "/audio/wrong6.mp3",
        "/audio/wrong7.mp3",
        "/audio/wrong8.mp3",
        "/audio/wrong9.mp3",
        "/audio/wrong10.mp3",
      ],
    };
  },
  watch: {
    $route: async function () {
      this.$forceUpdate();
      const raw = await fetch(
        `/api/${this.$router.currentRoute._value.params.qn}.json`
      );
      const qs = await raw.json();
      this.question = qs.prompt;
      this.answeropts = qs.answers;
      this.answer = qs.correct;
    },
  },
  mounted: async function () {
    const raw = await fetch(
      `/api/${this.$router.currentRoute._value.params.qn}.json`
    );
    const qs = await raw.json();
    this.question = qs.prompt;
    this.answeropts = qs.answers;
    this.answer = qs.correct;
    Mousetrap.bind("a", () => {
      if (qs.correct == "a") {
        const audio = new Audio(randomItem(this.righturls));
        audio.onended = () => {
          window.location.href = `/#/listen/cutscene/${this.$router.currentRoute._value.params.qn}`;
        };
        audio.play();
      } else {
        const audio = new Audio(randomItem(this.wrongurls));
        audio.onended = () => {
          window.location.href = `/#/listen/cutscene/${this.$router.currentRoute._value.params.qn}`;
        };
        audio.play();
      }
    });
    Mousetrap.bind("b", () => {
      if (qs.correct == "b") {
        const audio = new Audio(randomItem(this.righturls));
        audio.onended = () => {
          window.location.href = `/#/listen/cutscene/${this.$router.currentRoute._value.params.qn}`;
        };
        audio.play();
      } else {
        const audio = new Audio(randomItem(this.wrongurls));
        audio.onended = () => {
          window.location.href = `/#/listen/cutscene/${this.$router.currentRoute._value.params.qn}`;
        };
        audio.play();
      }
    });
    Mousetrap.bind("c", () => {
      if (qs.correct == "c") {
        const audio = new Audio(randomItem(this.righturls));
        audio.onended = () => {
          window.location.href = `/#/listen/cutscene/${this.$router.currentRoute._value.params.qn}`;
        };
        audio.play();
      } else {
        const audio = new Audio(randomItem(this.wrongurls));
        audio.onended = () => {
          window.location.href = `/#/listen/cutscene/${this.$router.currentRoute._value.params.qn}`;
        };
        audio.play();
      }
    });
    Mousetrap.bind("d", () => {
      if (qs.correct == "d") {
        const audio = new Audio(randomItem(this.righturls));
        audio.onended = () => {
          window.location.href = `/#/listen/cutscene/${this.$router.currentRoute._value.params.qn}`;
        };
        audio.play();
      } else {
        const audio = new Audio(randomItem(this.wrongurls));
        audio.onended = () => {
          window.location.href = `/#/listen/cutscene/${this.$router.currentRoute._value.params.qn}`;
        };
        audio.play();
      }
    });
  },
  unmounted() {
    this.answeropts = {
      a: "",
      b: "",
      c: "",
      d: "",
    };
    this.question = "";
  },
};
</script>