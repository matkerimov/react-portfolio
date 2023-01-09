import React from 'react';

const Contacts = () => {
    return (
        <>
            <main className="section">
                <div className="container">
                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Bishkek, Kyrgyzstan</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p><a href="tg://resolve?domain=@tlntov">@tlntov</a> / <a href="tel:+996709094666">+996 (709) 094-666</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:matkerimov.zhaiyl.ib9.1.19@gmail.com">matkerimov.zhaiyl.ib9.1.19@gmail.com</a></p>
                        </li>
                    </ul>

                </div>
            </main>
        </>
    );
};

export default Contacts;