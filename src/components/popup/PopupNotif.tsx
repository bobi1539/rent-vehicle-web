import React from "react";

interface NotifData {
  key: number;
  title: string;
  body: string;
  time: string;
}

interface PopupNotifProps {
  showNotif: string;
  handleShowNotif: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PopupNotif: React.FC<PopupNotifProps> = ({
  showNotif,
  handleShowNotif,
}) => {
  const notifs: NotifData[] = [
    {
      key: 1,
      title: "Edit your information in a swipe",
      body: "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      time: "12 May, 2025",
    },
    {
      key: 2,
      title: "It is a long established fact",
      body: "that a reader will be distracted by the readable.",
      time: "12 May, 2025",
    },
    {
      key: 3,
      title: "There are many variations of passages",
      body: "Lorem Ipsum available, but the majority have suffered.",
      time: "12 May, 2025",
    },
    {
      key: 4,
      title: "Edit your information in a swipe",
      body: "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      time: "12 May, 2025",
    },
  ];

  const handleClickNotif = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="relative">
      <button
        className="btn-rounded-icon"
        type="button"
        onClick={handleShowNotif}
      >
        <i className="bx bx-bell bx-sm"></i>
      </button>
      <div className="w-2.5 h-2.5 rounded-full bg-red-500 absolute right-2 top-0"></div>
      <div className={`popup-notif ${showNotif}`}>
        <div className="border-b-gray-100 border-b px-4 py-3">
          <h1 className="text-gray-600 text-sm">Notifikasi</h1>
        </div>
        <ul className="overflow-y-auto h-80">
          {notifs.map((notif) => (
            <li className="notif-li" key={notif.key}>
              <a href="#" onClick={handleClickNotif}>
                <p>
                  <span className="font-bold me-1">{notif.title}</span>
                  {notif.body}
                </p>
                <p className="mt-2">{notif.time}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopupNotif;
