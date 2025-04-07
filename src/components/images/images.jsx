import React, { useState } from 'react';
import './images.css';

const beijingImages = [
    { src:'Kinabilleder/Kinabillede1.jpg'},
    { src:'Kinabilleder/Kinabillede2.jpg'},
    { src:'Kinabilleder/Kinabillede3.jpg'},
    { src:'Kinabilleder/Kinabillede4.jpg'},
    { src:'Kinabilleder/Kinabillede5.jpg'},
    { src:'Kinabilleder/Kinabillede50.jpg'},
    { src:'Kinabilleder/Kinabillede51.jpg'},
    { src:'Kinabilleder/Kinabillede52.jpg'},
    { src:'Kinabilleder/Kinabillede53.jpg'},
    { src:'Kinabilleder/Kinabillede54.jpg'},
    { src:'Kinabilleder/Kinabillede62.jpg'},
    { src:'Kinabilleder/Kinabillede63.jpg'},
    { src:'Kinabilleder/Kinabillede64.jpg'},
    { src:'Kinabilleder/Kinabillede69.jpg'},
    { src:'Kinabilleder/Kinabillede70.jpg'},
    { src:'Kinabilleder/Kinabillede71.jpg'},
    { src:'Kinabilleder/Kinabillede72.jpg'},
    { src:'Kinabilleder/Kinabillede73.jpg'},
    { src:'Kinabilleder/Kinabillede74.jpg'},
    { src:'Kinabilleder/Kinabillede75.jpg'},
    { src:'Kinabilleder/Kinabillede76.jpg'},

    
    ];


const shanghaiImages = [
    { src:'Kinabilleder/Kinabillede6.jpg'},
    { src:'Kinabilleder/Kinabillede7.jpg'},
    { src:'Kinabilleder/Kinabillede8.jpg'},
    { src:'Kinabilleder/Kinabillede9.jpg'},
    { src:'Kinabilleder/Kinabillede10.jpg'},
    { src:'Kinabilleder/Kinabillede11.jpg'},
    { src:'Kinabilleder/Kinabillede12.jpg'},
    { src:'Kinabilleder/Kinabillede13.jpg'},
    { src:'Kinabilleder/Kinabillede14.jpg'},
    { src:'Kinabilleder/Kinabillede15.jpg'},
    { src:'Kinabilleder/Kinabillede16.jpg'},
    { src:'Kinabilleder/Kinabillede17.jpg'},
    { src:'Kinabilleder/Kinabillede18.jpg'},
];

const xianImages = [
 { src:'Kinabilleder/Kinabillede56.jpg'},
    { src:'Kinabilleder/Kinabillede57.jpg'},
    { src:'Kinabilleder/Kinabillede58.jpg'},
    { src:'Kinabilleder/Kinabillede59.jpg'},
    { src:'Kinabilleder/Kinabillede55.jpg'},
    { src:'Kinabilleder/Kinabillede66.jpg'},
    { src:'Kinabilleder/Kinabillede67.jpg'},
    { src:'Kinabilleder/Kinabillede68.jpg'},
];

const guilinImages = [
     { src:'Kinabilleder/Kinabillede31.jpg'},
    { src:'Kinabilleder/Kinabillede32.jpg'},
    { src:'Kinabilleder/Kinabillede33.jpg'},
    { src:'Kinabilleder/Kinabillede34.jpg'},
    { src:'Kinabilleder/Kinabillede35.jpg'},
    { src:'Kinabilleder/Kinabillede36.jpg'},
    { src:'Kinabilleder/Kinabillede37.jpg'},
    { src:'Kinabilleder/Kinabillede38.jpg'},
    { src:'Kinabilleder/Kinabillede39.jpg'},
    { src:'Kinabilleder/Kinabillede40.jpg'},
    { src:'Kinabilleder/Kinabillede41.jpg'},
    { src:'Kinabilleder/Kinabillede42.jpg'},
    { src:'Kinabilleder/Kinabillede43.jpg'},
    { src:'Kinabilleder/Kinabillede44.jpg'},
    { src:'Kinabilleder/Kinabillede45.jpg'},
    { src:'Kinabilleder/Kinabillede46.jpg'},
    { src:'Kinabilleder/Kinabillede47.jpg'},
    { src:'Kinabilleder/Kinabillede48.jpg'},
    { src:'Kinabilleder/Kinabillede49.jpg'}, 
];

const Images = () => {
    const [currentImage, setCurrentImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [currentCategory, setCurrentCategory] = useState(null);

    const openModal = (image, index, category) => {
        setCurrentImage(image);
        setCurrentIndex(index);
        setCurrentCategory(category);
    };

    const closeModal = () => {
        setCurrentImage(null);
        setCurrentIndex(null);
        setCurrentCategory(null);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        let images;
        switch (currentCategory) {
            case 'beijing':
                images = beijingImages;
                break;
            case 'shanghai':
                images = shanghaiImages;
                break;
            case 'xian':
                images = xianImages;
                break;
            case 'guilin':
                images = guilinImages;
                break;
            default:
                images = [];
        }
        if (currentIndex < images.length - 1) {
            setCurrentImage(images[currentIndex + 1].src);
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        let images;
        switch (currentCategory) {
            case 'china':
                images = beijingImages;
                break;
            case 'beijing':
                images = shanghaiImages;
                break;
            case 'xian':
                images = xianImages;
                break;
            case 'guilin':
                images = guilinImages;
                break;
            default:
                images = [];
        }
        if (currentIndex > 0) {
            setCurrentImage(images[currentIndex - 1].src);
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="gallery-container">
            <h2 className="gallery-title">Et samlet galleri over min rejse</h2>
            <div className="gallery-section china">
                <h3 className="section-title">Beijing</h3>
                <div className="gallery-grid">
                    {beijingImages.map((image, index) => (
                        <div key={index} className="gallery-item" onClick={() => openModal(image.src, index, 'beijing')}>
                            <img src={image.src} alt={image.alt} className="gallery-image" />
                            <div className="overlay">View</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="gallery-section beijing">
                <h3 className="section-title">Shanghai</h3>
                <div className="gallery-grid">
                    {shanghaiImages.map((image, index) => (
                        <div key={index} className="gallery-item" onClick={() => openModal(image.src, index, 'shanghai')}>
                            <img src={image.src} alt={image.alt} className="gallery-image" />
                            <div className="overlay">View</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="gallery-section xian">
                <h3 className="section-title">Xian</h3>
                <div className="gallery-grid">
                    {xianImages.map((image, index) => (
                        <div key={index} className="gallery-item" onClick={() => openModal(image.src, index, 'xian')}>
                            <img src={image.src} alt={image.alt} className="gallery-image" />
                            <div className="overlay">View</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="gallery-section guilin">
                <h3 className="section-title">Guilin</h3>
                <div className="gallery-grid">
                    {guilinImages.map((image, index) => (
                        <div key={index} className="gallery-item" onClick={() => openModal(image.src, index, 'guilin')}>
                            <img src={image.src} alt={image.alt} className="gallery-image" />
                            <div className="overlay">View</div>
                        </div>
                    ))}
                </div>
            </div>
            {currentImage && (
                <div className="modal" onClick={closeModal}>
                    <button className="prev-button" onClick={prevImage}>&#10094;</button>
                    <img src={currentImage} alt="Current" className="modal-image" />
                    <button className="next-button" onClick={nextImage}>&#10095;</button>
                </div>
            )}
        </div>
    );
};

export default Images;