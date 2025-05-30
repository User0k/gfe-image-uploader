import { UserCard } from "./components/UserCard/UserCard";
import { User } from "./types";

const mockedUser: User = {
  name: "Jack Smith",
  companyName: "Webflow",
  companyIconUrl: "/webflow.svg",
  jobTitle: "Senior Product Designer",
  nickName: "@kingjack",
  pronouns: "He/Him",
  city: "Vancouver",
  country: "Canada",
  images: [
    {
      fullImage: "/avatar.jpg",
      height: 586,
      id: "1",
      originalName: "avatar.jpg",
      selected: false,
      size: 27019,
      thumbNail: "/cover.jpg",
      width: 570,
      avatar: {
        diameter: 150,
        id: "8eeafdb3-0342-4af6-9e83-d695b36bc5f7",
        imageId: "897ff8b7-5153-4ef3-89eb-594ded937709",
        x: 100,
        y: 100,
      },
    },
    {
      fullImage: "/image.jpg",
      height: 800,
      id: "2",
      originalName: "Some image.jpg",
      selected: true,
      size: 24754,
      thumbNail: "/cover.jpg",
      width: 649,
      avatar: null,
    },
  ],
};

function App() {
  const {
    city,
    companyIconUrl,
    companyName,
    country,
    images,
    jobTitle,
    name,
    nickName,
    pronouns,
  } = mockedUser;

  return (
    <div className="h-full min-h-screen flex items-center text-gray-900 p-6 bg-gradient-to-br from-gray-100 to-gray-300">
      <UserCard
        userName={name}
        images={images}
        details={{ companyIconUrl, companyName, jobTitle, nickName, pronouns }}
        location={{ city, country }}
      />
    </div>
  );
}

export default App;
