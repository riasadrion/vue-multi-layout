<template>
  <div width="100%">
    <main class="form-signin mt-4">
      <form>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control mb-2"
            id="floatingInput"
            placeholder="name@example.com"
            value="example@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control mb-2"
            id="floatingPassword"
            placeholder="Password"
            value="345345345"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <router-link class="w-100 btn btn-lg btn-primary" to="/home">
          Sign in
        </router-link>
      </form>
    </main>
  </div>
</template>

<style lang="stylus" scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>