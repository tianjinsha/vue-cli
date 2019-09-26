import Vue from 'vue'


export default Vue.component('ele', {
    render(createElement) {
        return createElement('a-button', {
            class:{
                'show':this.show
            },
            attrs:{
                id:'element',
                type:'primary'
            },
            props:{
                foo:'test'
            },
            domProps:{
                innerHTML:'abcdef'
            },
            on:{
                click:this.handleClick
            }
        },'文本内容')
    },
    props:{
        foo:{
            type:String,
            default:''
        }
    },
    data() {
        return {
            show: true
        }
    },
    methods: {
        handleClick: function () {
            this.$message.info('This is a normal message');
            console.log(this.foo)
        }
    }
});