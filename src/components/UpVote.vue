<template>
  <div
    :class="['voteBtn', !!store.state.selected[level] ? 'activeVoteBtn' : '']"
    @click="updateStatus"
  >
    <img
      :src="
        !!store.state.selected[level] ? '/arrow_selected.svg' : '/arrow.svg'
      "
    />
  </div>
</template>
<script>
import { useStore } from "vuex";
export default {
  props: {
    level: Number,
  },
  setup(props, context) {
    const store = useStore();
    const updateStatus = () => {
      store.commit("updateSelected", props.level);
    };

    return {
      store,
      updateStatus,
    };
  },
};
</script>