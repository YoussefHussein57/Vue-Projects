<template>
    <form @submit.prevent="addNewUser">
    <div>
        <label>Name:</label>
        <input type="text" v-model="enteredName" />
    </div>
    <div>
        <label>Age:</label>
        <input type="text" v-model="enteredAge" />
    </div>
    <div>
        <button> Add User</button>
    </div>
</form>
</template>

<script>
export default {
    emits: ['add-user'],
    data() {
        return {
            id:'',
            enteredName:'',
            enteredAge:''
        }
    },
    methods: {
        addNewUser(){
            this.$emit('add-user',
                this.enteredName,
                this.enteredAge
            )
        }
    }
}

</script>
