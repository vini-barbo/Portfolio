<script>
export default {
  name: 'contactApp'
}
</script>

<template>
  <main class="content">
    <section class="content-text">
      <h1>Contact me</h1>
    </section>
    <section class="content-nav">
      <aside class="form">
        <form action="">
          <input type="text" placeholder="Who">
          <input type="text" placeholder="Subject">
          <textarea name="" id="" cols="30" rows="10" placeholder="Content"></textarea>
          <button class="form-button">Send</button>
        </form>
      <div class="button_place">
        
      </div>
      </aside>
      <aside class="social-media">
        <div><i class="fa-brands fa-github"></i><span>Github</span></div>
        <div><i class="fa-brands fa-linkedin-in"></i><span>Linkedin</span></div>
        <div><i class="fa fa-envelope" aria-hidden="true"></i><span>Email</span></div>
      </aside>
      <aside></aside>
    </section>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap');


.form-button{
  background: #018C0F;
  color: white;
  border-radius: 5px;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 1.0rem;
}

.content{
    height: 60dvh;
    flex-direction: column;
    gap: 40px;
}

.content-nav{
  width: 100%;
  font-size: 3rem;
  display: flex;
  justify-content: space-evenly;
}

.form{
  width: 30%;
  height: 100%;
  border-radius: 5px;
  
  
}

input{
  border-bottom: 1px solid grey;
  padding-left: 5px;
  font-size: 1.2rem;
}

form{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 10px;
}

textarea{
  padding-left: 5px;
  border: 1px solid grey;
  border-radius: 5px;
  height: 200px;
  overflow-y: scroll;
  font-size: 1.2rem;
}

.social-media{
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  justify-content: space-between;
}

.social-media div{
  display: flex;
  gap: 10%;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
  background: #e0e0e0;
}


</style>

