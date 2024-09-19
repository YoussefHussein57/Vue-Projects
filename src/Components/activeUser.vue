<template>
    <li>
    <h2>Name: {{ name}}</h2>
    <h3>Age: {{age}}</h3>
</li>
</template>

<script>
export default {
    props: {
        id:{
            type: Number,
            required: true
        },
        name : {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    }
}


</script>
