<template>
  <div v-if="show" class="modal" v-bind:node-id="nodeId">
    <div class="head"><span @click="closeModal">X</span></div>
    <ul>
      <li @click="deleteNode" :data-type="'delete'">Delete</li>
      <li @click="editNode" :data-type="'edit'">Edit</li>
      <li :data-type="'create'">New</li>
    </ul>
  </div>
</template>

<script>
  import List from './List.vue';
  import App from './App.vue';
  import axios from 'axios';
  var show = false;

  export default {
    components : { List, App },
    show: false,
    props: ['nodeId'],
    methods: {
      getPosts() {
        axios.get('http://my-diners.loc/api/content?_format=json')
          .then(response => {
            this.$parent.posts = response.data;
          })
          .catch(e => {
            console.log('error')
          })
      },
      deleteNode() {
        axios.post('http://my-diners.loc/api/delete-node?_format=json', {parameters: {nid: this.nodeId}} )
          .then(response => {
            this.getPosts();
          })
          .catch(e => {
            this.errors.push(e)
          })
        this.closeModal()
      },
      closeModal() {
        this.show = false;
      },
      editNode() {
        this.closeModal();
        this.$parent.editForm = true;
      }
    },
    data() {
      return {
        show: false
      }
    }
  }
</script>
              
<style scoped lang="scss">
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border: 2px solid #ccc;
    border-radius: 3px;
    width: 50%;
    max-width: 400px;
    ul {
      list-style: none;
      padding: 20px 0;
      li {
        position: relative;
        padding: 5px 5px;
        text-align: center;
        &:hover {
          background: #fafafa;
          cursor: pointer;
        }
      }
    }
    .head {
      text-align: right;
      span {
        cursor: pointer;
      }
    }
  }
</style>
