<template>
  <div class="modal" v-if="show()">
    <ul>
      <li v-bind:node-id="nodeId" :data-type="'delete'">Delete</li>
      <li :data-type="'edit'">Edit</li>
      <li :data-type="'create'">New</li>
    </ul>
  </div>
</template>

<script>
  var show = false;

  export default {
    show: false,
    props: ['nodeId', 'show'],
    methods: {
      show: function () {
        return false

    },
    },
    data() {
      return {
        isHidden: true
      }
    }
  }
</script>
