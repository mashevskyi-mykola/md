<template>
  <div v-bind:node-id="nodeId" class="modal">
    <div class="head">Edit node<span @click="closeModal" >X</span></div>
    <input v-model="title" type="text" />
    <textarea v-model="body" rows="6"></textarea>
    <button @click="saveNode">Save</button>
    <button @click="closeModal">Cancel</button>
  </div>
</template>

<script>
  import List from './List.vue';
  import App from './App.vue';
  import axios from 'axios';


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
        console.log(this.nodeId)
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
        this.$parent.editForm = false;
      },
      saveNode() {
        axios.post('http://my-diners.loc/api/update-node?_format=json', {nid: this.nodeId, title: this.title, body: this.body})
          .then(response => {
            this.getPosts()
          })
          .catch(e => {
            console.log('error')
          })
        this.closeModal()
      }
    },
    data() {
      return {
        title: null,
        body: null
      }
    },
    created() {
      console.log(this)
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
    padding: 5px 20px 20px 20px;
    border: 2px solid #ccc;
    border-radius: 3px;
    width: 50%;
    max-width: 400px;
    z-index: 2;
    .head {
      text-align: right;
      margin: 10px auto;
      span {
        cursor: pointer;
      }
    }
    input, textarea {
      width: 100%;
      margin: 5px auto;
      padding: 2px 5px;
      border: 1px solid black;
    }
    button {

    }
  }
</style>
