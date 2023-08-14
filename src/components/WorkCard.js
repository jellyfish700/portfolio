import { Swiper, SwiperSlide } from 'swiper/react';
import Card from 'react-bootstrap/Card';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

function WorkCard (props){
  return (
    <>
     <Card className={props.class}>
        <Swiper
            effect={'coverflow'}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper">
        {props.image.map((data) => {
        return<SwiperSlide><img src={data} class={props.classimg}/></SwiperSlide>;
        })}
        </Swiper>
        <Card.Body>
            <Card.Title class={props.classtx}>{props.title}</Card.Title>
            <p class="fs-4 tx-p2">{props.skill}</p>
            <p class="fs-5 tx-p2">{props.about}</p>
         </Card.Body>
     </Card>

    </>

  );
};

export default WorkCard;
