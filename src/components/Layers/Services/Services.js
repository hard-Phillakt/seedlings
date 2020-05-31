import React from 'react';
import './Services.scss';
import servicesOne from './services_one/img/services_one.png';
// import servicesTwo from './services_two/img/services_two.png';
import ButtonRub from '../../Ui/button/ButtonRub';

const Services = () => {


    return (
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 flex-stretching">

                        <div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <h3 className="title title__h3 fs-30 c-green-b">Услуги</h3>
                                </div>
                                <div className="col-lg-6">
                                    <h3 className="title title__h3 fs-30 c-green-b">Товары для сада</h3>
                                </div>
                            </div>

                            <div className="services__desc mt-90">
                                <h4>Доставка саженцев грецкого ореха в любой регион РФ, страны Ближнего и Дальнего зарубежья</h4>
                                <p>
                                    Все виды посадочных работ
                                </p>
                                <p>
                                    Техническое сопровождение на всех этапах закладки и выращивания садовых культур собственной сельхоз техникой
                                </p>
                                Консультационные услуги:
                                <ul>
                                    <li>- Выбор посадочного материала</li>
                                    <li>- Разработка карт по внесению подкормки</li>
                                    <li>- Борьба с вредителями</li>
                                </ul>
                                <p>
                                    Обрезка сада (формирование кроны)
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-7">
                                <ButtonRub />
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6">
                        <div className="services-box">
                            <div className="services-box__img img-res" style={{ backgroundImage: `url(${servicesOne})` }}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;