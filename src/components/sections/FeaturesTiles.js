import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';

import { Link } from 'react-router-dom';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Cuidando con amor',
    paragraph: "Laboratorio clínico Humani, con tecnología de última generación ofrecemos una amplia gama de pruebas. Todos los resultados tienen el respaldo de nuestra profesional químico biólogo Licda. Cintya Sánchez  Ubícanos  sobre la calle A 22-55 zona 3  Quetzaltenango, teléfono 78722241 y búscanos en redes sociales, como Laboratorios Humani   ¡Y recuerda la prevención es tu seguro de vida"
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

          
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              <Link
                  target="_blank"
                  to='#'
                  onClick={(e) => {
                    window.location.href = "https://goo.gl/maps/XL6o1uFR57LTtaBv8";
                    e.preventDefault();
                  }}
                  >
                  {
                    <>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16"style={{backgroundColor: '#D9D8D6'}}>
                    <Image
                      src={require('./../../assets/images/ubicacion.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                   Ubicacion
                    </h4>
                  <p className="m-0 text-sm">
                  Ubícanos  sobre la calle A 22-55 zona 3  Quetzaltenango
                    </p>
                </div>
                </>
              }
</Link>
              </div>
            </div>


                 
                    <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <Link
                  target="_blank"
                  to='#'
                  onClick={(e) => {
                    window.location.href = "https://www.facebook.com/labohumani";
                    e.preventDefault();
                  }}
                  >
                  {
                    <>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16"style={{backgroundColor: '#D9D8D6'}}>
                    <Image
                      src={require('./../../assets/images/facebook.png')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                   Facebook
                    </h4>
                    <p className="m-0 text-sm">
                  Laboratorio Humani
                  
                    </p>
                </div>
                </>
              }
</Link>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
              <Link
            to='#'
            onClick={(e) => {
                window.location.href = "mailto:info@humanigt.com";
                e.preventDefault();
            }}
        >
            {
              <>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16"style={{backgroundColor: '#D9D8D6'}}>
                    <Image
                      src={require('./../../assets/images/mail.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Correo Electronico
                    </h4>
                  <p className="m-0 text-sm">
               info@humanigt.com 
                    </p>
                </div>
          </>    }
        </Link>
                 
              </div>
            </div>
            
            <div className="tiles-item reveal-from-bottom">
              <div  className="tiles-item-inner">
              <Link
                  target="_blank"
                  to='#'
                  onClick={(e) => {
                    window.location.href = "https://api.whatsapp.com/send?phone=50236193495";
                    e.preventDefault();
                  }}
                  >
                  {
                    <>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16"style={{backgroundColor: '#D9D8D6'}}>
                    <Image
                      src={require('./../../assets/images/whatsapp.png')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Whatsapp
                    </h4>
                  <p className="m-0 text-sm">
                    3619 3495
                    </p>
                </div>
                </>
              }
</Link>
              </div>
            </div>


            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <Link
                  target="_blank"
                  to='#'
                  onClick={(e) => {
                    window.location.href = "https://www.instagram.com/laboratorioshumani/";
                    e.preventDefault();
                  }}
                  >
                  {
                  <>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16"style={{backgroundColor: '#D9D8D6'}}>
                    <Image
                      src={require('./../../assets/images/instagram.png')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Instagram
                    </h4>
                  <p className="m-0 text-sm">
                    laboratorioshumani
                     </p>
                </div>
                </>
              }
</Link>
              </div>
            </div>

 
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16"style={{backgroundColor: '#D9D8D6'}}>
                    <Image
                      src={require('./../../assets/images/telefono.png')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Telefono
                    </h4>
                  <p className="m-0 text-sm">
                     7872 2241
                     </p>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;