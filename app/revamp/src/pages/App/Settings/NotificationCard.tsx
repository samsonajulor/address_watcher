import { useState } from 'react';
import { useMainContext } from '../../../contexts/MainContext';
import { apolloClient } from '../../../config/apollo-client';
import { signMessage } from '@wagmi/core';
import { InfinitySpin } from 'react-loader-spinner';
import { FaTimes } from 'react-icons/fa';
import useEffectOnce from '../../../hooks/useEffectOnce';

const NotificationCard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const [isEditing, setIsEditing] = useState({
    email: false,
    sms: false,
  });
  const { updateEmail, address, userData } = useMainContext();

  useEffectOnce(() => {
    if (userData) setEmail(userData.email);
  }, [userData]);

  const handleAdd = async () => {
    try {
      setLoading(true);
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (emailRegex.test(email)) {
        const signature = await signMessage({
          message: `You're about to link ${email} to ${address}`,
        });
        console.log(signature);

        await updateEmail({
          variables: {
            input: { content: { email, address } },
          },
        });
        setLoading(false);
        setIsEditing({
          ...isEditing,
          email: false,
        });
        await apolloClient.refetchQueries({
          include: 'active',
        });
      } else throw new Error('Invalid email address');
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-8">
      <div className="">
        <p>Email</p>
        <div className="flex gap-2 mt-3 items-center">
          {isEditing.email ? (
            <>
              <input
                className="rounded py-1.5 px-4 text-cs-dark-primary border-2 border-cs-light-purple/50 focus-within:outline-cs-purple/25 focus-within:outline"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
              />
              <button
                className="ml-2 rounded bg-cs-light-purple hover:bg-cs-purple  text-cs-bg font-bold px-4 py-3 leading-none text-sm"
                onClick={handleAdd}
              >
                update
              </button>
              <div className="cursor-pointer text-red-700 hover:text-red-800">
                <FaTimes
                  size={30}
                  onClick={() =>
                    setIsEditing({
                      ...isEditing,
                      email: false,
                    })
                  }
                />
              </div>
            </>
          ) : (
            <>
              <p className="font-bold">{email ? email : 'You do not have a registered email'}</p>
              <button
                className="ml-2 rounded bg-cs-light-purple hover:bg-cs-purple  text-cs-bg font-bold px-4 py-2 leading-none text-sm"
                onClick={() =>
                  setIsEditing({
                    ...isEditing,
                    email: true,
                  })
                }
              >
                {email ? 'Edit' : ' Add'}
              </button>
            </>
          )}
          {error && <p className="text-red-500 text-[12px]">{error}</p>}
        </div>
      </div>

      {loading && (
        <div className="absolute w-screen h-screen grid place-content-center top-0 left-0 bg-black/60">
          <div className="">
            <InfinitySpin width="200" color="#6d28d9" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationCard;