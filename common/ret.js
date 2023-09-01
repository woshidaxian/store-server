class Ret {
  code = 1;data = null;message = null;

  success(data = null){
    this.code = 1
    this.data = data;
    this.message = 'success'
    return this.r()
  }

  error(message){
    this.code = -1
    this.data = null;
    this.message = message
    return this.r()
  }

  login(){
    this.code = 2
    this.data = null
    this.message = 'need login'
    return this.r()
  }

  r(){
    return {
      code: this.code,
      data: this.data,
      message: this.message
    }
  }
}

module.exports = Ret;