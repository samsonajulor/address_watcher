import Info from './Info';

const Infos = () => {
  const alertTypes = {
    title: 'Alert Types:',
    items: ['Nft mints', 'Balance changes', 'Contract deployment', 'High gas transactions'],
  };

  const notifications = {
    title: 'Notifications',
    items: ['SMS', 'Email', 'Push notifs'],
  };

  const notification = {
    title: 'Notifications',
    items: ['SMS', 'Email', 'Push notifs'],
  };

  return (
    <div className="justify-center items-center text-white bg-gray-950 flex w-full flex-col px-20 pt-20 max-md:max-w-full max-md:px-5 max-sm:pt-5">
      <div className="self-center w-full max-md:max-w-full">
        <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <Info {...alertTypes} />
          <Info {...notifications} />
          <Info {...notification} />
        </div>
      </div>
    </div>
  );
};

export default Infos;
