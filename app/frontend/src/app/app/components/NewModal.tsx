import {ApolloClient, useMutation} from '@apollo/client';
import React, {useState} from 'react';
import {InfinitySpin} from 'react-loader-spinner';
import {useComposeContext} from 'src/app/app/contexts/ComposeProvider';
import {apolloClient} from 'src/config/apollo-client';
import {ADD_EMAIL} from 'src/utils/gql';
import {signMessage} from '@wagmi/core';


const NewModal = ({setIsOpen, _email}: {setIsOpen: (value: boolean) => void, _email: string | undefined;}) => {
   const [email, setEmail] = useState(_email ? _email : "");
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");
   const [mutateFunction] = useMutation(ADD_EMAIL);
   const {address} = useComposeContext();
   const handleAdd = async () => {
      try {
         setLoading(true);
         const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
         if (emailRegex.test(email)) {
            const signature = await signMessage({
               message: `You're about to link ${email} to ${address}`,
            });
            console.log(signature);

            await mutateFunction({
               variables: {
                  input: {content: {email, address}},
               },
            });
            setEmail("");
            setLoading(false);
            setIsOpen(false);
            await apolloClient.refetchQueries({
               include: "active"
            });
         }
         else throw new Error("Invalid email address");
      } catch (error: any) {
         setError(error.message);
         setLoading(false);
      }

   };
   return (
      <div className='overscroll-y-auto no-scrollbar max-h-[90vh] '>
         <div className='rounded-2xl bg-gray-900 px-10 py-5'>
            <div className="text-violet-700 text-xl font-bold mb-4">
               Add address
            </div>
            <div className="grid gap-1">
               <label
                  htmlFor=""
                  className="text-white font-bold"
               >
                  Address
               </label>
               <input
                  name='email'
                  type="email"
                  placeholder="johndoe@example.com"
                  className={`border bg-transparent outline-none px-3 py-2 rounded-lg border-solid border-zinc-500 border-opacity-80 w-[60vw] max-w-[600px] ${error ? "border-red-500" : ""}`}
                  value={email}
                  onChange={(e) => {
                     setEmail(e.target.value);
                     setError("");
                  }}
               />
               {error && (
                  <p className="text-red-500 text-[12px]">{error}</p>
               )}
            </div>
            <button className="text-white text-xl mt-4 flex s justify-center w-full  bg-violet-800 px-6 py-3 rounded-xl max-md:px-5" onClick={handleAdd}>
               Add
            </button>
         </div>

         {loading && <div className='absolute w-screen h-screen grid place-content-center top-0 left-0 bg-black/60'>
            <div className=''>
               <InfinitySpin
                  width='200'
                  color="#6d28d9"
               />
            </div>
         </div>}


      </div>
   );
};

export default NewModal;