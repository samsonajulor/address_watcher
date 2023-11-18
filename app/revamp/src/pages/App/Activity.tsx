import moment from 'moment';
import { FiSend } from 'react-icons/fi';
import React from 'react';

const Activity = () => {
  return (
    <div className="mx-5">
      <div className="text-lg text-center mb-10 mt-5">Activity</div>
      <div>
        <div className="flex justify-between mt-10">
          <div className="flex gap-10 items-center">
            <FiSend className="text-red-400" />
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <p className="">0x94ce…3d17</p>
                <p className="text-gray-500 text-xs">21 days ago</p>
              </div>
              <p className="">Sent 30 USDT to 0x94ce…3d17</p>
            </div>
          </div>
          <div>-30 USDT</div>
        </div>
        <div className="flex justify-between mt-10">
          <div className="flex gap-10 items-center">
            <FiSend className="text-yellow-400 rotate-45" />
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <p className="">0x94ce…3d17</p>
                <p className="text-gray-500 text-xs">21 days ago</p>
              </div>
              <p className="">Interacted with contract 0x94ce…3d17</p>
            </div>
          </div>
          <div>-30 USDT</div>
        </div>
        <div className="flex justify-between mt-10">
          <div className="flex gap-10 items-center">
            <FiSend className="text-green-400 rotate-90" />
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <p className="">0x94ce…3d17</p>
                <p className="text-gray-500 text-xs">21 days ago</p>
              </div>
              <p className="">Received 30 USDT from 0x94ce…3d17</p>
            </div>
          </div>
          <div>-30 USDT</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;

// <div>
//   <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
//     <img
//       loading="lazy"
//       src="https://cdn.builder.io/api/v1/image/assets/TEMP/94314a0c-ea85-42fa-98e8-b4a804eb5e71?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//       className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
//     />
//     <div className="self-center grow shrink basis-auto my-auto max-md:max-w-full">
//       You just sent 5 ETH to 0x94ce…3d17
//     </div>
//     <div className="self-center whitespace-nowrap my-auto">09/11/23 8:05am</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
//     <img
//       loading="lazy"
//       src="https://cdn.builder.io/api/v1/image/assets/TEMP/49bcb9f4-d84c-4d78-948d-10361ce43257?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//       className="aspect-square object-contain object-center w-5 rotate-90 overflow-hidden self-stretch max-w-full"
//     />
//     <div className="self-center grow shrink basis-auto my-auto max-md:max-w-full">
//       You just received 3.5 ETH from 0x94ce…3d17
//     </div>
//     <div className="self-center whitespace-nowrap my-auto">09/11/23 8:05am</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
//     <img
//       loading="lazy"
//       src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b1a27cf-66e6-4aa9-a9f6-e76d334f5123?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//       className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
//     />
//     <div className="self-center grow shrink basis-auto my-auto max-md:max-w-full">
//       You just sent 5 ETH to 0x94ce…3d17
//     </div>
//     <div className="self-center whitespace-nowrap my-auto">09/11/23 8:05am</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
//     <img
//       loading="lazy"
//       srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//       className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
//     />
//     <div className="self-center grow shrink basis-auto my-auto max-md:max-w-full">
//       You are about to spend 0.5 ETH on a transaction
//     </div>
//     <div className="self-center whitespace-nowrap my-auto">09/11/23 8:05am</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
//     <img
//       loading="lazy"
//       src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1fe7f61-7710-47f4-bd1d-4efe70301412?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//       className="aspect-square object-contain object-center w-5 rotate-90 overflow-hidden self-stretch max-w-full"
//     />
//     <div className="self-center grow shrink basis-auto my-auto max-md:max-w-full">
//       You just received 3.5 ETH from 0x94ce…3d17
//     </div>
//     <div className="self-center whitespace-nowrap my-auto">09/11/23 8:05am</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
//     <img
//       loading="lazy"
//       srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//       className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
//     />
//     <div className="self-center grow shrink basis-auto my-auto max-md:max-w-full">
//       You are about to spend 0.5 ETH on a transaction
//     </div>
//     <div className="self-center whitespace-nowrap my-auto">09/11/23 8:05am</div>
//   </div>
// </div>

// <div className="self-stretch flex gap-10 grow flex-col mt-14 max-md:max-w-full max-md:mt-10">
//   <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
//     <div className="flex items-center gap-10">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b1a27cf-66e6-4aa9-a9f6-e76d334f5123?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//         className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
//       />
//       <div className="flex flex-col">
//         <p className="text-">Transfer to 0x94ce…3d17</p>
//         <p className="text-gray-400 text-sm">
//           {moment(1683159551).format('MMMM Do YYYY, h:mm:ss a')}
//         </p>
//       </div>
//     </div>
//     <div className="">- 0.5 ETH</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
//     <div className="flex items-center gap-10">
//       <img
//         loading="lazy"
//         srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//         className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
//       />
//       <div className="flex flex-col">
//         <p className="text-">Conteract interaction with 0x94ce…3d17</p>
//         <p className="text-gray-400 text-sm">
//           {moment(1683159551).format('MMMM Do YYYY, h:mm:ss a')}
//         </p>
//       </div>
//     </div>
//     <div className="">0 ETH</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
//     <div className="flex items-center gap-10">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1fe7f61-7710-47f4-bd1d-4efe70301412?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//         className="aspect-square object-contain object-center w-5 rotate-90 overflow-hidden self-stretch max-w-full"
//       />
//       <div className="flex flex-col">
//         <p className="text-">Transfer from 0x94ce…3d17</p>
//         <p className="text-gray-400 text-sm">
//           {moment(1683159551).format('MMMM Do YYYY, h:mm:ss a')}
//         </p>
//       </div>
//     </div>
//     <div className="">+ 0.5 ETH</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
//     <div className="flex items-center gap-10">
//       <img
//         loading="lazy"
//         srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//         className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
//       />
//       <div className="flex flex-col">
//         <p className="text-">Conteract interaction with 0x94ce…3d17</p>
//         <p className="text-gray-400 text-sm">
//           {moment(1683159551).format('MMMM Do YYYY, h:mm:ss a')}
//         </p>
//       </div>
//     </div>
//     <div className="">0 ETH</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
//     <div className="flex items-center gap-10">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b1a27cf-66e6-4aa9-a9f6-e76d334f5123?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//         className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
//       />
//       <div className="flex flex-col">
//         <p className="text-">Transfer to 0x94ce…3d17</p>
//         <p className="text-gray-400 text-sm">
//           {moment(1683159551).format('MMMM Do YYYY, h:mm:ss a')}
//         </p>
//       </div>
//     </div>
//     <div className="">- 0.5 ETH</div>
//   </div>
// </div>
