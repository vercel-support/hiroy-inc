import React, { useEffect, useState } from "react";
import Particles from "react-particles-js";
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { InformationData } from '../interfaces/apiInformation';

// components
import Layout from "../components/Layout";
import Socialicons from "../components/Socialicons";


const Home : React.FC<InformationData> = ({lightMode, information}) => {
  const [data, setInformation] = useState(information);
  const paramConfig = {
    particles: {
      number: {
        value: 320,
        density: {
          enable: false
        }
      },
      color: {
        value: "#ffffff"
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: 3,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 0.5,
        direction: "top",
        out_mode: "out"
      }
    }
  };

  const paramConfigLight = {
    particles: {
      number: {
        value: 0,
        density: {
          enable: false
        }
      },
      color: {
        value: "#000000"
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
      }
    }
  };
  
  return (
    <Layout information={information}>
      <div className="mi-home-area mi-padding-section">
        <Particles className="mi-home-particle" params={lightMode? paramConfigLight : paramConfig} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hi {data.name}
                </h1>
                <p>{data.aboutContent}</p>
                <Socialicons bordered socialLinks={information.socialLinks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

export async function getStaticProps(context: GetServerSidePropsContext) {
  const url = 'development' === process.env.NODE_ENV ? 'http://localhost:3000' : process.env.HIROY_URL;
  const res = await fetch(url + '/api/information');
  const data = await res.json();
  return {
    props: {...data},
  }
}
