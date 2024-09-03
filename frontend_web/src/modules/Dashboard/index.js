import { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "../../assets/avatar_icon.png";
import Input from "../../components/Input";

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/messages/list/1"
        );
        setContacts(res.data.payload);
      } catch (err) {
        console.error("Error fetching contacts:", err);
      }
    };

    fetchContacts();
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "" || !selectedContact) return;

    const senderId = localStorage.getItem("username"); 

    setLoading(true);
    try {
      await axios.post("http://localhost:8000/api/messages/send", {
        senderId: senderId,
        receiverId: selectedContact.id,
        message: newMessage,
      });
      setNewMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
    } finally {
      setLoading(false);
    }
  };

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
            {contacts.map(({ name, status, img, id }, index) => (
              <div
                key={index}
                className="flex items-center py-4 border-b border-b-gray-300 cursor-pointer"
                onClick={() => setSelectedContact({ name, id })}
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
        <div className="w-[75%] bg-secondary h-[65px] my-8 rounded-full flex items-center px-10 shadow-sm">
          <div className="cursor-pointer">
            <img src={Avatar} width={50} height={50} />
          </div>
          <div className="ml-4 mr-auto cursor-pointer">
            <h3 className="text-base font-semibold">
              {selectedContact?.name || "Select a contact"}
            </h3>
            <p className="text-sm font-light text-gray-600">Online</p>
          </div>
        </div>
        <div className="h-[75%] w-full overflow-y-scroll scroll-smooth shadow-sm">
          <div className="p-8">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] w-[300px] rounded-b-xl p-4 mb-4 ${
                  msg.senderId === "yourUserId"
                    ? "bg-primary text-white rounded-tl-xl ml-auto"
                    : "bg-secondary rounded-tr-xl"
                }`}
              >
                {msg.message}
              </div>
            ))}
          </div>
        </div>
        <div className="p-8 w-full flex items-center">
          <Input
            placeholder="Type a message..."
            className="w-[75%]"
            inputClassName="p-4 border-0 shadow-md rounded-full bg-primary-light focus:ring-0 outline-none"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <div
            className="ml-4 p-2 cursor-pointer bg-primary-light rounded-full"
            onClick={handleSendMessage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-send"
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
