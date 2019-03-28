<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <nav class="nav justify-content-between">
            <div>
              <a class="logo" href="/">
                <img src="@/assets/logo.png">
              </a>
            </div>

            <ul class="d-flex align-items-center nav">
              <li>
                <a class="nav-link" href="#">首页</a>
              </li>
              <li>
                <div class="input-group" id="my-search-btn">
                  <input type="text" name="name" id="name" placeholder aria-label>
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
#my-search-btn{
  input{
    outline: none;
    border: none;
  }
}
</style>



