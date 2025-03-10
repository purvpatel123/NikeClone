import {
  CustomerReviews, Hero, PopularProducts,
  Services, Subscribe, SuperQuality, Footer, SpecialOffer
} from './section'  // Importing all sections from the sections folder using index.js

import Nav from './Components/Nav'

const App = () => (
  <main className="relative">  {/* Added relative class to the main tag  so, nav can be absolute to thie main instead of webpage */}

    <Nav />

    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>

    <section className="padding">
      <PopularProducts />
    </section>

    <section className="padding">
      <SuperQuality />
    </section>

    <section className="padding-x py-10">
      <Services />
    </section>

    <section className="padding">
      <SpecialOffer />
    </section>

    <section className="bg-pale-blue padding">
      < CustomerReviews />
    </section>

    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>

    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>

  </main>
)

export default App