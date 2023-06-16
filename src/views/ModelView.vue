<template>
  <div>
    <!-- header -->
    <div class="pt-5 flex justify-between font-bold items-center fixed z-10">
      <div class="ml-8">
        <RouterLink to="/">
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
        </RouterLink>
      </div>
    </div>

    <!-- Section -->
    <section class="flex flex-col md:flex-row relative">
      <!-- Img slide -->
      <div
        class="fixed max-w-[80%] h-[100vh] flex left-[-10%] m-auto overflow-hidden pt-10"
      >
        <img v-bind:src="`${model.imgs[0]}`" alt="" class="object-cover" />

        <!-- <img
          v-bind:src="`${model.imgs[1]}`"
          alt=""
          class="object-cover absolute"
        />

        <img
          v-bind:src="`${model.imgs[2]}`"
          alt=""
          class="object-cover absolute"
        />
        <img
          v-bind:src="`${model.imgs[3]}`"
          alt=""
          class="object-cover absolute"
        />
        <img
          v-bind:src="`${model.imgs[4]}`"
          alt=""
          class="object-cover absolute"
        /> -->

        <div
          class="absolute w-[100%] h-[100%] opacity-0 hover:opacity-100 justify-center items-center text-center flex flex-row space-x-[50%] transition-opacity btns"
        >
          <!-- Slide btn Left -->
          <button class="w-[10%] h-[100%] cursor-pointer">
            <div class="w-6 p-1 bg-slate-200" id="btn-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class=""
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
          </button>
          <!-- Slide btn Right -->
          <button class="w-[10%] h-[100%] cursor-pointer">
            <div class="w-6 p-1 ml-20 bg-slate-200" id="btn-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class=""
              >
                <path
                  fill-rule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <!-- Detail section -->
      <div
        class="absolute right-0 px-9 justify-center content-center w-[400px] pt-10"
      >
        <div class="">
          <h1 class="text-center font-bold text-[40px]">
            {{ model.modelName }}
          </h1>
          <p class="text-slate-400 text-center text-[12px]">
            Est. Delivery:{{ model.deliveryDate }}
          </p>
          <div class="w-[100%] py-1 bg-gray-200 flex rounded-sm h-12">
            <button class="mx-1 px-6 text-[12px] bg-white rounded-sm">
              Purchase Price
            </button>
            <button class="mx-2 py-2 px-9 text-[12px] rounded-sm">
              Purchase Price
            </button>
          </div>
          <div class="mt-4 flex space-x-9 text-center">
            <span class="">
              <h1 class="text-[24px]">
                {{ model.range }}<span class="text-[12px]">mi</span>
              </h1>
              <p class="mt-2 text-[12px] text-[#5c5e62] font-thin">
                Range (EPA est.)
              </p>
            </span>
            <span class="">
              <h1 class="text-[24px]">
                {{ model.speed }}<span class="text-[12px]">mph</span>
              </h1>
              <p class="mt-2 text-[12px] text-[#5c5e62] font-thin capitalize">
                top speed
              </p>
            </span>
            <span class="">
              <h1 class="text-[24px]">
                {{ model.mph }}<span class="text-[12px]">sec</span>
              </h1>
              <p class="mt-2 text-[12px] text-[#5c5e62] font-thin">0-60mph</p>
            </span>
          </div>
          <div class="">
            <h3>Rear wheel drive</h3>
            <div class="w-[100%]">
              <div class="flex justify-between p-3 border-2 border-blue-600">
                <div>{{ model.modelName }}</div>
                <div class="">$ {{ model.price }}</div>
              </div>
              <p class="text-[#5c5e62] mt-2 text-[12px]">
                <span
                  class="underline underline-offset-4 hover:decoration-2 cursor-pointer"
                  >Learn more</span
                >
                about Range and Performance
              </p>
            </div>
          </div>
          <h4 class="my-4">Dual Motor All-Wheel Drive</h4>
          <div class="cursor-pointer flex justify-between p-3 border-2">
            <div>{{ model.modelName }} Performance</div>
            <div class="">$ {{ model.price2 }}</div>
          </div>
          <div class="mt-4 flex justify-between p-3 bg-gray-100">
            <div>{{ model.modelName }} Long Range</div>
          </div>
          <p class="text-[12px]">Available in 2023</p>
          <p class="mt-4 text-center text-[12px] textt-[#5c5e62]">
            All prices are shown without potential incentives <br />or gas
            saving of $11,700
            <span
              class="underline underline-offset-4 hover:decoration-2 cursor-pointer"
              >Learn more</span
            >
          </p>
          <div
            class="mt-4 w-[150px] m-auto rounded-md py-2 bg-gray-300 relative text-center cursor-pointer text-[14px]"
          >
            Feature Details
          </div>
        </div>

        <div class="pb-40">
          <h1 class="tittleHeader">Performance Uprade</h1>
          <p class="text-[13px] font-bold text-center">included</p>
          <ol class="text-[14px]">
            <li class="mt-2">20" Überturbine wheels</li>
            <li class="mt-2">20" wheels</li>
            <li class="mt-2">Performance Breaks</li>
            <li class="mt-2">Carbon fiber spoiler</li>
            <li class="mt-2">Aluminum alloy pedals</li>
          </ol>
          <div
            class="mt-4 w-[150px] m-auto rounded-md py-2 bg-gray-300 relative text-center cursor-pointer"
          >
            Feature Details
          </div>
        </div>
        <div class="my-20 pb-40">
          <h1 class="tittleHeader">Paint</h1>
          <div
            class="flex flex-row space-x-4 relative justify-center items-center pb-4"
          >
            <div class="w-12 h-12 cursor-pointer rounded-full activeBtn">
              <img
                src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_White.png"
                alt="Paint_White"
                class="p-[2px]"
              />
            </div>
            <div class="w-10 h-10 cursor-pointer">
              <img
                src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_MidnightSilver.png"
                alt="Paint_MidnightSilver"
              />
            </div>
            <div class="w-10 h-10 cursor-pointer">
              <img
                src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Blue.png"
                alt="Paint_Blue"
              />
            </div>
            <div class="w-10 h-10 cursor-pointer">
              <img
                src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Black.png"
                alt="Paint_Black"
              />
            </div>
            <div class="w-10 h-10 cursor-pointer">
              <img
                src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Red.png"
                alt="Paint_Red"
              />
            </div>
          </div>
          <p class="text-center text-[14px] font-bold">
            Pearl White Multi-Coat

            <span class="text-[#5c5e62] ml-2">Included</span>
          </p>
        </div>
        <!-- Wheel -->
        <div class="my-20 pb-40">
          <h1 class="tittleHeader">Wheels</h1>
          <div class="w-14 h-14 activeBtn m-auto">
            <img
              src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/option-wheels-20-uberturbine.png"
              alt=" wheel"
              class="p-1"
            />
          </div>
          <div class="mt-4 text-center space-y-2">
            <p class="text-[14px] font-bold">
              {{ model.wheel }}’’ Überturbine Wheels

              <span class="text-[#5c5e62] ml-2">Included</span>
            </p>
            <p class="text-[12px] text-[#5c5e62]">Summer Tires</p>
            <p class="text-[#5c5e62] text-[13px]">
              Range (EPA est.) : {{ model.range }}mi
            </p>
          </div>
          <div
            class="mt-6 w-[150px] m-auto rounded-md py-2 bg-gray-300 relative text-center cursor-pointer"
          >
            Learn More
          </div>
        </div>
        <!-- Interior -->
        <div class="pb-40">
          <div class="tittleHeader">Interior</div>
          <div
            class="space-x-2 flex flex-row relative justify-center items-center"
          >
            <div class="w-12 h-12">
              <img
                src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Interior_Black.png"
                alt="Interior_Black"
              />
            </div>
            <div class="w-12 h-12 activeBtn">
              <img
                src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Interior_White.png"
                alt="Interior_White"
                srcset=""
                class="p-[2px]"
              />
            </div>
          </div>
          <p class="text-center text-[14px] font-bold">
            Black and White
            <span class="text-[#5c5e62] ml-2">$1,000</span>
          </p>
        </div>
        <!-- Enhanced autopilot -->
        <div class="">
          <h1 class="tittleHeader">Enhanced Autopilot</h1>
          <p class="text-[13px] font-bold text-center">$6,000</p>
          <ul class="text-[14px]">
            <li class="mt-2">Navigate on Autopilot</li>
            <li class="mt-2">Auto Lane Change</li>
            <li class="mt-2">Autopark</li>
            <li class="mt-2">Summon</li>
            <li>Smart Summon</li>
          </ul>
          <div class="w-[100%] my-10 flex flex-row space-x-8">
            <div
              class="w-[150px] text-[12px] p-2 bg-blue-600 rounded-md text-center text-white cursor-pointer"
            >
              Add
            </div>
            <div
              class="w-[150px] text-[12px] p-2 bg-gray-200 rounded-md text-center text-gray-600 cursor-pointer"
            >
              Feature Details
            </div>
          </div>
        </div>

        <!-- Self drive -->
        <div class="pb-40">
          <h1 class="tittleHeader">Full self-driving capability</h1>
          <p class="text-[13px] font-bold text-center">$15,000</p>
          <ol class="text-[14px]">
            <li class="mt-2">
              All functionality of Basic Autopilot and Enhanced Autopilot
            </li>
            <li class="mt-2">Traffic Light and Stop Sign Control</li>
            <div class="font-semibold text-[14px] mt-3">Coming Soon</div>
            <li class="m-2">Autosteer on city streets</li>
          </ol>
          <div class="text-[12px]">
            The currently enabled features require active driver supervision and
            do not make the vehicle autonomous. The activation and use of these
            features are dependent on achieving reliability far in excess of
            human drivers as demonstrated by billions of miles of experience, as
            well as regulatory approval, which may take longer in some
            jurisdictions. As these self-driving features evolve, your car will
            be continuously upgraded through over-the-air software updates.
          </div>

          <div class="w-[100%] my-10 flex flex-row space-x-8">
            <div
              class="w-[150px] text-[12px] p-2 bg-blue-600 rounded-md text-center text-white cursor-pointer"
            >
              Add
            </div>
            <div
              class="w-[150px] text-[12px] p-2 bg-gray-200 rounded-md text-center text-gray-600 cursor-pointer"
            >
              Feature Details
            </div>
          </div>
          <div class="text-[12px]">
            Software options are excluded from the federal tax credit price cap
          </div>
        </div>
        <!-- Charging -->
        <div class="pb-40">
          <div class="tittleHeader">Charging</div>
          <p class="ml-10">Home charging equipment is not included</p>

          <div class="flex flex-row text-[12px] mt-4 space-x-40">
            <input type="checkbox" class="w-10 h-5" id="" /> Wall Connector
            <span class="text-right"> $425</span>
          </div>
          <div class="flex flex-row text-[12px] mt-4 space-x-36">
            <input type="checkbox" class="w-10 h-5" id="" /> Mobile Connector
            <span class="text-right"> $230</span>
          </div>
          <p class="text-[12px] ml-10">Est. Shipment: Based on Vehicle</p>
          <p class="text-[12px] mt-2 ml-10">Delivery</p>
          <div
            class="mt-6 w-[150px] m-auto rounded-md py-2 bg-gray-300 relative text-center cursor-pointer"
          >
            Learn More
          </div>
        </div>
        <!-- Order -->
        <div class="pb-40">
          <div class="tittleHeader">Order Your {{ model.modelName }}</div>
          <p class="text-center font-bold">
            Est. Delivery: {{ model.deliveryDate }}
          </p>
          <div class="mt-10 ml-10">
            Your design qualifies for a $7,500 federal tax credit for eligible
            buyers.
            <p
              class="underline underline-offset-4 hover:decoration-2 cursor-pointer"
            >
              See Details
            </p>
          </div>
          <div
            class="mt-10 w-[90%] cursor-pointer text-[12px] p-2 bg-blue-600 rounded-md text-center text-white"
          >
            Continue to Payment
          </div>

          <div class="mt-10">
            <p class="text-center">
              For quicker potential delivery,
              <span
                class="block underline underline-offset-4 hover:decoration-2 cursor-pointer"
                >view available inventory.</span
              >
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import models from "../../models.json";

const route = useRoute();
const model = models.find((model) => model.id === parseInt(route.params.id));

let curSlide = ref(0);

// const maxSlide = slide.length;
// console.log(slide);
</script>

<style lang="scss" scoped></style>
