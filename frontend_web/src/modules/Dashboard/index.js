import Avatar from "../../assets/avatar_icon.png";
import Input from "../../components/Input";

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
  ];

  return (
    <div className="w-screen flex">
      <div className="w-[25%] border h-screen bg-secondary">
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
      <div className="w-[50%] border h-screen bg-white flex flex-col items-center">
        <div className="w-[75%] bg-secondary h-[65px] my-8 rounded-full flex items-center px-10 shadow-sm ">
          <div className="cursor-pointer">
            <img src={Avatar} width={50} height={50} />
          </div>
          <div className="ml-4 mr-auto cursor-pointer">
            <h3 className="text-base font-semibold">Shopi</h3>
            <p className="text-sm font-light text-gray-600">Online</p>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone-outgoing"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 9l5 -5" />
              <path d="M16 4l4 0l0 4" />
            </svg>
          </div>
        </div>
        <div className="h-[75%] w-full overflow-y-scroll scroll-smooth shadow-sm">
          <div className="p-8">
            <div className="max-w-[85%] bg-secondary w-[300px] rounded-b-xl rounded-tr-xl p-4 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="max-w-[85%] bg-primary w-[300px] rounded-b-xl rounded-tl-xl ml-auto p-4 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="max-w-[85%] bg-secondary w-[300px] rounded-b-xl rounded-tr-xl p-4 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="max-w-[85%] bg-primary w-[300px] rounded-b-xl rounded-tl-xl ml-auto p-4 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="max-w-[85%] bg-secondary w-[300px] rounded-b-xl rounded-tr-xl p-4 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="max-w-[85%] bg-primary w-[300px] rounded-b-xl rounded-tl-xl ml-auto p-4 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </div>
        <div className="p-8 w-full flex items-center">
          <Input
            placeholder="Type a message..."
            className="w-[75%]"
            inputClassName="p-4 border-0 shadow-md rounded-full bg-primary-light focus:ring-0 focus:broder-0 outline-none"
          />
          <div className="ml-4 p-2 cursor-pointer bg-primary-light rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-send"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 14l11 -11" />
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
          </div>
          <div className="ml-4 p-2 cursor-pointer bg-primary-light rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-circle-plus"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
              <path d="M9 12h6" />
              <path d="M12 9v6" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[25%] border h-screen bg-primary-light"></div>
    </div>
  );
};

export default Dashboard;
