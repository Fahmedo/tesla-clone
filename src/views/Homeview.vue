<template>
  <div>
    <body class="relative">
      <!-- Header & Model3-->
      <div
        class="relative bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x2560/Homepage')] h-[100vh] bg-center bg-cover"
      >
        <div class="pt-5 flex justify-between font-bold items-center">
          <div class="ml-8">
            <svg
              class="w-32 cursor-pointer"
              viewBox="0 0 342 35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <!-- Car model -->
          <div class="hidden lg:inline">
            <ul class="flex space-x-2 text-sm">
              <li
                class="py-1 px-3 hover:bg-slate-300 cursor-pointer hover:rounded-full"
              >
                <RouterLink to="/model/4"> Model S </RouterLink>
              </li>
              <li
                class="py-1 px-3 hover:bg-slate-300 cursor-pointer hover:rounded-full"
              >
                <RouterLink to="/model/1"> Model 3 </RouterLink>
              </li>
              <li
                class="py-1 px-3 hover:bg-slate-300 cursor-pointer hover:rounded-full"
              >
                <RouterLink to="/model/2">Model X </RouterLink>
              </li>
              <li
                class="py-1 px-3 hover:bg-slate-300 cursor-pointer hover:rounded-full"
              >
                <RouterLink to="/model/3"> Model Y </RouterLink>
              </li>
              <li
                class="py-1 px-3 hover:bg-slate-300 cursor-pointer hover:rounded-full"
              >
                <RouterLink to="/others"> Solar Roof </RouterLink>
              </li>
              <li
                class="py-1 px-3 hover:bg-slate-300 cursor-pointer hover:rounded-full"
              >
                <RouterLink to="/others"> Solar Panel </RouterLink>
              </li>
            </ul>
          </div>
          <!-- Menu option -->
          <div class="">
            <ul class="flex space-x-4 mr-2 text-sm">
              <li
                class="py-1 px-3 hover:bg-slate-300 cursor-pointer hover:rounded-full"
              >
                <RouterLink to="/others"> Shop </RouterLink>
              </li>
              <li
                class="py-1 px-3 hover:bg-slate-300 cursor-pointer hover:rounded-full"
              >
                <RouterLink to="/others">Account </RouterLink>
              </li>
              <li
                class="py-1 px-3 hover:bg-slate-300 cursor-pointer hover:rounded-full"
              >
                <RouterLink to="/others"> Menu </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Model 3 title -->
          <div
            class="flex flex-col absolute top-20 left-[50%] translate-x-[-50%] trans-in"
          >
            <h1 class="text-[40px] m-auto font-bold">Model 3</h1>
            <p class="whitespace-nowrap pt1 text-[16px] text-[#5c5d61]">
              Order Online for
              <span
                class="underline underline-offset-4 hover:decoration-2 cursor-pointer"
              >
                <RouterLink to="/others"> Touchless Delivery</RouterLink>
              </span>
            </p>
          </div>
          <!-- buttons -->
          <div
            class="md:space-x-4 absolute top-[30rem] left-[50%] translate-x-[-50%] flex flex-col md:flex-row"
          >
            <button
              class="capitalize bg-gray-900 w-96 text-white rounded-full h-10 md:w-60"
            >
              <RouterLink to="/model/1"> Custom Order </RouterLink>
            </button>
            <button
              class="mt-2 capitalize bg-slate-200 w-96 text-grey-900 rounded-full h-10 md:mt-0 md:w-60"
            >
              <RouterLink to="/others"> Existing Inventory </RouterLink>
            </button>
          </div>
          <!-- Arrow down -->
          <div
            class="absolute left-[50%] translate-x-[-50%] top-[35rem] h-7 w-7 animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Model Y -->
      <div
        class="relative bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/dfa1ee09-8585-422e-a32a-067e14159aa0/bvlatuR/std/2880x2400/Homepage-Model-Y-Global-Desktop')] h-screen bg-center bg-cover"
      >
        <div class="pt-5 flex justify-between font-bold items-center">
          <!-- Model Y title -->
          <div
            class="flex flex-col absolute top-20 left-[50%] translate-x-[-50%]"
          >
            <h1 class="text-[40px] m-auto font-bold">Model Y</h1>
            <p class="whitespace-nowrap pt1 text-[16px] text-[#5c5d61]">
              Order Online for
              <span
                class="underline underline-offset-4 hover:decoration-2 cursor-pointer"
                >Touchless Delivery</span
              >
            </p>
          </div>

          <!-- buttons -->
          <div
            class="md:space-x-4 absolute top-[30rem] left-[50%] translate-x-[-50%] flex flex-col md:flex-row"
          >
            <button
              class="capitalize bg-gray-900 w-96 text-white rounded-full h-10 md:w-60"
            >
              <RouterLink to="/model/2"> Custom Order </RouterLink>
            </button>
            <button
              class="mt-2 capitalize bg-slate-200 w-96 text-grey-900 rounded-full h-10 md:mt-0 md:w-60"
            >
              <RouterLink to="/others"> Existing Inventory </RouterLink>
            </button>
          </div>
        </div>
      </div>
      <!-- Model X -->
      <div
        class="relative bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/05a76324-947e-453b-a628-8b2d759756fa/bvlatuR/std/2880x1800/Homepage-Model-X-Desktop-LHD')] h-screen bg-center bg-cover"
      >
        <div class="pt-5 flex justify-between font-bold items-center">
          <!-- Model X title -->
          <div
            class="flex flex-col absolute top-20 left-[50%] translate-x-[-50%] trans-in"
          >
            <h1 class="text-[40px] m-auto font-bold">Model X</h1>
            <p class="whitespace-nowrap pt1 text-[16px] text-[#5c5d61]">
              Order Online for
              <span
                class="underline underline-offset-4 hover:decoration-2 cursor-pointer"
                >Touchless Delivery</span
              >
            </p>
          </div>

          <!-- buttons -->
          <div
            class="md:space-x-4 absolute top-[30rem] left-[50%] translate-x-[-50%] flex flex-col md:flex-row"
          >
            <button
              class="capitalize bg-gray-900 w-96 text-white rounded-full h-10 md:w-60"
            >
              <RouterLink to="/model/3"> Custom Order </RouterLink>
            </button>
            <button
              class="mt-2 capitalize bg-slate-200 w-96 text-grey-900 rounded-full h-10 md:mt-0 md:w-60"
            >
              <RouterLink to="/others"> Existing Inventory </RouterLink>
            </button>
          </div>
        </div>
      </div>
      <!-- Model S -->
      <div
        class="relative bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/58949946-f4bf-4908-b707-18b2fa6020a5/bvlatuR/std/2880x1800/Homepage-Model-S-Desktop-LHD')] h-screen bg-center bg-cover"
      >
        <div class="pt-5 flex justify-between font-bold items-center">
          <!-- Model S title -->
          <div
            class="flex flex-col absolute top-20 left-[50%] translate-x-[-50%] trans-in"
          >
            <h1 class="text-[40px] m-auto font-bold">Model S</h1>
            <p class="whitespace-nowrap pt1 text-[16px] text-[#5c5d61]">
              Order Online for
              <span
                class="underline underline-offset-4 hover:decoration-2 cursor-pointer"
                >Touchless Delivery</span
              >
            </p>
          </div>

          <!-- buttons -->
          <div
            class="md:space-x-4 absolute top-[30rem] left-[50%] translate-x-[-50%] flex flex-col md:flex-row"
          >
            <button
              class="capitalize bg-gray-900 w-96 text-white rounded-full h-10 md:w-60"
            >
              <RouterLink to="/model/4"> Custom Order </RouterLink>
            </button>
            <button
              class="mt-2 capitalize bg-slate-200 w-96 text-grey-900 rounded-full h-10 md:mt-0 md:w-60"
            >
              <RouterLink to="/others"> Existing Inventory </RouterLink>
            </button>
          </div>
        </div>
      </div>

      <!-- Solar Panel -->
      <div
        class="relative bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D')] h-screen bg-center bg-cover"
      >
        <div class="pt-5 flex justify-between font-bold items-center">
          <!-- Solar panel title -->
          <div
            class="flex flex-col absolute top-20 left-[50%] translate-x-[-50%] trans-in"
          >
            <h1 class="text-[40px] m-auto font-bold">Solar Panel</h1>
            <p class="whitespace-nowrap pt1 text-[16px] text-[#5c5d61]">
              Order Online for
              <span
                class="underline underline-offset-4 hover:decoration-2 cursor-pointer"
                >Touchless Delivery</span
              >
            </p>
          </div>

          <!-- buttons -->
          <div
            class="md:space-x-4 absolute top-[30rem] left-[50%] translate-x-[-50%] flex flex-col md:flex-row"
          >
            <button
              class="capitalize bg-gray-900 w-96 text-white rounded-full h-10 md:w-60"
            >
              <RouterLink to="/others"> Order now </RouterLink>
            </button>
            <button
              class="mt-2 capitalize bg-slate-200 w-96 text-grey-900 rounded-full h-10 md:mt-0 md:w-60"
            >
              <RouterLink to="/others"> Learn more </RouterLink>
            </button>
          </div>
        </div>
      </div>
      <!-- Solar Roof -->
      <div
        class="relative bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D')] h-screen bg-center bg-cover"
      >
        <div class="pt-5 flex justify-between font-bold items-center">
          <!-- Solar Roof title -->
          <div
            class="flex flex-col absolute top-20 left-[50%] translate-x-[-50%] trans-in"
          >
            <h1 class="text-[40px] m-auto font-bold">Solar Roof</h1>
            <p class="whitespace-nowrap pt1 text-[16px] text-[#5c5d61]">
              Order Online for
              <span
                class="underline underline-offset-4 hover:decoration-2 cursor-pointer"
                >Touchless Delivery</span
              >
            </p>
          </div>

          <!-- buttons -->
          <div
            class="md:space-x-4 absolute top-[30rem] left-[50%] translate-x-[-50%] flex flex-col md:flex-row"
          >
            <button
              class="uppercase bg-gray-900 w-96 text-white rounded-full h-10 md:w-60"
            >
              Order now
            </button>
            <button
              class="mt-2 capitalize bg-slate-200 w-96 text-grey-900 rounded-full h-10 md:mt-0 md:w-60"
            >
              learn more
            </button>
          </div>
        </div>
      </div>
      <!-- Accessaries -->
      <div
        class="relative bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/0x0/dd739764-bcaa-4263-9488-8c73bc9fb046')] h-screen bg-center bg-cover"
      >
        <div class="pt-5 flex justify-between font-bold items-center">
          <!-- Accessaries title -->
          <div
            class="flex flex-col absolute top-20 left-[50%] translate-x-[-50%] trans-in"
          >
            <h1 class="text-[40px] m-auto font-bold">Accessaries</h1>
          </div>

          <!-- buttons -->
          <div
            class="md:space-x-4 absolute top-[30rem] left-[50%] translate-x-[-50%] flex flex-col md:flex-row"
          >
            <button
              class="capitalize bg-gray-900 w-96 text-white rounded-full h-10 md:w-60"
            >
              <RouterLink to="/others"> Shop now </RouterLink>
            </button>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped></style>
