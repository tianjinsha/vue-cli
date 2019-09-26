<template>
    <div id="create">abc</div>
</template>

<script>
export default {
    name:'createElement',
    created(){
        let arr=Array.apply(null,{length:5})
        console.log(arr)
    }
}
</script>