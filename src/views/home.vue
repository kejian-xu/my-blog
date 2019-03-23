<template>
    <div>
        <nav-header></nav-header>
        <span class='btn'>{{msg}}</span>
    </div>
</template>
<script>
import '@/assets/css/style.css'
import NavHeader from '@/components/Header'
export default {
    data(){
        return {
            msg:'OK'
        }
    },
    components:{
        NavHeader
    }

}
</script>
