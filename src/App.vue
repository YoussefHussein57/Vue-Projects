<template>
    <section>
        <header>
            <h1>Information</h1>
        </header>

        <ul>
            <active-user
            v-for="user in activeUsers"
            :key="user.id"
            :name="user.name"
            :age="user.age"
            >

            </active-user>
        </ul>
        <user-data
        @add-user="addUser"
        ></user-data>
    </section>
</template>


<script>
import userData from './Components/userData.vue';
import activeUser from './Components/activeUser.vue'
export default {
    components: {activeUser,userData},
    data(){
        return{
            activeUsers: [
                {name: 'John', age: 25,id:1},
                {name: 'Jane', age: 30,id:2},
            ]
        }
    },
    methods:{
        addUser (name,age){
            const newUserAdded ={
            id: new Date().toISOString(),
            name: name,
            age:age,
            }
            this.activeUsers.push(newUserAdded);
        }
    }
   
}
</script>