import Card from "./components/Card";

const mockedCardArgs = {
  userName: "Jack Smith",
  details: {
    companyName: "Webflow",
    companyIconUrl: "/webflow.svg",
    jobTitle: "Senior Product Designer",
    nickName: "@kingjack",
    pronouns: "He/Him",
  },
  location: {
    city: "Vancouver",
    country: "Canada",
  },
  image: {
    url: "/image.jpg",
  },
};

function App() {
  return (
    <div className="h-full min-h-screen flex items-center text-gray-900 p-6 bg-gradient-to-br from-gray-100 to-gray-300">
      <Card {...mockedCardArgs} />
    </div>
  );
}

export default App;
