<template>
  <div class="levelBox" v-for="(_, level) of voteList" :key="'level' + level">
    <div class="voteBox">
      <up-vote
        :level="level"
        v-for="(_, idx) in voteList[level]"
        :key="'up-vote' + level + idx"
      />
    </div>
    <button @click="addOne(level)" class="addBtn">
      <img src="/add.svg" />
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import UpVote from "./UpVote.vue";
export default {
  components: { UpVote },
  props: {
    levels: Number,
  },
  setup(props, context) {
    const voteList = ref(Array(props.levels).fill(1));

    const addOne = (level) => {
      voteList.value[level] += 1;
    };

    return {
      voteList,
      addOne,
    };
  },
};
</script>
