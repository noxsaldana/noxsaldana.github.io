import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Programs from '../components/Programs/Programs'
import Events from '../components/Events/Events'
import Donate from '../components/Donate/Donate'
import ContactForm from '../components/ContactForm/ContactForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <Events />
      <Donate />
      <ContactForm />
    </main>
  )
}
