<template>
  <div class="main">
    <editForm :nodeId = "nid" v-if="editForm"></editForm>
    <ul>
      <li v-for="diner in posts">
        <div class="title">{{ diner.title[0].value }}</div>
        <div :data-nid="diner.nid[0].value" class="options" v-on:click="openOptionsDialog">
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </div>
      </li>
    </ul>
    <div ref="modalWrapper" ><modal v-bind:rev="this" :nodeId = "nid"></modal></div>
  </div>
</template>

<script>
  import axios from 'axios';
  import EditForm from './EditForm';
  import Modal from './Modal';

  export default {
    components: {
      'modal': Modal,
      'editForm': EditForm
    },
    data() {
      return {
        posts: [],
        errors: [],
        isHidden: true,
        nid: null,
        editForm: false
      }
    },
    methods: {
      openOptionsDialog: function (e) {
        this.nid = e.target.dataset.nid
        this.$children["0"].show = true
      }
    },

    // Fetches posts when the component is created.
    created() {
      axios.get('http://my-diners.loc/api/content?_format=json')
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data;
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>
     <style lang="scss">
  .main {
    max-width: 800px;
    background: #eaeaea;
    margin: 15px auto;
    padding: 15px 0;
    display: block;
    height: 100%;
  }
  li {
    position: relative;
  }
  i {
    pointer-events: none;
  }
  .item {
    background: #c6e2d9;
    position: relative;
    font-size: 22px;
    margin: 5px;
  }
  .title {
    padding: 10px;
    width: 80%;
  }
  .options {
    line-height: 25px;
    border-radius: 50%;
    position: absolute;
    right: 15px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 25px;
    height: 25px;
    text-align: center;
    &:hover {
      background: #777;
    }
  }

</style>
                  
       
