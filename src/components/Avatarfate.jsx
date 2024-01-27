import React from 'react'
import "./Avatarfate.css"
// import nnn from '../assets/img/slide/images-44-removebg-preview.png'
import special1 from '../assets/img/special-1.png'
import special2 from '../assets/img/specials-2.png'
import special3 from '../assets/img/special-3.avif'
import special4 from '../assets/img/special-4.png'
import special5 from '../assets/img/special-5.png'
import birthday1 from '../assets/img/birth1.jpg'
import private1 from '../assets/img/testimonials/private.jpg'
import wedding from '../assets/img/wedding.png'
import prisca from '../assets/img/chefs/prisca1.png'
import precious1 from '../assets/img/chefs/precious.png'
import ikenna1 from '../assets/img/chefs/ikenna.png'
import nonso from '../assets/img/testimonials/nonso.png'
import obinna from '../assets/img/testimonials/obinna.png'
import logo from '../assets/img/logo.png'

const Avatarfate = () => {
//     const [name, setname] = useState('')
//     const [email, setemail] = useState('')
//     const [food, setfood] = useState('')
//     const [messages, setmessages] = useState('')
//     const [phone, setphone] = useState('')
//     const [adress, setadress] = useState('')
//     const [plate, setplate] = useState('')
//  const sendMessage=()=>{

//  }


    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }
     
      /**
       * Easy event listener function
       */
      const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
          if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
          } else {
            selectEl.addEventListener(type, listener)
          }
        }
      }
     
      /**
       * Easy on scroll event listener 
       */
      const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
      }
     
      /**
       * Navbar links active state on scroll
       */
      let navbarlinks = select('#navbar .scrollto', true)
      const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
          if (!navbarlink.hash) return
          let section = select(navbarlink.hash)
          if (!section) return
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classNameList.add('active')
          } else {
            navbarlink.classNameList.remove('active')
          }
        })
      }
      window.addEventListener('load', navbarlinksActive)
      onscroll(document, navbarlinksActive)
     
      /**
       * Scrolls to an element with header offset
       */
      const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight
     
        let elementPos = select(el).offsetTop
        window.scrollTo({
          top: elementPos - offset,
          behavior: 'smooth'
        })
      }
     
      /**
       * Toggle .header-scrolled className to #header when page is scrolled
       */
      let selectHeader = select('#header')
      let selectTopbar = select('#topbar')
      if (selectHeader) {
        const headerScrolled = () => {
          if (window.scrollY > 100) {
            selectHeader.classNameList.add('header-scrolled')
            if (selectTopbar) {
              selectTopbar.classNameList.add('topbar-scrolled')
            }
          } else {
            selectHeader.classNameList.remove('header-scrolled')
            if (selectTopbar) {
              selectTopbar.classNameList.remove('topbar-scrolled')
            }
          }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
      }
     
      /**
       * Back to top button
       */
      let backtotop = select('.back-to-top')
      if (backtotop) {
        const toggleBacktotop = () => {
          if (window.scrollY > 100) {
            backtotop.classNameList.add('active')
          } else {
            backtotop.classNameList.remove('active')
          }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
      }
     
      /**
       * Mobile nav toggle
       */
      on('click', '.mobile-nav-toggle', function(e) {
        select('#navbar').classNameList.toggle('navbar-mobile')
        this.classNameList.toggle('bi-list')
        this.classNameList.toggle('bi-x')
      })
     
      /**
       * Mobile nav dropdowns activate
       */
      on('click', '.navbar .dropdown > a', function(e) {
        if (select('#navbar').classNameList.contains('navbar-mobile')) {
          e.preventDefault()
          this.nextElementSibling.classNameList.toggle('dropdown-active')
        }
      }, true)
     
      /**
       * Scrool with ofset on links with a className name .scrollto
       */
      on('click', '.scrollto', function(e) {
        if (select(this.hash)) {
          e.preventDefault()
     
          let navbar = select('#navbar')
          if (navbar.classNameList.contains('navbar-mobile')) {
            navbar.classNameList.remove('navbar-mobile')
            let navbarToggle = select('.mobile-nav-toggle')
            navbarToggle.classNameList.toggle('bi-list')
            navbarToggle.classNameList.toggle('bi-x')
          }
          scrollto(this.hash)
        }
      }, true)
     
      /**
       * Scroll with ofset on page load with hash links in the url
       */
      window.addEventListener('load', () => {
        if (window.location.hash) {
          if (select(window.location.hash)) {
            scrollto(window.location.hash)
          }
        }
      });
     
      /**
       * Hero carousel indicators
       */
      let heroCarouselIndicators = select("#hero-carousel-indicators")
      let heroCarouselItems = select('#heroCarousel .carousel-item', true)
     
      heroCarouselItems.forEach((item, index) => {
        (index === 0) ?
        heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' className='active'></li>":
          heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
      });
     
      /**
       * Menu isotope and filter
       */
      // window.addEventListener('load', () => {
      //   let menuContainer = select('.menu-container');
      //   if (menuContainer) {
      //     let menuIsotope = new Isotope(menuContainer, {
      //       itemSelector: '.menu-item',
      //       layoutMode: 'fitRows'
      //     });
     
      //     let menuFilters = select('#menu-flters li', true);
     
      //     on('click', '#menu-flters li', function(e) {
      //       e.preventDefault();
      //       menuFilters.forEach(function(el) {
      //         el.classNameList.remove('filter-active');
      //       });
      //       this.classNameList.add('filter-active');
     
      //       menuIsotope.arrange({
      //         filter: this.getAttribute('data-filter')
      //       });
     
      //     }, true);
      //   }
     
      // });
     
      /**
       * Testimonials slider
       */
      // new Swiper('.events-slider', {
      //   speed: 600,
      //   loop: true,
      //   autoplay: {
      //     delay: 5000,
      //     disableOnInteraction: false
      //   },
      //   slidesPerView: 'auto',
      //   pagination: {
      //     el: '.swiper-pagination',
      //     type: 'bullets',
      //     clickable: true
      //   }
      // });
     
      /**
       * Initiate gallery lightbox 
       */
      // const galleryLightbox = GLightbox({
      //   selector: '.gallery-lightbox'
      // });
     
      /**
       * Testimonials slider
       */
    //   new Swiper('.testimonials-slider', {
    //     speed: 600,
    //     loop: true,
    //     autoplay: {
    //       delay: 5000,
    //       disableOnInteraction: false
    //     },
    //     slidesPerView: 'auto',
    //     pagination: {
    //       el: '.swiper-pagination',
    //       type: 'bullets',
    //       clickable: true
    //     }
    // });
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">AVATARFATE RESTAURANT</a>
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-white"></span>
    </button>
    <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
        <li className="nav-item">
          <a className="nav-link active text-warning" aria-current="page" href="#">Home</a>
        </li>

        <li className="nav-item">
            <a className="nav-link active text-warning" aria-current="page" href="#about">About</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active text-warning" aria-current="page" href="#menu">Menu</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active text-warning" aria-current="page" href="#specials">Specials</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active text-warning" aria-current="page" href="#events">Events</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active text-warning" aria-current="page" href="#contact">Contact</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active text-warning" aria-current="page" href="#chefs">Chefs</a>
          </li>

          

          <i classNameName="bi bi-phone d-flex align-items-center "><span >+ 234 7014 333 273-</span></i>
          <i classNameName="bi bi-clock ms-4 d-none d-lg-flex align-items-center"><span>Mon-Sat:08:00 AM - 09:00 PM</span></i>
          
            <a href="#order-here" classNameName="book-a-table-btn scrollto">ORDER HERE</a>
          
        </ul>


     
    </div>
  </div>
</nav>




         

       {/* <!-- ======= Hero Section ======= --> */}
       <section id="hero">
       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

       <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
        <div className="carousel-inner">


              {/* <!-- Slide 1 --> */}
              <div className="carousel-item active slide1">
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown"><span>Avatarfate </span> Restaurant</h2>
                    <p className="animate__animated animate__fadeInUp">Embark on a culinary adventure that celebrates the rich tapestry of Nigerian flavors at our esteemed restaurant. Immerse yourself in the essence of our culture through every delightful bite.</p>
                    <div>
                      <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                      <a href="#order-here" className="btn-book animate__animated animate__fadeInUp scrollto">Order Here</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Slide 2 --> */}
              <div className="carousel-item slide2">
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown">Signature Dish: Echefu Delight Platter</h2>
                    <p className="animate__animated animate__fadeInUp">Indulge in the extraordinary flavors of our Echefu Delight Platter, a carefully curated ensemble that showcases the best of Nigerian cuisine. From the savory Jollof Rice to the succulent Suya skewers and the comforting Pounded Yam with Egusi Soup, this platter is a symphony of taste that promises to captivate your senses.</p>
                    <div>
                      <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                      <a href="#order-here" className="btn-book animate__animated animate__fadeInUp scrollto">Order Here</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Slide 3 --> */}
              <div className="carousel-item slide3">
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown">Spicy Afang Stew Extravaganza</h2>
                    <p className="animate__animated animate__fadeInUp">Experience the bold and spicy notes of our Afang Stew, a traditional delight that combines a medley of nutritious vegetables with the robust flavors of assorted meats. This dish is a true celebration of the vibrant and diverse culinary landscape of Nigeria.</p>
                    <div>
                      <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                      <a href="#order-here" className="btn-book animate__animated animate__fadeInUp scrollto">Order Here</a>
                    </div>
                  </div>
                </div>
              </div>

            {/* </div> */}

            <button className="carousel-control-prev" type="button"    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
           </button>
           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Next</span>
           </button>

            {/* <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
            </a>

            <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
            </a> */}

          </div>
        </div>
        
  </section>
            {/* <!-- End Hero --> */}


           


            <main id="main">

                 {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container-fluid">

        <div className="row">

          <div className="col-lg-5 align-items-stretch video-box aboutpic">
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          </div>

          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">

            <div className="content">
              <h3>About <strong> Avaterate Restaurant</strong></h3>
              <p>
                Welcome to AvatarFate Restaurant, where the artistry of culinary perfection intertwines seamlessly with a warm and enchanting ambiance, crafting an extraordinary dining experience that transcends the ordinary. Nestled in the heart of Nigeria, our restaurant stands as a sanctuary for those in pursuit of a harmonious fusion of exquisite flavors, unparalleled service, and an atmosphere that captivates the senses.
              </p>
            
              <p>
                As you step into AvatarFate, you are greeted by an inviting haven that promises not just a meal but an immersion into a world of culinary delight. Our commitment to excellence is reflected in every detail, from the carefully curated menu to the attentive service, ensuring that each visit is an unforgettable journey for the palate and the soul.
              </p>
              
              <p>
                At AvatarFate, we invite you to unwind and savor moments of pure indulgence, where the harmonious blend of delectable cuisine, impeccable service, and an alluring atmosphere elevates your dining experience to new heights. Immerse yourself in the enchantment of AvatarFate Restaurant, where every visit promises not just a meal but a celebration of culinary excellence and unforgettable memories.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
    {/* // <!-- End About Section --> */}


    {/* <!-- ======= Whu Us Section ======= --> */}
    <section id="why-us" className="why-us">
      <div className="container">

        <div className="section-title">
          <h2>Why choose <span>Our Restaurant</span></h2>
          <p>"AvaterFate Restaurant: A Taste of Nigeria's Rich Heritage, Where Every Meal Tells a Delicious Story!"</p>
        </div>

        <div className="row">

          <div className="col-lg-4">
            <div className="box">
              <span>01</span>
              <h4>Exceptional Dining Atmosphere:</h4>
              <p>Immerse yourself in a captivating dining atmosphere at AvatarFate Restaurant. Our carefully designed ambiance creates the perfect setting for a memorable dining experience, whether you're celebrating a special occasion or enjoying a casual meal.</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <span>02</span>
              <h4>Diverse Culinary Experience:</h4>
              <p>AvatarFate Restaurant offers a diverse menu that caters to a wide range of tastes and preferences. From traditional favorites to unique and innovative dishes, our culinary offerings provide an exciting gastronomic journey.</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <span>03</span>
              <h4>Fresh and Locally Sourced Ingredients:</h4>
              <p>At AvatarFate, we prioritize quality by sourcing fresh, local ingredients for our dishes. Our commitment to using high-quality produce ensures that every meal is not only delicious but also a celebration of local flavors and sustainability.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Whu Us Section --> */}


    
    {/* <!-- ======= Menu Section ======= --> */}
    <section id="menu" className="menu">
      <div className="container">

        <div className="section-title">
          <h2>Check our tasty <span>Menu</span></h2>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex ">
            <ul id="menu-flters">
              <li data-filter="*" className="filter-active">Show All</li>
              <li data-filter=".filter-starters">Rice</li>
              <li data-filter=".filter-salads">Stew</li>
              <li data-filter=".filter-specialty">Swallow</li>
            </ul>
          </div>
        </div>

        <div className="row menu-container">

          <div className="col-lg-6 menu-item filter-starters">
            <div className="menu-content">
            {/* <img  src={} alt="" /> */}
              <a href="">Jollof Rice</a><span>₦2,500</span>
            </div>
            <div className="menu-ingredients">
              It is a rich tasty, and elegent meal consisting of rice cooked with pepper, seasoning, and spices
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <div className="menu-content">
              <a href="#">Egusi Soup and Eba</a><span>₦3,000</span>
            </div>
            <div className="menu-ingredients">
              it is made from melom seed is grounded made into a ball with a mix of leafy vegetable and pepper
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
            <div className="menu-content">
              <a href="#">White rice and Stew</a><span>₦2,000</span>
            </div>
            <div className="menu-ingredients">
              A delicious food made with rice, tomatos, and pepper
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <div className="menu-content">
              <a href="#">chicken Stew</a><span>₦4,000</span>
            </div>
            <div className="menu-ingredients">
              A bowl of chicken cooked ina pot of pepper with aromatics and seasonings
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <div className="menu-content">
              <a href="#">Okro Pepper soup with poundo</a><span>₦3,000</span>
            </div>
            <div className="menu-ingredients">
              Okro pepper soup combines Okro, pepper, palm oil, and protein made in a pot
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
            <div className="menu-content">
              <a href="#">Fried Rice</a><span>₦3,000</span>
            </div>
            <div className="menu-ingredients">
              It consists of fresh vegetables fried and stirred into the rice
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <div className="menu-content">
              <a href="#">Efo Riro</a><span>₦2,000</span>
            </div>
            <div className="menu-ingredients">
              Efo Riro is a one -pot spinach stew made with chopped spinach stirred into a pepper stew
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <div className="menu-content">
              <a href="#">Beef Stew</a><span>₦4,000</span>
            </div>
            <div className="menu-ingredients">
              This stew consists of tenderly cooked beef soaked ina delicious broth.
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <div className="menu-content">
              <a href="#"> Ogbono soup with fufu</a><span>₦4,000</span>
            </div>
            <div className="menu-ingredients">
              Another delightful soup is amde with ogobono seed (wild mango seeds)
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Menu Section --> */}


    
    {/* <!-- ======= Specials Section ======= --> */}
    <section id="specials" className="specials">
      <div className="container">

        <div className="section-title">
          <h2>Check our <span>Specials</span></h2>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">  The classic Salad</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Stick Meat</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-3"> Jollof Spaghetti</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Coconut Rice</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Asun (Smoked Goat Meat)</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>The classNameic Salad</h3>
                    <p className="fst-italic">Are you looking for a quick and tasty salad recipe? This salad recipe is a great choice. It is a versatile recipe you can serve as an appetizer and main dish. It is a colorful bowl of nutritious and filling vegetables.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={special1} alt="" className="img-fluid" />
                    <div classNameName="shadow-ground"></div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Stick Meat</h3>
                    <p className="fst-italic">Everyone loves fried beef. Indulge yourself with addictive chunks of fried meat arranged on sticks with bell peppers. It is a regular starter at parties and a colorful Nigerian snack</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={special2} alt="" className="img-fluid"/>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-3">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Jollof Spaghetti</h3>
                    <p className="fst-italic">This is not a regular everyday spaghetti that you eat with ready-made stew. It is a one-pot stewed spaghetti recipe made with aromatics, vegetable oil, and pepper. You can stir your choice of protein and eat it for lunch or dinner.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={special3} alt="" className="img-fluid"/>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-4">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Coconut Rice</h3>
                    <p className="fst-italic">Coconut rice is a great option if you want to make something different from the classNameic rice. The rice is cooked in coconut milk to give a rich and exotic savor. This coconut rice is a simple recipe loaded with flavor.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={special4}alt="" className="img-fluid"/>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-5">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Asun (Smoked Goat Meat)</h3>
                    <p className="fst-italic">Smoked goat meat is an outstanding recipe. It is a great game recipe that is also suitable for family hangouts, picnics, and get-togethers. The meats are cut in chunks, seasoned, smoked, and stirred in blended spicy pepper.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                  <img src={special5}alt="" className="img-fluid"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Specials Section --> */}

     {/* <!-- ======= Events Section ======= --> */}

     <section id="events" className="events">
        <div className="container">

    <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row event-item">
                <div className="col-lg-6">
                    <img src={birthday1} className="d-block w-100" alt="..."/>
                    </div>

                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                        <h3>Birthday Parties</h3>
                        <div className="price">
                          <p><span>₦150,000</span></p>
                        </div>
                        <p className="fst-italic">
                          Personalized decor options are available to suit the theme and preferences of the birthday celebrant.
                        </p>
                        <ul>
                          <li><i className="bi bi-check-circle"></i> Indulge in a culinary journey with a specially crafted menu featuring a variety of delicious appetizers, main courses, and decadent desserts.</li>
                          <li><i className="bi bi-check-circle"></i> Explore authentic Nigerian flavors and international delights, expertly prepared by our skilled chefs.</li>
                          <li><i className="bi bi-check-circle"></i> Enjoy live music, a DJ spinning your favorite tunes, or other entertainment options to keep the celebration lively and entertaining.</li>
                        </ul>
                        <p>
                          Create lasting memories with personalized touches, ensuring a unique and unforgettable birthday experience for everyone.
                        </p>
                      </div>


            </div>
            

            
           
          </div>
          <div className="carousel-item">
            <div className="row event-item">
                <div className="col-lg-6">  
                    <img src={wedding} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                        <h3>Wedding Celebration</h3>
                        <div className="price">
                          <p><span>₦550,000</span></p>
                        </div>
                        <p className="fst-italic">
                            Elevate your wedding celebration with personalized decor options tailored to capture the essence of your love story and wedding theme.
                        </p>
                        <ul>
                          <li><i className="bi bi-check-circle"></i> Embark on a culinary journey with a specially curated menu that showcases a delightful fusion of exquisite appetizers, sumptuous main courses, and heavenly desserts. Our skilled chefs expertly prepare dishes that celebrate both Nigerian flavors and international delights, ensuring a gastronomic experience that will be remembered by all.</li>
                        </ul>
                        <p>
                            Craft unforgettable memories with personalized touches that make your wedding day uniquely yours. From customized wedding favors to special moments that reflect your personalities, we ensure an extraordinary and memorable wedding experience for you and your guests. Let us turn your dream wedding into a reality and celebrate the beginning of your lifelong journey together.
                        </p>
                      </div>
            </div>
            
           
          </div>

          <div className="carousel-item">
            <div className="row event-item">
                <div className="col-lg-6">
                    <img src={private1} className="d-block w-100" alt="..."/>
                </div>

                <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Private Parties</h3>
                    <div className="price">
                      <p><span>₦120,000</span></p>
                    </div>
                    <p className="fst-italic">
                      Enjoy the luxury of having the entire restaurant exclusively for your private event, providing an intimate and private setting for you and your guests.
                    </p>
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Experience the ambiance of AvaterFate Restaurant without the presence of other patrons, creating a personalized and exclusive atmosphere.</li>
                      <li><i className="bi bi-check-circle"></i> Customize the decor to match the theme or style of your private party, creating a unique and visually appealing setting.</li>
                      <li><i className="bi bi-check-circle"></i>Our skilled chefs can create a customized menu to suit the preferences and dietary requirements of your guests, ensuring a delightful dining experience.</li>
                    </ul>
                    <p>
                      Revel in the comfort of a dedicated space for your guests to celebrate without interruptions.
                    </p>
                  </div>

            </div>
           
          
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      
    
    
    </div>
  
    </section>
     
    {/* <!-- End Events Section --> */}

     {/* <!-- ======= ORDER HERE Section ======= --> */}
     <section id="order-here" className="book-a-table">
      <div className="container">

        <div className="section-title">
          <h2>ORDER <span>HERE</span></h2>
          <p>You can now order your food here and we will deliver it to you at your door side </p>
        </div>

        <form action="forms" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
              <input type="text" onChange={(e)=>{setname(e.target.value)}} name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input type="email" onChange={(e)=>{setemail(e.target.value)}} className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input type="text" onChange={(e)=>{setphone(e.target.value)}} className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input type="text" onChange={(e)=>{setfood(e.target.value)}} name="date" className="form-control" id="date" placeholder="Type of food you want to order" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input type="text" onChange={(e)=>{setadress(e.target.value)}} className="form-control" name="time" id="time" placeholder="address" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input type="number" onChange={(e)=>{setplate(e.target.value)}} className="form-control" name="people" id="people" placeholder="# of plates" data-rule="minlen:1" data-msg="Please enter at least 1 chars"/>
              <div className="validate"></div>
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control"  onChange={(e)=>{setmessages(e.target.value)}} name="message" rows="5" placeholder="Message"></textarea>
            <div className="validate"></div>
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>

      </div>
    </section>
    {/* <!-- End of ORDER HERE Section --> */}

     {/* <!-- ======= Chefs Section ======= --> */}
     <section id="chefs" className="chefs">
      <div className="container">

        <div className="section-title">
          <h2>Our Proffesional <span>Chefs</span></h2>
          <p>"AvaterFate Restaurant: A Taste of Nigeria's Rich Heritage, Where Every Meal Tells a Delicious Story!"</p>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="member">
              <div className="pic">
              <img src={prisca}alt="" className="img-fluid"/>
              </div>
              <div className="member-info">
                <h4>Christabel Echefu</h4>
                <span>Master Chef</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="member">
              <div className="pic">
                <img src={precious1} className="img-fluid" alt=""/>
              </div>
              <div className="member-info">
                <h4>Precious Echefu</h4>
                <span>Cook</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="member">
              <div className="pic">
                <img src={ikenna1} className="img-fluid" alt=""/>
              </div>
              <div className="member-info">
                <h4>Ikenna Echefu</h4>
                <span>Cook</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Chefs Section --> */}


    
    {/* <!-- ======= Testimonials Section ======= --> */}
    <section id="testimonials" className="testimonials">
      <div className="container position-relative">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="testimonial-item">
                <img src={nonso} className="testimonial-img" alt=""/>
                <h3>Chinonso Echefu</h3>
                <h4>Ceo &amp; Founder</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Dear Patrons, Welcome to AvatarFate Restaurant! I am the proud CEO and Founder, committed to curating a culinary haven where innovation meets tradition. Join us for an unforgettable gastronomic adventure.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial-item">
                <img src={prisca} className="testimonial-img" alt=""/>
                <h3>Christabel Echefu</h3>
                <h4>Managing Director</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  As the Managing Director of AvatarFate Restaurant, I am honored to ensure seamless operations and elevate your dining experience. Our commitment to excellence is unwavering. Enjoy the journey with us!
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial-item">
                <img src={precious1} className="testimonial-img" alt=""/>
                <h3>Precious Echefu</h3>
                <h4>Director</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Dear Esteemed Guests, I am the Director of AvatarFate Restaurant, dedicated to shaping our unique identity. With a passion for culinary trends and quality, I invite you to savor a remarkable dining experience.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial-item">
                <img src={obinna} className="testimonial-img" alt=""/>
                <h3>Obinna Echefu</h3>
                <h4>Manager</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Greetings from AvatarFate Restaurant! As your manager, I'm thrilled to lead our passionate team in delivering exceptional dining experiences. Join us for a journey of flavors and warm hospitality!
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial-item">
                <img src={ikenna1} className="testimonial-img" alt=""/>
                <h3>Ikenna Echefu</h3>
                <h4>Entrepreneur</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Dear Patrons, Embark on a culinary adventure crafted by our Entrepreneur at AvatarFate Restaurant. Their innovation and dedication bring a distinctive flair to our offerings. Experience excellence and creativity with every dish.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        
      </div>
    </section>
    {/* <!-- End Testimonials Section  --> */}

     {/* <!-- ======= Contact Section ======= --> */}
     <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2><span>Contact</span> Us</h2>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>
      </div>

      {/* <div className="map">
        <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
      </div> */}

      <div className="container mt-5">

        <div className="info-wrap">
          <div className="row">
            <div className="col-lg-3 col-md-6 info">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p> 12 Olorunlogbon Street Anthony village Lagos</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-clock"></i>
              <h4>Open Hours:</h4>
              <p>Monday-Saturday: 08:00 AM - 09:00 PM</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>chinonsodanielechefu@gmail.com avatarfate0306@gmail.com</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+234 7014 333 273 +234 8103 877 488</p>
            </div>
          </div>
        </div>

        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" onChange={(e)=>{setname(e.target.value)}} name="name" className="form-control" id="name" placeholder="Your Name" required/>
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" onChange={(e)=>{setemail(e.target.value)}} className="form-control" name="email" id="email" placeholder="Your Email" required/>
            </div>
          </div>
          <div className="form-group mt-3">
            <input type="text" onChange={(e)=>{setmessages(e.target.value)}} className="form-control" name="subject" id="subject" placeholder="Subject" required/>
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>

      </div>
    </section>
    {/* <!-- End Contact Section --> */}

    </main>
     {/* {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
  <footer id="footer">
    <div className="container">
      <img src={logo} width="20%" alt=""/>
      <h3>AVATARFATE RESTAURANT</h3>
      <p className=' ' style={{fontSize: "large"}}>"AvaterFate Restaurant: A Taste of Nigeria's Rich Heritage, Where Every Meal Tells a Delicious Story!"</p> 
      <div className="social-links">
        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
     
      
    </div>
  </footer>
  {/* <!-- End Footer --> */}

  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    
    </div>
  )
}

export default Avatarfate
