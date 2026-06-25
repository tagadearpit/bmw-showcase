import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FeaturedCars from './components/FeaturedCars.jsx'
import ProductShowcase from './components/ProductShowcase.jsx'
import PerformanceStats from './components/PerformanceStats.jsx'
import InteriorExperience from './components/InteriorExperience.jsx'
import Configurator from './components/Configurator.jsx'
import ModelComparison from './components/ModelComparison.jsx'
import TestDriveForm from './components/TestDriveForm.jsx'
import Footer from './components/Footer.jsx'
import CarDetailsModal from './components/CarDetailsModal.jsx'
import StudioBackground from './components/StudioBackground.jsx'
import { cars } from './data/cars.js'

export default function App() {
  const [selectedCar, setSelectedCar] = useState(null)
  const [configCar, setConfigCar] = useState(cars[3] ?? cars[0])
  const [preferredModel, setPreferredModel] = useState(cars[0].name)

  const openDetails = (car) => setSelectedCar(car)
  const closeDetails = () => setSelectedCar(null)

  const configureCar = (car) => {
    setConfigCar(car)
    closeDetails()
    requestAnimationFrame(() => {
      document.getElementById('configure')?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  const testDriveCar = (car) => {
    closeDetails()
    setPreferredModel(car.name)
    requestAnimationFrame(() => {
      document.getElementById('test-drive')?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  return (
    <>
      <StudioBackground />
      <Navbar />
      <main>
        <Hero />
        <FeaturedCars onDetails={openDetails} />
        <ProductShowcase />
        <PerformanceStats />
        <InteriorExperience />
        <Configurator selectedCar={configCar} onSelectCar={setConfigCar} />
        <ModelComparison onDetails={openDetails} />
        <TestDriveForm preferredModel={preferredModel} />
      </main>
      <Footer />
      <CarDetailsModal car={selectedCar} onClose={closeDetails} onConfigure={configureCar} onTestDrive={testDriveCar} />
    </>
  )
}
