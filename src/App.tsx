import ExploreByTheme from './components/home/ExploreTheme/ExploreByTheme'
import ExploreByCities from './components/home/ExploreCity/ExploreByCities'
import MostVisited from './components/home/MostVisited/MostVisited'
import MoodCollection from './components/home/MoodCollection/MoodCollection'
import ExploreStates from './components/home/ExploreState/ExploreStates'
import HotDeals from './components/home/HotDeals/HotDeals'
import Events from './components/home/Events/Events'
import HeroSection from './components/home/HeroSection'
import QuickActions from './components/home/QuickActions/QuickActions'
  
function App() {
  return (
    <>
      <HeroSection />
      <QuickActions />
      <ExploreByCities />
      {/* <div className="flex h-screen items-center justify-center bg-slate-100">
      <h1 className="text-5xl font-bold text-blue-600">
        Trvios Website
      </h1>
    </div> */}
      <ExploreByTheme />
      <ExploreByCities />
      <MostVisited />
      <MoodCollection />
      <ExploreStates />
      <HotDeals />
      <Events />
    </>
  )
}

export default App