    <template>
  <div id="editor" class='container'>
    <form action='' method="post">
        <div class="form-group">
          <input type="text"
            class="form-control" name="" id="" v-model="formObj.title" aria-describedby="helpId" placeholder="博客名称">
        </div>
      <mavon-editor v-model='editorContent' :ishljs="true"
     ref=md @imgAdd="$imgAdd" @imgDel="$imgDel" @save="$save"></mavon-editor>
    </form>
    <a href="" @click.prevent="getAxiosTest" class='btn'>Rest</a>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    name: 'editor',
    components: {
        mavonEditor
    },
    data(){
        return {
            formObj:{
            title:"",
            messageMD:"",
            messageHTML:"",
            },
            msg:"fuck",
            editorContent:"test"
        }
    },
    methods:{
        getAxiosTest(){
            this.$axios.get("/users/bar")
            .then(res=>{
                console.log(res)
               this.msg=res.data
            })
            .catch(err=>{
                console.log(err)
            })
        },
        $imgAdd(pos, $file){
            // 第一步.将图片上传到服务器.
            var formdata = new FormData();
            formdata.append('file', $file);
            this.$axios({
                url: '/article/uploadImg',
                method: 'post',
                data: formdata,
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then((url) => {
                this.$refs.md.$img2Url(pos, url.data.url);
            })
        },
        $imgDel(pos) {
            delete this.img_file[pos];
        },
        $save(value,render){
            console.log(value+'---'+render)
        }
    }
}
</script>
<style>
#editor {
  margin: auto;
  width: 100%;
  height: 100%;
}
</style>