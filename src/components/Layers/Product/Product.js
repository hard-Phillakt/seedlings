import React from 'react';
import './Product.scss';
import prodwalnutOne from './img/walnut/walnut__item_1.png';
import ButtonRub from '../../Ui/button/ButtonRub';

const product = () => {


    return (
        <section className="product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 flex-stretching">

                        <div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <h3 className="title title__h3 fs-30 c-green-b">Продукция</h3>
                                </div>
                            </div>

                            <div className="mt-90">
                                <nav className="asortiment-list-items">
                                    <ul className="">
                                        <li>
                                            <a href="#!" className="link mb-20 c-green-b mr-20 fs-24 asortiment-list-items-active">Песчанский (Peschanscii)</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="link mb-20 mr-20 fs-24">Милотай интенсив (Milotai intensive)</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="link mb-20 mr-20 fs-24">Милотай интенсив (Milotai intensive)</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="link mb-20 mr-20 fs-24">Милотай интенсив (Milotai intensive)</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="link mb-20 mr-20 fs-24">Милотай интенсив (Milotai intensive)</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-7">
                                <ButtonRub />
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6">
                        <div className="product-box">
                            <div className="product-box__img img-res" style={{ backgroundImage: `url(${prodwalnutOne})` }}>

                            </div>

                            <div className="asortiment-box__desc">
                                <div className="asortiment-box__desc_scroll mt-30">
                                    <p className="c-green-b">
                                        Описание растения:
                                    </p>
                                    Дерево средних размеров, крона округлой формы, средней густоты.
                                    Угол отхождения ветвей близкий к прямому, ветви располагаются
                                    довольно редко. Кора штамба и скелетных ветвей слабо трещиноватая.
                                    Ветви средних размеров, прямые, коричневого цвета.
                                    Листья продолговатые, матовые, черешок среднего размера, край листа
                                    ровный. Цветки средние, кувшинообразные, розоватые. Тип цветения
                                    протогинический.
                                    <p className="c-green-b">
                                        Скороплодность, сроки созревания, урожайность:
                                    </p>
                                    Сроки цветения женских цветков начало мая,что дает возможность уйти от ранневесенних заморозков. Сорт частично самофертилен, лучшие опылители: Казаку, Скиносский, Когылничану, Бричанский.

                                    <p className="c-green-b">
                                        Цветы и плоды:
                                    </p>
                                    Плоды средних размеров, округло-овальной формы без ребер. Скорлупа тонкая, плотная, незначительно шероховатая, матовая. Ядро кремового цвета, плотное. Выполненность ядра 85%. Отделимость ядра лёгкая, выход ядра выше 69%. Пригоден для механизированного извлечения ядра. Отличается исключительно приятным десертным вкусом, соломенно-желтой окраской плодов придающей им
                                    хороший товарный вид. Сорт универсальный, пригоден для переработки
                                    и для употребления в свежем виде. Сроки уборки 3 декада сентября –
                                    1 декада октября. Сорт засухоустойчивый, жаростойкий, зимостойкий,
                                    при -30С, подмерзали только верхушки невызревших побегов.
                                    Периодичность плодоношения не выражена. Устойчивость к марсониозу
                                    выше средней.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default product;