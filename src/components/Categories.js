import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { IoIosArrowDroprightCircle  , IoIosArrowDropleftCircle  } from 'react-icons/io'; // Import icons
import styles from '@/styles/Categories.module.css';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Men', image: 'https://images.pexels.com/photos/8386648/pexels-photo-8386648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Women', image: 'https://images.pexels.com/photos/6311397/pexels-photo-6311397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, name: 'Accessories', image: 'https://images.pexels.com/photos/11976423/pexels-photo-11976423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 4, name: 'Sale', image: 'https://images.pexels.com/photos/3260939/pexels-photo-3260939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 5, name: 'Shoes', image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 6, name: 'Bags', image: 'https://images.pexels.com/photos/760582/pexels-photo-760582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  return (
    <div className={styles.categoriesContainer}>
      <h2 className={styles.heading}>Explore Our Categories</h2>
      <div className={styles.customNavigation}>
        {/* Custom Navigation Buttons */}
        <button className={styles.prevButton}>
          <IoIosArrowDropleftCircle   />
        </button>
        <button className={styles.nextButton}>
          <IoIosArrowDroprightCircle />
        </button>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: `.${styles.prevButton}`, // Link to custom previous button
          nextEl: `.${styles.nextButton}`, // Link to custom next button
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id} className={styles.slide}>
            <div className={styles.card}>
              <img src={category.image} alt={category.name} className={styles.cardImage} />
              <div className={styles.cardOverlay}>
                <h3>{category.name}</h3>
                <button className={styles.cardButton}>Shop Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
