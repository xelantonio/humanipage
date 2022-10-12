import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '¡Conócenos un poco más!',
    paragraph: 'En laboratorios Humani estamos comprometidos con nuestros pacientes por lo que nos interesa que nos conozcas y darte algunos tips.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                 
                  </div>
                <h3 className="mt-0 mb-12">
                  Profesional a cargo
                  </h3>
                <p className="m-0">
                Química Bióloga egresada de la Universidad de San Carlos, con maestría en Administración Industrial y Empresas de Servicios, experiencia en el aseguramiento de la calidad de laboratorios clínicos, supervisión y mejora de procesos en laboratorio clínico, experiencia en seguridad social y jornadas institucionales.
                   </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/cintya.jpg')}
                  alt="Quimico Biologo"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                ¿Sabes que es la prueba de Hemoglobina Glicosilada?
                  </h3>
                <p className="m-0">

                La prueba de hemoglobina glicosilada es una prueba para monitorear el promedio de la glucosa en sangre durante los últimos tres meses es útil para el control de la diabetes y de la prediabetes.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/HEMOGLOBINA.png')}
                  alt="hemoglobina glicocilada"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                ¿Conocias que existian dos tipos de pruebas de embarazo en sangre?
                  </h3>
                <p className="m-0">
                  
                Actualmente existen dos tipos de pruebas de embarazo en sangre una es la común que todos conocemos y que se realiza durante las cuatro semanas posteriores a la última regla sin embargo hay una prueba más específica que es la prueba de HCG cuantificada y que mide con exactitud la cantidad de hormona que hay, es útil para detectar embarazos tempranos, embarazos molares o abortos.
                   </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                  <a>
                <Image
                  src={require('./../../assets/images/PRUEBA.png')}
                  alt="prueba de embarazo"
                  width={528}
                  height={396} />
                  </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;