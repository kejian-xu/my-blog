<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <nav class="nav justify-content-between">
            <div class='logo'>
              <a class="" href="/">
                <img src="@/assets/logo.png">
                 <span>我的个人小站</span>
              </a>
             
            </div>

            <ul class="d-flex align-items-center nav">
              <li>
                <a class="nav-link" href="#">首页</a>
              </li>
              <li>
                <div class="input-group" id="my-search-btn">
                  <input type="text" name="name" id="name" placeholder aria-label autocomplete="off"> 
                  <a href>
                    <i class="fa fa-fw fa-search"></i>
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang='scss'>
.logo{
  a{display:inline-block;line-height: 40px;
    img{
      vertical-align: bottom;
    }
    span{padding: 0 5px;}
  }

}
#my-search-btn{
  border: solid 1px #ccc;
  border-radius:4px; 
  padding: 2px;
  input{
    outline: none;
    border: none;
  }
}
</style>



