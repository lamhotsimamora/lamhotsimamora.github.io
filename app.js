new Vue({
    el : '#app',
    data : {
        name : null,
        message :null,
        loading:false
    },
    methods: {
        enterSend : function(e){
            if (e.keyCode==13){
                this.sendMessage();
            }
        },
        sendMessage : function(){
            if (this.name==null || this.name===''){
                this.$refs.name.focus();
                return;
            }

            if (this.message==null || this.message===''){
                this.$refs.message.focus();
                return;
            }
            this.loading = true;
           
            _sendToTelegram(`New message from lamhotsimamora.github.io - Name ${this.name} and the message is ${this.message}`,this);
        }
    }
})
