import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Footer from '../Components/Footer';

const chartData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];
const Home = () => {
  return (

    <div className="bg-gray-100">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl text-white font-bold">Vitality Tribe</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="flex justify-between gap-6 ">
          <div className="w-1/2 align-middle">
            <h2 className="text-3xl font-semibold align-middle mb-4">Welcome to Our Vitality Tribe</h2>
            <p className="text-gray-800 align-middle mb-4">
              Vitality tribe is a website which offers many different services to its users, which will help the users in having a healthy lifestyle and good workout routine. 
            </p>
            <p className="text-gray-800 mb-4">
              We offer many services such as fitness tracker, monitor your calories intake and calories burnt. Read latest news related to health on our blog or follow different guides to acheive your goals.
            </p>
          </div>
          <div className="w-1/2">
            <img src="https://c8.alamy.com/comp/PD5GJ5/lifestyle-background-and-healthy-active-fitness-living-with-exercise-and-nutritious-diet-with-3d-render-elements-PD5GJ5.jpg" alt="" className="w-4/5 rounded-lg" />
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow p-4">
              <img src="https://previews.123rf.com/images/sudowoodo/sudowoodo1506/sudowoodo150600114/41792520-fitness-tracker-on-hand-surrounded-with-colorful-health-icons-isolated-on-white-background-simple.jpg" alt="" />
              <h3 className="text-xl font-bold mb-2">Calories Training</h3>
              <p className="text-gray-800">
                Track you calories intake accordingly, keep record of every food you eat and in what quantity.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <img src="https://thumbs.dreamstime.com/z/dieting-fitness-guidelines-white-background-40599217.jpg" alt="" />
              <h3 className="text-xl font-bold mb-2">Ftiness Guides</h3>
              <p className="text-gray-800">
                Use the different guides provided for free to acheive you fitness goal and learn new and interesting things.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <img src="https://img.favpng.com/20/12/16/group-of-people-background-png-favpng-GGeYPTCqnKkubzN3PCJDhBbBj.jpg" alt="" />
              <h3 className="text-xl font-bold mb-2">Fitness Social</h3>
              <p className="text-gray-800">
                Compare and share your progress with other and let them know how far you have come.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <img src="https://i.pinimg.com/550x/0e/13/47/0e1347371bea5ebb9a366f1acc1384de.jpg" alt="" />
              <h3 className="text-xl font-bold mb-2">Blogs</h3>
              <p className="text-gray-800">
              Read our blogs which is ful of new and interesting things related to fitness and health.
              </p>
            </div>
          </div>
        </section>
        </main>
        <Footer/>
        </div>
  )}


export default Home