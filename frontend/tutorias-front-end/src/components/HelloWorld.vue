<template>
  <!-- Container -->
  <div class="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">

    <!-- Login component -->
    <div class="flex shadow-md">
      <!-- Login form -->
      <div class="flex flex-wrap content-center justify-center rounded-l-md bg-white"
        style="width: 24rem; height: 32rem;">
        <div class="w-72">
          <!-- Heading -->
          <h1 class="text-xl font-semibold">Bienvenido</h1>
          <small class="text-gray-400">Ingresa tus datos para iniciar sesion</small>

          <!-- Form -->
          <form class="mt-4">
            <div class="mb-3">
              <label class="mb-2 block text-xs font-semibold">numero de control</label>
              <input type="email" placeholder="numero de control"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
            </div>

            <div class="mb-3">
              <label class="mb-2 block text-xs font-semibold">contraseña</label>
              <input type="password" placeholder="*****"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
            </div>

            <div class="mb-3 flex flex-wrap content-center">
              <input id="remember" type="checkbox" class="mr-1 checked:bg-purple-700" /> 
              <a href="#" class="text-xs font-semibold text-purple-700">Olvidaste tu contraseña?</a>
            </div>

            <div class="mb-3">
              <button
                class="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">Inicia sesion</button>

            </div>
          </form>

          <!-- Footer -->
          <div class="text-center">
            <span class="text-xs text-gray-400 font-semibold">No tienes una cuenta?</span>
            <a href="#" class="text-xs font-semibold text-purple-700">Registrate</a>
          </div>
        </div>
      </div>

      <!-- Login banner -->
      <div class="flex flex-wrap content-center justify-center rounded-r-md" style="width: 24rem; height: 32rem;">
        <img class="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://i.imgur.com/9l1A4OS.jpeg">
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


