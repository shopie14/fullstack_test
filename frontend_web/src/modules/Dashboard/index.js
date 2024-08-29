import Avatar from "../../assets/avatar_icon.png";

const Dashboard = () => {
  const contact = [
    {
      name: "Shopi",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Rimuru",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Tempest",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Dazai",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Alexa",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Tzuyu",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Shoya",
      status: "Available",
      img: Avatar,
    },
  ];

  return (
    <div className="w-screen flex">
      <div className="w-[25%] border shadow-md h-screen bg-secondary">
        <div className="flex items-center my-6 mx-10">
          <div className="border border-primary p-[3px] rounded-full">
            <img src={Avatar} width={60} height={60} alt="My Account Avatar" />
          </div>
          <div className="ml-7">
            <h3 className="text-xl">Chat App</h3>
            <p className="text-base font-light">My Account</p>
          </div>
        </div>
        <hr />
        <div className="mx-10 mt-5">
          <div className="text-primary text-lg mb-3">Messages</div>
          <div>
            {contact.map(({ name, status, img }, index) => (
              <div
                key={index}
                className="flex items-center py-4 border-b border-b-gray-300 cursor-pointer"
              >
                <div className="border border-primary p-[2px] rounded-full">
                  <img
                    src={img}
                    width={50}
                    height={50}
                    alt={`${name} avatar`}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-semibold">{name}</h3>
                  <p className="text-sm font-light text-gray-600">{status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[50%] border shadow-md h-screen"></div>
      <div className="w-[25%] border shadow-md h-screen"></div>
    </div>
  );
};

export default Dashboard;
