import { 
  HomeStyled,
  HomeImgStyled,
  HomeRow
} from "./Home.styled"
import Product from "../products/Product"

const Home = () => {
  return (
    <HomeStyled>
      <div className="home__container">
        <HomeImgStyled src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon" 
        />

        {/* Products */}
        <HomeRow>
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US327_FMwebp_QL65_.jpg"
          />
        </HomeRow>

        <HomeRow>
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={15.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </HomeRow>

        <HomeRow>
          <Product
            id="52321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={700.96}
            rating={5}
            image="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2020/09/ps5-sony-preco-707.jpg"
          />
          <Product
            id="419538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={60.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71PIucvgepL._SL1286_.jpg"
          />
        </HomeRow>

        <HomeRow>
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </HomeRow>
      </div>
    </HomeStyled>
  )
}

export default Home
